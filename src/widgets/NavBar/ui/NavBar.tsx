import styles from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkVariant } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavBarProps {
  className?: string;
}

export function NavBar(props: NavBarProps) {
  const { className } = props;
  return (
    <div className={classNames(styles.block)}>
      <ThemeSwitcher className={styles.themeSwitcher} />
      <div className={styles.navLinks}>
        <AppLink variant={AppLinkVariant.INVERTED} to={"/"}>
          main
        </AppLink>
        <AppLink variant={AppLinkVariant.INVERTED} to={"/about"}>
          about
        </AppLink>
      </div>
    </div>
  );
}
