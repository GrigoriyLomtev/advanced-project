import { useState } from "react";
import styles from "./SideBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SideBarProps {
  className?: string;
}

export function SideBar(props: SideBarProps) {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(styles.block, { [styles.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <button onClick={handleToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher className={styles.themeSwitcher} />
      </div>
    </div>
  );
}
