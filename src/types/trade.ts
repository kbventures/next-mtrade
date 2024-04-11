// Define the Trade type
export type Trade = {
    id: string;
    clientOrderId?: undefined;
    info: {
        id: string;
        refid: null | string;
        userref: null | number;
        status: "closed" | string;
        opentm: string;
        starttm: string;
        expiretm: string;
        descr: Record<string, unknown>;
        vol: string;
        vol_exec: string;
        cost: string;
        fee: string;
        price: string;
        stopprice: string;
        limitprice: string;
        misc: string;
        oflags: string;
        reason: null;
        closetm: string;
    };
    timestamp: number;
    datetime: string;
    lastTradeTimestamp?: undefined;
    status: "closed";
    symbol: string;
    type: "market" | string;
    timeInForce: "IOC";
    postOnly: boolean;
    side: "buy" | string;
    price: number;
    stopPrice?: undefined;
    triggerPrice?: undefined;
    takeProfitPrice?: undefined;
    stopLossPrice?: undefined;
    cost: number;
    amount: number;
    filled: number;
    average: number;
    remaining: number;
    fee: {
        cost: string;
        rate?: undefined;
        currency: "CAD";
    };
    trades: unknown[];
    fees: unknown[];
    lastUpdateTimestamp?: undefined;
    reduceOnly?: undefined;
};

// Usage example:
// const tradeData: Trade[] = [
//     {
//         id: "OCOIRM-3AVHM-7B2YLW",
//         info: {
//             id: "OCOIRM-3AVHM-7B2YLW",
//             refid: null,
//             userref: null,
//             status: "closed",
//             opentm: "1588830213.657734",
//             starttm: "0",
//             expiretm: "0",
//             descr: {},
//             vol: "0.34000000",
//             vol_exec: "0.34000000",
//             cost: "4497.14600",
//             fee: "11.69258",
//             price: "13226.9",
//             stopprice: "0.00000",
//             limitprice: "0.00000",
//             misc: "",
//             oflags: "fciq",
//             reason: null,
//             closetm: "1588830213.6665378",
//         },
//         timestamp: 1588830213657,
//         datetime: "2020-05-07T05:43:33.657Z",
//         status: "closed",
//         symbol: "BTC/CAD",
//         type: "market",
//         timeInForce: "IOC",
//         postOnly: false,
//         side: "buy",
//         price: 13226.9,
//         cost: 4497.146,
//         amount: 0.34,
//         filled: 0.34,
//         average: 13226.9,
//         remaining: 0,
//         fee: { cost: "11.69258", currency: "CAD" },
//         trades: [],
//         fees: [],
//     },
// ];

// Export the Trade type
export default Trade;
