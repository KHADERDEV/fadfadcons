import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "FadFad — Apps for the everyday", template: "%s | FadFad" },
  description: "FadFad is an independent mobile app development and publishing studio focused on Android.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header"><div className="header-inner">
          <Link href="/" className="brand" aria-label="FadFad home"><span className="brand-mark">f<span>.</span></span><span>fadfad<span className="brand-dot">.</span></span></Link>
          <nav aria-label="Main navigation"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact" className="nav-contact">Contact <span>↗</span></Link></nav>
        </div></header>
        {children}
        <footer className="site-footer"><div className="footer-top"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">f<span>.</span></span><span>fadfad<span className="brand-dot">.</span></span></Link><p>Small ideas. Made useful.<br />Built for the everyday.</p></div><div className="footer-links"><span>EXPLORE</span><Link href="/contact">Contact</Link><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link></div><div className="footer-hello"><span>HAVE A QUESTION?</span><a href="mailto:office@fadfadcons.online">Say hello ↗</a></div></div><div className="footer-bottom"><span>© 2026 FadFad. All rights reserved.</span><span>MADE FOR MOBILE, MADE FOR YOU.</span></div></footer>
      </body>
    </html>
  );
}

