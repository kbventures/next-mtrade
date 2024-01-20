export interface KrakenClosedTrade {
    refid: string | null;
    userref: string | null;
    status: string;
    opentm: number;
    starttm: number;
    expiretm: number;
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
    reason: string | null;
    closetm: number;
}

export interface KrakenClosedTradeResponse {
    privateResponse: {
        closed: Record<string, KrakenClosedTrade>;
        count: number;
    };
}
