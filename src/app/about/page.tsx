import { Building2, Eye, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PublicContentPage } from "@/components/PublicContentPage";

export default function AboutPage() {
  return <PublicContentPage eyebrow="About ReManage" title="Software should make community operations calmer." description="ReManage is being built for housing societies that want accountable workflows without noisy interfaces, opaque records, or unnecessary complexity." sections={[
    { eyebrow: "Our point of view", title: "Society management is shared responsibility", description: "The best platform respects the different responsibilities of committees, residents, guards, and accountants.", items: [
      { icon: Building2, title: "Committee-first operations", description: "Give decision-makers a clear operating view without making every resident an administrator." },
      { icon: Users, title: "Resident-friendly by design", description: "Keep common actions simple, understandable, and easy to complete." },
    ]},
    { eyebrow: "What matters", title: "Clarity earns trust", description: "Good software makes important actions, records, and responsibilities easier to understand.", items: [
      { icon: Eye, title: "Visible progress", description: "People should know what happened, what is pending, and who owns the next action." },
      { icon: ShieldCheck, title: "Careful boundaries", description: "Access and information should reflect each person’s actual role." },
    ]},
    { eyebrow: "How we build", title: "Practical before impressive", description: "We favour dependable workflows and thoughtful adoption over feature-count theatre.", items: [
      { icon: Sparkles, title: "Focused product decisions", description: "Every feature should solve a real operating problem and remain understandable." },
      { icon: HeartHandshake, title: "Guided adoption", description: "Society software succeeds when people understand and trust the change." },
    ]},
  ]} />;
}
