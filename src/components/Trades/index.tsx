import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendar,
    faRefresh,
    faAngleDown,
    faAnglesLeft,
    faAngleLeft,
    faAnglesRight,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./trades.module.scss";
import TimeFramePopUp from "./Popup/index";
import DesktopTrades from "./DeskTopTrades/index";
import { Trade } from "../../types/trade";

const {
    app,
    dataSet,
    container,
    sectionHeader,
    sectionHeaderTitle,
    sectionHeaderTitleMain,
    sectionHeaderTimeRange,
    sectionHeaderTimeRangeIcon,
    sectionHeaderRow,
    sectionHeaderItem,
    sectionHeaderItemLabel,
    sectionHeaderPopoverWrapper,
    sectionHeaderPopoverTarget,
    sectionHeaderPopoverButton,
    sectionHeaderPopoverButtonText,
    sectionHeaderPopoverButtonSvg,
    columnsFilterWrapper,
    columnsFilterWrapperButton,
    columnsFilterWrapperButtonText,
    popoverWrapper,
    popoverTarget,
    popoverIcon,
    pagination,
    paginationGroup,
    paginationPage,
    paginationInput,
    paginationIcon,
    // collapsedTable,
    // collapsedTableItem,
    // textFormat,
    // amountGreenText,
    // amountFraction,
} = styles;

function Trades() {
    const [showPopup, setShowPopup] = useState(false);
    const [tradesData, setTradesData] = useState<Trade[]>();
    console.log("Initial tradesData state:", tradesData);

    const [error, setError] = useState<string | null>(null);

    const handleOpenMenu = useCallback(() => {
        // eslint-disable-next-line no-console
        // console.log("handleOpenMenu Clicked!");
        setShowPopup(true);
    }, []);

    const handleCloseMenu = useCallback(() => {
        // eslint-disable-next-line no-console
        // console.log("handleOpenClose Clicked!");
        setShowPopup(false);
    }, []);

    useEffect(() => {
        const fetchTradesData = async () => {
            try {
                const response = await fetch("/api/trades");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                console.log("data", data);
                // console.log("typeof data", Array.isArray(data));
                // console.log("typeof data", data[0]);

                setTradesData(data);
                // console.log("data", data);
                // console.log("trades", tradesData);
            } catch (err) {
                if (err instanceof Error) {
                    setError(`Error fetching Trades: ${err.message}`);
                } else {
                    setError("Unknown error occurred");
                }
            }
        };
        fetchTradesData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <div className={app}>
                <div className={dataSet}>
                    <div className={container}>
                        <div className={sectionHeader}>
                            <div className={sectionHeaderTitle}>
                                <span className={sectionHeaderTitleMain}>
                                    Public Trades
                                </span>
                            </div>
                            <div
                                className={sectionHeaderTimeRange}
                                onClick={() => handleOpenMenu()}
                                aria-hidden="true"
                            >
                                <FontAwesomeIcon
                                    size="1x"
                                    color="rgb(255, 255, 255)"
                                    icon={faCalendar}
                                    className={sectionHeaderTimeRangeIcon}
                                />
                                <span>APR 10 2023 - APR 24 2023</span>
                                {showPopup &&
                                    ReactDOM.createPortal(
                                        <TimeFramePopUp
                                            onClose={handleCloseMenu}
                                        />,
                                        document.body
                                    )}
                            </div>
                            <div className={sectionHeaderRow}>
                                <div className={sectionHeaderItem}>
                                    <div className={sectionHeaderItemLabel}>
                                        Symbol Filter
                                    </div>
                                    <span
                                        className={sectionHeaderPopoverWrapper}
                                    >
                                        <span
                                            className={
                                                sectionHeaderPopoverTarget
                                            }
                                        >
                                            <div>
                                                <button
                                                    className={
                                                        sectionHeaderPopoverButton
                                                    }
                                                    type="button"
                                                >
                                                    <span
                                                        className={
                                                            sectionHeaderPopoverButtonText
                                                        }
                                                    >
                                                        BTC:USD
                                                    </span>
                                                    <FontAwesomeIcon
                                                        size="1x"
                                                        color="rgb(255, 255, 255)"
                                                        icon={faAngleDown}
                                                        className={
                                                            sectionHeaderPopoverButtonSvg
                                                        }
                                                    />
                                                </button>
                                            </div>
                                        </span>
                                    </span>
                                </div>
                                <div className={columnsFilterWrapper}>
                                    <button
                                        className={columnsFilterWrapperButton}
                                        type="button"
                                    >
                                        <span
                                            className={
                                                columnsFilterWrapperButtonText
                                            }
                                        >
                                            Filter Columns
                                        </span>
                                    </button>
                                </div>
                                <span className={popoverWrapper}>
                                    <span className={popoverTarget}>
                                        <FontAwesomeIcon
                                            size="1x"
                                            color="rgb(255, 255, 255)"
                                            icon={faRefresh}
                                            className={popoverIcon}
                                        />
                                    </span>
                                </span>
                            </div>
                        </div>
                        <DesktopTrades tradesData={tradesData} />
                        <div className={pagination}>
                            <div className={paginationGroup}>
                                <FontAwesomeIcon
                                    size="xs"
                                    color="rgb(255, 255, 255)"
                                    icon={faAnglesLeft}
                                    className={paginationIcon}
                                />
                                <FontAwesomeIcon
                                    size="xs"
                                    color="rgb(255, 255, 255)"
                                    icon={faAngleLeft}
                                    className={paginationIcon}
                                />
                                <span className={paginationPage}>
                                    Page
                                    <input
                                        className={paginationInput}
                                        placeholder="1"
                                    />
                                    of 40
                                    <span>+</span>
                                </span>
                                <FontAwesomeIcon
                                    size="xs"
                                    color="rgb(255, 255, 255)"
                                    icon={faAnglesRight}
                                    className={paginationIcon}
                                />
                                <FontAwesomeIcon
                                    size="xs"
                                    color="rgb(255, 255, 255)"
                                    icon={faAngleRight}
                                    className={paginationIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trades;
