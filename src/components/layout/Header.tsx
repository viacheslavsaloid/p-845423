import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center h-[72px] bg-[#141414] p-4">
      <h1 className="text-white text-lg font-bold pl-12 max-sm:pl-4">
        TechPulse
      </h1>
      <button aria-label="Notifications" className="text-white text-2xl">
        <i className="ti ti-bell" />
      </button>
    </header>
  );
};
