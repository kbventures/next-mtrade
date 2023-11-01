// import { NextApiResponse } from "next";
// import { getTradeHistory } from "@/pages/api/krakenApi"; // Replace with the correct path to your API file

// const createMockRequest = (body = {}) => {
//     return { body };
// };

// const createMockResponse = () => {
//     const res: NextApiResponse = {
//         status: jest.fn().mockReturnThis(),
//     json: jest.fn(),
//   };
//   return res;
// };

// describe("getTradeHistory API", () => {
//   it("should return trade history data", async () => {
//     const req = createMockRequest();
//     const res = createMockResponse();

//     await getTradeHistory(req, res);

//     // Assert that the response status is 200
//     expect(res.status).toHaveBeenCalledWith(200);

//     // You can add more assertions to validate the response data as needed
//     // For example, you can check if the JSON response contains the expected data.
//     // For instance:
//     // expect(res.json).toHaveBeenCalledWith({ ...expectedResponseData });
//   });

//   // Add more test cases for error scenarios, network errors, etc.
// });
