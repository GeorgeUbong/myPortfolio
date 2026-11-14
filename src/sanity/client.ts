import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "hma6x3ff",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2026-11-14",
  useCdn: true,
  perspective: "published",
});
