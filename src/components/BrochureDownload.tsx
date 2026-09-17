type Props = { className?: string; compact?: boolean };

export default function BrochureDownload({ className, compact = false }: Props) {
  return (
    <a href="/downloads/SGP-Automation-Brochure.pdf" download="SGP-Automation-Brochure.pdf" className={className}>
      {compact ? 'Automation brochure (PDF)' : 'Download the automation brochure (PDF · 5.1 MB)'}
    </a>
  );
}
