export interface AcademicResearch {
  title: string;
  description: string;
  type?: string;
  year?: string;
  imageUrl?: string;
  paperUrl?: string;
  codeUrl?: string;
  blogUrl?: string;
}

export const academicResearchData: AcademicResearch[] = [
  // Example entry
  {
    title: "Anthropocene: The Importance of Terminology in Climate Studies",
    description:
      "The essay examines how terms such as the Anthropocene, Capitalocene, and Anglocene influence historical analysis by assigning responsibility for environmental change. It argues that “Anthropocene” universalises blame, obscuring colonial and capitalist power structures. Through case studies of deforestation in colonial Assam and the Bhopal Gas Tragedy, it demonstrates how alternative frameworks foreground hidden histories of environmental injustice. The project integrates socio-political and environmental histories to show that terminology fundamentally alters how causality, responsibility, and injustice are understood in history. ",
    paperUrl: "https://drive.google.com/file/d/1C0LubuvbnVAGkXTeV1QZljPvaakh2rUW/view?usp=drive_link",
  },
  {
    title: "Culturally Driven Gendered Violence During the Partition of India, 1947 ",
    description:
      "The project reinterprets the history of the Indian Partition through a gendered and social-historical lens, moving beyond elite political narratives. Focusing on survivor interviews from Punjab, it examines how women experienced targeted, patriarchal violence during Partition. The study analyses concepts such as izzat (honour) to understand how women’s bodies became sites of communal assertion. Drawing on post-feminist historiography, it foregrounds marginalised voices that have long been excluded from mainstream history. The project highlights how gender and culture affected the lived experiences of Partition violence.",
    paperUrl: "https://drive.google.com/file/d/1FtrdWEvLLM7uPrH6K5-SdjFEmR-dIHIl/view?usp=drive_link ",
  },
  {
    title: "Diverging Paths of a Common Goal ",
    description:
      "The essay examines the contrasting approaches of Mahatma Gandhi and B.R. Ambedkar to caste and untouchability in pre-independence India. While united in their opposition to caste oppression, it highlights their deep philosophical and methodological divergences. Through comparative analysis, the project explores Gandhi’s moral-reformist vision versus Ambedkar’s rights-based, structural critique. It situates their rivalry within broader debates on social justice, nationalism, and constitutionalism. The study shows how their disagreements continue to shape contemporary discourse on caste in India.",
    paperUrl: "https://drive.google.com/file/d/19DRcQTPvDd2fhk3pBBVMqv7pITzlovZ_/view?usp=drive_link ",
  },
];
