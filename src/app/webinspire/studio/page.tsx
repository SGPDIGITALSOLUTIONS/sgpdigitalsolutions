'use client';

import { Inter } from 'next/font/google';
import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useSearchParams, useRouter } from 'next/navigation';
import { Tier, Layout, ColorPreset, UploadedFile, TierLimits, StudioStep } from '../types';
import './background.css';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

const inter = Inter({ subsets: ['latin'] });

// Mock data for layouts
const layoutPresets: Layout[] = [
  { id: 1, name: 'Modern Portfolio', preview: '🖼️' },
  { id: 2, name: 'Business Classic', preview: '💼' },
  { id: 3, name: 'Creative Agency', preview: '🎨' },
  { id: 4, name: 'E-commerce', preview: '🛍️' },
  { id: 5, name: 'Blog', preview: '📝' },
];

// Mock data for color presets
const colorPresets: ColorPreset[] = [
  { 
    id: 1, 
    name: 'Ocean Breeze', 
    colors: ['#1B4965', '#62B6CB', '#CAE9FF'],
    preview: '/presets/ocean-breeze.png'
  },
  { 
    id: 2, 
    name: 'Desert Sand', 
    colors: ['#C9A66B', '#E3D18A', '#F4E3B2'],
    preview: '/presets/desert-sand.png'
  },
  { 
    id: 3, 
    name: 'Forest Deep', 
    colors: ['#2D3A3A', '#445555', '#5C7070'],
    preview: '/presets/forest-deep.png'
  }
];

const TIER_LIMITS: TierLimits = {
  spark: {
    maxUploads: 3,
    maxPages: 1,
    maxRevisions: 1,
    maxLayouts: 1,
    canCustomizeColors: false,
    canRecordVoice: false,
    colorPresetCount: 3
  },
  flame: {
    maxUploads: 5,
    maxPages: 3,
    maxRevisions: 3,
    maxLayouts: 3,
    canCustomizeColors: true,
    canRecordVoice: false,
    colorPresetCount: 6
  },
  blaze: {
    maxUploads: 10,
    maxPages: 5,
    maxRevisions: 5,
    maxLayouts: 10,
    canCustomizeColors: true,
    canRecordVoice: true,
    colorPresetCount: 10
  }
};

