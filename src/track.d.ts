// Lead-tracking helper defined by public/static/track.js (absent in `vite dev`, so always optional).
export {};

declare global {
  interface Window {
    jpTrack?: {
      /** Records the contact event and returns the WhatsApp URL with the reference code added. */
      wa: (url: string, place: string, eventName?: string, data?: Record<string, string | number | boolean>) => string;
      event: (name: string, data?: Record<string, string | number | boolean>) => void;
    };
  }
}
