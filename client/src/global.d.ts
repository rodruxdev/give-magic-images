import { UUID } from "crypto";

declare global {
  type UserForm = {
    email: string;
    password: string;
  };

  type UserInfo = {
    userId: UUID;
    email: string;
  };

  type Image = {
    imageId: UUID;
    name: string;
    url: string;
    userId: UUID;
    creationDate: string;
  };

  type ImageDataType = {
    preview: string;
    data?: File;
  };
}
