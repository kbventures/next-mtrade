import React from "react";
// eslint-disable-next-line import/no-unresolved
import styles from "./desk-top-trades.module.scss";
import SingleTrade from "../../SingleTrade/index";

const {
    collapsedTable,
    // collapsedTableItem,
    // textFormat,
    // amountGreenText,
    // amountFraction,
    tableContainer,
} = styles;

function DesktopTrades() {
    return (
        <div>
            <div className={tableContainer} />
            <div className={collapsedTable}>
                {/* <div className={collapsedTableItem}>
                    <div>
                        <div>Time (+00:00)</div>
                        <div>
                            <div className={textFormat}>24-04-23 15:44:17</div>
                        </div>
                    </div>
                    <div>
                        <div>Type</div>
                        <div>BUY</div>
                    </div>
                    <div>
                        <div>Price</div>
                        <div>
                            <div className={amountGreenText}>
                                <span>27269</span>.
                                <span className={amountFraction} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Amount</div>
                        <div className={amountGreenText}>
                            <span>-0</span>.
                            <span className={amountFraction}>01500000</span>
                        </div>
                    </div>
                    <div>
                        <div>Time (+00:00)</div>
                        <div>
                            <div className={textFormat}>24-04-23 15:44:17</div>
                        </div>
                    </div>
                    <div>
                        <div>Type</div>
                        <div>BUY</div>
                    </div>
                    <div>
                        <div>Price</div>
                        <div>
                            <div className={amountGreenText}>
                                <span>27269</span>.
                                <span className={amountFraction} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Amount</div>
                        <div className={amountGreenText}>
                            <span>-0</span>.
                            <span className={amountFraction}>01500000</span>
                        </div>
                    </div>
                    <div>
                        <div>Time (+00:00)</div>
                        <div>
                            <div className={textFormat}>24-04-23 15:44:17</div>
                        </div>
                    </div>
                    <div>
                        <div>Type</div>
                        <div>BUY</div>
                    </div>
                    <div>
                        <div>Price</div>
                        <div>
                            <div className={amountGreenText}>
                                <span>27269</span>.
                                <span className={amountFraction} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Amount</div>
                        <div className={amountGreenText}>
                            <span>-0</span>.
                            <span className={amountFraction}>01500000</span>
                        </div>
                    </div>
                    <div>
                        <div>Time (+00:00)</div>
                        <div>
                            <div className={textFormat}>24-04-23 15:44:17</div>
                        </div>
                    </div>
                    <div>
                        <div>Type</div>
                        <div>BUY</div>
                    </div>
                    <div>
                        <div>Price</div>
                        <div>
                            <div className={amountGreenText}>
                                <span>27269</span>.
                                <span className={amountFraction} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Amount</div>
                        <div className={amountGreenText}>
                            <span>-0</span>.
                            <span className={amountFraction}>01500000</span>
                        </div>
                    </div>
                    <div>
                        <div>Time (+00:00)</div>
                        <div>
                            <div className={textFormat}>24-04-23 15:44:17</div>
                        </div>
                    </div>
                    <div>
                        <div>Type</div>
                        <div>BUY</div>
                    </div>
                    <div>
                        <div>Price</div>
                        <div>
                            <div className={amountGreenText}>
                                <span>27269</span>.
                                <span className={amountFraction} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Amount</div>
                        <div className={amountGreenText}>
                            <span>-0</span>.
                            <span className={amountFraction}>01500000</span>
                        </div>
                    </div>
                    <div>
                        <div>Time (+00:00)</div>
                        <div>
                            <div className={textFormat}>24-04-23 15:44:17</div>
                        </div>
                    </div>
                    <div>
                        <div>Type</div>
                        <div>BUY</div>
                    </div>
                    <div>
                        <div>Price</div>
                        <div>
                            <div className={amountGreenText}>
                                <span>27269</span>.
                                <span className={amountFraction} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Amount</div>
                        <div className={amountGreenText}>
                            <span>-0</span>.
                            <span className={amountFraction}>01500000</span>
                        </div>
                    </div>
                </div> */}
                <SingleTrade />
            </div>
        </div>
    );
}

export default DesktopTrades;

// import React from "react";
// import styles from "./desk-top-trades.module.scss";
// import ExchangeTrade from "../../../types/exchangeTrade";

// const {
//     collapsedTable,
//     collapsedTableItem,
//     textFormat,
//     amountGreenText,
//     amountFraction,
//     tableContainer,
// } = styles;

// interface DesktopTradesProps {
//     tradesData: {
//         [exchangeName: string]: ExchangeTrade[];
//     };
// }

// function DesktopTrades({ tradesData }: DesktopTradesProps) {
//     return (
//         <div>
//             <div className={tableContainer}>
//                 <div className={collapsedTable}>
//                     {Object.entries(tradesData).map(
//                         ([exchangeName, trades]) => (
//                             <div
//                                 className={collapsedTableItem}
//                                 key={exchangeName}
//                             >
//                                 {trades.map(trade => (
//                                     <div key={trade.id}>
//                                         <div>
//                                             <div>Exchange</div>
//                                             <div>
//                                                 <div className={textFormat}>
//                                                     {exchangeName}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div>Time (+00:00)</div>
//                                             <div>
//                                                 <div className={textFormat}>
//                                                     {new Date(
//                                                         trade.datetime
//                                                     ).toLocaleString()}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div>Type</div>
//                                             <div>
//                                                 {trade.side.toUpperCase()}
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div>Price</div>
//                                             <div className={amountGreenText}>
//                                                 <span>{trade.price}</span>.
//                                                 <span
//                                                     className={amountFraction}
//                                                 >
//                                                     {trade.info?.vol_exec}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div>Amount</div>
//                                             <div className={amountGreenText}>
//                                                 <span>{trade.info?.vol}</span>.
//                                                 <span
//                                                     className={amountFraction}
//                                                 >
//                                                     {trade.filled}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         )
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DesktopTrades;
