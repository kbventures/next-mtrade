// __tests__/api/hello.spec.ts
import request from "supertest";
import hello from "../../src/pages/api/hello";

describe("API Route - /api/hello", () => {
    it('responds with "Hello, World"', async () => {
        const response = await request(hello).get("/api/hello");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Hello, World" });
    }, 10000); // Set a 10-second timeout
});
