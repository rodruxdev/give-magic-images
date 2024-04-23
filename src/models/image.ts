import boom from "@hapi/boom";
import type { Image } from "../schemas/images";
import type { User } from "../schemas/users";
import { randomUUID } from "crypto";

const images: Image[] = [];

export class ImagesModel {
  static getAllByUserId({ userId }: { userId: User["userId"] }): Image[] {
    const imagesRes = images.filter((image) => image.userId === userId);
    return imagesRes;
  }

  static getById({
    imageId,
    userId,
  }: {
    imageId: Image["imageId"];
    userId: User["userId"];
  }): Image {
    const imageIndex = images.findIndex(
      (image) => image.imageId === imageId && image.userId === userId
    );
    if (imageIndex === -1) {
      throw boom.notFound("Image not found.");
    }
    return images[imageIndex];
  }

  static create({
    userId,
    imageURL,
  }: {
    userId: User["userId"];
    imageURL: string;
  }) {
    const newImageId = randomUUID();
    const newImage: Image = {
      imageId: newImageId,
      url: imageURL,
      userId,
      creationDate: new Date().toISOString(),
    };
    images.push(newImage);
    console.log("Images:");
    console.log(images);
    return newImage;
  }
}
