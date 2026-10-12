export type ServiceCategory =
  | 'interlock-installation'
  | 'curbstone-installation'
  | 'sidewalk-construction'
  | 'garden-walkways'
  | 'parking-interlock'
  | 'interlock-maintenance';

export interface ServiceItem {
  id: string;
  slug: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  applications: string[];
  technicalSpecs: {
    recommendedThickness: string;
    paverTypes: string[];
    baseRequirements: string;
    edgeRestraints: string;
  };
  features: string[];
  patternType: 'herringbone' | 'unistone' | 'curb' | 'basketweave' | 'walkway' | 'maintenance';
}

export interface PaverModel {
  id: string;
  name: string;
  arabicName: string;
  popularUsage: string;
  dimensions: string;
  recommendedThickness: string;
  strengthRating: string;
  patternKey: 'herringbone' | 'unistone' | 'curb' | 'basketweave' | 'walkway' | 'maintenance';
  description: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'interlock' | 'curbstone' | 'sidewalk' | 'garden' | 'parking' | 'execution';
  categoryLabel: string;
  description: string;
  areaEstimate?: string;
  thickness?: string;
  paverType?: string;
  patternType?: 'herringbone' | 'unistone' | 'curb' | 'basketweave' | 'walkway' | 'maintenance';
  videoUrl?: string;
  tags: string[];
}

export interface ExecutionStep {
  stepNumber: string;
  title: string;
  shortDesc: string;
  details: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}
