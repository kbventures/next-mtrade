const axios = require("axios");
const crypto = require('crypto');
const WebSocket = require('ws');
require('dotenv').config();


const Main = async () => {

    // Load API keys from environment variables
    const apiPublicKey = process.env.API_PUBLIC_KEY;
    const apiPrivateKey = process.env.API_PRIVATE_KEY;
    
    try {

        console.log("|=========================================|");
        console.log("|      KRAKEN.COM NODEJS TEST APP         |");
        console.log("|=========================================|");
        console.log();

        /*
        * PRIVATE REST API Examples
        */

        if (1 == 1) {
            let privateResponse = "";
            let privateEndpoint = "ClosedOrders" 
            let privateInputParameters = ""


            privateResponse = await QueryPrivateEndpoint(privateEndpoint, 
                privateInputParameters,
                apiPublicKey,
                apiPrivateKey);
            
            console.log(privateResponse);
        }

        console.log("|=======================================|");
        console.log("| END OF PROGRAM - HAVE A GOOD DAY :)   |");
        console.log("|=======================================|");
        console.log("\n");

    }
    catch (e) {
        console.log();
        console.log("AN EXCEPTION OCCURED :(");
        console.log(e);
    }


    /*
    * Private REST API Endpoints
    */

    async function QueryPrivateEndpoint(endPointName, 
                                        inputParameters, 
                                        apiPublicKey, 
                                        apiPrivateKey) {
        const baseDomain = "https://api.kraken.com";
        const privatePath = "/0/private/";
        
        const apiEndpointFullURL = baseDomain + privatePath + endPointName + "?" + inputParameters;
        const nonce = Date.now().toString();
        const apiPostBodyData = "nonce=" + nonce + "&" + inputParameters;
       
        const signature = CreateAuthenticationSignature(apiPrivateKey,
                                                        privatePath,
                                                        endPointName,
                                                        nonce,
                                                        apiPostBodyData);
        
        const httpOptions =
        {
            headers: { 'API-Key': apiPublicKey, 'API-Sign': signature }
        };

        console.log("Request URL:", apiEndpointFullURL);
        console.log("Request Body:", apiPostBodyData);
        console.log("Request Options:", httpOptions);
        console.log("Request Options Headers:", httpOptions.headers);


        let jsonData = await axios.post(apiEndpointFullURL, apiPostBodyData, httpOptions);

        return jsonData.data.result;
    }


    /*
    * Authentication Algorithm
    */

    function CreateAuthenticationSignature(apiPrivateKey, 
                                            apiPath, 
                                            endPointName, 
                                            nonce,
                                            apiPostBodyData){

        const apiPost = nonce + apiPostBodyData;
        const secret = Buffer.from(apiPrivateKey, 'base64');
        const sha256 = crypto.createHash('sha256');
        const hash256 = sha256.update(apiPost).digest('binary');
        const hmac512 = crypto.createHmac('sha512', secret);
        const signatureString = hmac512.update(apiPath + endPointName + hash256, 'binary').digest('base64');
        return signatureString;
    }
};


Main();

// import { NextApiRequest, NextApiResponse } from "next";
// import crypto from "crypto";
// // eslint-disable-next-line import/no-extraneous-dependencies
// import qs from "qs";

// interface KrakenApiRequest {
//     pair?: string;
//     type?: string;
//     ordertype?: string;
//     price?: number;
//     volume?: number;
// }

// const krakenApiUrl = "https://api.kraken.com";
// const apiKey = process.env.API_KEY || "";
// const apiSecret = process.env.API_SECRET || "";

// const getMessageSignature = (
//     path: string,
//     request: KrakenApiRequest,
//     secret: string,
//     nonce: number
// ) => {
//     const message = qs.stringify(request);
//     const secretBuffer = Buffer.from(secret, "base64");
//     const hash = crypto.createHash("sha256");
//     const hmac = crypto.createHmac("sha512", secretBuffer);
//     const hashDigest = hash.update(nonce + message).digest("binary");
//     return hmac.update(path + hashDigest, "binary").digest("base64");
// };

// export const getTradeHistory = async (
//     req: NextApiRequest,
//     res: NextApiResponse
// ) => {
//     try {
//         const nonce = new Date().getTime() * 1000;

//         const request: KrakenApiRequest = {
//             // Define request parameters for trade history here
//         };

//         const path = "/0/private/TradesHistory";

//         const signature = getMessageSignature(path, request, apiSecret, nonce);

//         const additionalRequestData = {
//             signature,
//             key: apiKey,
//             nonce,
//         };

//         const mergedRequest = { ...request, ...additionalRequestData };

//         const headers: Record<string, string> = {
//             "Content-Type": "application/x-www-form-urlencoded",
//         };

//         const response = await fetch(`${krakenApiUrl}${path}`, {
//             method: "POST",
//             headers,
//             body: qs.stringify(mergedRequest),
//         });

//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }

//         const responseData = await response.json();
//         console.log("response data", responseData);

//         res.status(200).json(responseData);
//     } catch (error) {
//         // eslint-disable-next-line no-console
//         console.error("API Request Error:", error);
//         res.status(500).json({
//             error: "An error occurred while fetching trade history from Kraken.",
//         });
//     }
// };

// export const getAccountBalances = async (
//     req: NextApiRequest,
//     res: NextApiResponse
//     // eslint-disable-next-line consistent-return
// ) => {
//     try {
//         const nonce = new Date().getTime() * 1000;

//         const request: KrakenApiRequest = {
//             // Define request parameters for account balances here
//         };

//         const path = "/0/private/QueryLedgers"; // Replace with the actual endpoint

//         const signature = getMessageSignature(path, request, apiSecret, nonce);

//         const additionalRequestData = {
//             signature,
//             key: apiKey,
//             nonce,
//         };

//         const mergedRequest = { ...request, ...additionalRequestData };

//         const headers: Record<string, string> = {
//             "Content-Type": "application/x-www-form-urlencoded",
//         };

//         const response = await fetch(`${krakenApiUrl}${path}`, {
//             method: "POST",
//             headers,
//             body: qs.stringify(mergedRequest),
//         });

//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }

//         console.log("response", response);
//         // console.log("response result", response.result);

//         const responseData = await response.json();
//         console.log("responseData", responseData);

//         return res.json(responseData);
//     } catch (error) {
//         // eslint-disable-next-line no-console
//         console.error("API Request Error:", error);
//         res.status(500).json({
//             error: "An error occurred while fetching account balances from Kraken.",
//         });
//     }
// };
