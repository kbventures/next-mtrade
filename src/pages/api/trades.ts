// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// pages/api/trades.ts
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import ccxt from "ccxt";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const apiKeys = await prisma.apiKey.findMany();
        // Initialize an object to store trades with associated API key information
        const tradesByExchangeAndApiKey: Record<string, { trades: unknown[] }> =
            {};

        // console.log("apiKeys", apiKeys);
        // | apiKeys [
        //     mtrade-app    |   {
        //     mtrade-app    |     id: 'cluk19ack0001lh3wb9wag1br',
        //     mtrade-app    |     keyAlias: 'Kraken Testing',
        //     mtrade-app    |     publicKey: '8kAC/5horFHKdLin4eiCb+t8Dr8E4oCEwM97+M86t8DZaavJ3ArJVbr4',
        //     mtrade-app    |     secretKey: 'zvKaDJsNgxiOx1gE/usnfk2/iYd17CFT+yX3GwpiV4HlkaAqdrPaGO723zDZCwqUaME/c0skb8kqjp+8WMgXAQ==',
        //     mtrade-app    |     exchangeId: '8ef70434-92f0-41dd-8df6-3e520129c34c',
        //     mtrade-app    |     userId: 'cluiwp8xr0000o33wratdt5yd'
        //     mtrade-app    |   },
        //     mtrade-app    |   {
        //     mtrade-app    |     id: 'cluk1ecji0003lh3wn2qhrza8',
        //     mtrade-app    |     keyAlias: 'Commex Testing',
        //     mtrade-app    |     publicKey: '5A4D1D25AE95EB502061C061CAB3E3AB50A76CAC7D89FA3A4EB0B1E1157C1415',
        //     mtrade-app    |     secretKey: 'zvKaDJsNgxiOx1gE/usnfk2/iYd17CFT+yX3GwpiV4HlkaAqdrPaGO723zDZCwqUaME/c0skb8kqjp+8WMgXAQ==',
        //     mtrade-app    |     exchangeId: 'f8797c61-acf3-4157-9332-8e0eea186541',
        //     mtrade-app    |     userId: 'cluiwp8xr0000o33wratdt5yd'
        //     mtrade-app    |   }
        //     mtrade-app    | ]

        // eslint-disable-next-line no-restricted-syntax
        for (const { publicKey, secretKey, exchangeId } of apiKeys) {
            let exchangeName = "";
            let apiKeyInfo = {};

            if (
                exchangeId === "8ef70434-92f0-41dd-8df6-3e520129c34c"
                // exchangeId === "f8797c61-acf3-4157-9332-8e0eea186541"
            ) {
                exchangeName = "kraken";
                apiKeyInfo = { exchangeId, publicKey, secretKey, exchangeName };
            }
            // Need to be refactored to name instead of exchange id

            if (exchangeName !== "") {
                const tempApiKey = apiKeyInfo.publicKey;
                const tempSecret = apiKeyInfo.secretKey;
                // eslint-disable-next-line new-cap
                const kraken = new ccxt[exchangeName]({
                    apiKey: tempApiKey,
                    secret: tempSecret,
                });

                // const kraken = new ccxt.kraken({
                //     apiKey: "8kAC/5horFHKdLin4eiCb+t8Dr8E4oCEwM97+M86t8DZaavJ3ArJVbr4",
                //     secret: "zvKaDJsNgxiOx1gE/usnfk2/iYd17CFT+yX3GwpiV4HlkaAqdrPaGO723zDZCwqUaME/c0skb8kqjp+8WMgXAQ==",
                // });
                // This Works
                // const kraken = new ccxt.kraken({
                //     apiKey: "8kAC/5horFHKdLin4eiCb+t8Dr8E4oCEwM97+M86t8DZaavJ3ArJVbr4",
                //     secret: "zvKaDJsNgxiOx1gE/usnfk2/iYd17CFT+yX3GwpiV4HlkaAqdrPaGO723zDZCwqUaME/c0skb8kqjp+8WMgXAQ==",
                // });
                // eslint-disable-next-line no-await-in-loop
                const trades = await kraken.fetchClosedOrders();
                // console.log(trades);
                // eslint-disable-next-line no-await-in-loop
                // console.log(await exchange.fetchClosedOrders());

                // eslint-disable-next-line no-console
                // console.log("Trades is working?", trades);

                // Store trades along with API key information
                // console.log("Hello world!")
                // console.log("trades", trades);
                tradesByExchangeAndApiKey[apiKeyInfo.exchangeName] = {
                    trades,
                };
                // console.log(
                //     "tradesByExchangeApiKey",
                //     tradesByExchangeAndApiKey
                // );
            }
        }

        // res.status(200).json(tradesByExchangeAndApiKey);
        // console.dir("har har", tradesByExchangeAndApiKey, { depth: null });
        // res.status(200).json(tradesByExchangeAndApiKey);
        res.status(200).json(tradesByExchangeAndApiKey);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error fetching API keys: ${error.message}`);
        } else {
            throw new Error(`Error fetching API keys: Unknown error occurred`);
        }
    }
}

// // upon instantiation
// let commex = new ccxt.commex ({
//     apiKey: '5A4D1D25AE95EB502061C061CAB3E3AB50A76CAC7D89FA3A4EB0B1E1157C1415',
//     secret: 'D598291CF01C76F70A73FAAF52B18B184AAFDDAD4F80356C0CB30162FCE5841A',
//   })
//   let kraken = new ccxt.kraken ({
//     apiKey: '8kAC/5horFHKdLin4eiCb+t8Dr8E4oCEwM97+M86t8DZaavJ3ArJVbr4',
//     secret: 'zvKaDJsNgxiOx1gE/usnfk2/iYd17CFT+yX3GwpiV4HlkaAqdrPaGO723zDZCwqUaME/c0skb8kqjp+8WMgXAQ==',
//   })
