// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import {
    getTradeHistory,
    getAccountBalances,
} from "@/pages/api/krakenApi"; // Replace with the correct path to your API file

describe("API Tests", () => {
    it("should get trade history", async () => {
        const response = await request(getTradeHistory).post("/").send({
            // Define your request parameters for trade history here
        });

        if (response.status === 200) {
            console.log("Received data:", response.body);
            // Add more assertions based on the expected response
        }

        expect(response.status).toBe(200);
    });

    it("should get account balances", async () => {
        const response = await request(getAccountBalances).post("/").send({
            // Define your request parameters for account balances here
        });

        if (response.status === 200) {
            console.log("Received data:", response.body);
            // Add more assertions based on the expected response
        }

        expect(response.status).toBe(200);
    });
});
