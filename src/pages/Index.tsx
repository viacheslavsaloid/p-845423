import React from "react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Categories } from "@/components/features/Categories";
import { NewsFeed } from "@/components/features/NewsFeed";
import { FloatingButton } from "@/components/ui/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-[#141414]">
      <Header />
      <Categories />
      <NewsFeed />
      <FloatingButton />
      <BottomNav />
    </div>
  );
};

export default Index;
