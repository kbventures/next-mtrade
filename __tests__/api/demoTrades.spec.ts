import { NextApiRequest, NextApiResponse } from "next";
import handler from "@/pages/api/demoTrades";
import httpMocks from "node-mocks-http";
// eslint-disable-next-line import/no-unresolved
import { KrakenClosedTrade } from "@/types/apiTypes";
import mockClosedTrades from "@/mockData/mockClosedTrades";

describe("API Test", () => {
    it("should respond with mockClosedTrades on GET request", async () => {
        const req = httpMocks.createRequest<NextApiRequest>({
            method: "GET",
            url: "/",
        });
        const res =
            httpMocks.createResponse<
                NextApiResponse<KrakenClosedTrade[] | { message: string }>
            >();

        await handler(req, res);

        expect(res.statusCode).toBe(200);
        // eslint-disable-next-line no-underscore-dangle
        expect(res._getJSONData()).toEqual(mockClosedTrades);
    });
});
