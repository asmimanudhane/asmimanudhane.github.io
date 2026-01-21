export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Asmi Manudhane",
  title: "MPhil Development Studies Candidate",
  institution: "University of Cambridge",
  // Note that links work in the description
  description:
    `I'm a MPhil candidate at Cambridge, expected to graduate in June 2026, currently researching the interaction of India's climate policy and economic development infrastructure.

I am excited to pursue a career in climate policy development. I am an impact-driven individual for whom social change is central. I want to use my knowledge in policy analysis, my sensitivity to subalternities of gender and caste, and my enthusiasm to actualise meaningful action to contribute to the climate-action space.

Outside of academics, I'm happiest on or near the water—whether swimming, surfing, or rowing. At Cambridge, Im proud to be part of my college rowing team as well as the Cambridge Boxing Team. I love connecting with new people, finding joy in small everyday moments, and reminding myself to move through life at my own pace.`,

  email: " am3421@cam.ac.uk, asmi2910manudhane@gmail.com ",
  imageUrl:
    "/images/Asmi Image.jpg",
  
  linkedinUsername: "asmi-manudhane",
  institutionUrl: "https://www.cambridge.org/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
