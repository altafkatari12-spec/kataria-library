import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.32 0.09 155 / 0.08) 0%, oklch(0.97 0.018 80) 40%, oklch(0.97 0.018 80) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">
              Find Us
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            We would love to welcome you. Come visit us at our library in
            Check-Marg, Arizal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Address card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            data-ocid="contact.card"
          >
            <div className="bg-card border border-border rounded-lg shadow-card overflow-hidden">
              {/* Green header */}
              <div className="bg-primary px-6 py-5">
                <h3 className="font-display text-xl font-bold text-primary-foreground">
                  Kataria Library
                </h3>
                <p className="font-body text-sm text-primary-foreground/75 mt-1">
                  Your community library since 1990
                </p>
              </div>

              <div className="p-6 space-y-5">
                {/* Address */}
                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-secondary rounded-md flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">
                      Address
                    </p>
                    <p className="font-body text-muted-foreground text-sm mt-0.5">
                      Check-Marg, Arizal
                      <br />
                      Budgam District, Jammu &amp; Kashmir
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-secondary rounded-md flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">
                      Phone
                    </p>
                    <a
                      href="tel:+911234567890"
                      data-ocid="contact.link"
                      className="font-body text-sm text-primary hover:underline mt-0.5 block"
                    >
                      +91 12345 67890
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-secondary rounded-md flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">
                      Email
                    </p>
                    <a
                      href="mailto:info@katarialibrary.org"
                      data-ocid="contact.email.link"
                      className="font-body text-sm text-primary hover:underline mt-0.5 block"
                    >
                      info@katarialibrary.org
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/Arizal+Budgam"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.primary_button"
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-card border border-border rounded-lg shadow-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 bg-secondary rounded-md flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Visiting Hours
                </h3>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-border">
                <span className="font-body font-semibold text-sm text-foreground">
                  Every Day
                </span>
                <span className="font-body text-sm font-semibold text-primary">
                  Open 24 Hours
                </span>
              </div>

              <div className="mt-6 p-4 rounded-md bg-primary/10 border border-primary/20">
                <p className="font-body text-sm text-foreground/80 leading-relaxed">
                  <span className="font-semibold">Always Open:</span> Kataria
                  Library is open around the clock, every day of the year, for
                  your convenience.
                </p>
              </div>
            </div>

            {/* Membership CTA */}
            <div className="mt-6 bg-primary rounded-lg p-6 text-center shadow-warm">
              <h4 className="font-display text-xl font-bold text-primary-foreground mb-2">
                Become a Member Today
              </h4>
              <p className="font-body text-sm text-primary-foreground/80 mb-4">
                Free membership — just visit us with a valid ID and your address
                proof.
              </p>
              <button
                type="button"
                data-ocid="contact.secondary_button"
                className="inline-block bg-primary-foreground text-primary font-body font-semibold text-sm px-6 py-2 rounded-md hover:bg-primary-foreground/90 transition-colors"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
