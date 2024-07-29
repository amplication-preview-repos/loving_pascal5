import { User } from "../user/User";

export type Otp = {
  createdAt: Date;
  expirationTime: Date | null;
  id: string;
  otpCode: number | null;
  updatedAt: Date;
  user?: User | null;
};
