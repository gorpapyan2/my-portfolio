import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { describe, expect, it, vi } from 'vitest';
import { Link, MemoryRouter, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './ScrollToTop';

function TestRoutes() {
  return (
    <MemoryRouter initialEntries={['/about']}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route
          path="/about"
          element={
            <div>
              <Link to="/">Go Home</Link>
            </div>
          }
        />
      </Routes>
    </MemoryRouter>
  );
}

describe('ScrollToTop', () => {
  it('scrolls to top on navigation', async () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});

    render(<TestRoutes />);
    scrollToSpy.mockClear();

    await userEvent.click(screen.getByRole('link', { name: 'Go Home' }));

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'auto' });
    scrollToSpy.mockRestore();
  });

  it('sets scroll restoration to manual while mounted', () => {
    const original = window.history.scrollRestoration;
    window.history.scrollRestoration = 'auto';
    const previous = window.history.scrollRestoration;

    const { unmount } = render(
      <MemoryRouter>
        <ScrollToTop />
      </MemoryRouter>
    );

    expect(window.history.scrollRestoration).toBe('manual');

    unmount();
    expect(window.history.scrollRestoration).toBe(previous);
    window.history.scrollRestoration = original;
  });
});
