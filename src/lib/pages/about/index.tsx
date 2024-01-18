import type { NextPage } from 'next';

import Hero from './Hero';

const About: NextPage = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <Hero />
    </div>
  );
};

export default About;
