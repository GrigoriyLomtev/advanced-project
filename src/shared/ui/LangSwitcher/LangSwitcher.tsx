import { useTranslation } from "react-i18next";
import styles from "./LangSwitcher.module.scss";
import { Button, VariantButton } from "../Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher(props: LangSwitcherProps) {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      variant={VariantButton.CLEAR}
      className={classNames(styles.block, {}, [className])}
      onClick={toggle}
    >
      {t("Language")}
    </Button>
  );
}
