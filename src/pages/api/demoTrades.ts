// API documentation: https://docs.kraken.com/rest/#tag/Account-Data/operation/getTradeHistory
// Mock Data
import { NextApiRequest, NextApiResponse } from "next";

type Trade = {
    ordertxid: string;
    postxid: string;
    pair: string;
    time: number;
    type: string;
    ordertype: string;
    price: string;
    cost: string;
    fee: string;
    vol: string;
    margin: string;
    misc: string;
};

type Result = {
    trades: { [tradeId: string]: Trade };
};

type MockData = {
    error: string[];
    result: Result;
};

export default function demoExchangeTrades(
    req: NextApiRequest,
    res: NextApiResponse<MockData>
) {
    const mockData: MockData = {
        error: [],
        result: {
            trades: {
                "THVRQM-33VKH-UCI7BS": {
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
                },
                "TCWJEG-FL4SZ-3FKGH6": {
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
                },
            },
        },
    };
    res.status(200).json(mockData);
}
