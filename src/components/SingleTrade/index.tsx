import React from "react";
import styles from "./single-trade.module.scss";
import {Trade} from "../../types/trade";

const { textFormat, amountGreenText, amountFraction } = styles;

interface Props{
    trade: Trade|undefined;
}


function SingleTrade({trade}: Props) {
    console.log("Single Trade:", trade )
    return (
        <div className={styles.collapsedTableItem}>
            <div>
                <div>Time (+00:00)</div>
                <div>
                    <div className={textFormat}>{trade?.datetime}</div>
                </div>
            </div>
            <div>
                <div>Type</div>
                <div>BUY</div>
            </div>
            <div>
                <div>Price</div>
                <div className={amountGreenText}>
                    <span>27269</span>.
                    <span className={amountFraction} />
                </div>
            </div>
            <div>
                <div>Amount</div>
                <div className={amountGreenText}>
                    <span>-0</span>.
                    <span className={amountFraction}>01500000</span>
                </div>
            </div>
        </div>
    );
}

export default SingleTrade;
