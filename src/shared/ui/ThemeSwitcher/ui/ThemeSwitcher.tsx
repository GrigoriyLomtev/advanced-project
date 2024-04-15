import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import PngChel from 'shared/assets/icons/carbon_user-avatar-filled.png';
import { Button, VariantButton } from 'shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant={VariantButton.CLEAR}
      className={classNames(styles.block, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
}
