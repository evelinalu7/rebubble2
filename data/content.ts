// All values on this page are fictional placeholders for later replacement
// with the organization's real milestones, team, events, and stories.

export interface Milestone {
  title: string;
  date: string;
  description: string;
  badge: string;
  image: string;
}

export const milestones: Milestone[] = [
  {
    title: "First Community Collection Drive",
    date: "March 2024", // PLACEHOLDER
    description: "Partnered with three local restaurants to begin collecting used cooking oil.",
    badge: "Milestone",
    image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "1,000th Bar Produced",
    date: "November 2024", // PLACEHOLDER
    description: "Reached our first production milestone with help from volunteer soap-makers.",
    badge: "Milestone",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Shelter Partnership Program Launched",
    date: "February 2025", // PLACEHOLDER
    description: "Began regular soap donations to two Vancouver-area shelters.",
    badge: "Milestone",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000&auto=format&fit=crop",
  },
];

export interface EventItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  location: string;
  image: string;
  status: "upcoming" | "past";
}

export const events: EventItem[] = [
  {
    slug: "summer-oil-collection-drive",
    title: "Summer Oil Collection Drive",
    date: "August 2, 2026", // PLACEHOLDER
    description: "A neighbourhood collection event for households and small kitchens.",
    location: "Vancouver, BC",
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=900&auto=format&fit=crop",
    status: "upcoming",
  },
  {
    slug: "packaging-volunteer-day",
    title: "Volunteer Packaging Day",
    date: "August 16, 2026", // PLACEHOLDER
    description: "Help package soap bars for donation and upcoming market sales.",
    location: "Vancouver, BC",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=900&auto=format&fit=crop",
    status: "upcoming",
  },
  {
    slug: "spring-market-pop-up",
    title: "Spring Market Pop-Up",
    date: "May 10, 2026", // PLACEHOLDER
    description: "Our soap and story shared at a local Vancouver community market.",
    location: "Vancouver, BC",
    image: "https://images.unsplash.com/photo-1573225342350-16731dd9bf3f?q=80&w=900&auto=format&fit=crop",
    status: "past",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Amara Chen", // PLACEHOLDER
    role: "Co-Founder & Program Lead",
    bio: "Leads workshop curriculum and school partnerships across Vancouver.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Jordan Reyes", // PLACEHOLDER
    role: "Co-Founder & Operations Lead",
    bio: "Oversees oil collection logistics and shelter partnerships.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Priya Nair", // PLACEHOLDER
    role: "Volunteer Coordinator",
    bio: "Organizes volunteer soap-making sessions and community events.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sam Okafor", // PLACEHOLDER
    role: "Sustainability Educator",
    bio: "Designs the sustainability curriculum used in school workshops.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
  },
];

export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export const stories: Story[] = [
  {
    slug: "how-a-workshop-changed-our-approach",
    title: "How a Single Workshop Changed Our Approach to Waste",
    excerpt: "A recap of our most-requested school session and what students took away from it.",
    date: "June 2026", // PLACEHOLDER
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=900&auto=format&fit=crop",
    category: "Workshops",
  },
  {
    slug: "inside-our-shelter-partnerships",
    title: "Inside Our Shelter Partnerships",
    excerpt: "What it looks like when soap donations turn into an ongoing relationship.",
    date: "May 2026", // PLACEHOLDER
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=900&auto=format&fit=crop",
    category: "Community",
  },
  {
    slug: "from-restaurant-to-bar",
    title: "From Restaurant to Bar: Our Collection Process, Explained",
    excerpt: "A closer look at how used oil makes its way from kitchens to our workshop.",
    date: "April 2026", // PLACEHOLDER
    image: "https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?q=80&w=900&auto=format&fit=crop",
    category: "Behind the Scenes",
  },
];
