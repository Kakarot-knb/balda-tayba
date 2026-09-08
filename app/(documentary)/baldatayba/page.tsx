import HeroSection from "@/components/sections/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import ConceptSection from "@/components/sections/ConceptSection";
import ObjectiveSection from "@/components/sections/ObjectiveSection";
import JourneySection from "@/components/sections/JourneySection";
import SymbolismSection from "@/components/sections/SymbolismSection";
import VisionSection from "@/components/sections/VisionSection";
import ChallengesSection from "@/components/sections/ChallengesSection";
import ParticipantsSection from "@/components/sections/ParticipantsSection";
import ScriptsSection from "@/components/sections/ScriptsSection";
import EquipmentSection from "@/components/sections/EquipmentSection";
import CinematicStyleSection from "@/components/sections/CinematicStyleSection";
import AISection from "@/components/sections/AISection";
import TeamSection from "@/components/sections/TeamSection";
import DedicationSection from "@/components/sections/DedicationSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-primary-bg">
      <HeroSection />
      <VideoSection />
      <ConceptSection />
      <ObjectiveSection />
      <JourneySection />
      <SymbolismSection />
      <VisionSection />
      <ChallengesSection />
      <ParticipantsSection />
      <ScriptsSection />
      <EquipmentSection />
      <CinematicStyleSection />
      <AISection />
      <TeamSection />
      <DedicationSection />
      <FooterSection />
    </main>
  );
}
