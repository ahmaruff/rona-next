import type { NextPage } from 'next';
import Image from 'next/image';

import CTASection from './CTASection';
import Feature from './Feature';
import Hero from './Hero';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <Hero />
      {/* FEATURES */}
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="mockup-phone">
            <div className="camera" />
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <Image
                  src="/assets/img/hero-cewek-2.jpg"
                  width={300}
                  height={400}
                  alt="hero"
                  className="h-full w-full object-cover"
                />
                {/* <div
                  className="h-full w-full object-fill"
                  style={{
                    backgroundImage: 'url("/assets/img/hero-cewek-1.jpg")',
                  }}
                /> */}
              </div>
            </div>
          </div>
          <div className="w-full text-left lg:w-1/2">
            <h1 className="text-5xl font-bold">Mengenal Rona</h1>
            <p className="py-6">
              Rona tak sekadar <em>platform</em> jasa fotografi, Rona juga
              tentang komunitas. Mari bergabunglah dengan kami dan temukan
              ispirasi, dukungan, dan koneksi yang kuat antar sesama perempuan.
              <br />
              Rona tak sekadar foto biasa. Kami fokus pada setiap detail untuk
              menghadirkan kisah unik nan mendalam dari sudut pandang perempuan
              <br /> <br />
              Dari momen pribadi yang intim hingga momen yang penuh semangat,
              Rona hadir untuk mengabadikan setiap fase kehidupan Anda dengan
              keindahan yang tiada tara.
              <br />
              Mari berbagi cerita Anda, biarkan kami di Rona membantu Anda
              mengabadikan keindahan dan kekuatan perempuan dalam setiap sudut
              gambar
            </p>
          </div>
        </div>
      </div>
      <Feature />
      <CTASection />
    </div>
  );
};

export default Home;
