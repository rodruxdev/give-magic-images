import { z } from "zod";
import type { UUID } from "crypto";

export type User = {
  userId: UUID;
  email: string;
  password: string;
};
export type UserForm = Omit<User, "userId">;
export type UserInfo = Omit<User, "password">;

const userFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Invalid email address",
    }),
  password: z.string({
    required_error: "Password is required",
  }),
});

export function validateUserForm(input: unknown) {
  return userFormSchema.safeParse(input);
}
