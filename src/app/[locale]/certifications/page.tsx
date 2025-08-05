import { HydrationBoundary } from "@/components/HydrationBoundary";
import CertificationsContent from "./certificationsContent";

export default function CertificationsPage() {
  return (
    <HydrationBoundary>
      <CertificationsContent />
    </HydrationBoundary>
  );
}
