export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "October 2024 - September 2025",
    title: "Research Intern",
    company: "Climate and Sustainability Initiative",
    description:
      "Developed mixed-methods research and methodology on climate finance to fragile African states, identifying and analysing commitment and disbursement patterns against fragility indicators.", 

    advisor: "Imad Ul Riyaz",
  },
  {
    date: "July 2024 - October 2024",
    title: "Research Intern",
    company: "Commonwealth Human Rights Initiative",
    description:
      "Delivered policy research on India’s Right to Information regime by mapping disclosure gaps in gender, environmental, and climate governance across the Ministries of Women and Child Development, Tribal Affairs, and Environment & Forests, and contributing to legislative review of draft RTI bills.",
    companyUrl: "https://google.com",
  },
  {
    date: "July 2024 - October 2024",
    title: "Research Intern",
    company: "BAME Awarding Gap Project",
    description:
      "Conducted research and data analysis to identify and address disparities in educational attainments among BAME students, and devised evidence-based strategies like diversity and inclusion training for faculty, mentorship initiatives and established dedicated support centres for BAME students to access academic resources, counselling, and career services. ",
    advisor: "Dr Antonio Sennis",
  }
];
