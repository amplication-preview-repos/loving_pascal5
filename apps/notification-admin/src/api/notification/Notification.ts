export type Notification = {
  createdAt: Date;
  id: string;
  isRead: boolean | null;
  message: string | null;
  sentAt: Date | null;
  updatedAt: Date;
  user: string | null;
};
