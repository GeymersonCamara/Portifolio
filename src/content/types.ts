import type { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TechItem {
  name: string;
}

export interface ProjectPreview {
  id: number;
  title: string;
  subtitleTags: [string, string];
  description: string;
  highlights: string[];
}
