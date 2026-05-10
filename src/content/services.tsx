import {
  ArrowRight,
  Code2,
  Database,
  LayoutDashboard,
  Shield,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

import type { ServiceItem } from "./types";

export const services: ServiceItem[] = [
  {
    icon: <Database className="size-5" />,
    title: "Sistemas empresariais",
    description:
      "Automação de processos internos com softwares robustos e escaláveis.",
  },
  {
    icon: <Smartphone className="size-5" />,
    title: "Aplicações web sob medida",
    description:
      "Desenvolvimento de apps e painéis modernos com tecnologia de ponta.",
  },
  {
    icon: <Sparkles className="size-5" />,
    title: "Plataformas SaaS",
    description:
      "Criação de produtos digitais por assinatura focados em escalabilidade.",
  },
  {
    icon: <LayoutDashboard className="size-5" />,
    title: "Dashboards administrativos",
    description:
      "Painéis de controle inteligentes integrados para gestão de dados.",
  },
  {
    icon: <Zap className="size-5" />,
    title: "Sistemas de delivery/E-commerce",
    description:
      "Soluções de vendas online com experiência fluida e otimizada.",
  },
  {
    icon: <Code2 className="size-5" />,
    title: "Landing pages de conversão",
    description:
      "Páginas de alta performance otimizadas para captar clientes.",
  },
  {
    icon: <Shield className="size-5" />,
    title: "Integração com pagamentos",
    description:
      "Implementação segura de Stripe, PayPal e sistemas financeiros.",
  },
  {
    icon: <ArrowRight className="size-5" />,
    title: "APIs e automações",
    description:
      "Conectividade entre serviços com automações inteligentes.",
  },
];
