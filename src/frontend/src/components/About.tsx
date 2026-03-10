import { BookMarked, Calendar, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: BookMarked,
    value: "10,000+",
    label: "Books & Journals",
    description:
      "A vast collection spanning literature, science, history, and more",
  },
  {
    icon: Users,
    value: "500+",
    label: "Active Members",
    description: "A growing community of readers, students, and researchers",
  },
  {
    icon: Calendar,
    value: "Est. 1990",
    label: "Years of Service",
    description:
      "Serving the community of Check-Marg, Arizal for over three decades",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
              Our Story
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Kataria Library
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founded in 1990, Kataria Library has been the intellectual heartbeat
            of Check-Marg, Arizal. We believe that access to knowledge is a
            fundamental right — and our library stands as a sanctuary for
            readers, students, and lifelong learners of all ages.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              Kataria Library is committed to fostering a love of reading and
              learning within our community. We provide a welcoming, inclusive
              space where knowledge flows freely — from classic literature to
              contemporary science, from local history to global affairs.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Our dedicated staff curates a thoughtful collection, hosts
              community events, and supports students at every stage of their
              educational journey. Whether you are borrowing your first picture
              book or conducting post-graduate research, Kataria Library is your
              trusted partner.
            </p>

            <div className="mt-6 pl-4 border-l-4 border-accent">
              <p className="font-display text-base italic text-foreground/75">
                "A library is not a luxury but one of the necessities of life."
              </p>
              <span className="text-sm font-body text-muted-foreground mt-1 block">
                — Henry Ward Beecher
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="absolute -inset-3 rounded-lg"
              style={{
                background: "oklch(0.32 0.09 155 / 0.06)",
              }}
            />
            <div className="relative rounded-lg overflow-hidden border border-border shadow-card">
              <img
                src="/assets/generated/hero-library.dim_1400x700.jpg"
                alt="Library interior"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="font-display text-primary-foreground/90 text-lg font-semibold drop-shadow">
                  A Space to Discover, Learn & Grow
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-card border border-border rounded-lg p-6 text-center shadow-card hover:shadow-warm transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-body font-semibold text-primary text-sm uppercase tracking-wide mb-2">
                {stat.label}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
