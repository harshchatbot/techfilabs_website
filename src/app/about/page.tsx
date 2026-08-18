"use client";

import About from "@/components/sections/About";
import MissionValues from "@/components/sections/MissionValues";
import EngagementModels from "@/components/sections/EngagementModels";
import { ABOUT_DATA, MISSION_VALUES_DATA, HOMEPAGE_ENGAGEMENT_MODELS } from "@/constants/data";

export default function AboutPage() {
  return (
    <div className="pt-24">
      <About
        items={ABOUT_DATA.reasons}
      />
      <MissionValues
        mission={MISSION_VALUES_DATA.mission}
        whoWeAre={MISSION_VALUES_DATA.whoWeAre}
        values={MISSION_VALUES_DATA.values}
        commitment={MISSION_VALUES_DATA.commitment}
      />
      <EngagementModels models={HOMEPAGE_ENGAGEMENT_MODELS} />
    </div>
  );
}
