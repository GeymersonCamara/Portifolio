import type { ProjectPreview } from "./types";

export const featuredProjects: ProjectPreview[] = [
  {
    id: 1,
    title: "Bloob English Community",
    subtitleTags: ["COMUNIDADE", "INGLÊS"],
    description:
      "Projeto da comunidade de inglês Bloob: espaço para prática, conteúdo e interação entre quem estuda o idioma, com foco em experiência web clara e envolvente.",
    highlights: [
      "+ Aprendizado colaborativo",
      "+ Experiência focada em comunidade",
      "+ Interface moderna e acessível",
    ],
    coverSrc: "/images/logo-completa.png",
    coverFit: "cover",
  },
  {
    id: 2,
    title: "BioNexus: Plataforma Médica",
    subtitleTags: ["WEB APP", "SAAS"],
    description:
      "Sistema moderno com dashboards, integrações e experiência premium para usuários e administradores.",
    highlights: ["+ UX de alta conversão", "+ Sistema escalável", "+ API robusta"],
  },
];
