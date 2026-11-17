/*
 * JP Pro Supply lead tracking. Loaded on every page (home and generated pages).
 *
 * 1. Works out where the visitor came from (Google search, Google Business Profile,
 *    Instagram, JustDial, an ad, direct, ...) and remembers it for the visit.
 * 2. Records every contact action: WhatsApp, call, email, quote form, copying the number.
 * 3. Adds a short reference code to every WhatsApp message started from the site,
 *    e.g. "(Ref GS-HERO)" = came from Google search, tapped the hero button.
 *    A WhatsApp message that arrives without a code did not start from a site button.
 *
 * Events go to Google Analytics 4 and Microsoft Clarity when their IDs are set in
 * site/data/business.mjs (analytics.ga4Id / analytics.clarityId), and to Vercel Analytics.
 * No names, phone numbers or message text are ever sent to analytics.
 */
(function () {
  'use strict';
  var cfg = window.JP_TRACK || {};
  var DEFAULT_TEXT = 'Hi JP Pro Supply, I need a quote for electrical / plumbing material.';

  // ---------- Where did the visitor come from? ----------
  var UTM_CODES = {
    gbp: 'GB', google_business: 'GB', googlebusiness: 'GB', gmb: 'GB',
    instagram: 'IG', ig: 'IG', facebook: 'FB', fb: 'FB', linkedin: 'LI',
    medium: 'MD', justdial: 'JD', whatsapp: 'WA', indiamart: 'IM',
  };

  function fromReferrer(ref) {
    if (!ref) return { code: 'DR', detail: 'direct' };
    var host = '';
    try { host = new URL(ref).hostname.replace(/^www\./, ''); } catch (e) { host = ref; }
    if (/^android-app:/.test(ref)) host = ref.replace('android-app://', '');
    if (host === location.hostname.replace(/^www\./, '')) return null; // internal navigation
    if (/chatgpt|openai|perplexity|claude\.ai|gemini\.google|copilot\.microsoft/.test(host)) return { code: 'AI', detail: host };
    if (/google\.|googlequicksearchbox/.test(host)) return { code: 'GS', detail: host };
    if (/bing\.|duckduckgo|yahoo\.|yandex|ecosia|brave\.com/.test(host)) return { code: 'SE', detail: host };
    if (/instagram/.test(host)) return { code: 'IG', detail: host };
    if (/facebook|fb\.(com|me)/.test(host)) return { code: 'FB', detail: host };
    if (/linkedin|lnkd\.in/.test(host)) return { code: 'LI', detail: host };
    if (/medium\.com/.test(host)) return { code: 'MD', detail: host };
    if (/justdial|jsdl\.in/.test(host)) return { code: 'JD', detail: host };
    if (/indiamart/.test(host)) return { code: 'IM', detail: host };
    if (/whatsapp|wa\.me/.test(host)) return { code: 'WA', detail: host };
    return { code: 'OT', detail: host };
  }

  function detectSource() {
    var q = new URLSearchParams(location.search);
    var utm = (q.get('utm_source') || '').toLowerCase();
    var medium = (q.get('utm_medium') || '').toLowerCase();
    if (q.get('gclid') || q.get('gbraid') || q.get('wbraid') || /^(cpc|ppc|paid|ads?)$/.test(medium)) {
      return { code: 'AD', detail: utm || 'google-ads', campaign: q.get('utm_campaign') || '' };
    }
    if (utm) return { code: UTM_CODES[utm] || 'OT', detail: utm, campaign: q.get('utm_campaign') || '' };
    return fromReferrer(document.referrer);
  }

  function store(kind, key, value) {
    try {
      if (value === undefined) return JSON.parse(window[kind].getItem(key) || 'null');
      window[kind].setItem(key, JSON.stringify(value));
    } catch (e) { /* storage blocked: fall through */ }
    return null;
  }

  var detected = detectSource();
  var src = store('sessionStorage', 'jp_src');
  // A tagged link or an ad click always wins; otherwise keep the source this visit started with.
  if (detected && (!src || /[?&](utm_source|gclid|gbraid|wbraid)=/.test(location.search))) {
    src = { code: detected.code, detail: detected.detail, campaign: detected.campaign || '', landing: location.pathname };
    store('sessionStorage', 'jp_src', src);
  }
  if (!src) src = { code: 'DR', detail: 'direct', campaign: '', landing: location.pathname };

  var first = store('localStorage', 'jp_src_first');
  if (!first) {
    first = { code: src.code, detail: src.detail, landing: src.landing, date: new Date().toISOString().slice(0, 10) };
    store('localStorage', 'jp_src_first', first);
  }

  // ---------- Sending events ----------
  var log = (window.jpTrackLog = window.jpTrackLog || []);

  function send(name, data) {
    var p = {};
    for (var k in data || {}) p[k] = data[k];
    p.page = location.pathname;
    p.source = src.code;
    p.source_detail = src.detail;
    p.first_source = first.code;
    log.push([name, p]);
    try { if (window.gtag) window.gtag('event', name, p); } catch (e) { /* ignore */ }
    try { if (window.va) window.va('event', { name: name, data: p }); } catch (e) { /* ignore */ }
    try { if (window.clarity) window.clarity('event', name); } catch (e) { /* ignore */ }
  }

  // ---------- WhatsApp reference code ----------
  function refCode(place) {
    return src.code + '-' + String(place || 'PAGE').toUpperCase();
  }

  function decorate(url, place) {
    try {
      var u = new URL(url, location.href);
      var text = (u.searchParams.get('text') || '').replace(/\s*\(Ref [A-Z]{2}-[A-Z0-9]+\)\s*$/, '');
      u.searchParams.set('text', (text || DEFAULT_TEXT) + '\n\n(Ref ' + refCode(place) + ')');
      return u.toString();
    } catch (e) {
      return url;
    }
  }

  function placeOf(el) {
    var tagged = el.closest('[data-track]');
    if (tagged) return tagged.getAttribute('data-track');
    if (el.closest('.topbar')) return 'TOP';
    if (el.closest('header')) return 'HDR';
    if (el.closest('footer')) return 'FOOT';
    if (el.closest('.cta-band')) return 'CTA';
    var section = el.closest('section[id]');
    var names = { top: 'HERO', products: 'PROD', packages: 'PKG', quote: 'FORM' };
    if (section) return names[section.id] || section.id.replace(/[^a-z0-9]/gi, '').slice(0, 5).toUpperCase() || 'PAGE';
    return 'PAGE';
  }

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var place = placeOf(a);
    if (/(^|\/\/)(wa\.me|api\.whatsapp\.com)\//.test(href)) {
      a.href = decorate(href, place);
      send('contact_whatsapp', { place: place, ref: refCode(place) });
    } else if (href.indexOf('tel:') === 0) {
      send('contact_call', { place: place });
    } else if (href.indexOf('mailto:') === 0) {
      send('contact_email', { place: place });
    } else if (/#quote$/.test(href)) {
      send('quote_button_click', { place: place });
    }
  }, true);

  // Someone selecting and copying the phone number or email instead of tapping it.
  document.addEventListener('copy', function () {
    var t = String(window.getSelection ? window.getSelection() : '').replace(/[\s-]/g, '');
    if (/9310765871/.test(t)) send('copy_contact', { what: 'phone' });
    else if (/contact@jpprosupply/.test(t)) send('copy_contact', { what: 'email' });
  });

  // Did the visitor reach the quote form at all?
  function watchQuoteForm() {
    var form = document.getElementById('quote');
    if (!form || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { send('quote_form_seen', {}); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(form);
  }

  // For buttons that open WhatsApp from script (quote form, chat bubble).
  window.jpTrack = {
    wa: function (url, place, eventName, data) {
      var d = {};
      for (var k in data || {}) d[k] = data[k];
      d.place = place;
      d.ref = refCode(place);
      send(eventName || 'contact_whatsapp', d);
      return decorate(url, place);
    },
    event: send,
    source: function () { return { current: src, first: first }; },
  };

  // ---------- Google Analytics 4 and Microsoft Clarity (only when IDs are configured) ----------
  // The queues are created straight away so an early tap is not lost; the libraries
  // themselves are fetched after the page has loaded.
  if (cfg.ga4) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('set', 'user_properties', { first_source: first.code });
    window.gtag('config', cfg.ga4);
  }
  if (cfg.clarity) {
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    window.clarity('set', 'source', src.code);
    window.clarity('set', 'first_source', first.code);
  }

  function addScript(url) {
    var s = document.createElement('script');
    s.async = true;
    s.src = url;
    document.head.appendChild(s);
  }

  function loadTools() {
    if (cfg.ga4) addScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(cfg.ga4));
    if (cfg.clarity) addScript('https://www.clarity.ms/tag/' + encodeURIComponent(cfg.clarity));
  }

  function start() {
    watchQuoteForm();
    // After the page has finished loading, so tracking never slows the first paint.
    setTimeout(loadTools, 1200);
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
