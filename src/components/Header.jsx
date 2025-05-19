import React, { useState, useRef } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import MenuContainer from "./Menu";

const dummyApi = (query) => {
  // Simulate API call delay and return dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) return resolve([]);
      resolve([
        { label: "Ramam", type: "store", sub: "in Stores" },
        { label: "MadRabbit", type: "store", sub: "in Stores" },
        { label: "Data Storage", type: "category", sub: "in Product Category" },
        {
          label:
            "ASUS ROG Strix G17 AMD Ryzen 7 Gaming Laptop (16GB RAM/512GB SSD)",
          type: "product",
          sub: "in Products",
        },
        {
          label: "HP 14s, 12th Gen Intel Core i5 (16GB RAM/512GB SSD)",
          type: "product",
          sub: "in Products",
        },
      ]);
    }, 600);
  });
};

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const debounceRef = useRef();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setShowDropdown(!!value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      const res = await dummyApi(value);
      setSuggestions(res);
    }, 400);
  };

  return (
    <section className="w-full z-50 top-0 bg-white px-4 md:px-10 xl:px-[72px]">
      {/* Header Row */}
      <header className="w-full flex items-center justify-between h-14 md:h-[82px]">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <MenuContainer />
          <span className="text-2xl font-bold">
            <img
              alt="CashKaro"
              title="CashKaro"
              fetchpriority="high"
              width="106"
              height="24"
              decoding="async"
              data-nimg="1"
              className="w-[86px] h-[auto] md:w-[101px] md:h-[auto]"
              style={{ color: "transparent" }}
              src="https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/cashkaro_logo_v1.svg"
            />
          </span>
        </div>
        {/* Center: Search Bar (desktop only) */}
        <div className="hidden md:flex flex-1 mx-8 relative">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-full">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for any brand or product"
              className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500"
              value={search}
              onChange={handleSearch}
              onFocus={() => setShowDropdown(!!search)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            />
          </div>
          {/* Suggestion Dropdown */}
          {showDropdown && (
            <div
              className="absolute left-0 top-12 w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-gray-100 z-50 flex"
              style={{ minWidth: 480 }}
            >
              <div className="w-1/2 border-r border-gray-100">
                <div className="p-4 pb-2 font-semibold text-lg flex items-center gap-2">
                  <button
                    onClick={() => setShowDropdown(false)}
                    className="mr-2 text-xl"
                  >
                    ←
                  </button>
                  {search}
                </div>
                <ul>
                  {suggestions.map((s, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                    >
                      <div className="font-semibold text-black text-base truncate">
                        {s.label}
                      </div>
                      <div className="text-xs text-blue-700 font-medium">
                        {s.sub}
                      </div>
                    </li>
                  ))}
                  <li className="px-4 py-2 text-blue-600 font-semibold cursor-pointer flex items-center gap-1">
                    See More <span className="text-lg">→</span>
                  </li>
                </ul>
              </div>
              {/* Right: Example Store/Offer/Highlight */}
              <div className="w-1/2 p-4 flex flex-col gap-4">
                <div className="bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center p-6 text-center">
                  <img
                    src="https://asset22.ckassets.com/resources/image/staticpage_images/ramam-1747298880.png"
                    alt="Ramam"
                    className="w-20 h-12 object-contain mx-auto mb-2"
                  />
                  <div className="font-bold text-lg mb-1">RAMAM</div>
                  <div className="text-blue-700 font-semibold text-base">
                    1 Coupon + Flat ₹200 Cashback
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-white rounded-xl border border-gray-100 p-3">
                    <div className="font-semibold text-sm mb-1">
                      Pick of the Day
                    </div>
                    <div className="font-bold text-base mb-1">AJIO</div>
                    <div className="text-xs text-gray-600">
                      ✔ 92% positive rating by 5K+ users✔ ₹31 Lakh+ Cashback
                      given in last monthAjio...
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl border border-gray-100 p-3">
                    <div className="font-semibold text-sm mb-1">
                      Pick of the Week
                    </div>
                    <div className="font-bold text-base mb-1">
                      clove:) ORAL CARE
                    </div>
                    <div className="text-xs text-gray-600">
                      Smiling brighter, living healthierFlat 41% Off on Pack of
                      3Use Code ▮CK41▮+ Flat 8...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Right: Cart, Help, Profile (desktop only) */}
        <section className="hidden md:flex items-center md:[&>*]:border-r-2 md:[&>*:last-child]:border-r-0 border-ck-text-black">
          <a
            className="flex items-center cursor-pointer gap-2 md:px-6 text-black font-semibold"
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
            className="flex items-center cursor-pointer gap-2 md:px-6 text-black font-semibold"
            id="headerHelpOption"
            href="/help"
          >
            Help
          </a>
          <button
            type="button"
            id="headerProfile"
            className="flex items-center cursor-pointer text-xs md:text-base font-semibold leading-4 md:leading-6 gap-2 md:pl-6 text-black font-semibold"
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
        {/* Right: Help & Notification (mobile only) */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            className="flex items-center cursor-pointer gap-1 text-black font-semibold"
            id="headerHelpOption"
            href="/help"
          >
            <span className="bg-black text-white text-xs px-2 py-1 rounded-md">
              Help
            </span>
          </a>
          <div className="relative">
            <img
              alt="Notifications"
              title="Notifications"
              width="28"
              height="28"
              src="https://img.icons8.com/ios-filled/50/000000/bell.png"
              className="w-7 h-7"
              style={{ color: "transparent" }}
            />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5 border-2 border-white">
              11
            </span>
          </div>
        </div>
      </header>
      {/* Earnings Banner (mobile only, <500px) */}
      <div
        className="w-full mt-3 flex flex-col items-center md:hidden"
        style={{ maxWidth: 500 }}
      >
        <div
          className="flex items-center bg-white rounded-2xl shadow px-4 py-3 w-full relative"
          style={{ minHeight: 70 }}
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white text-xl font-bold mr-3">
            ₹
          </span>
          <div className="flex-1 text-sm">
            <span className="font-bold text-black">Hi Vishwanathan</span>, you
            have <span className="font-bold">₹30</span> confirmed earnings in
            your CashKaro account.
            <br />
            <a href="#" className="text-blue-600 font-semibold">
              Redeem it now →
            </a>
          </div>
          <button className="absolute top-2 right-3 text-2xl text-gray-400 font-bold">
            ×
          </button>
        </div>
        <button className="mt-2 flex items-center gap-1 px-4 py-1 bg-white border border-blue-200 rounded-full shadow text-blue-600 font-semibold text-base">
          + 2 more{" "}
          <span>
            <img
              src="https://img.icons8.com/ios-filled/20/1E40AF/user-male-circle.png"
              alt="user"
              className="inline w-5 h-5"
            />
          </span>
        </button>
      </div>
      {/* Search Bar (mobile only, <500px) */}
      <div
        className="w-full mt-5 mb-5 flex items-center bg-gray-100 rounded-lg px-3 py-3 md:hidden relative"
        style={{ maxWidth: 500 }}
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for brands"
          className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500 text-base"
          value={search}
          onChange={handleSearch}
          onFocus={() => setShowDropdown(!!search)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        />
        {search && (
          <button
            className="absolute right-4 text-2xl text-gray-400 font-bold"
            onClick={() => {
              setSearch("");
              setSuggestions([]);
              setShowDropdown(false);
            }}
            tabIndex={-1}
            type="button"
          >
            ×
          </button>
        )}
        {/* Mobile Suggestion Dropdown */}
        {showDropdown && (
          <div
            className="absolute left-0 top-12 w-full bg-white rounded-2xl shadow-lg border border-gray-100 z-50 p-4 flex flex-col gap-4"
            style={{ minWidth: 320 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={() => setShowDropdown(false)}
                className="text-xl"
              >
                ←
              </button>
              <span className="font-semibold text-lg">{search}</span>
            </div>
            {/* In Stores */}
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-2">
                In Stores
              </div>
              <div className="flex gap-3">
                {suggestions
                  .filter((s) => s.type === "store")
                  .map((s, i) => (
                    <div
                      key={i}
                      className="flex-1 min-w-[120px] bg-white border border-gray-200 rounded-xl p-3 flex flex-col items-center justify-center"
                    >
                      <img
                        src={
                          s.label === "Ramam"
                            ? "https://asset22.ckassets.com/resources/image/staticpage_images/ramam-1747298880.png"
                            : "https://asset22.ckassets.com/resources/image/staticpage_images/madrabbit-1747298880.png"
                        }
                        alt={s.label}
                        className="w-12 h-8 object-contain mb-2"
                      />
                      <div className="font-bold text-base mb-1">{s.label}</div>
                      <div className="text-blue-700 font-semibold text-sm">
                        {s.label === "Ramam"
                          ? "1 Coupon + Flat ₹200"
                          : "1 Coupon"}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* In Products */}
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-2 mt-2">
                In Products
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {suggestions
                  .filter((s) => s.type === "product")
                  .map((s, i) => (
                    <div
                      key={i}
                      className="min-w-[260px] bg-white border border-gray-200 rounded-xl p-3 flex flex-row items-center gap-3"
                    >
                      <div className="relative">
                        <img
                          src="https://asset22.ckassets.com/resources/image/staticpage_images/laptop-1747298880.png"
                          alt="Laptop"
                          className="w-20 h-14 object-contain rounded"
                        />
                        <span className="absolute top-0 left-0 bg-blue-700 text-white text-xs font-bold px-2 py-0.5 rounded-br">
                          17% Off
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm mb-1 truncate">
                          {s.label}
                        </div>
                        <div className="text-xs text-gray-500 mb-1">
                          Best price
                        </div>
                        <div className="text-lg font-bold text-black">
                          ₹59,990.0
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-blue-600 font-semibold cursor-pointer">
                Search More Results →
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
