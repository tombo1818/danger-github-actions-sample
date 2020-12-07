const express = require("express");
const request = require("supertest");
const route = require("./route");

const app = express();
app.use(route);

describe("app.js", () => {
  test("GET /", async () => {
    const result = await request(app).get("/");
    expect(result.status).toBe(200);
    expect(result.body.message).toBe("Hello Express");
  });
});

