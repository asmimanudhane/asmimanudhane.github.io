import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { ResearchProjectEntry } from "@/components/research-project-entry";
import { researchProjectData } from "@/data/research-project";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { AcademicResearchEntry } from "@/components/academic-research-entry";
import { academicResearchData } from "@/data/academic-research";
import { sectionOrder, Section } from "@/data/section-order";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#E8DCC4]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24 white-space: pre-line;">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 white-space: pre-line;">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0 white-space: pre-line;">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12 white-space: pre-line;" >
            {/* About section is typically first */}
            {aboutMe.description && (
              <section id="about">
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600 white-space: pre-line;"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description.replace(/\n/g, '<br>') }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 id="education" className="font-serif text-zinc-700 mb-12 tracking-wide uppercase scroll-mt-32">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                  case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 id="experience" className="font-serif text-md mb-12 tracking-wide uppercase scroll-mt-32">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <div key={index}>
                              <ExperienceEntry
                                experience={experience}
                              />
                              {index < experienceData.length - 1 && (
                                <div className="h-0.5 bg-zinc-400 my-12" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.ResearchProject:
                  return (
                    researchProjectData.length > 0 && (
                      <section key={sectionName}>
                        <h2 id="research-projects" className="font-serif text-l mb-12 tracking-wide uppercase scroll-mt-32">
                          Research Projects
                        </h2>
                        <div className="space-y-12">
                          {researchProjectData.map((researchProject, index) => (
                            <div key={index}>
                              <ResearchProjectEntry researchProject={researchProject} />
                              {index < researchProjectData.length - 1 && (
                                <div className="h-0.5 bg-zinc-400 my-12" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                
                case Section.AcademicResearch:
                  return (
                    academicResearchData.length > 0 && (
                      <section key={sectionName}>
                        <h2 id="academic-research" className="font-serif text-md mb-12 tracking-wide uppercase scroll-mt-32">
                          Academic Research
                        </h2>
                        <div className="space-y-12">
                          {academicResearchData.map((research, index) => (
                            <div key={index}>
                              <AcademicResearchEntry academicResearch={research} />
                              {index < academicResearchData.length - 1 && (
                                <div className="h-0.5 bg-zinc-400 my-12" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
