import { HydrationBoundary } from "@/components/HydrationBoundary";
import ProjectsContent from "./projectsContent";

export default function ProjectsPage() {
  return (
    <HydrationBoundary>
      <ProjectsContent />
    </HydrationBoundary>
  );
}
