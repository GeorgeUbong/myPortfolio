import { sanityClient } from "./client";

export type PortfolioProject = {
  _id: string;
  name: string;
  description: string;
  imageUrl?: string | null;
  imageAlt?: string;
  link?: string;
  githubUrl?: string;
};

const projectsQuery = `*[_type == "project"] | order(displayOrder asc, _createdAt asc) {
  _id,
  name,
  description,
  "imageUrl": image.asset->url,
  "imageAlt": coalesce(image.alt, name),
  link,
  githubUrl
}`;

export function fetchProjects() {
  return sanityClient.fetch<PortfolioProject[]>(projectsQuery);
}
