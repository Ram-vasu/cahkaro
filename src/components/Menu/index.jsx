import React, { useState, useEffect } from "react";

const menuData = [
  {
    label: "Most Popular Retailers",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          stroke="#222"
          strokeWidth="2"
        />
        <path
          d="M7 7h.01M12 7h.01M17 7h.01M7 12h.01M12 12h.01M17 12h.01M7 17h.01M12 17h.01M17 17h.01"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    hasArrow: true,
  },
  {
    label: "Retailers by Category",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          stroke="#222"
          strokeWidth="2"
        />
        <path
          d="M7 7h10M7 12h10M7 17h10"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    hasArrow: true,
  },
  {
    label: "Top Product Deals",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="#222" strokeWidth="2" />
        <path
          d="M8 12l2 2 4-4"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    hasArrow: true,
  },
  {
    label: "Mobiles",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="7"
          y="2"
          width="10"
          height="20"
          rx="2"
          stroke="#222"
          strokeWidth="2"
        />
        <circle cx="12" cy="18" r="1" fill="#222" />
      </svg>
    ),
  },
  {
    label: "Headphones",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M4 17v-3a8 8 0 0116 0v3" stroke="#222" strokeWidth="2" />
        <rect x="2" y="17" width="4" height="5" rx="2" fill="#222" />
        <rect x="18" y="17" width="4" height="5" rx="2" fill="#222" />
      </svg>
    ),
  },
  {
    label: "Laptops",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="3"
          y="5"
          width="18"
          height="12"
          rx="2"
          stroke="#222"
          strokeWidth="2"
        />
        <path
          d="M2 19h20"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Men Fashion",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 2v6m0 0l3-3m-3 3L9 5"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="6"
          y="8"
          width="12"
          height="12"
          rx="4"
          stroke="#222"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Women Fashion",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" stroke="#222" strokeWidth="2" />
        <path
          d="M12 12v8"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M8 20h8" stroke="#222" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Men Shoes",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="3"
          y="13"
          width="18"
          height="6"
          rx="2"
          stroke="#222"
          strokeWidth="2"
        />
        <path
          d="M7 13V7a2 2 0 012-2h6a2 2 0 012 2v6"
          stroke="#222"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Women Shoes",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="3"
          y="13"
          width="18"
          height="6"
          rx="2"
          stroke="#222"
          strokeWidth="2"
        />
        <path
          d="M7 13V7a2 2 0 012-2h6a2 2 0 012 2v6"
          stroke="#222"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Beauty",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="8" ry="10" stroke="#222" strokeWidth="2" />
        <path d="M12 2v20" stroke="#222" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Grocery",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="3"
          y="7"
          width="18"
          height="13"
          rx="4"
          stroke="#222"
          strokeWidth="2"
        />
        <path d="M7 7V5a5 5 0 0110 0v2" stroke="#222" strokeWidth="2" />
      </svg>
    ),
  },
];

// Add submenu data for 'Most Popular Retailers'
const submenuData = [
  {
    title: "Department Stores",
    items: ["Amazon", "Flipkart", "Shopclues", "BuyKaro"],
  },
  {
    title: "Electronics",
    items: ["Croma", "Samsung", "Dell", "BoAt", "Lenovo"],
  },
  {
    title: "Popular Fashion Stores",
    items: ["Myntra", "AJIO", "Nykaa Fashion", "Libas"],
  },
  {
    title: "Health and Beauty",
    items: ["Mcaffeine", "Foxtale", "Nykaa", "MamaEarth", "WoW"],
    viewAll: true,
  },
  {
    title: "Pharmacy",
    items: ["Truemeds", "Redcliffe Labs", "MrMed", "HealthKart", "Netmeds"],
    viewAll: true,
  },
  {
    title: "Education",
    items: ["Udemy", "Edureka", "British Council", "Autodesk"],
  },
  {
    title: "BANKING",
    items: [
      "Axis MyZone Credit Card",
      "IDFC First Credit Card",
      "Axis Flipkart Credit Card",
      "AU LIT Credit Card",
      "SBI Simply Click Credit Card",
    ],
  },
  {
    title: "Lingerie",
    items: ["Clovia", "XYXX Crew", "Shyaway"],
  },
  {
    title: "Flight Offers",
    items: [
      "Cleartrip",
      "Etihad Airlines",
      "Emirates",
      "IndiGo Flights",
      "Yatra",
    ],
    viewAll: true,
  },
];

