import { Sparkles } from "lucide-react";
import type { Product } from "@/types/index";

export const rangmanchAiProduct: Product = {
  slug: "rangmanch-ai",
  name: "RangManch AI",
  shortName: "RangManch",
  brandName: "RangManch AI",
  category: "Creative Software",
  status: "Beta",
  icon: Sparkles,
  theme: "green",
  tagline: "Your creativity. Our little bit of magic.",
  summary: "A browser-based creative playground for AI-assisted reel editing and mixing vocal recordings with instrumentals.",
  intro: "Turn photos and clips into editable reels, or polish a vocal performance with guided music-studio presets.",
  heroHeadline: "Make reels. Make memories. Make music.",
  heroSubtext: "Creative tools that make editing feel more approachable.",
  description: "RangManch AI helps everyday creators turn photos and video clips into editable reels using AI-assisted tools. Arrange your story, adjust timing, preview changes, and export an MP4.\n\nIts Music Studio lets singers upload separate vocal and instrumental tracks, select a studio preset, and work toward a polished mix and master. These are the capabilities described on the current public website.",
  platforms: ["Web", "Mobile Web"],
  audience: [
    "Short-form video creators",
    "People making celebration and memory reels",
    "Singers recording covers",
    "Everyday creators learning to edit",
  ],
  highlights: [
    { label: "Video", value: "AI-assisted reels" },
    { label: "Music", value: "Vocal mixing" },
    { label: "Workflow", value: "Preview + export" },
  ],
  features: [
    "Upload photos and video clips to create editable reels",
    "Adjust clip arrangement and timing",
    "Use Auto Edit and AI Copilot to assist with reel changes",
    "Preview and export an MP4",
    "Upload separate vocal and instrumental tracks to Music Studio",
    "Choose a music-studio preset and mix audio",
  ],
  ctas: {
    primary: { label: "Explore RangManch AI", href: "https://www.rangmanchai.com/" },
    secondary: { label: "Try Music Studio", href: "https://www.rangmanchai.com/music-studio" },
  },
  ctaSection: {
    title: "Your creativity deserves a little magic.",
    description: "Make a reel or explore guided music mixing from the browser.",
  },
  links: { website: "https://www.rangmanchai.com/" },
  coverImage: "https://www.rangmanchai.com/images/music-studio-hero.png",
  coverAlt: "RangManch AI's official Music Studio hero artwork",
  screenshots: [],
};
