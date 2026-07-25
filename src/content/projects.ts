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
    title: "Konoha Sushi",
    subtitleTags: ["DELIVERY", "E-COMMERCE"],
    description:
      "Sistema de delivery para o Konoha Sushi: cardápio online, pedidos e experiência fluida para clientes e gestão do restaurante.",
    highlights: [
      "+ Pedidos online",
      "+ Interface focada em conversão",
      "+ Fluxo de delivery otimizado",
    ],
    coverSrc: "/images/konoha-sushi.png",
    coverFit: "cover",
    coverPosition: "top",
  },
];
