import React from "react";
// eslint-disable-next-line import/no-unresolved
import styles from "./desk-top-trades.module.scss";

const {
    collapsedTable,
    collapsedTableItem,
    textFormat,
    amountGreenText,
    amountFraction,
    tableContainer,
} = styles;

function DesktopTrades() {
    return (
        <div>
            <div className={tableContainer} />
            <div className={collapsedTable}>
                <div className={collapsedTableItem}>
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
                </div>
            </div>
        </div>
    );
}

export default DesktopTrades;
