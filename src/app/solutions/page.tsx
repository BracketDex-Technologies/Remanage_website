import { Bell, BookOpenCheck, CalendarDays, CircleDollarSign, FileCheck2, KeyRound, MessageSquareText, Users, Wrench } from "lucide-react";
import { PublicContentPage } from "@/components/PublicContentPage";

export default function SolutionsPage() {
  return <PublicContentPage eyebrow="Platform" title="Every essential workflow. One accountable system." description="ReManage connects the daily work of committees, residents, guards, and accountants without turning society management into a maze." sections={[
    { id: "gate", eyebrow: "Security", title: "A faster, clearer gate", description: "Give guards the context they need while keeping residents in control of entry.", items: [
      { icon: KeyRound, title: "Visitor approvals", description: "Residents approve expected guests and guards verify arrivals without repeated calls.", points: ["Pre-approved guests", "Entry and exit records", "Delivery and cab workflows"] },
      { icon: Users, title: "Staff & vendors", description: "Maintain a society-controlled record of regular helpers, staff, and service vendors.", points: ["Role-aware records", "Attendance history", "Vendor access controls"] },
    ]},
    { id: "finance", eyebrow: "Finance", title: "Collections people can understand", description: "Make bills, receipts, and outstanding amounts visible without spreadsheet chasing.", items: [
      { icon: CircleDollarSign, title: "Maintenance billing", description: "Generate recurring bills and keep each home’s payment position clear.", points: ["Billing runs", "Receipts and statements", "Outstanding tracking"] },
      { icon: BookOpenCheck, title: "Committee reporting", description: "Give treasurers a practical view of collections, expenses, and funds.", points: ["Collection summaries", "Expense records", "Exportable reports"] },
    ]},
    { id: "operations", eyebrow: "Operations", title: "Close the loop on daily work", description: "Turn resident issues and facility work into visible, owned requests.", items: [
      { icon: Wrench, title: "Helpdesk", description: "Route complaints to the right team and keep residents informed through resolution.", points: ["Categories and priorities", "Assignment and status", "Resolution history"] },
      { icon: CalendarDays, title: "Amenities", description: "Manage availability, requests, and bookings without office calls.", points: ["Booking rules", "Availability views", "Resident confirmations"] },
    ]},
    { id: "governance", eyebrow: "Governance", title: "Official communication stays official", description: "Create a dependable record for notices, meetings, decisions, and documents.", items: [
      { icon: Bell, title: "Notices & announcements", description: "Publish dated, searchable communication from a clear source of truth.", points: ["Targeted notices", "Read visibility", "Searchable archive"] },
      { icon: FileCheck2, title: "Documents & decisions", description: "Keep meeting notes, society documents, and approved records organised.", points: ["Document library", "Meeting minutes", "Polls and decisions"] },
      { icon: MessageSquareText, title: "Resident communication", description: "Keep community updates useful without creating another noisy public feed." },
    ]},
  ]} />;
}
