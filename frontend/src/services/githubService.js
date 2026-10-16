const GITHUB_USERNAME = "Piyushasthana123";
const GITHUB_API = "https://api.github.com";

function getHeaders() {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function fetchGitHubProfile() {
  const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }

  return response.json();
}

export async function fetchGitHubRepos() {
  const response = await fetch(
    `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
    { headers: getHeaders() }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  return response.json();
}

export async function fetchGitHubLanguages(repos) {
  const languageCounts = {};

  await Promise.all(
    repos.slice(0, 6).map(async (repo) => {
      try {
        const response = await fetch(repo.languages_url, {
          headers: getHeaders(),
        });
        if (!response.ok) return;
        const languages = await response.json();
        Object.entries(languages).forEach(([lang, bytes]) => {
          languageCounts[lang] = (languageCounts[lang] || 0) + bytes;
        });
      } catch {
        // Skip individual language fetch failures
      }
    })
  );

  return Object.entries(languageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([name, bytes]) => ({ name, bytes }));
}
