import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ResearchProject } from "@/data/research-project";

export function ResearchProjectEntry({
  researchProject,
}: {
  researchProject: ResearchProject;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {researchProject.imageUrl && (
        <div className="w-full sm:w-1/4 min-w-[160px] relative">
          <Image
            src={researchProject.imageUrl}
            alt={researchProject.title}
            width={160}
            height={200}
            className="rounded-lg transition-all duration-300"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <div className="flex flex-row gap-4 items-center mb-2">
          <p className="text-xs text-zinc-500">
            {researchProject.conference} {researchProject.year}
          </p>
          {researchProject.award && (
            <div className="group flex px-2 py-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-md items-center shadow-md border border-amber-100/50 relative overflow-hidden hover:rotate-1 transition-all duration-300">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
              <p className="text-xs text-amber-700 font-medium relative">
                {researchProject.award}
              </p>
            </div>
          )}
        </div>
        <h3 className="font-serif text-md mb-3">{researchProject.title}</h3>
        <p className="text-sm text-zinc-600 italic mb-4">{researchProject.authors}</p>
        <div className="flex flex-row gap-6">
          {researchProject.paperUrl && (
            <a
              href={researchProject.paperUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Paper</span>
            </a>
          )}
          {researchProject.blogUrl && (
            <a
              href={researchProject.blogUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Blog</span>
            </a>
          )}
          {researchProject.bibtex && (
            <a
              href={researchProject.bibtex}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">BibTeX</span>
            </a>
          )}
        </div>
        {researchProject.tldr && (
          <p className="text-sm italic text-zinc-600 mt-4">
            {researchProject.tldr}
          </p>
        )}
      </div>
    </div>
  );
}
