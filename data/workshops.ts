export interface Workshop {
  slug: string;
  title: string;
  type: "school" | "community" | "corporate";
  audience: string;
  duration: string;
  capacity: string;
  date: string; // PLACEHOLDER
  location: string; // PLACEHOLDER
  status: "upcoming" | "past";
  image: string;
  description: string;
}

export const workshops: Workshop[] = [
  {
    slug: "school-soap-science-session",
    title: "Soap Science: School Session",
    type: "school",
    audience: "Grades 6–12",
    duration: "75 minutes",
    capacity: "Up to 30 students", // PLACEHOLDER
    date: "August 12, 2026", // PLACEHOLDER
    location: "Vancouver, BC", // PLACEHOLDER
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=900&auto=format&fit=crop",
    description: "An introduction to saponification, waste reduction, and circular design for classrooms.",
  },
  {
    slug: "community-soap-making-drop-in",
    title: "Community Soap-Making Drop-In",
    type: "community",
    audience: "Open to all ages",
    duration: "2 hours",
    capacity: "20 seats", // PLACEHOLDER
    date: "August 24, 2026", // PLACEHOLDER
    location: "Vancouver, BC", // PLACEHOLDER
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=900&auto=format&fit=crop",
    description: "A hands-on session where participants make their own bar to take home.",
  },
  {
    slug: "corporate-sustainability-session",
    title: "Corporate Sustainability Session",
    type: "corporate",
    audience: "Teams of 10–40",
    duration: "Half-day", // PLACEHOLDER
    capacity: "Custom group size",
    date: "By request", // PLACEHOLDER
    location: "On-site or hosted", // PLACEHOLDER
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    description: "A team workshop connecting circular economy principles to hands-on making.",
  },
  {
    slug: "spring-community-workshop",
    title: "Spring Community Workshop",
    type: "community",
    audience: "Open to all ages",
    duration: "2 hours",
    capacity: "20 seats",
    date: "April 6, 2026", // PLACEHOLDER
    location: "Vancouver, BC",
    status: "past",
    image: "https://images.unsplash.com/photo-1610030181087-540f6cec06ff?q=80&w=900&auto=format&fit=crop",
    description: "Our spring session focused on floral-scented bars and oil filtration basics.",
  },
];
