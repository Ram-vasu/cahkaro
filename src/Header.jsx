import MenuContainer from "./components/Menu";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <section className="flex items-center z-50 fixed top-0 bg-white w-full justify-between px-2 md:px-10 xl:px-[72px] h-14 md:h-[82px] shadow-sm">
      <header className="w-full flex items-center justify-between ">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <div className="md:hidden flex">
            <MenuContainer />
          </div>
          <span className="text-2xl font-bold min-w-0">
            <img
              alt="CashKaro"
              title="CashKaro"
              fetchpriority="high"
              width="106"
              height="24"
              decoding="async"
              data-nimg="1"
              className="w-[86px] h-auto md:w-[101px] md:h-auto object-contain"
              style={{ color: "transparent" }}
              src="https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/cashkaro_logo_v1.svg"
            />
          </span>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 mx-2 md:mx-8 max-w-full min-w-0">
          <div className="flex items-center bg-gray-100 rounded-md px-2 md:px-3 py-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for any brand or product"
              className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500 text-sm md:text-base min-w-0"
            />
          </div>
        </div>

        {/* Right: Cart, Help, Profile */}
        <section className="hidden md:flex items-center md:[&>*]:border-r-2 md:[&>*:last-child]:border-r-0 border-ck-text-black min-w-0">
          <a
            className="flex items-center cursor-pointer gap-2 md:px-6 text-black font-semibold whitespace-nowrap"
            href="/my-earnings"
          >
            <img
              alt="My Earnings"
              title="My Earnings"
              fetchpriority="high"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              className=""
              src="https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/account-balance-wallet.svg"
              style={{ color: "transparent" }}
            />
            <span>₹0</span>
          </a>
          <a
            className="flex items-center cursor-pointer gap-2 md:px-6 text-black font-semibold whitespace-nowrap"
            id="headerHelpOption"
            href="/help"
          >
            Help
          </a>
          <button
            type="button"
            id="headerProfile"
            className="flex items-center cursor-pointer text-xs md:text-base font-semibold leading-4 md:leading-6 gap-2 md:pl-6 text-black font-semibold whitespace-nowrap"
          >
            <img
              alt="Profile"
              title="Profile"
              fetchpriority="high"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              className=""
              src="https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/account_circle.svg"
              style={{ color: "transparent" }}
            />
            Profile
          </button>
        </section>
      </header>
    </section>
  );
};

export default Header;
