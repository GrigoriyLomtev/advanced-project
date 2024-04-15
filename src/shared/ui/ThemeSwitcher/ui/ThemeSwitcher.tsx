import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, VariantButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant={VariantButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
}
