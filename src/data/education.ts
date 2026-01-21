export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2025-Present",
    institution: "University of Cambridge",
    degree: "MPhil in Development Studies",
    advisor: "Professor Maha Abdelrahman ",
  },
  {
    year: "2021-2024",
    institution: "University College London",
    degree: "BA Honours in History",
    thesis: "From Others to Own: Culturally Driven Gendered Violence During the Partition of India",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
