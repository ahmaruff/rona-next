import Image from 'next/image';
import Link from 'next/link';

const Page404 = () => {
  return (
    <div className="hero min-h-screen gap-2 p-12 text-center">
      <div className="hero-content flex flex-col md:flex-row">
        <Image
          src="/assets/404 Error-amico.svg"
          width={320}
          height={320}
          alt="404 Illustration"
          className="mx-auto mt-12"
        />
        <div>
          <h3>Page not Found</h3>
          <p>It&apos;s Okay!</p>
          <Link href="/">Let&apos;s Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
