import React from "react";

export const FloatingButton: React.FC = () => {
  return (
    <button
      aria-label="Add new post"
      className="fixed w-16 h-14 flex items-center justify-center text-white text-2xl bg-[#369EFF] rounded-xl right-5 bottom-[76px] max-sm:w-14 max-sm:h-12 max-sm:right-4 max-sm:bottom-[72px]"
    >
      <i className="ti ti-plus" />
    </button>
  );
};
