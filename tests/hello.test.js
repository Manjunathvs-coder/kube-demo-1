const request = require("supertest");
const express = require("express");
const hello = require("../src/routes/hello");

const app = express();
app.use("/api", hello);

test("GET /api/hello returns message", async () => {
  const res = await request(app).get("/api/hello");
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ message: "Hello, world!" });
});
