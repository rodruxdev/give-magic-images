import { API_URL } from "../utils/constants";

export const uploadImageService = async (
  file: File,
  token: string
): Promise<void> => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(`${API_URL}/images`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    throw new Error("Error creating a new image");
  }
  const data = await res.json();
  return data;
};

export const getImagesService = async (token: string): Promise<Image[]> => {
  const res = await fetch(`${API_URL}/images`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Error obtaining image");
  }

  const data = (await res.json()) as Image[];
  return data;
};
