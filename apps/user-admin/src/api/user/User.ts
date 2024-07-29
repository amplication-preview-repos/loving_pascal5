import { Otp } from "../otp/Otp";
import { ProfilePicture } from "../profilePicture/ProfilePicture";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  following: string | null;
  id: string;
  lastName: string | null;
  mobileNumber: string | null;
  otps?: Array<Otp>;
  profilePicture?: ProfilePicture | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
