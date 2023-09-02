import redis from "ioredis";

export const connect = async () => {
  const redisClient = new redis({
    host: "localhost",
    port: 6379,
  });

  await redisClient.connect();

  return redisClient;
};
