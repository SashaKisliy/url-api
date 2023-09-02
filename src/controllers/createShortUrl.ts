import { Request, Response } from "express";
import Url from "../models/Url";
import { generateShortUrl } from "../services/shortUrl";
import ioredis from "ioredis";

const redisClient = new ioredis();

export const createShortUrl = async (req: Request, res: Response) => {
  try {
    const { originalUrl } = req.body;

    const redisShortUrl = await redisClient.get(originalUrl);
    if (!redisShortUrl) {
      const existingUrl = await Url.findOne({ where: { originalUrl } });

      if (existingUrl) {
        await redisClient.set(originalUrl, existingUrl.shortUrl);
        return res.status(201).json({ shortUrl: existingUrl.shortUrl });
      }

      const shortUrl = generateShortUrl();
      await redisClient.set(originalUrl, shortUrl);

      const url = new Url({
        originalUrl,
        shortUrl,
      });

      await url.save();

      return res.status(201).json({ shortUrl: shortUrl });
    } else {
      return res.status(201).json({ shortUrl: redisShortUrl });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
