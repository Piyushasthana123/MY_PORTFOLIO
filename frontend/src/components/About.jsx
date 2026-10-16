import { motion } from "framer-motion";
import { Trophy, GraduationCap, Bot, Sparkles, BookOpen, CheckCircle2 } from "lucide-react";
import { profile } from "../data/profile";

const ease = [0.22, 1, 0.36, 1];

const academicRecords = [
  {
    institution: "ANDUAT, Kumarganj Ayodhya",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering",
    period: "2024 – 2028",
    status: "Currently Pursuing (5rd Sem)",
    grade: "CGPA – 7.636",
    highlights: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (Python, C++)",
      "Web Development",
    ],
  },
  {
    institution: "Nehru Balodyan Senior Secondary School, Jaunpur",
    degree: "Senior Secondary School Examination (Class XII)",
    branch: "Science Stream (PCM & CS)",
    period: "2022 – 2024",
    status: "Completed with Distinction",
    grade: "CBSE – 76.4%",
    highlights: [
      "Mathematics & Analytical Physics",
      "Computer Science Fundamentals",
      "Programming & Logical Problem Solving",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32"
      style={{
        background: "var(--about-bg)",
      }}
      aria-label="About Piyush Asthana"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Eyebrow Tag: | ABOUT ME | */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
          className="mb-10 inline-flex items-center gap-2"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
            | ABOUT ME |
          </span>
        </motion.div>

        {/* Split 2-Column Grid: Left Framed Photo, Right Editorial Narrative & Highlights */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Framed Editorial Portrait Photo (Span 5 on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="relative lg:col-span-5"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-[var(--border-theme)] bg-[var(--bg-elevated)] p-2 shadow-2xl transition-all duration-500 hover:border-[var(--accent)]/60">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={profile.aboutImage}
                  alt={`${profile.name} - About portrait`}
                  className="h-[520px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)]/80 via-transparent to-transparent opacity-40" />
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--bg-card)]/80 backdrop-blur-sm shadow-sm">
                <Sparkles size={14} className="text-[var(--accent)]" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & Narrative (Span 7 on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            className="flex flex-col justify-between space-y-7 lg:col-span-7"
          >
            {/* Big Editorial Lead Paragraph */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.3] tracking-tight text-[var(--text-heading)]">
              My engineering journey spans modern full-stack web development, Python architecture,
              and applied artificial intelligence. I focus on crafting clean, high-performance web
              applications backed by robust design principles.
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--text-muted)] font-normal">
              <p>
                Born and raised in Jaunpur, Uttar Pradesh, I developed a passion for programming early
                on. Currently pursuing my Bachelor of Technology in Computer Science & Engineering
                at <span className="text-[var(--text-heading)] font-semibold">ANDUAT, Kumarganj Ayodhya</span> (CGPA – 7.636),
                I combine rigorous computer science fundamentals with hands-on real-world production builds.
              </p>
              <p>
                From winning 1st position as the <span className="text-[var(--text-heading)] font-semibold">SIH Internal Hackathon Winner (SIH – 2025)</span> to
                building conversational AI chatbots with DigiCoders, I thrive on turning complex problem statements into intuitive, deployed software solutions.
              </p>
            </div>

            {/* Accolades & Highlights Quick Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 rounded-xl border border-[var(--border-theme)] bg-[var(--bg-card)] p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--accent)]/30 bg-[var(--bg-elevated)] text-[var(--accent)]">
                  <Trophy size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-heading)]">
                    SIH Internal Hackathon Winner
                  </h3>
                  <p className="mt-1.5 text-xs text-[var(--text-muted)] leading-relaxed tracking-wide">
                    1st Position at MCAET · Internal SIH 2025
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-[var(--border-theme)] bg-[var(--bg-card)] p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--accent)]/30 bg-[var(--bg-elevated)] text-[var(--accent)]">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-heading)]">
                    AI Chatbot Specialist
                  </h3>
                  <p className="mt-1.5 text-xs text-[var(--text-muted)] leading-relaxed tracking-wide">
                    Certified by DigiCoders · NLP & conversational architectures
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dedicated Animated Academic Record Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-theme)] bg-[var(--bg-card)] text-[var(--accent)] shadow-sm">
              <GraduationCap size={22} />
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-accent-label)] font-semibold">
                ACADEMIC CREDENTIALS & EDUCATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[var(--text-heading)]">
                Academic Record & Coursework
              </h3>
            </div>
          </motion.div>

          {/* Academic Cards Grid with Animation */}
          <div className="grid gap-6 md:grid-cols-2">
            {academicRecords.map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.55, ease }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border-theme)] bg-[var(--bg-elevated)] p-6 sm:p-8 shadow-lg transition-all duration-300 hover:border-[var(--accent)]/60 hover:shadow-2xl"
              >
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-theme)]/60 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-accent-label)] font-semibold">
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-[var(--accent)]">
                    <Sparkles size={12} />
                    {item.grade}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div className="mt-4">
                  <h4 className="font-display text-xl sm:text-2xl font-semibold text-[var(--text-heading)] group-hover:text-[var(--accent)] transition-colors">
                    {item.degree}
                  </h4>
                  <p className="mt-2 font-sans text-sm font-medium tracking-wide text-[var(--text-accent-label)]">
                    {item.branch}
                  </p>
                  <p className="mt-2 text-xs text-[var(--text-muted)] flex items-center gap-2 leading-relaxed tracking-wide">
                    <BookOpen size={13} className="text-[var(--accent)]" />
                    <span>{item.institution}</span>
                  </p>
                </div>

                {/* Status indicator */}
                <div className="mt-3.5 inline-block rounded-md bg-[var(--bg-surface-muted)] px-3 py-1 text-[11px] font-medium tracking-wider text-[var(--text-heading)]">
                  {item.status}
                </div>

                {/* Highlights List */}
                <div className="mt-5 space-y-2.5 border-t border-[var(--border-theme)]/40 pt-4">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-faint)]">
                    Key Highlights & Subjects:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {(item.highlights || []).map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-xs text-[var(--text-body)] font-normal leading-relaxed tracking-wide"
                      >
                        <CheckCircle2 size={13} className="shrink-0 text-[var(--accent)]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
