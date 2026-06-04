import { Database, Eye, FileClock, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
import { PublicContentPage } from "@/components/PublicContentPage";

export default function SecurityPage() {
  return <PublicContentPage eyebrow="Security & privacy" title="Society data deserves careful boundaries." description="ReManage is designed around role-based access, accountable actions, and practical controls for sensitive resident, visitor, and financial information." sections={[
    { eyebrow: "Access", title: "The right people see the right things", description: "Permissions should reflect real society responsibilities, not broad admin access.", items: [
      { icon: KeyRound, title: "Role-based access", description: "Committee, resident, guard, and accounting views remain purpose-specific.", points: ["Focused role permissions", "Protected financial data", "Controlled administration"] },
      { icon: Eye, title: "Privacy-aware views", description: "Sensitive details can be limited or masked depending on the workflow and user role." },
    ]},
    { eyebrow: "Accountability", title: "Important actions leave a record", description: "Operational trust improves when changes and approvals are traceable.", items: [
      { icon: FileClock, title: "Activity history", description: "Maintain context around approvals, updates, and sensitive administrative actions." },
      { icon: ShieldCheck, title: "Society-controlled governance", description: "The committee remains responsible for local access, rules, and resident records." },
    ]},
    { eyebrow: "Data posture", title: "Practical safeguards by design", description: "Security is a continuous operating discipline, not a badge on a landing page.", items: [
      { icon: LockKeyhole, title: "Protected transport", description: "Use secure connections and careful handling for data moving between users and the platform." },
      { icon: Database, title: "Data separation & exports", description: "Keep society records logically scoped and make operational data exportable when needed." },
    ]},
  ]} />;
}
