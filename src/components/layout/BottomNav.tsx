import React from "react";

const navItems = [
  { icon: "ti-home", label: "Home", isActive: true },
  { icon: "ti-search", label: "Search" },
  { icon: "ti-bookmark", label: "Bookmarks" },
  { icon: "ti-user", label: "Profile" },
];

export const BottomNav: React.FC = () => {
  return (
    <nav className="flex justify-around items-center fixed w-full bg-[#1C2126] pt-2 pb-3 px-4 border-t-[#26303B] border-t border-solid bottom-0 max-sm:pt-2 max-sm:pb-2.5 max-sm:px-3">
      {navItems.map((item) => (
        <button
          key={item.label}
          aria-label={item.label}
          className={`text-[#9CABBA] text-2xl px-8 py-2 max-sm:px-6 max-sm:py-1.5 ${
            item.isActive ? "text-[#369EFF]" : ""
          }`}
        >
          <i className={`ti ${item.icon}`} />
        </button>
      ))}
    </nav>
  );
};
