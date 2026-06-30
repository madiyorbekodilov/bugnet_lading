import Link from 'next/link';
import { brand, footerServiceLinks, navItems, socialLinks } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.95fr]">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3 font-semibold tracking-[-0.03em] text-primary">
              <img src="/logo.png" alt="BugNet" className="h-[42px] w-auto rounded-[8px]" />
              <span className="text-base">{brand.name}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              Building Software That Businesses Trust.
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Fortune-500-ready engineering partner
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary">Quick links</p>
            <ul className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary">Services</p>
            <ul className="mt-4 grid gap-3">
              {footerServiceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary">Socials</p>
            <ul className="mt-4 grid gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/80 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            <Link className="transition-colors hover:text-primary" href={`mailto:${brand.email}`}>
              {brand.email}
            </Link>
          </p>
          <p>© 2026 BugNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
