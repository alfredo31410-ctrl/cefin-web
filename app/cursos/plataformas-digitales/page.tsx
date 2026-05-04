import CourseLandingTemplate from "@/components/cursos/CourseLandingTemplate";
import { plataformasLanding } from "@/lib/course-landings";

export default function LandingPlataformas() {
  return <CourseLandingTemplate data={plataformasLanding} />;
}
