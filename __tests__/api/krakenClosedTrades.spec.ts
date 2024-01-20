import axios, { AxiosResponse } from "axios";
import httpMocks from "node-mocks-http";
import handler from "../../src/pages/api/krakenClosedTrades";
import {
    KrakenClosedTrade,
    KrakenClosedTradeResponse,
} from "../../src/types/apiTypes";

jest.mock("axios");

const mockedResponse: KrakenClosedTradeResponse = {
    privateResponse: {
        closed: {
            "OCOIRM-3AVHM-7B2YLW": {
                refid: null,
                userref: null,
                status: "closed",
                opentm: 1588830213.657734,
                starttm: 0,
                expiretm: 0,
                descr: {
                    pair: "BTCUSD",
                    type: "buy",
                    ordertype: "limit",
                    price: "13226.9",
                    price2: "0",
                    leverage: "none",
                    // eslint-disable-next-line sonarjs/no-duplicate-string
                    order: "buy 0.34 BTCUSD @ limit 13226.9",
                    close: "",
                },
                // eslint-disable-next-line sonarjs/no-duplicate-string
                vol: "0.34000000",
                vol_exec: "0.34000000",
                // eslint-disable-next-line sonarjs/no-duplicate-string
                cost: "4497.14600",
                fee: "11.69258",
                price: "13226.9",
                stopprice: "0.00000",
                limitprice: "0.00000",
                misc: "",
                oflags: "fciq",
                reason: null,
                closetm: 1588830213.6665378,
            },
        },
        count: 1,
    },
};

const createMockRequest = () =>
    httpMocks.createRequest({
        method: "POST",
        url: "/api/krakenClosedTrades",
    });

const mockHandlerResponse = (response: AxiosResponse) => {
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue(
        response
    );
};

describe("API Tests", () => {
    beforeEach(() => {
        mockHandlerResponse({
            data: { result: mockedResponse },
        } as AxiosResponse);
    });

    it("should successfully call the private endpoint", async () => {
        const mockRequest = createMockRequest();
        const mockResponse = httpMocks.createResponse();

        await handler(mockRequest, mockResponse);

        // eslint-disable-next-line no-underscore-dangle
        const data = JSON.parse(mockResponse._getData());
        const { privateResponse } = data;

        // expect(privateResponse.message).toBe("Success");
        expect(privateResponse.privateResponse.closed).toBeDefined();
        expect(privateResponse.privateResponse.count).toBeDefined();
        expect(privateResponse.privateResponse.count).toBe(1);
    });

    it("should handle details of a single closed trade in privateResponse", async () => {
        const singleClosedTrade: KrakenClosedTrade = {
            refid: null,
            userref: null,
            status: "closed",
            opentm: 1588830213.657734,
            starttm: 0,
            expiretm: 0,
            descr: {
                pair: "BTCUSD",
                type: "buy",
                ordertype: "limit",
                price: "13226.9",
                price2: "0",
                leverage: "none",
                order: "buy 0.34 BTCUSD @ limit 13226.9",
                close: "",
            },
            vol: "0.34000000",
            vol_exec: "0.34000000",
            cost: "4497.14600",
            fee: "11.69258",
            price: "13226.9",
            stopprice: "0.00000",
            limitprice: "0.00000",
            misc: "",
            oflags: "fciq",
            reason: null,
            closetm: 1588830213.6665378,
        };

        const singleClosedTradeResponse: KrakenClosedTradeResponse = {
            privateResponse: {
                closed: {
                    "OCOIRM-3AVHM-7B2YLW": singleClosedTrade,
                },
                count: 1,
            },
        };

        mockHandlerResponse({
            data: { result: singleClosedTradeResponse },
        } as AxiosResponse);

        const mockRequest = createMockRequest();
        const mockResponse = httpMocks.createResponse();

        await handler(mockRequest, mockResponse);

        // eslint-disable-next-line no-underscore-dangle
        const data = JSON.parse(mockResponse._getData());
        const { privateResponse } = data;

        // expect(privateResponse.message).toBe("Success");
        expect(privateResponse.privateResponse.closed).toBeDefined();
        expect(
            privateResponse.privateResponse.closed["OCOIRM-3AVHM-7B2YLW"]
        ).toBeDefined();

        const tradeDetails =
            privateResponse.privateResponse.closed["OCOIRM-3AVHM-7B2YLW"];
        expect(tradeDetails.status).toBe("closed");
        expect(tradeDetails.opentm).toBe(1588830213.657734);
        expect(tradeDetails.starttm).toBe(0);
        expect(tradeDetails.expiretm).toBe(0);
        expect(tradeDetails.descr.pair).toBe("BTCUSD");
        expect(tradeDetails.descr.type).toBe("buy");
        expect(tradeDetails.descr.ordertype).toBe("limit");
        expect(tradeDetails.descr.price).toBe("13226.9");
        expect(tradeDetails.descr.price2).toBe("0");
        expect(tradeDetails.descr.leverage).toBe("none");
        expect(tradeDetails.descr.order).toBe(
            "buy 0.34 BTCUSD @ limit 13226.9"
        );
        expect(tradeDetails.descr.close).toBe("");
        expect(tradeDetails.vol).toBe("0.34000000");
        expect(tradeDetails.vol_exec).toBe("0.34000000");
        expect(tradeDetails.cost).toBe("4497.14600");
        expect(tradeDetails.fee).toBe("11.69258");
        expect(tradeDetails.price).toBe("13226.9");
        expect(tradeDetails.stopprice).toBe("0.00000");
        expect(tradeDetails.limitprice).toBe("0.00000");
        expect(tradeDetails.misc).toBe("");
        expect(tradeDetails.oflags).toBe("fciq");
        expect(tradeDetails.reason).toBeNull();
        expect(tradeDetails.closetm).toBe(1588830213.6665378);
    });
});
