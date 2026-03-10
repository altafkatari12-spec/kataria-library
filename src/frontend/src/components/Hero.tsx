import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToCatalog = () => {
    document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-library.dim_1400x700.jpg"
          alt="Kataria Library interior"
          className="w-full h-full object-cover"
        />
        {/* Overlays for depth */}
        <div className="absolute inset-0 bg-foreground/65" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.18 0.015 80 / 0.3) 0%, oklch(0.18 0.015 80 / 0.7) 100%)",
          }}
        />
      </div>

      {/* Decorative corner ornaments */}
      <div className="absolute top-24 left-8 w-24 h-24 border-l-2 border-t-2 border-accent/40 hidden md:block" />
      <div className="absolute top-24 right-8 w-24 h-24 border-r-2 border-t-2 border-accent/40 hidden md:block" />
      <div className="absolute bottom-20 left-8 w-24 h-24 border-l-2 border-b-2 border-accent/40 hidden md:block" />
      <div className="absolute bottom-20 right-8 w-24 h-24 border-r-2 border-b-2 border-accent/40 hidden md:block" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Ornamental line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-accent/70" />
            <span className="text-accent font-body text-sm tracking-[0.25em] uppercase">
              Est. 1990
            </span>
            <div className="h-px w-16 bg-accent/70" />
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
            Kataria Library
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="font-display text-xl sm:text-3xl text-primary-foreground/80 italic mb-4"
        >
          Your Gateway to Knowledge
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="flex items-center justify-center gap-1.5 text-primary-foreground/65 mb-10"
        >
          <MapPin className="w-4 h-4 text-accent" />
          <span className="font-body text-base tracking-wide">
            Check-Marg, Arizal
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToCatalog}
            data-ocid="hero.primary_button"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base px-8 py-3 shadow-warm transition-all hover:-translate-y-0.5"
          >
            Explore Our Catalog
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToAbout}
            data-ocid="hero.secondary_button"
            className="border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-body text-base px-8 py-3 transition-all hover:-translate-y-0.5"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </motion.button>
    </section>
  );
}
