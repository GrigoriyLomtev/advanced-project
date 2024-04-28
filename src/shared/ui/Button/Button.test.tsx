import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from './Button';

describe('Button', () => {
  test('test render', () => {
    render(
      <Button>TEST</Button>,
    );
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('class clear', () => {
    render(
      <Button variant={ButtonVariant.CLEAR}>TEST</Button>,
    );
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
