import React from "react";
import { NewsCard } from "./NewsCard";
import { newsItems } from "@/data/news";

export const NewsFeed: React.FC = () => {
  return (
    <main className="p-4">
      {newsItems.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </main>
  );
};
