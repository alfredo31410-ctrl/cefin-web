import CourseLandingTemplate from "@/components/cursos/CourseLandingTemplate";
import { medicosLanding } from "@/lib/course-landings";

export default function LandingMedicos() {
  return <CourseLandingTemplate data={medicosLanding} />;
}
