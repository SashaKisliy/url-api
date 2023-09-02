import request from "supertest";
import app from "../src/app";

describe("URL Shortener API", () => {
  it("should create a short URL", async () => {
    const response = await request(app)
      .post("/api/url/shorten")
      .send({ originalUrl: "http://www.example.com" });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("shortUrl");
  });
});
