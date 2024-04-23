import { API_URL } from "../utils/constants";

type loginResponse = {
  user: UserInfo;
  token: string;
};

export const loginService = async (
  params: UserForm
): Promise<loginResponse> => {
  let data = undefined;
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(params),
  });
  if (!res.ok) {
    throw new Error("Error in login service");
  }
  data = (await res.json()) as Promise<loginResponse>;
  return data;
};
