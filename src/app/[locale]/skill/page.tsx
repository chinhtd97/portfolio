import { HydrationBoundary } from "@/components/HydrationBoundary";
import SkillContent from "./skillContent";

export default function SkillsPage() {
  return (
    <HydrationBoundary>
      <SkillContent />
    </HydrationBoundary>
  );
}
