// Define a type for a single trade object within an exchange
type ExchangeTrade = {
    id: string;
    info: {
        id: string;
        refid: null | string;
        userref: null | number;
        status: "closed" | string;
        opentm: string;
        starttm: string;
        expiretm: string;
        descr: {
            pair: string;
            type: string;
            ordertype: string;
            price: string;
            price2: string;
            leverage: string;
            order: string;
            close: string;
        };
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
    status: "closed";
    symbol: string;
    type: "market" | string;
    timeInForce: "IOC";
    postOnly: boolean;
    side: "buy" | string;
    price: number;
    cost: number;
    amount: number;
    filled: number;
    average: number;
    remaining: number;
    fee: {
        cost: number;
        currency: "CAD";
    };
    trades: unknown[];
    fees: { cost: number; currency: string }[];
};

export default ExchangeTrade;
