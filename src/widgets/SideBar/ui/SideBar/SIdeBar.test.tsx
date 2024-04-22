import { fireEvent, screen } from '@testing-library/react';
import {
  renderWithTransalation,
} from 'shared/lib/tests/renderWithTransalation/renderWithTransalation';
import { SideBar } from './SideBar';

describe('classNames', () => {
  test('with only first param', () => {
    renderWithTransalation(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('test toggle', () => {
    renderWithTransalation(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
