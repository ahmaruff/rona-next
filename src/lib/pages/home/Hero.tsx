const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url("/assets/img/hero-bg.jpg")',
      }}
    >
      <div className="hero-overlay bg-opacity-80" />
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Memberdayakan Komunitas{' '}
            <span className="bg-secondary bg-opacity-60">Perempuan</span>{' '}
            Melalui Seni Visual
          </h1>
          <p className="mb-5">
            Bersama <span>Rona,</span> mengabadikan momen tak terlupakan dalam
            setiap detailnya. Kami adalah komunitas fotografer pilihan yang siap
            membuat setiap momen berharga anda menjadi kenangan abadi
          </p>
          <button type="button" className="btn btn-secondary">
            Cari Fotografer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
