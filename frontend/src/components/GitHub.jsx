import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, GitFork, Loader2, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
import { GitHubIcon } from "./icons/SocialIcons";
import { socialLinks, profile } from "../data/profile";
import {
  fetchGitHubProfile,
  fetchGitHubRepos,
  fetchGitHubLanguages,
} from "../services/githubService";

const fallbackRepos = [
  {
    name: "TUTEDUDE_PYTHON",
    description: "Python modules and a first pass at backend work.",
    html_url: "https://github.com/Piyushasthana123/TUTEDUDE_PYTHON",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "Python_with_oops",
    description: "Daily Python practice with object-oriented patterns.",
    html_url: "https://github.com/Piyushasthana123/Python_with_oops",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "NETFLIX-CLONE",
    description: "A Netflix-inspired frontend for layout and UI practice.",
    html_url: "https://github.com/Piyushasthana123/NETFLIX-CLONE",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
  },
];

const fallbackLanguages = [
  { name: "Python", bytes: 1 },
  { name: "HTML", bytes: 1 },
  { name: "CSS", bytes: 1 },
];

const languageColors = {
  Python: "bg-yellow-500",
  JavaScript: "bg-amber-400",
  HTML: "bg-orange-500",
  CSS: "bg-sky-500",
  TypeScript: "bg-blue-600",
  React: "bg-cyan-500",
};

export default function GitHub() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [githubProfile, setGithubProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function loadGitHubData() {
      try {
        setLoading(true);
        setError(null);

        const [profileData, reposData] = await Promise.all([
          fetchGitHubProfile(),
          fetchGitHubRepos(),
        ]);

        if (cancelled) return;

        setGithubProfile(profileData);
        setRepos(reposData);

        const langs = await fetchGitHubLanguages(reposData);
        if (!cancelled) {
          setLanguages(langs.length > 0 ? langs : fallbackLanguages);
        }
      } catch {
        if (!cancelled) {
          setError("Live GitHub data is unavailable, so a short snapshot is shown instead.");
          setRepos(fallbackRepos);
          setLanguages(fallbackLanguages);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadGitHubData();
    return () => {
      cancelled = true;
    };
  }, []);

  const totalBytes = languages.reduce((sum, lang) => sum + lang.bytes, 0) || 1;

  return (
    <section id="github" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          number="04"
          eyebrow="GitHub"
          title="Work in the open."
          description="Repositories, languages, and the trail of things I’m still figuring out."
        />

        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={githubProfile?.avatar_url || profile.avatar}
              alt=""
              className="h-14 w-14 rounded-full border border-theme object-cover"
            />
            <div>
              <p className="font-medium text-heading">
                @{githubProfile?.login || "Piyushasthana123"}
              </p>
              <p className="max-w-md text-sm text-muted">
                {githubProfile?.bio || "Python, FastAPI, React — learning by building."}
              </p>
            </div>
          </div>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center gap-2 self-start rounded-full px-4 py-2.5 text-sm font-semibold"
          >
            <GitHubIcon size={16} />
            Profile
            <ArrowUpRight size={14} />
          </a>
        </div>

        {loading && (
          <div className="flex items-center justify-center gap-3 py-16 text-muted">
            <Loader2 size={18} className="animate-spin" />
            Loading GitHub…
          </div>
        )}

        {error && !loading && (
          <div className="alert-warn mb-6 flex items-start gap-3 rounded-xl p-4 text-sm">
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            {error}
          </div>
        )}

        {!loading && (
          <>
            {repos.length === 0 ? (
              <div className="surface-card rounded-2xl py-14 text-center text-muted">
                No public repositories found.
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo, index) => (
                  <motion.a
                    key={repo.id || repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="surface-card block rounded-2xl p-5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-medium text-heading">{repo.name}</h3>
                      <ArrowUpRight size={14} className="shrink-0 text-faint" />
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">
                      {repo.description || "No description yet."}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-faint">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              languageColors[repo.language] || "bg-stone-400"
                            }`}
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={12} />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} />
                        {repo.forks_count}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}

            {languages.length > 0 && (
              <div className="surface-card mt-8 rounded-2xl p-6 sm:p-7">
                <h3 className="text-sm font-semibold text-heading">Languages</h3>
                <div className="mt-4 flex h-1.5 overflow-hidden rounded-full bg-surface-muted">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className={`${languageColors[lang.name] || "bg-stone-500"}`}
                      style={{ width: `${(lang.bytes / totalBytes) * 100}%` }}
                      title={`${lang.name}: ${Math.round((lang.bytes / totalBytes) * 100)}%`}
                    />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {languages.map((lang) => (
                    <span key={lang.name} className="flex items-center gap-2 text-sm text-muted">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          languageColors[lang.name] || "bg-stone-400"
                        }`}
                      />
                      {lang.name}
                      <span className="text-faint">
                        {Math.round((lang.bytes / totalBytes) * 100)}%
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
}
