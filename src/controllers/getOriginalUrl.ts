import { Request, Response } from "express";
import Url from "../models/Url";
import ioredis from "ioredis";

const redisClient = new ioredis();

export const getOriginalUrl = async (req: Request, res: Response) => {
  const { shortUrl } = req.body;

  const redisShortUrl = await redisClient.get(shortUrl);

  if (redisShortUrl) {
    return res.status(200).json({ originalUrl: redisShortUrl });
  }

  try {
    const originalUrl = await Url.findOne({ where: { shortUrl } });

    if (originalUrl) {
      const redisResult = await redisClient.set(
        shortUrl,
        originalUrl.originalUrl
      );

      return res.status(200).json({ originalUrl: originalUrl.originalUrl });
    } else {
      return res.status(404).json({ message: "Short URL not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
