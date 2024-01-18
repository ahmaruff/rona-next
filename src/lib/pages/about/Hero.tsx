import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <Image
            alt="Rona"
            src="/assets/img/rona-dark.png"
            width={500}
            height={200}
          />
          <h1 className="text-5xl font-bold">Tentang Kami</h1>
          <h5 className="py-3">
            Membangun Komunitas yang memberdayakan dan merayakan keahlian wanita
            dalam seni visual
          </h5>
          <p className="py-6">
            Rona Indonesia merupakan platform yang mempertemukan fotografer
            perempuan dengan <em>customer.</em> Rona percaya bahwa perempuan
            memegang peranan penting dalam dunia seni fotografi. Bersama Rona,
            tangkap keindahan dari sudut lensa perempuan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
