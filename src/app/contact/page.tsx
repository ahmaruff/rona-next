import type { Metadata } from 'next';

import Contact from '@/lib/pages/contact';

export const metadata: Metadata = {
  title: 'Contact',
  openGraph: {
    title: 'Contact | Rona',
    description: 'Contact page Rona Indonesia',
  },
};

export const dynamic = 'force-static';

export default Contact;
