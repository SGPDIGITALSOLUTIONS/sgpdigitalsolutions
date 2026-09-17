import SitePage from '@/components/SitePage';
import { pageMetadata } from '@/lib/seo';
import PortfolioStories from './PortfolioStories';
import styles from './Portfolio.module.css';

export const metadata = pageMetadata('/portfolio');

export default function PortfolioPage({ searchParams }: {
  searchParams: { category?: string | string[] };
}) {
  const category = typeof searchParams.category === 'string' ? searchParams.category : 'All work';
  return (
    <SitePage>
      <section>
        <div className="container">
          <p className="site-eyebrow">REAL PEOPLE. PRACTICAL HELP.</p>
          <h1>Good work.<br /><span className="text-terminal-green">Real stories.</span></h1>
          <p className={styles.intro}>A clearer website. Less repetitive admin. Precious photos recovered.<br />See who we’ve helped, what they needed and what we built together.</p>
        </div>
      </section>
      <section aria-label="Client stories">
        <PortfolioStories key={category} category={category} />
      </section>
    </SitePage>
  );
}
