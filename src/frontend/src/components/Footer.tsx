import { BookOpen, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Book Catalog", href: "#catalog" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary rounded-sm flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Kataria Library
              </span>
            </div>
            <p className="font-body text-sm text-primary-foreground/65 leading-relaxed max-w-xs">
              A community sanctuary for readers, learners, and curious minds in
              Check-Marg, Arizal since 1990.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-body">Check-Marg, Arizal, J&amp;K</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 text-accent" />
                <span className="font-body">+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4 text-accent" />
                <span className="font-body">info@katarialibrary.org</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href)}
                    data-ocid={`footer.${link.label.toLowerCase().replace(" ", "-")}.link`}
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-base mb-4">Hours</h4>
            <ul className="space-y-1.5 font-body text-sm text-primary-foreground/60">
              <li>Mon &ndash; Fri: 9am &ndash; 6pm</li>
              <li>Saturday: 9am &ndash; 5pm</li>
              <li>Sunday: 10am &ndash; 4pm</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-primary-foreground/45">
            &copy; {year} Kataria Library, Check-Marg, Arizal. All rights
            reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/40">
            Built with &#10084;&#65039; using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground/60 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
