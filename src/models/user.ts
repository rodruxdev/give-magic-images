import { randomUUID } from "crypto";
import type { User, UserForm, UserInfo } from "../schemas/users";
import boom from "@hapi/boom";

const users: User[] = [];

export class UsersModel {
  static getById({ userId }: { userId: User["userId"] }): UserInfo | undefined {
    const user = users.find((user) => user.userId == userId);
    if (user === undefined) {
      throw boom.notFound();
    }
    const resUser: UserInfo = { userId: user?.userId, email: user?.email };
    return resUser;
  }

  static getByEmail({ email }: { email: User["email"] }): User {
    const user = users.find((user) => user.email == email);
    if (user === undefined) {
      throw boom.notFound();
    }
    return user;
  }

  static create({ input }: { input: UserForm }): UserInfo {
    const newId = randomUUID();
    const newUser: User = {
      userId: newId,
      ...input,
    };

    users.push(newUser);
    const resUser: UserInfo = { userId: newUser.userId, email: newUser.email };
    return resUser;
  }
}
