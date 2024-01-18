const Newsletter = () => {
  return (
    <div className="hero w-full bg-base-200 py-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Subscribe Now!</h1>
          <p className="">
            Subscribe sekarang untuk peroleh info terbaru dari kami
          </p>
        </div>
        <div className="join">
          <form action="">
            <input
              type="email"
              className="input join-item input-bordered"
              placeholder="Email"
            />
            <button type="submit" className="btn btn-secondary join-item">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
