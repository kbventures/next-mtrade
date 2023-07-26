import Link from "next/link";
import NextImage from "next/image";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line import/no-extraneous-dependencies
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import SecurityImg from "@/images/icon-security.png";
import CryptoApiImg from "@/images/icon-exchange.png";
import TradeAnalysisImg from "@/images/icon-customizable_interface.png";
import LiveData from "@/images/icon-margin_trading.png";
import HistoricalAnalysis from "@/images/icon-order_type.png";

import styles from "./features.module.scss";

const {
    features,
    ContentWrapper,
    Title,
    SubTitle,
    FeaturesList,
    FeatureListItem,
    FeatureInnerItem,
    cardTitle,
    ListContent,
    FeatureImg,
    ReadMoreLink,
    link,
    LinkText,
} = styles;

function Features() {
    const { t } = useTranslation("features");

    return (
        <section className={features}>
            <div className={ContentWrapper}>
                <p className={Title}>{t("features")}</p>
                <p className={SubTitle}>{t("featuresTitle")}</p>
                <ul className={FeaturesList}>
                    <li className={FeatureListItem}>
                        <NextImage
                            src={TradeAnalysisImg}
                            className={FeatureImg}
                            alt="Trade Analysis"
                        />
                        <div className={FeatureInnerItem}>
                            <h1 className={cardTitle}>{t("tradeAnalysis")}</h1>
                            <p className={ListContent}>
                                {t("tradeAnalysisContent")}
                            </p>
                        </div>
                    </li>
                    <li className={FeatureListItem}>
                        <NextImage
                            src={CryptoApiImg}
                            className={FeatureImg}
                            alt="Crypto API Intergration"
                        />
                        <div className={FeatureInnerItem}>
                            <h1 className={cardTitle}>
                                {t("apiIntergration")}
                            </h1>
                            <p className={ListContent}>
                                {t("apiIntergrationContent")}
                            </p>
                        </div>
                    </li>
                    <li className={FeatureListItem}>
                        <NextImage
                            src={HistoricalAnalysis}
                            className={FeatureImg}
                            alt="Historical Analysis"
                        />
                        <div className={FeatureInnerItem}>
                            <h1 className={cardTitle}>{t("historicalData")}</h1>
                            <p className={ListContent}>
                                {t("historicalDataContent")}
                            </p>
                        </div>
                    </li>
                    <li className={FeatureListItem}>
                        <NextImage
                            src={LiveData}
                            className={FeatureImg}
                            alt="Live Data"
                        />
                        <div className={FeatureInnerItem}>
                            <h1 className={cardTitle}>{t("liveData")}</h1>
                            <p className={ListContent}>
                                {t("liveDataContent")}
                            </p>
                        </div>
                    </li>
                    <li className={FeatureListItem}>
                        <NextImage
                            src={SecurityImg}
                            className={FeatureImg}
                            alt="Security"
                        />
                        <div className={FeatureInnerItem}>
                            <h1 className={cardTitle}>{t("security")}</h1>
                            <p className={ListContent}>
                                {t("securityContent")}
                            </p>
                        </div>
                    </li>
                </ul>
                <Link href="/" className={link}>
                    <p className={ReadMoreLink}>
                        <FontAwesomeIcon icon={faGreaterThan} />
                        <span className={LinkText}>{t("readMoreLink")}</span>
                    </p>
                </Link>
            </div>
        </section>
    );
}

export default Features;
