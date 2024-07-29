export type Follow = {
  createdAt: Date;
  followedAt: Date | null;
  follower: string | null;
  following: string | null;
  id: string;
  updatedAt: Date;
};
