import type { Metadata } from 'next';

import About from '@/lib/pages/about';

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    title: 'About | Rona',
    description: 'About page Rona Indonesia',
  },
};

export const dynamic = 'force-static';

export default About;
