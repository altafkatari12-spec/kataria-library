import {
  Baby,
  BookOpen,
  Coffee,
  CreditCard,
  GraduationCap,
  Monitor,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: BookOpen,
    title: "Book Lending",
    description:
      "Borrow from our collection of 10,000+ books. Members can check out up to 5 books at a time with a generous 2-week lending period.",
  },
  {
    icon: Coffee,
    title: "Reading Room",
    description:
      "A serene, quiet reading space with comfortable seating, natural light, and a curated selection of periodicals and newspapers.",
  },
  {
    icon: CreditCard,
    title: "Membership",
    description:
      "Become a member to unlock full borrowing privileges, event invitations, and access to our digital resource portal.",
  },
  {
    icon: GraduationCap,
    title: "Study Hall",
    description:
      "Dedicated study spaces with power outlets, free Wi-Fi, and a focused environment ideal for students and professionals.",
  },
  {
    icon: Monitor,
    title: "Digital Resources",
    description:
      "Access e-books, academic databases, and online journals through our digital library portal, available to all members.",
  },
  {
    icon: Baby,
    title: "Children's Corner",
    description:
      "A vibrant, imaginative space designed for young readers with picture books, story-time events, and educational activities.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.32 0.09 155 / 0.06) 0%, oklch(0.97 0.018 80) 50%, oklch(0.75 0.14 75 / 0.06) 100%)",
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
              What We Offer
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            From borrowing books to hosting study sessions, we offer a range of
            services to support every reader's journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-warm transition-all hover:-translate-y-1 group"
            >
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