const Menu = ({ open, onClose }) => {
  const [active, setActive] = useState(null);
  // Close submenu on outside click
  useEffect(() => {
    if (active === null) return;
    const handleClick = (e) => {
      if (
        !e.target.closest(".ck-menu-main") &&
        !e.target.closest(".ck-menu-submenu")
      ) {
        setActive(null);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [active]);

  // --- Hover support for desktop ---
  const handleMenuItemEnter = (idx, hasArrow) => {
    if (window.innerWidth >= 1024 && hasArrow) setActive(idx);
  };
  const handleMenuItemLeave = (idx, hasArrow) => {
    // Do not close on leave, let submenu handle it
  };

  // Keep submenu open when mouse is over submenu
  const [submenuHover, setSubmenuHover] = useState(false);
  useEffect(() => {
    if (!submenuHover && window.innerWidth >= 1024) {
      const timeout = setTimeout(() => {
        setActive(null);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [submenuHover]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        open ? "" : "pointer-events-none"
      }`}
      style={{ background: open ? "rgba(0,0,0,0.5)" : "transparent" }}
      aria-hidden={!open}
    >
      <aside
        className={`ck-menu-main fixed top-0 left-0 h-full w-[340px] max-w-full bg-white shadow-xl z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.10)" }}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
          <span className="text-lg font-bold text-black">Category</span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded hover:bg-gray-100"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav className="overflow-y-auto h-[calc(100vh-72px)]">
          <ul className="divide-y divide-gray-100">
            {menuData.map((item, idx) => (
              <li
                key={item.label}
                className={`flex items-center px-6 py-4 hover:bg-gray-50 cursor-pointer group ${
                  active === idx ? "bg-gray-50" : ""
                }`}
                onClick={() =>
                  item.hasArrow
                    ? setActive(active === idx ? null : idx)
                    : setActive(null)
                }
                onMouseEnter={() => handleMenuItemEnter(idx, item.hasArrow)}
                onMouseLeave={() => handleMenuItemLeave(idx, item.hasArrow)}
                style={
                  item.hasArrow
                    ? {
                        color: active === idx ? "#0047BB" : undefined,
                        fontWeight: active === idx ? 600 : undefined,
                      }
                    : {}
                }
              >
                <span
                  className={`mr-4 ${
                    active === idx && item.hasArrow ? "text-[#0047BB]" : ""
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`flex-1 text-base font-medium ${
                    active === idx && item.hasArrow
                      ? "text-[#0047BB]"
                      : "text-gray-900"
                  }`}
                >
                  {item.label}
                </span>
                {item.hasArrow && (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M9 5l7 7-7 7"
                      stroke={active === idx ? "#0047BB" : "#222"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Submenu Panel */}
      {active === 0 && (
        <div
          className="ck-menu-submenu fixed top-0 left-[340px] h-full w-[calc(100vw-340px)] bg-[#f6f8fa] z-50 px-12 py-10 overflow-y-auto"
          style={{ minWidth: 900 }}
          onMouseEnter={() => setSubmenuHover(true)}
          onMouseLeave={() => setSubmenuHover(false)}
        >
          <div className="grid grid-cols-3 gap-x-12 gap-y-8">
            {submenuData.slice(0, 5).map((col, i) => (
              <div key={col.title}>
                <div className="font-bold text-lg mb-2">{col.title}</div>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="text-base text-black hover:underline cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                  {col.viewAll && (
                    <li className="text-[#0047BB] font-semibold cursor-pointer flex items-center gap-1 mt-2">
                      View All{" "}
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          stroke="#0047BB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-x-12 gap-y-8 mt-10">
            {submenuData.slice(5).map((col, i) => (
              <div key={col.title}>
                <div className="font-bold text-lg mb-2">{col.title}</div>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="text-base text-black hover:underline cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                  {col.viewAll && (
                    <li className="text-[#0047BB] font-semibold cursor-pointer flex items-center gap-1 mt-2">
                      View All{" "}
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          stroke="#0047BB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Overlay click closes menu */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-hidden="true"
        style={{ background: "transparent" }}
      />
    </div>
  );
};

const MenuTrigger = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Open menu"
    className="flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 focus:outline-none"
  >
    <img
      src="https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/mobile_toggle.svg"
      alt=""
    />
  </button>
);

const MenuContainer = () => {
  const [open, setOpen] = useState(false);

  // Close menu on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <MenuTrigger onClick={() => setOpen(true)} />
      <Menu open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default MenuContainer;
