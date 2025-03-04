import React from "react";
import { NewsItem } from "@/types/news";

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <article className="overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-[#1C2126] mb-4 rounded-xl max-sm:mb-3">
      <img
        src={news.image}
        alt={news.altText}
        className="w-full h-[201px] object-cover"
      />
      <div className="p-4 max-sm:p-3">
        <h2 className="text-white text-lg font-bold leading-[23px] mb-2 max-sm:text-base">
          {news.title}
        </h2>
        <p className="text-[#9CABBA] text-base leading-6 max-sm:text-sm">
          {news.description}
        </p>
      </div>
    </article>
  );
};
