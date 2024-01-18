const Feature = () => {
  return (
    <div className="hero py-6 text-left">
      <div className="hero-content flex flex-col">
        <h1 className="pb-4 text-center text-5xl font-bold">Mengapa Kami</h1>
        <div className="flex w-full flex-col lg:flex-row">
          <div className="card grid h-48 flex-grow place-items-center rounded-box bg-base-300 p-4">
            Dari momen pernikahan yang indah hingga momen spesial bersama
            keluarga, Rona memiliki jaringan fotografer handal yang siap
            mengabadikan setiap detil dengan keahlian dan keindahan yang tak
            terlupakan
          </div>
          <div className="divider lg:divider-horizontal" />
          <div className="card grid h-48 flex-grow place-items-center rounded-box bg-base-300 p-4">
            Proses booking yang mudah dan cepat. Cukup pilih kategori fotografi
            yang Anda butuhkan, pilih fotografer favorit Anda, dan atur jadwal
            sesuai keinginan Anda dalam beberapa langkah mudah.
          </div>
          <div className="divider lg:divider-horizontal" />
          <div className="card grid h-48 flex-grow place-items-center rounded-box bg-base-300 p-4">
            Temukan fotografer terbaik untuk kebutuhan Anda, mulai dari potret,
            pemandangan, acara, hingga produk. Rona memiliki ragam kategori
            fotografi untuk memenuhi segala keinginan Anda.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
