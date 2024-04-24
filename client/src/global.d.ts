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
}
