// components/Translation/index.tsx
import { useTranslation } from "next-i18next";

function Translation() {
    const { t } = useTranslation();
    return (
        <div className="container">
            <h1>{t("Hello")}</h1>
            <p>
                {t("Welcome to")} Wesionary {t("Team")}
            </p>
        </div>
    );
}
export default Translation;
