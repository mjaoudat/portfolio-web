export type Project = {
  slug: string
  name: string
  description: string
  stack: string[]
  repoUrl: string
  status: "ativo" | "arquivado" | "em desenvolvimento"
}

export const projects: Project[] = [
  {
    slug: "fatec-ads",
    name: "fatec-ads",
    description: "Trabalhos e projetos do curso de ADS na FATEC Americana.",
    stack: ["SQL", "Python", "Java, C, JavaScript,"],
    repoUrl: "https://github.com/mjaoudat/fatec-ads",
    status: "ativo",
  },
  {
    slug: "qa-studies",
    name: "qa-studies",
    description: "Estudos e práticas de qualidade de software e testes.",
    stack: ["QA", "Testes"],
    repoUrl: "https://github.com/mjaoudat/qa-studies",
    status: "ativo",
  },
  {
    slug: "openclaw",
    name: "OpenClaw",
    description: "Sistema de agentes de IA com arquitetura supervisor e sub-agentes.",
    stack: ["IA", "Agentes", "Claude API"],
    repoUrl: "https://github.com/mjaoudat/openclaw",
    status: "em desenvolvimento",
  },
  {
    slug: "ecossistema-web",
    name: "Ecossistema Web",
    description: "Este portfólio: do zero à produção com Next.js 15 e Vercel.",
    stack: ["Next.js", "Tailwind", "shadcn/ui", "Vercel"],
    repoUrl: "https://github.com/mjaoudat/portfolio-web",
    status: "ativo",
  },
]