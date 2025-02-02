export type Status = "提案中" | "計画済み" | "進行中" | "完了";

export type Feature = {
  id: number;
  title: string;
  description: string;
  votes: number;
  status: Status;
  timestamp: string;
};
