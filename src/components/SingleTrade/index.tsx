/* eslint-disable @typescript-eslint/no-inferrable-types */
import React from "react";
import { Trade } from "ccxt";
import styles from "./single-trade.module.scss";

const { textFormat, amountGreenText, amountFraction } = styles;

interface Props {
    trade: Trade | undefined;
}

// 24-04-23 15:44:17
function SingleTrade({ trade }: Props) {
    const timestampMilliseconds = trade?.timestamp; // Example timestamp
    let formattedTimestamp: string = "";
    if (timestampMilliseconds !== undefined) {
        // Create a new Date object using the timestamp
        const date = new Date(timestampMilliseconds);

        // Extract individual components of the date and time
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0
        const year = String(date.getFullYear()).slice(2); // Get last 2 digits of year
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        // Format the components into the desired string format
        formattedTimestamp = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    }
    return (
        <div className={styles.collapsedTableItem}>
            <div>
                <div>Time (+00:00)</div>
                <div>
                    <div className={textFormat}>{formattedTimestamp}</div>
                </div>
            </div>
            <div>
                <div>Type</div>
                <div>{trade?.side?.toUpperCase()}</div>
            </div>
            <div>
                <div>Price</div>
                <div className={amountGreenText}>
                    <span>{trade?.price}</span>
                    <span className={amountFraction} />
                </div>
            </div>
            <div>
                <div>Amount</div>
                <div className={amountGreenText}>
                    <span>-0</span>
                    <span className={amountFraction}>{trade?.amount}</span>
                </div>
            </div>
            <div>
                <div>Time (+00:00)</div>
                <div>
                    <div className={textFormat}>{formattedTimestamp}</div>
                </div>
            </div>
            <div>
                <div>Type</div>
                <div>{trade?.side?.toUpperCase()}</div>
            </div>
            <div>
                <div>Price</div>
                <div className={amountGreenText}>
                    <span>{trade?.price}</span>
                    <span className={amountFraction} />
                </div>
            </div>
            <div>
                <div>Amount</div>
                <div className={amountGreenText}>
                    <span>-0</span>
                    <span className={amountFraction}>{trade?.amount}</span>
                </div>
            </div>
        </div>
    );
}

export default SingleTrade;
