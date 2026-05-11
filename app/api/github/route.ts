import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const REPOS = [
  { owner: "iammannu", repo: "Lead-gen" },
  { owner: "iammannu", repo: "xemelgo-dashboard" },
  { owner: "iammannu", repo: "ALPHA" },
  { owner: "iammannu", repo: "mechanistic-interpretability-research-engineer" },
  { owner: "iammannu", repo: "HackNC_Fidelity" },
];

async function fetchRepo(owner: string, repo: string) {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-App",
  };
  if (GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return {
      name: data.name,
      full_name: data.full_name,
      description: data.description,
      stars: data.stargazers_count,
      forks: data.forks_count,
      watchers: data.watchers_count,
      language: data.language,
      topics: data.topics || [],
      html_url: data.html_url,
      homepage: data.homepage,
      updated_at: data.updated_at,
      open_issues: data.open_issues_count,
    };
  } catch {
    return null;
  }
}

export async function GET(_req: NextRequest) {
  try {
    const results = await Promise.allSettled(
      REPOS.map(({ owner, repo }) => fetchRepo(owner, repo))
    );

    const repos = results
      .filter(
        (r): r is PromiseFulfilledResult<Awaited<ReturnType<typeof fetchRepo>>> =>
          r.status === "fulfilled" && r.value !== null
      )
      .map((r) => r.value);

    return NextResponse.json({ repos }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to fetch repos", repos: [] }, { status: 500 });
  }
}
