export interface ResearchProject {
  title: string;
  authors?: string;
  year?: string;
  conference?: string;
  paperUrl?: string;
  blogUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const researchProjectData: ResearchProject[] = [
  // If you don't want to show research projects, just make the array empty.
  {
    title: "Disproportionate Climate Finance in Fragile African Countries",
    paperUrl: "https://drive.google.com/file/d/1x1A6CbsdZWfcLKKAqIOzl1rMkqQaouwV/view?usp=drive_link",
    blogUrl: "https://csiglobal.co/fragility-climate-change-and-the-crisis-of-climate-finance-in-africa/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "The project analyses the relationship between climate finance and fragility indicators in African countries. The project highlights that commitments and disbursements from both international and domestic sources need to increase not only in volume but also in efficiency. Beyond return-generating mitigation facilities, adaptation actions aimed at reducing the pressure of survival on the population need to be designed and executed, especially in the sectors of education, health, and governance. Without reducing fragility, climate action cannot realise its full potential, which can only be achieved if the climate-fragility nexus is acknowledged in the design of climate finance mechanisms and networks.  ",
    
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/research-project-image.jpg"
  },
  {
    title: "Decentralising India’s Climate Policies",
    paperUrl: "https://drive.google.com/file/d/1_gPWP9BiZLPuYEviVVmUw4WWtLJSIyj9/view?usp=drive_link",
    tldr:"The project analyses India’s climate governance through the lens of regional vulnerability, arguing that centralised climate policies overlook local ecological and socio-economic realities. It highlights how climate change disproportionately impacts India’s diverse regions: coastal flooding, urban heat stress, and drought-prone interiors. Using policy analysis, climate risk mapping, and global case studies, the project advocates for decentralised mitigation and adaptation led by states and local governments. It proposes a hybrid model where the Centre enables large-scale transitions while subnational actors implement context-specific solutions. The work positions decentralisation as essential for climate resilience, equity, and effective climate action in India."
  },
  {
    title: "Gender Justice is Climate Justice ",
    paperUrl: " https://drive.google.com/file/d/19ey09ecJO1jdl_PDpRJpsZzyTfc4-SrT/view?usp=sharing",
    tldr:"The article examines how opposition at COP29 to a UN Women–led resolution highlights the entanglement of gender politics and climate governance. It argues that excluding transgender and homosexual women from climate frameworks undermines equity, adaptation, and effective climate finance. By situating gender justice at the centre of climate justice, the piece shows how ideological resistance distorts global climate policy. Drawing on international frameworks and grassroots examples, it highlights how inclusive gender approaches strengthen climate action. The project reframes climate change as a justice issue shaped by power, identity, and inequality."
  },
  {
    title: "Rethinking Development through The Good Girls",
    paperUrl: "https://drive.google.com/file/d/1CbtlQrOZ2WX_VKZLXelmMg2qwffTamup/view?usp=drive_link",
    tldr:"The article rethinks development in rural India through Sonia Faleiro’s The Good Girls, using the deaths of Padma and Lalli to expose the intersection of gender, infrastructure, and social inequality. It argues that development cannot be measured solely by infrastructure but must also include social transformation and gender justice. By linking patriarchal norms to deficits in transport, sanitation, healthcare, and land rights, the project highlights how underdevelopment disproportionately endangers women. Drawing on data and lived narratives, it critiques extractive and uneven models of growth and reframes development as an inclusive process that centres the most vulnerable."
  },
];
