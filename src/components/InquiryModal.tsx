import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { InquirySection } from './InquirySection';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedIndustry?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedIndustry
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#141414] shadow-2xl my-8">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#141414]/15 bg-[#F6F2EA]">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#141414]">
            Consistently Socials // Client Intake Docket
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#141414] hover:bg-[#141414]/10 rounded-none transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[85vh] overflow-y-auto">
          <InquirySection
            initialService={preselectedService}
            initialIndustry={preselectedIndustry}
          />
        </div>
      </div>
    </div>
  );
};
