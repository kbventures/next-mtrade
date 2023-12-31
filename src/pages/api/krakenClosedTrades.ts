import { NextApiRequest, NextApiResponse } from "next";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import crypto from "crypto";
// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
require("dotenv").config();

function createAuthenticationSignature(
    apiPrivateKey: string,
    apiPath: string,
    endPointName: string,
    nonce: string,
    apiPostBodyData: string
) {
    const apiPost = nonce + apiPostBodyData;
    const secret = Buffer.from(apiPrivateKey, "base64");
    const sha256 = crypto.createHash("sha256");
    const hash256 = sha256.update(apiPost).digest("binary");
    const hmac512 = crypto.createHmac("sha512", secret);
    return hmac512
        .update(apiPath + endPointName + hash256, "binary")
        .digest("base64");
}

async function queryPrivateEndpoint(
    endPointName: string,
    inputParameters: string,
    apiPublicKey: string,
    apiPrivateKey: string
) {
    const baseDomain = "https://api.kraken.com";
    const privatePath = "/0/private/";

    const apiEndpointFullURL = `${
        baseDomain + privatePath + endPointName
    }?${inputParameters}`;
    const nonce = Date.now().toString();
    const apiPostBodyData = `nonce=${nonce}&${inputParameters}`;

    const signature = createAuthenticationSignature(
        apiPrivateKey,
        privatePath,
        endPointName,
        nonce,
        apiPostBodyData
    );

    const httpOptions = {
        headers: { "API-Key": apiPublicKey, "API-Sign": signature },
    };

    const jsonData = await axios.post(
        apiEndpointFullURL,
        apiPostBodyData,
        httpOptions
    );

    return jsonData.data.result;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const apiPublicKey = process.env.API_PUBLIC_KEY;
    const apiPrivateKey = process.env.API_PRIVATE_KEY;

    if (!apiPublicKey) {
        throw new Error(
            "API_PUBLIC_KEY is not defined in the environment variables."
        );
    }
    if (!apiPrivateKey) {
        throw new Error(
            "API_PRIVATE_KEY is not defined in the environment variables."
        );
    }

    try {
        const privateEndpoint = "ClosedOrders";
        const privateInputParameters = "";

        const privateResponse = await queryPrivateEndpoint(
            privateEndpoint,
            privateInputParameters,
            apiPublicKey,
            apiPrivateKey
        );
        // eslint-disable-next-line no-console
        // console.log("Private response", privateResponse);
        // eslint-disable-next-line no-console
        // res.status(200).json({ message: "Success", privateResponse }); // Sending a success response with privateResponse
        res.status(200).json({ privateResponse }); // Sending a success response with privateResponse
    } catch (e) {
        throw new Error("An exception occured.");
    }
}

// Expected Result
// {
//   closed: {
//     'OCOIRM-3AVHM-7B2YLW': {
//       refid: null,
//       userref: null,
//       status: 'closed',
//       opentm: 1588830213.657734,
//       starttm: 0,
//       expiretm: 0,
//       descr: [Object],
//       vol: '0.34000000',
//       vol_exec: '0.34000000',
//       cost: '4497.14600',
//       fee: '11.69258',
//       price: '13226.9',
//       stopprice: '0.00000',
//       limitprice: '0.00000',
//       misc: '',
//       oflags: 'fciq',
//       reason: null,
//       closetm: 1588830213.6665378
//     }
//   },
//   count: 1
// }

// {
//     closed: {
//         "OCOIRM-3AVHM-7B2YLW": {
//             refid: null,
//             userref: null,
//             status: "closed",
//             opentm: 1588830213.657734,
//             starttm: 0,
//             expiretm: 0,
//             descr: [Object],
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
//             closetm: 1588830213.6665378,
//         },
//     },
//     count: 1,
// },
