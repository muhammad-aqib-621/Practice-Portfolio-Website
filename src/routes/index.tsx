import { createFileRoute } from '@tanstack/react-router';
import { PortfolioPage } from '@/components/portfolio/portfolio-page';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Muhammad Aqib Subhani — Full-Stack Developer & Software Engineering Student' },
    { name: 'description', content: 'Explore Muhammad Aqib Subhani’s full-stack development portfolio, concept projects, experiments, and approach to building thoughtful digital products.' },
    { property: 'og:title', content: 'Muhammad Aqib Subhani — Full-Stack Developer' },
    { property: 'og:description', content: 'Concept projects, experiments, and thoughtful full-stack product work by Muhammad Aqib Subhani.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: PortfolioPage,
});
