"use client";

import { useState } from "react";
import FloatingZara
from "@/components/FloatingZara";

import AIChat from "@/components/AIChat";
import MenuGrid from "@/components/MenuGrid";
import CartDrawer from "@/components/CartDrawer";
import MenuTabs from "@/components/MenuTabs";
import GroupBanner from "@/components/GroupBanner";
import AIPicks from "@/components/AIPicks";
import MoodSelector from "@/components/MoodSelector";

export default function Page() {

  const [category, setCategory] =
    useState("All");

  return (

    <div className="min-h-screen p-8 bg-cover bg-fixed"
    style={{
    backgroundImage:
      "url('/images/back.jfif')",
  }}>

      {/* Header */}

      <div className="mb-8 text-center">

        <h1 className="text-5xl font-bold text-[#065F46]">
          Zara
        </h1>

        <p className="text-slate-900 font-bold text-lg mt-2">
          Premium AI Dining Concierge
        </p>

      </div>

      {/* Mood Selection */}

      <div className="mb-6">

        <h2 className="text-[#065F46] text-xl font-bold mb-3">
          What's the vibe today?
        </h2>

        <MoodSelector />

      </div>

      {/* Group Banner */}

      <div className="mb-6">

        <GroupBanner />

      </div>

      {/* Main Layout */}

      <div className="grid grid-cols-4 gap-6">

        {/* Left Section */}

        <div className="col-span-3 space-y-6">

          {/* AI Chat */}

          

          {/* AI Picks */}

          <AIPicks />

          {/* Category Tabs */}

          <MenuTabs
            selected={category}
            onSelect={setCategory}
          />

          {/* Menu */}

          <MenuGrid
            category={category}
          />

        </div>

        {/* Right Section */}

        <div>

          <CartDrawer />

        </div>

        <div>
          <FloatingZara />
        </div>

      </div>

    </div>

  );
}