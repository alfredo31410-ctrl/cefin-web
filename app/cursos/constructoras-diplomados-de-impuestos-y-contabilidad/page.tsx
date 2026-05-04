import CourseLandingTemplate from "@/components/cursos/CourseLandingTemplate";
import { constructorasLanding } from "@/lib/course-landings";

export default function LandingConstructoras() {
  return <CourseLandingTemplate data={constructorasLanding} />;
}
