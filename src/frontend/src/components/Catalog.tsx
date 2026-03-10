import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Genre =
  | "All"
  | "Fiction"
  | "Non-Fiction"
  | "Science"
  | "History"
  | "Children";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: Exclude<Genre, "All">;
  available: boolean;
  year: number;
}

const BOOKS: Book[] = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    available: true,
    year: 1988,
  },
  {
    id: 2,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History",
    available: true,
    year: 2011,
  },
  {
    id: 3,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    available: false,
    year: 1988,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    available: true,
    year: 1960,
  },
  {
    id: 5,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "History",
    available: true,
    year: 1947,
  },
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Non-Fiction",
    available: true,
    year: 2018,
  },
  {
    id: 7,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    genre: "Science",
    available: false,
    year: 1976,
  },
  {
    id: 8,
    title: "Charlotte's Web",
    author: "E.B. White",
    genre: "Children",
    available: true,
    year: 1952,
  },
  {
    id: 9,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Children",
    available: false,
    year: 1997,
  },
  {
    id: 10,
    title: "Ikigai: The Japanese Secret",
    author: "Héctor García",
    genre: "Non-Fiction",
    available: true,
    year: 2016,
  },
  {
    id: 11,
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    available: true,
    year: 1949,
  },
  {
    id: 12,
    title: "Cosmos",
    author: "Carl Sagan",
    genre: "Science",
    available: true,
    year: 1980,
  },
];

const GENRE_COLORS: Record<Exclude<Genre, "All">, string> = {
  Fiction: "bg-primary/10 text-primary border-primary/20",
  "Non-Fiction": "bg-accent/20 text-foreground border-accent/30",
  Science: "bg-blue-100 text-blue-800 border-blue-200",
  History: "bg-amber-100 text-amber-800 border-amber-200",
  Children: "bg-pink-100 text-pink-700 border-pink-200",
};

const GENRES: Genre[] = [
  "All",
  "Fiction",
  "Non-Fiction",
  "Science",
  "History",
  "Children",
];

export default function Catalog() {
  const [activeGenre, setActiveGenre] = useState<Genre>("All");

  const filtered =
    activeGenre === "All"
      ? BOOKS
      : BOOKS.filter((b) => b.genre === activeGenre);

  return (
    <section id="catalog" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">
              Browse Our Collection
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Book Catalog
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Explore a curated selection from our collection. Visit us to
            discover thousands more.
          </p>
        </motion.div>

        {/* Genre filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <Tabs
            value={activeGenre}
            onValueChange={(v) => setActiveGenre(v as Genre)}
          >
            <TabsList className="flex flex-wrap gap-1 h-auto bg-muted p-1">
              {GENRES.map((genre) => (
                <TabsTrigger
                  key={genre}
                  value={genre}
                  data-ocid={`catalog.${genre.toLowerCase().replace("-", "")}.tab`}
                  className="font-body text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {genre}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Book grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeGenre}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((book, i) => (
              <motion.div
                key={book.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                data-ocid={`catalog.book.item.${i + 1}`}
                className="bg-card border border-border rounded-lg p-5 shadow-card hover:shadow-warm transition-all hover:-translate-y-0.5 group flex flex-col gap-3"
              >
                {/* Book spine decoration */}
                <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-primary/40 via-accent/40 to-primary/20 mb-1" />

                <div className="flex-1">
                  <h3 className="font-display text-base font-bold text-foreground leading-snug mb-1 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {book.author}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground/60 mt-0.5">
                    {book.year}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={`font-body text-xs ${GENRE_COLORS[book.genre]}`}
                  >
                    {book.genre}
                  </Badge>
                  <div
                    className={`flex items-center gap-1 text-xs font-body ${
                      book.available ? "text-green-700" : "text-amber-700"
                    }`}
                  >
                    {book.available ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5" /> Available
                      </>
                    ) : (
                      <>
                        <Clock className="w-3.5 h-3.5" /> On Loan
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div data-ocid="catalog.empty_state" className="text-center py-16">
            <p className="font-body text-muted-foreground">
              No books in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
