// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosResponse } from "axios";
import httpMocks from "node-mocks-http";
import handler from "../../src/pages/api/krakenClosedTrades";

jest.mock("axios");

describe("API Tests", () => {
    const mockedResponse = {
        message: "Success",
        privateResponse: {
            closed: {
                "OCOIRM-3AVHM-7B2YLW": {}, // You may need to adjust the expected structure here
            },
            count: 1,
        },
    };

    beforeEach(() => {
        (
            axios.post as jest.MockedFunction<typeof axios.post>
        ).mockResolvedValue({
            data: { result: mockedResponse },
        } as AxiosResponse);
    });
    it("should successfully call the private endpoint", async () => {
        const mockRequest = httpMocks.createRequest({
            method: "POST",
            url: "/api/krakenClosedTrades",
        });

        const mockResponse = httpMocks.createResponse();

        await handler(mockRequest, mockResponse);

        // eslint-disable-next-line no-underscore-dangle
        const data = JSON.parse(mockResponse._getData());
        // eslint-disable-next-line no-console
        console.log("Received data:", data);
        // eslint-disable-next-line no-console
        // eslint-disable-next-line no-underscore-dangle
        expect(data.privateResponse.message).toBe("Success");
        expect(data.privateResponse.privateResponse.closed).toBeDefined();
    });

    // Add more test cases for error scenarios, missing environment variables, etc.
});
