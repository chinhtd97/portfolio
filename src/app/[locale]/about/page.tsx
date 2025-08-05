import { HydrationBoundary } from "@/components/HydrationBoundary";
import AboutContent from "./aboutContent";

export default function ContactPage() {
  return (
    <HydrationBoundary>
      <AboutContent />
    </HydrationBoundary>
  );
}
