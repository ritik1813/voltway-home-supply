import { useState, type FormEvent } from 'react';
import { WhatsAppIcon } from './icons';

const WHATSAPP_NUMBER = '919999999999';
const GREETING = 'Hi! 👋 How can we help you today?';

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (event: FormEvent) => {
    event.preventDefault();
    const text = message.trim() || GREETING;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    setMessage('');
    setOpen(false);
  };

  return (
    <div className="wa-widget">
      {open && (
        <div className="wa-popup">
          <div className="wa-popup-head">
            <span className="wa-popup-avatar">
              <WhatsAppIcon size={20} />
            </span>
            <div className="wa-popup-head-text">
              <strong>JP Pro Supply</strong>
              <span>Typically replies within an hour</span>
            </div>
            <button
              type="button"
              className="wa-popup-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="wa-popup-body">
            <div className="wa-bubble">{GREETING}</div>
          </div>
          <form className="wa-popup-input" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Type your question…"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              autoFocus
            />
            <button type="submit" aria-label="Send on WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="float-wa"
        aria-label="Open WhatsApp chat"
        onClick={() => setOpen((value) => !value)}
      >
        <WhatsAppIcon size={27} />
      </button>
    </div>
  );
}
