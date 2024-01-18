import Image from 'next/image';

const CTASection = () => {
  return (
    <div className="hero py-6">
      <div className="hero-content flex flex-col-reverse items-center justify-center lg:flex-row">
        <div className="p-4 text-left">
          <h1 className="text-5xl font-bold">Abadikan Setiap Momen</h1>
          <p className="py-4">
            Dengan jaringan fotografer yang luas, Rona hadir untuk Anda di
            berbagai lokasi. Kami siap mengabadikan momen berharga Anda di mana
            pun Anda berada.
          </p>
          <button type="button" className="btn btn-secondary">
            Cari Fotografer
          </button>
        </div>
        <Image
          src="/assets/img/hero-kamera-1.jpg"
          width={500}
          height={400}
          alt="kamera"
        />
      </div>
    </div>
  );
};

export default CTASection;
