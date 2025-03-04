import React from "react";
import { categories } from "@/data/categories";

export const Categories: React.FC = () => {
  return (
    <nav className="flex gap-3 overflow-x-auto p-3 max-sm:p-2">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`text-white h-8 text-sm font-medium whitespace-nowrap bg-[#26303B] px-4 py-0 rounded-xl max-sm:h-7 max-sm:text-[13px] max-sm:px-3 max-sm:py-0 ${
            category.isActive ? "bg-[#369EFF]" : ""
          }`}
        >
          {category.name}
        </button>
      ))}
    </nav>
  );
};
