import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from "qs";

interface KrakenApiRequest {
    pair?: string;
    type?: string;
    ordertype?: string;
    price?: number;
    volume?: number;
}

const krakenApiUrl = "https://api.kraken.com";
const apiKey = process.env.API_KEY || "";
const apiSecret = process.env.API_SECRET || "";

const getMessageSignature = (
    path: string,
    request: KrakenApiRequest,
    secret: string,
    nonce: number
) => {
    const message = qs.stringify(request);
    const secretBuffer = Buffer.from(secret, "base64");
    const hash = crypto.createHash("sha256");
    const hmac = crypto.createHmac("sha512", secretBuffer);
    const hashDigest = hash.update(nonce + message).digest("binary");
    return hmac.update(path + hashDigest, "binary").digest("base64");
};

export const getTradeHistory = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        const nonce = new Date().getTime() * 1000;

        const request: KrakenApiRequest = {
            // Define request parameters for trade history here
        };

        const path = "/0/private/TradesHistory";

        const signature = getMessageSignature(path, request, apiSecret, nonce);

        const additionalRequestData = {
            signature,
            key: apiKey,
            nonce,
        };

        const mergedRequest = { ...request, ...additionalRequestData };

        const headers: Record<string, string> = {
            "Content-Type": "application/x-www-form-urlencoded",
        };

        const response = await fetch(`${krakenApiUrl}${path}`, {
            method: "POST",
            headers,
            body: qs.stringify(mergedRequest),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();

        res.status(200).json(responseData);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("API Request Error:", error);
        res.status(500).json({
            error: "An error occurred while fetching trade history from Kraken.",
        });
    }
};

export const getAccountBalances = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        const nonce = new Date().getTime() * 1000;

        const request: KrakenApiRequest = {
            // Define request parameters for account balances here
        };

        const path = "/0/private/QueryLedgers"; // Replace with the actual endpoint

        const signature = getMessageSignature(path, request, apiSecret, nonce);

        const additionalRequestData = {
            signature,
            key: apiKey,
            nonce,
        };

        const mergedRequest = { ...request, ...additionalRequestData };

        const headers: Record<string, string> = {
            "Content-Type": "application/x-www-form-urlencoded",
        };

        const response = await fetch(`${krakenApiUrl}${path}`, {
            method: "POST",
            headers,
            body: qs.stringify(mergedRequest),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();

        res.status(200).json(responseData);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("API Request Error:", error);
        res.status(500).json({
            error: "An error occurred while fetching account balances from Kraken.",
        });
    }
};
