type ColumnType = "backlog" | "todo" | "doing" | "done";

type CardType = {
  title: string;
  id: string;
  column: ColumnType;
  priority: string;
  points?: number;
  assignId: number;
};

export const DEFAULT_CARDS_FINANCE: CardType[] = [
  // BACKLOG
  {
    title: "Prepare quarterly financial report",
    id: "1",
    column: "backlog",
    priority: "high",
    points: 13,
    assignId: 1,
  },
  {
    title: "Review and update budget forecasts",
    id: "2",
    column: "backlog",
    priority: "medium",
    points: 8,
    assignId: 2,
  },
  {
    title: "Evaluate new accounting software",
    id: "3",
    column: "backlog",
    priority: "low",
    points: 3,
    assignId: 3,
  },
  {
    title: "Document internal audit processes",
    id: "4",
    column: "backlog",
    priority: "medium",
    points: 5,
    assignId: 4,
  },
  // TODO
  {
    title: "Reconcile bank statements for Q2",
    id: "5",
    column: "todo",
    priority: "low",
    points: 1,
    assignId: 5,
  },
  {
    title: "Prepare tax filing for current fiscal year",
    id: "6",
    column: "todo",
    priority: "medium",
    points: 8,
    assignId: 1,
  },
  {
    title: "Analyze cost-saving opportunities",
    id: "7",
    column: "todo",
    priority: "medium",
    points: 5,
    assignId: 2,
  },
  // DOING
  {
    title: "Update payroll system for new hires",
    id: "8",
    column: "doing",
    priority: "medium",
    points: 3,
    assignId: 3,
  },
  {
    title: "Review and approve expense reports",
    id: "9",
    column: "doing",
    priority: "low",
    points: 2,
    assignId: 4,
  },
  // DONE
  {
    title: "Complete monthly financial close",
    id: "10",
    column: "done",
    priority: "high",
    points: 8,
    assignId: 5,
  },
];

export const DEFAULT_CARDS_PRODUCT: CardType[] = [
  // BACKLOG
  {
    title: "Look into render bug in dashboard",
    id: "1",
    column: "backlog",
    priority: "high",
    points: 13,
    assignId: 1,
  },
  {
    title: "SOX compliance checklist",
    id: "2",
    column: "backlog",
    priority: "medium",
    points: 8,
    assignId: 2,
  },
  {
    title: "[SPIKE] Migrate to Azure",
    id: "3",
    column: "backlog",
    priority: "low",
    points: 3,
    assignId: 3,
  },
  {
    title: "Document Notifications service",
    id: "4",
    column: "backlog",
    priority: "medium",
    points: 5,
    assignId: 4,
  },
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
    priority: "low",
    points: 1,
    assignId: 5,
  },
  {
    title: "Postmortem for outage",
    id: "6",
    column: "todo",
    priority: "medium",
    points: 8,
    assignId: 1,
  },
  {
    title: "Sync with product on Q3 roadmap",
    id: "7",
    column: "todo",
    priority: "medium",
    points: 5,
    assignId: 2,
  },
  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
    priority: "medium",
    points: 3,
    assignId: 3,
  },
  {
    title: "Add logging to daily CRON",
    id: "9",
    column: "doing",
    priority: "low",
    points: 2,
    assignId: 4,
  },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
    priority: "high",
    points: 8,
    assignId: 5,
  },
];

export const DEFAULT_CARDS_SUPPORT: CardType[] = [
  // BACKLOG
  {
    title: "Update knowledge base with new FAQ",
    id: "1",
    column: "backlog",
    priority: "medium",
    points: 8,
    assignId: 1,
  },
  {
    title: "Investigate recurring login issues",
    id: "2",
    column: "backlog",
    priority: "high",
    points: 13,
    assignId: 2,
  },
  {
    title: "Evaluate new ticketing system",
    id: "3",
    column: "backlog",
    priority: "low",
    points: 3,
    assignId: 3,
  },
  {
    title: "Document support processes",
    id: "4",
    column: "backlog",
    priority: "medium",
    points: 5,
    assignId: 4,
  },
  // TODO
  {
    title: "Respond to customer feedback",
    id: "5",
    column: "todo",
    priority: "low",
    points: 1,
    assignId: 5,
  },
  {
    title: "Follow up on unresolved tickets",
    id: "6",
    column: "todo",
    priority: "medium",
    points: 8,
    assignId: 1,
  },
  {
    title: "Sync with product team on known issues",
    id: "7",
    column: "todo",
    priority: "medium",
    points: 5,
    assignId: 2,
  },
  // DOING
  {
    title: "Handle high-priority support tickets",
    id: "8",
    column: "doing",
    priority: "high",
    points: 13,
    assignId: 3,
  },
  {
    title: "Provide training for new support agents",
    id: "9",
    column: "doing",
    priority: "medium",
    points: 5,
    assignId: 4,
  },
  // DONE
  {
    title: "Resolve connectivity issues for major client",
    id: "10",
    column: "done",
    priority: "high",
    points: 8,
    assignId: 5,
  },
];

export const DEFAULT_CARDS_SALES: CardType[] = [
  // BACKLOG
  {
    title: "Research potential leads in new market",
    id: "1",
    column: "backlog",
    priority: "medium",
    points: 8,
    assignId: 1,
  },
  {
    title: "Create sales pitch for upcoming product launch",
    id: "2",
    column: "backlog",
    priority: "high",
    points: 13,
    assignId: 2,
  },
  {
    title: "Update CRM with latest customer data",
    id: "3",
    column: "backlog",
    priority: "low",
    points: 3,
    assignId: 3,
  },
  {
    title: "Develop customer retention strategy",
    id: "4",
    column: "backlog",
    priority: "medium",
    points: 5,
    assignId: 4,
  },
  // TODO
  {
    title: "Follow up with top-tier prospects",
    id: "5",
    column: "todo",
    priority: "high",
    points: 8,
    assignId: 5,
  },
  {
    title: "Prepare Q3 sales forecast",
    id: "6",
    column: "todo",
    priority: "medium",
    points: 5,
    assignId: 1,
  },
  {
    title: "Schedule demo sessions for new clients",
    id: "7",
    column: "todo",
    priority: "low",
    points: 3,
    assignId: 2,
  },
  // DOING
  {
    title: "Close deals for Q2 targets",
    id: "8",
    column: "doing",
    priority: "high",
    points: 13,
    assignId: 3,
  },
  {
    title: "Conduct product training for sales team",
    id: "9",
    column: "doing",
    priority: "medium",
    points: 5,
    assignId: 4,
  },
  // DONE
  {
    title: "Submit monthly sales report",
    id: "10",
    column: "done",
    priority: "high",
    points: 8,
    assignId: 5,
  },
];
