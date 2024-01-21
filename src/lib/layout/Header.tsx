import Image from 'next/image';

const Header = () => {
  // return (
  //   <header className="bg-base-100/80 sticky top-0 z-10 w-full backdrop-blur-md">
  //     <section className="wrapper mx-auto flex items-center justify-between py-2">
  //       <div className="ml-auto">
  //         <ThemeToggle />
  //       </div>
  //     </section>
  //   </header>
  // );

  return (
    <div className="navbar absolute left-0 top-0 z-10 bg-base-100 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            aria-label="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            // tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a>Shop</a>
              <ul className="p-2">
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a>Order</a>
                </li>
              </ul>
            </li>
            <li>
              <a>For Seller</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">
          <Image
            priority
            src="/assets/img/rona-dark.png"
            width={0}
            height={0}
            sizes="auto"
            alt="logo Rona"
            className="h-auto w-16 md:w-24"
            // style={{ width: 50, height: 'auto' }}
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <details>
              <summary>Shop</summary>
              <ul className="p-2">
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a>Order</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>For Seller</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">My Account</a>
      </div>
    </div>
  );
};

export default Header;
