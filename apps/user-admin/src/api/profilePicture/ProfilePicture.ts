import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type ProfilePicture = {
  createdAt: Date;
  id: string;
  imageUrl: JsonValue;
  updatedAt: Date;
  uploadedAt: Date | null;
  users?: Array<User>;
};
