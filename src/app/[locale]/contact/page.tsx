import ContactContent from "./ContactContent";
import { HydrationBoundary } from "@/components/HydrationBoundary";

export default function ContactPage() {
  return (
    <HydrationBoundary>
      <ContactContent />
    </HydrationBoundary>
  );
}