export default function WebInspireStudio() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState<Layout | null>(null);
  const [selectedColors, setSelectedColors] = useState<ColorPreset | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  
  // Get tier from URL and validate it
  const tier = (searchParams.get('tier') as Tier) || 'spark';
  const limits = TIER_LIMITS[tier];

  // Debug logging
  useEffect(() => {
    console.group('WebInspireStudio Debug Info');
    console.log('Current Tier:', tier);
    console.log('Tier Limits:', limits);
    console.log('Current Step:', currentStep);
    console.log('Selected Layout:', selectedLayout);
    console.log('Selected Colors:', selectedColors);
    console.log('Uploaded Files:', uploadedFiles);
    console.log('Show Preview:', showPreview);
    console.log('Is Recording:', isRecording);
    console.log('Upload Error:', uploadError);
    console.groupEnd();
  }, [tier, limits, currentStep, selectedLayout, selectedColors, uploadedFiles, showPreview, isRecording, uploadError]);

  // Redirect if invalid tier
  useEffect(() => {
    if (!['spark', 'flame', 'blaze'].includes(tier)) {
      console.warn('Invalid tier detected:', tier);
      router.replace('/webinspire');
    }
  }, [tier, router]);

  // Reset state when tier changes
  useEffect(() => {
    console.log('Tier changed, resetting state:', tier);
    setUploadedFiles([]);
    setSelectedLayout(null);
    setSelectedColors(null);
    setIsRecording(false);
    setCurrentStep(1);
  }, [tier]);

  // Cleanup function for file previews
  useEffect(() => {
    return () => {
      // Cleanup object URLs when component unmounts
      uploadedFiles.forEach(file => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [uploadedFiles]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      console.group('File Upload Debug');
      console.log('Accepted Files:', acceptedFiles);
      console.log('Current Upload Count:', uploadedFiles.length);
      console.log('Max Uploads Allowed:', limits.maxUploads);
      
      setUploadError(null);
      
      if (uploadedFiles.length >= limits.maxUploads) {
        const error = `Your ${tier} tier is limited to ${limits.maxUploads} uploads.`;
        console.warn('Upload limit reached:', error);
        throw new Error(error);
      }
      
      const remainingSlots = limits.maxUploads - uploadedFiles.length;
      const filesToAdd = acceptedFiles.slice(0, remainingSlots);
      console.log('Files to add:', filesToAdd);
      
      // Validate file sizes
      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
      filesToAdd.forEach(file => {
        console.log('Validating file:', file.name, 'Size:', file.size);
        if (file.size > MAX_FILE_SIZE) {
          throw new Error(`File ${file.name} exceeds the 5MB size limit.`);
        }
      });

      // Create previews and add files
      const newFiles = filesToAdd.map(file => ({
        id: Date.now(),
        name: file.name,
        preview: URL.createObjectURL(file)
      }));
      console.log('New files with previews:', newFiles);

      setUploadedFiles(prev => [...prev, ...newFiles]);
      console.groupEnd();
    } catch (err) {
      console.error('Upload error:', err);
      setUploadError(err instanceof Error ? err.message : 'Failed to upload files.');
    }
  }, [uploadedFiles.length, limits.maxUploads, tier]);

  const removeFile = useCallback((fileId: number) => {
    setUploadedFiles(prev => {
      const fileToRemove = prev.find(f => f.id === fileId);
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter(f => f.id !== fileId);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxSize: 5 * 1024 * 1024 // 5MB
  });

  const getTierEmoji = (tier: Tier) => {
    switch (tier) {
      case 'spark': return '🌱';
      case 'flame': return '🔥';
      case 'blaze': return '🚀';
      default: return '🌱';
    }
  };

  const steps: StudioStep[] = [
    { 
      number: 1, 
      title: 'Upload Inspiration', 
      icon: '📸',
      description: 'Share images, screenshots, or links that inspire you'
    },
    { 
      number: 2, 
      title: 'Choose Colours', 
      icon: '🎨',
      description: 'Pick from our curated palettes or create your own'
    },
    { 
      number: 3, 
      title: 'Pick Layout Styles', 
      icon: '📐',
      description: 'Select layouts that match your vision'
    },
    { 
      number: 4, 
      title: 'Tone & Feel', 
      icon: '🎭',
      description: 'Define the personality of your website'
    },
    { 
      number: 5, 
      title: 'Notes + Extras', 
      icon: '✏️',
      description: 'Add any additional thoughts or voice notes'
    },
  ];

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div {...getRootProps()} className={`aspect-video border-2 border-dashed ${isDragActive ? 'border-[#83B7B3] bg-[#F3FCF6]' : 'border-neutral-200'} rounded-lg flex items-center justify-center transition-colors`}>
              <input {...getInputProps()} />
              <div className="text-center">
                <p className="text-neutral-400 mb-4">
                  {uploadedFiles.length >= limits.maxUploads 
                    ? `Upload limit reached (${limits.maxUploads} files max for ${tier} tier)`
                    : `Drag and drop your inspiration here (${uploadedFiles.length}/${limits.maxUploads})`
                  }
                </p>
                <button 
                  className={`px-4 py-2 bg-[#83B7B3] text-white rounded-lg text-sm hover:bg-[#6B9E9A] transition-colors ${
                    uploadedFiles.length >= limits.maxUploads ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={uploadedFiles.length >= limits.maxUploads}
                >
                  or Browse Files
                </button>
              </div>
            </div>
            {uploadedFiles.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {uploadedFiles.map(file => (
                  <div key={file.id} className="relative aspect-video rounded-lg overflow-hidden">
                    <img src={file.preview} alt={file.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button onClick={() => removeFile(file.id)} className="text-white">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {colorPresets.slice(0, limits.colorPresetCount).map(preset => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedColors(preset)}
                  className={`p-4 rounded-lg border ${selectedColors?.id === preset.id ? 'border-[#83B7B3]' : 'border-black/5'} hover:border-[#83B7B3] transition-colors`}
                >
                  <div className="flex gap-2 mb-2">
                    {preset.colors.map(color => (
                      <div
                        key={color}
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-neutral-800">{preset.name}</p>
                </button>
              ))}
            </div>
            {limits.canCustomizeColors ? (
              <div className="mt-8 p-4 rounded-lg border border-black/5">
                <h3 className="text-sm font-medium text-neutral-800 mb-2">Custom Color Picker</h3>
                <p className="text-sm text-neutral-600">Create your own color palette</p>
                {/* Custom color picker UI will go here */}
              </div>
            ) : (
              <div className="mt-8 p-4 rounded-lg border border-black/5 bg-neutral-50">
                <p className="text-sm text-neutral-400">Custom color picker available in Flame & Blaze tiers</p>
              </div>
            )}
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 space-x-4">
              {layoutPresets.slice(0, limits.maxLayouts).map(layout => (
                <button
                  key={layout.id}
                  onClick={() => setSelectedLayout(layout)}
                  className={`flex-shrink-0 w-64 aspect-video rounded-lg border ${selectedLayout?.id === layout.id ? 'border-[#83B7B3]' : 'border-black/5'} hover:border-[#83B7B3] transition-colors p-4 flex flex-col items-center justify-center`}
                >
                  <span className="text-4xl mb-2">{layout.preview}</span>
                  <p className="text-sm font-medium text-neutral-800">{layout.name}</p>
                </button>
              ))}
            </div>
            {layoutPresets.length > limits.maxLayouts && (
              <p className="text-sm text-neutral-400 text-center">
                Upgrade to access more layout options
              </p>
            )}
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {['Professional', 'Friendly', 'Creative', 'Modern', 'Traditional', 'Playful'].map(tone => (
                <button
                  key={tone}
                  className="p-4 rounded-lg border border-black/5 hover:border-[#83B7B3] transition-colors"
                >
                  <p className="text-sm font-medium text-neutral-800">{tone}</p>
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-black/5">
              <textarea
                placeholder="Add your notes here..."
                className="w-full h-32 resize-none border-0 bg-transparent placeholder:text-neutral-400 focus:ring-0"
              />
            </div>
            {limits.canRecordVoice ? (
              <div className="p-4 rounded-lg border border-black/5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral-800">Record a voice note</p>
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className="px-4 py-2 rounded-lg bg-[#83B7B3] text-white hover:bg-[#6B9E9A] transition-colors"
                  >
                    {isRecording ? 'Stop Recording' : 'Record Voice Note'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-lg border border-black/5 bg-neutral-50">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral-400">Voice notes available in Blaze tier</p>
                  <button
                    className="px-4 py-2 rounded-lg bg-neutral-200 text-neutral-600 opacity-50 cursor-not-allowed"
                  >
                    Record Voice Note
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`min-h-screen bg-black text-white ${inter.className}`}
      data-tier={tier}
      data-step={currentStep}
      data-upload-count={uploadedFiles.length}
      data-max-uploads={limits.maxUploads}
      data-has-layout={!!selectedLayout}
      data-has-colors={!!selectedColors}
      data-is-recording={isRecording}
      data-show-preview={showPreview}
    >
      <div className="studio-background" data-debug="studio-background" />
      <div className="studio-overlay" data-debug="studio-overlay" />
      <div className="studio-texture" data-debug="studio-texture" />
      
      {/* Header */}
      <header 
        className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-b border-white/10 z-50"
        data-debug="studio-header"
      >
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-4" data-debug="header-left">
              <span className="font-bold text-white">SGP</span>
              <div className="h-4 w-px bg-white/20"></div>
              <span className="font-medium text-white/90">
                WebInspire<sup className="text-xs">1</sup>
              </span>
            </div>
            
            <div className="flex items-center gap-4" data-debug="header-right">
              <label className="flex items-center gap-2 text-sm text-white/90">
                <input 
                  type="checkbox" 
                  checked={showPreview} 
                  onChange={(e) => {
                    console.log('Preview toggled:', e.target.checked);
                    setShowPreview(e.target.checked);
                  }}
                  className="rounded border-white/20 text-sgp-green focus:ring-sgp-green"
                  data-debug="preview-toggle"
                />
                Show live preview
              </label>
              <div 
                className="flex items-center gap-2 px-4 py-1.5 bg-black/30 rounded-full border border-white/10"
                data-debug="tier-indicator"
              >
                <span className="text-lg">{getTierEmoji(tier)}</span>
                <span className="text-sm text-white/90 font-medium capitalize">The {tier}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16" data-debug="main-content">
        {/* Step Navigation */}
        <nav className="container mx-auto px-4 mb-12" data-debug="step-nav">
          <div className="flex items-center justify-between">
            {steps.map((step) => (
              <button
                key={step.number}
                onClick={() => {
                  console.log('Step clicked:', step.number);
                  setCurrentStep(step.number);
                }}
                className={`flex items-center gap-3 ${
                  currentStep === step.number ? 'text-white' : 'text-white/50'
                }`}
                data-debug={`step-${step.number}`}
                data-active={currentStep === step.number}
              >
                <span className="text-2xl">{step.icon}</span>
                <div className="text-left">
                  <p className="text-sm font-medium">{step.title}</p>
                  <p className="text-xs opacity-70">{step.description}</p>
                </div>
              </button>
            ))}
          </div>
        </nav>

        {/* Step Content */}
        <div className="container mx-auto px-4" data-debug="step-content">
          {renderStepContent()}
        </div>
      </main>
    </div>
  );
} 