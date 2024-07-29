import { ProfilePicture as TProfilePicture } from "../api/profilePicture/ProfilePicture";

export const PROFILEPICTURE_TITLE_FIELD = "id";

export const ProfilePictureTitle = (record: TProfilePicture): string => {
  return record.id?.toString() || String(record.id);
};
