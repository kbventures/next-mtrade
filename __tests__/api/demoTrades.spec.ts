import httpMocks from "node-mocks-http";
import demoExchangeTrades from "../../src/pages/api/demoTrades";

describe("/api/demoExchangeTrades", () => {
    it("should return mock trade data", async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();

        await demoExchangeTrades(req, res);

        // Check the response status code
        expect(res.statusCode).toBe(200);

        // Parse the response body as JSON
        // eslint-disable-next-line no-underscore-dangle
        const responseBody = JSON.parse(res._getData());

        // Check the structure of the response
        expect(responseBody).toHaveProperty("error", []);
        expect(responseBody).toHaveProperty("result");

        // Check the structure of the 'result' object
        const { result } = responseBody;
        expect(result).toHaveProperty("trades");

        // Check individual trades
        const { trades } = result;
        expect(trades).toHaveProperty("THVRQM-33VKH-UCI7BS");
        expect(trades["THVRQM-33VKH-UCI7BS"]).toEqual({
            ordertxid: "OQCLML-BW3P3-BUCMWZ",
            postxid: "TKH2SE-M7IF5-CFI7LT",
            pair: "XXBTZUSD",
            time: 1688667796.8802,
            type: "buy",
            ordertype: "limit",
            price: "30010.00000",
            cost: "600.20000",
            fee: "0.00000",
            vol: "0.02000000",
            margin: "0.00000",
            misc: "",
        });

        expect(trades).toHaveProperty("TCWJEG-FL4SZ-3FKGH6");
        expect(trades["TCWJEG-FL4SZ-3FKGH6"]).toEqual({
            ordertxid: "OQCLML-BW3P3-BUCMWZ",
            postxid: "TKH2SE-M7IF5-CFI7LT",
            pair: "XXBTZUSD",
            time: 1688667769.6396,
            type: "buy",
            ordertype: "limit",
            price: "30010.00000",
            cost: "300.10000",
            fee: "0.00000",
            vol: "0.01000000",
            margin: "0.00000",
            misc: "",
        });

        // Additional checks based on your specific requirements
    });
});
// In this extended example, each trade is individually checked for its properties, ensuring that the response structure and data match your expectations. Customize the assertions based on your API's expected behavior and the details you want to verify in the response.
