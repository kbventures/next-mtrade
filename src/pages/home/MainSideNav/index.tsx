import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "./mainSideNav.module.scss";

const {
    mainSideNav,
    accountSettingsWrapper,
    accountSettingsTitle,
    settingsTabHeader,
    settingsTabHeaderTitle,
    settingsTabsContent,
    userSettingsItemWrapper,
    userSettingsItemLabel,
    userSettingsItemContent,
    userSettingsItemValue,
    userSettingsItemRightContent,
    userSettingsItemRightButton,
} = styles;

export default function MainSideNav() {
    return (
        <div className={mainSideNav}>
            <div className={accountSettingsWrapper}>
                <h4 className={accountSettingsTitle}>Account</h4>
                <div className={settingsTabHeader}>
                    <div className={settingsTabHeaderTitle}>Account</div>
                </div>
                <div className={settingsTabsContent}>
                    <div>
                        <div className={userSettingsItemWrapper}>
                            <div className={userSettingsItemLabel}>
                                Username
                            </div>
                            <div className={userSettingsItemContent}>
                                <div className={userSettingsItemValue}>
                                    kbeaudin
                                </div>
                                <div className={userSettingsItemRightContent}>
                                    <button
                                        type="button"
                                        className={userSettingsItemRightButton}
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={userSettingsItemWrapper}>
                            <div className={userSettingsItemLabel}>
                                Password
                            </div>
                            <div className={userSettingsItemContent}>
                                <div className={userSettingsItemValue}>
                                    ********
                                </div>
                                <div className={userSettingsItemRightContent}>
                                    <button
                                        type="button"
                                        className={userSettingsItemRightButton}
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={userSettingsItemWrapper}>
                            <div className={userSettingsItemLabel}>Email</div>
                            <div className={userSettingsItemContent}>
                                <div className={userSettingsItemValue}>
                                    ********
                                </div>
                                <div className={userSettingsItemRightContent}>
                                    <button
                                        type="button"
                                        className={userSettingsItemRightButton}
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={userSettingsItemWrapper}>
                            <div className={userSettingsItemLabel}>
                                Language
                            </div>
                            <div className={userSettingsItemContent}>
                                <div className={userSettingsItemValue}>
                                    English
                                </div>
                                <div className={userSettingsItemRightContent}>
                                    <button
                                        type="button"
                                        className={userSettingsItemRightButton}
                                    >
                                        Language Selector Selector
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={userSettingsItemWrapper}>
                            <div className={userSettingsItemLabel} />
                            <div className={userSettingsItemContent}>
                                <div className={userSettingsItemValue}>
                                    Active
                                </div>
                                <div className={userSettingsItemRightButton}>
                                    <button
                                        type="button"
                                        className={userSettingsItemRightButton}
                                    >
                                        Deactivate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps({ locale }: { locale: string }) {
    // Fetch data from your API here and pass it as props
    //   const userData = await fetchDataFromAPI()

    return {
        props: {
            ...(await serverSideTranslations(locale, "common")),
        },
    };
}
