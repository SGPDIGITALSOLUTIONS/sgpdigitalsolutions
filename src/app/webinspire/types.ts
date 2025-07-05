export type Tier = 'spark' | 'flame' | 'blaze';

export interface TierLimit {
  maxUploads: number;
  maxPages: number;
  maxRevisions: number;
  maxLayouts: number;
  canCustomizeColors: boolean;
  canRecordVoice: boolean;
  colorPresetCount: number;
}

export interface TierLimits {
  spark: TierLimit;
  flame: TierLimit;
  blaze: TierLimit;
}

export interface Layout {
  id: number;
  name: string;
  preview: string;
  description?: string;
}

export interface ColorPreset {
  id: number;
  name: string;
  colors: string[];
  preview: string;
  description?: string;
}

export interface UploadedFile {
  id: number;
  name: string;
  preview: string;
  size?: number;
  type?: string;
}

export interface StudioStep {
  number: number;
  title: string;
  icon: string;
  description?: string;
} 