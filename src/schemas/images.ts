import type { UUID } from "crypto";

export type Image = {
  imageId: UUID;
  name: string;
  url: string;
  userId: UUID;
  creationDate: string;
};
