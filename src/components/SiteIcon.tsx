import { CircleCheck, Code2, Handshake, Lightbulb, Mail, MessageCircle, Search, Smartphone, Wallet, Zap } from 'lucide-react';

const icons = {
  '🔍': Search, '💰': Wallet, '⚡': Zap, '🤝': Handshake,
  '📧': Mail, '📱': Smartphone, '💬': MessageCircle,
  '💡': Lightbulb, '💻': Code2, '🚀': Zap, '🎨': Lightbulb,
};

export default function SiteIcon({ symbol }: { symbol: string }) {
  const Icon = icons[symbol as keyof typeof icons] ?? CircleCheck;
  return <Icon className="site-icon" aria-hidden="true" strokeWidth={1.65} />;
}
