import { API_URL } from "../utils/constants";

type signinResponse = {
  user: UserInfo;
};

export const signinService = async (
  params: UserForm
): Promise<signinResponse> => {
  let data = undefined;
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(params),
  });
  if (!res.ok) {
    throw new Error("Error creating a new user");
  }
  data = (await res.json()) as Promise<signinResponse>;
  return data;
};

export const getUserInfoService = async (token: string): Promise<UserInfo> => {
  const res = await fetch(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Error obtaining user's info");
  }

  const data = (await res.json()) as UserInfo;
  return data;
};
