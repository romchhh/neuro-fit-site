export default function FooterSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');

        .nf-footer {
          background: white;
          padding: 0;
        }

        .nf-footer-inner {
          background: #FFE9FF;
          border-radius: 40px 40px 0 0;
          padding: 48px 56px 52px;
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 0 80px;
          align-items: start;
        }

        .nf-footer-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding-top: 2px;
        }

        .nf-footer-nav-item {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 22px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1e1624;
          line-height: 1;
          padding: 10px 0;
          cursor: pointer;
          text-decoration: none;
          display: block;
        }

        .nf-footer-col-heading {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1e1624;
          margin-bottom: 18px;
          line-height: 1;
        }

        .nf-footer-col-link {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: #3a3040;
          line-height: 1.4;
          display: block;
          margin-bottom: 12px;
          cursor: pointer;
          text-decoration: none;
        }
        .nf-footer-col-link:last-child { margin-bottom: 0; }

        .nf-footer-contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          cursor: pointer;
        }
        .nf-footer-contact-row:last-child { margin-bottom: 0; }

        .nf-footer-contact-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: #3a3040;
          line-height: 1.4;
        }

        .nf-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 640px) {
          .nf-footer-inner {
            border-radius: 28px 28px 0 0;
            padding: 32px 20px 32px;
            grid-template-columns: 1fr 1fr;
            gap: 32px 24px;
            justify-items: flex-start;
          }

          /* 1. HOME / NEUROFIT / NEURO-ІНТЕНСИВ — в один ряд, по центру, більший розмір */
          .nf-footer-nav {
            grid-column: 1 / -1;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 14px;
          }
          .nf-footer-nav-item {
            font-size: 20px;
            padding: 4px 0;
            letter-spacing: 0.12em;
            white-space: nowrap;
          }

          /* 2. Контакти — по лівому краю */
          .nf-footer-col-heading { font-size: 16px; }
          .nf-footer-col-link { font-size: 13px; }
          .nf-footer-contact-row {
            align-items: flex-start;
            justify-content: flex-start;
          }
          .nf-footer-contact-label {
            font-size: 14px;
            text-align: left;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .nf-footer-inner {
            padding: 40px 40px 44px;
            gap: 0 48px;
          }
          .nf-footer-nav-item { font-size: 18px; }
        }
      `}</style>

      <footer className="nf-footer reveal-up" data-animate>
        <div className="nf-footer-inner reveal-scale" data-animate>

          {/* Left: navigation */}
          <nav className="nf-footer-nav">
            <a className="nf-footer-nav-item">HOME</a>
            <a className="nf-footer-nav-item">NEUROFIT</a>
            <a className="nf-footer-nav-item">NEURO-ІНТЕНСИВ</a>
          </nav>

          {/* Middle: ІНФОРМАЦІЯ */}
          <div>
            <h3 className="nf-footer-col-heading">ІНФОРМАЦІЯ</h3>
            <a className="nf-footer-col-link">Політика конфіденційності</a>
            <a className="nf-footer-col-link">Договір оферти</a>
          </div>

          {/* Right: КОНТАКТИ */}
          <div>
            <h3 className="nf-footer-col-heading">КОНТАКТИ</h3>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/neurofit.smartmovement"
              target="_blank"
              rel="noreferrer"
              className="nf-footer-contact-row"
            >
              <span className="nf-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="6" stroke="#1e1624" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="4.5" stroke="#1e1624" strokeWidth="1.8"/>
                  <circle cx="17.8" cy="6.2" r="1.1" fill="#1e1624"/>
                </svg>
              </span>
              <span className="nf-footer-contact-label">Instagram</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/neurofit_smartmovement"
              target="_blank"
              rel="noreferrer"
              className="nf-footer-contact-row"
            >
              <span className="nf-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#1e1624" strokeWidth="1.8"/>
                  <path
                    d="M7.5 11.8 16.5 8l-3.2 8-1.8-3.2-3.5-1.4c-.4-.16-.4-.46.5-.6Z"
                    fill="#1e1624"
                  />
                  <path
                    d="M11.5 12.8 14 10.3"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="nf-footer-contact-label">Telegram</span>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@neurofit.com"
              className="nf-footer-contact-row"
            >
              <span className="nf-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="5" width="20" height="14" rx="2.5" stroke="#1e1624" strokeWidth="1.8"/>
                  <path d="M2.5 7.5 11.1 13c.54.35 1.26.35 1.8 0L21.5 7.5" stroke="#1e1624" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="nf-footer-contact-label">Email</span>
            </a>

          </div>
        </div>
      </footer>
    </>
  );
}