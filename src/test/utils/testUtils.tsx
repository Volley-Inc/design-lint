import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Custom render function that includes common providers
export const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  // Add any providers here (Context, Theme, etc.)
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
  };

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
};

// Re-export everything from testing library
export * from '@testing-library/react';

// Override render with custom render
export { customRender as render };

// Test data generators
export const generateMockErrors = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `error-${i}`,
    type: ['text-style', 'color-style', 'effect-style'][i % 3],
    message: `Error message ${i}`,
    value: `Value ${i}`,
    node: {
      id: `node-${i}`,
      name: `Node ${i}`,
      type: 'TEXT' as const,
    },
  }));
};

// Common test assertions
export const expectToBeAccessible = async (container: HTMLElement) => {
  const results = await import('jest-axe').then(({ axe }) => axe(container));
  expect(results).toHaveNoViolations();
};

// Mock timers helper
export const useFakeTimers = () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  return {
    advanceTimersByTime: (time: number) => jest.advanceTimersByTime(time),
    runAllTimers: () => jest.runAllTimers(),
  };
};
