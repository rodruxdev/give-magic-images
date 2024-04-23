import type { UUID } from "crypto";

export type Image = {
  imageId: UUID;
  url: string;
  userId: UUID;
  creationDate: string;
};
