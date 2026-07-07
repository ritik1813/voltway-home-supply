import { useState, useEffect, type FormEvent } from 'react';

const ROLES = ['Flat Owner', 'Contractor / MEP Team', 'Builder / Developer', 'Architect / Designer'];

const CATEGORIES = [
  { id: 'Electrical', label: 'Electrical Materials', icon: '⚡' },
  { id: 'Plumbing', label: 'Plumbing Materials', icon: '🚰' },
  { id: 'Home Automation', label: 'Home Automation', icon: '🤖' },
];

interface PrefillState {
  role?: string;
  categories?: string[];
  ctaText?: string;
  timestamp?: number;
}

export function QuoteForm({ prefill }: { prefill?: PrefillState }) {
  const [role, setRole] = useState(ROLES[0]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [submitBtnText, setSubmitBtnText] = useState('Send Requirement');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (prefill && prefill.timestamp) {
      if (prefill.role) setRole(prefill.role);
      if (prefill.categories) setSelectedCategories(prefill.categories);
      if (prefill.ctaText) setSubmitBtnText(prefill.ctaText);
    }
  }, [prefill]);

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setUploadedFile(file);
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setUploadedFile(file);
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const categoriesText = selectedCategories.length > 0 ? selectedCategories.join(', ') : 'None selected';
    const fileText = uploadedFile ? `${uploadedFile.name} (${(uploadedFile.size / 1024).toFixed(1)} KB)` : 'No file attached';
    alert(
      `Form Submitted Successfully!\n\n` +
      `• Role: ${role}\n` +
      `• Categories Selected: ${categoriesText}\n` +
      `• Attached File: ${fileText}\n\n` +
      `This is a demo form. Connect it to your WhatsApp API, email server, or CRM to receive live customer leads.`
    );
  };

  return (
    <section className="quote-section" id="quote">
      <div className="wrap">
        <div className="quote-grid">
          <div className="quote-info">
            <span className="kicker">Procurement Request</span>
            <h2 style={{ fontSize: 'clamp(30px,3.4vw,38px)', marginBottom: '14px' }}>
              Request a trade quotation.
            </h2>
            <p>
              Submit your architectural bill of quantities (BOQ) or material list. Our procurement team will verify your requirements and deliver a transparent, itemised quote at direct trade rates.
            </p>

            <div style={{ marginTop: '30px' }}>
              <div className="info-row">
                <div className="ico">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <strong>Call or WhatsApp</strong>
                  <span>+91 79828 27516</span>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4V4zM4 8h16M9 4v16" />
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <span>hello@jpprosupply.in</span>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <strong>Service area</strong>
                  <span>Gurgaon, Sohna Road, DLF, New Gurugram &amp; NCR</span>
                </div>
              </div>
            </div>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91" required />
              </div>
            </div>

            <div className="form-row">
              <div className="field full">
                <label>I am a...</label>
                <div className="chip-select">
                  {ROLES.map((option) => (
                    <span
                      key={option}
                      className={`chip${role === option ? ' active' : ''}`}
                      onClick={() => setRole(option)}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="field full">
                <label>Materials Needed (Select all that apply)</label>
                <div className="chip-select">
                  {CATEGORIES.map((cat) => {
                    const isActive = selectedCategories.includes(cat.id);
                    return (
                      <span
                        key={cat.id}
                        className={`chip chip-category${isActive ? ' active' : ''}`}
                        onClick={() => toggleCategory(cat.id)}
                      >
                        <span className="chip-icon">{cat.icon}</span> {cat.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>Project Scope / Quantity</label>
                <input type="text" placeholder="e.g. 3BHK flat, or 40-flat tower Phase 2" />
              </div>
              <div className="field">
                <label>Site Locality</label>
                <input type="text" placeholder="e.g. Sector 82, Gurgaon" />
              </div>
            </div>

            <div className="form-row">
              <div className="field full">
                <label>What do you need? (Write details here or upload list below)</label>
                <textarea placeholder="e.g. Complete electrical + plumbing material list or descriptions..."></textarea>
              </div>
            </div>

            <div className="form-row">
              <div className="field full">
                <label>Attach BOQ, Material List or Photo/Image of handwritten note</label>
                <div
                  className={`file-upload-zone ${isDragging ? 'dragover' : ''} ${uploadedFile ? 'has-file' : ''}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {!uploadedFile ? (
                    <>
                      <input
                        type="file"
                        id="file-upload"
                        className="hidden-file-input"
                        accept="image/*,application/pdf,.doc,.docx,.xls,.xlsx"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="file-upload" className="file-upload-label">
                        <div className="upload-icon-container">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                        </div>
                        <span className="upload-main-text">Drag & drop your file/image here, or <span className="upload-link">browse</span></span>
                        <span className="upload-sub-text">PDF, Excel, Word, or Photos of your list (Max 10MB)</span>
                      </label>
                    </>
                  ) : (
                    <div className="file-upload-preview">
                      <div className="preview-info">
                        <div className="preview-thumbnail">
                          {filePreview ? (
                            <img src={filePreview} alt="Uploaded preview" className="thumbnail-img" />
                          ) : (
                            <div className="document-icon">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="preview-meta">
                          <span className="preview-filename">{uploadedFile.name}</span>
                          <span className="preview-filesize">{(uploadedFile.size / 1024).toFixed(1)} KB</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-remove-file"
                        onClick={() => {
                          setUploadedFile(null);
                          setFilePreview(null);
                        }}
                        aria-label="Remove uploaded file"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {submitBtnText}
            </button>
            <p className="form-note">We respond within 24 hours on business days — usually much faster.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
