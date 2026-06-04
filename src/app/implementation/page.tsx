import { ClipboardList, FileSpreadsheet, GraduationCap, Headphones, Rocket, SlidersHorizontal } from "lucide-react";
import { PublicContentPage } from "@/components/PublicContentPage";

export default function ImplementationPage() {
  return <PublicContentPage eyebrow="Implementation" title="Adoption is a workflow, not a download link." description="Move at a pace your committee and residents can support. Start with one priority, validate it, and expand deliberately." sections={[
    { eyebrow: "Plan", title: "Begin with the operating reality", description: "We start with your society structure, current process, and the outcome that matters most.", items: [
      { icon: ClipboardList, title: "Workflow discovery", description: "Map current gate, billing, complaint, and communication practices before configuration." },
      { icon: SlidersHorizontal, title: "Society configuration", description: "Set up towers, homes, roles, rules, and the first workflow for your pilot." },
    ]},
    { eyebrow: "Prepare", title: "Bring the right data and people", description: "Good onboarding reduces confusion for residents, guards, and committee members.", items: [
      { icon: FileSpreadsheet, title: "Structured data import", description: "Prepare resident, unit, and operational records using clear import templates." },
      { icon: GraduationCap, title: "Role-based training", description: "Train each user group on the small set of actions they actually need." },
    ]},
    { eyebrow: "Go live", title: "Launch, learn, then expand", description: "A focused pilot creates evidence before broader rollout.", items: [
      { icon: Rocket, title: "Pilot launch", description: "Start with a defined workflow and success criteria your committee can review." },
      { icon: Headphones, title: "Adoption support", description: "Resolve early questions, review usage, and plan the next workflow deliberately." },
    ]},
  ]} />;
}
