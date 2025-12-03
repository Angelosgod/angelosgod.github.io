export interface AppInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconUrl: string;
  screenshotUrl: string;
  category: string;
  downloadUrl: {
    ios?: string;
    android?: string;
  };
  features: string[];
}

export type LegalDocType = 'privacy' | 'terms';
