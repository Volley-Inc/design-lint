// Jest DOM extends Jest with custom matchers for DOM elements
import '@testing-library/jest-dom';

// Mock Figma Plugin API
(global as any).figma = {
  ui: {
    postMessage: jest.fn(),
    onmessage: jest.fn(),
    close: jest.fn(),
    show: jest.fn(),
    hide: jest.fn(),
    resize: jest.fn(),
    reposition: jest.fn(),
  },
  currentPage: {
    selection: [],
    findAll: jest.fn(),
    findOne: jest.fn(),
  },
  notify: jest.fn(),
  closePlugin: jest.fn(),
  showUI: jest.fn(),
  viewport: {
    center: { x: 0, y: 0 },
    zoom: 1,
  },
  on: jest.fn(),
  off: jest.fn(),
  clientStorage: {
    getAsync: jest.fn(),
    setAsync: jest.fn(),
  },
} as any;

// Mock parent for Figma plugin communication
(global as any).parent = {
  postMessage: jest.fn(),
} as any;

// Suppress console errors during tests unless explicitly needed
const originalError = console.error;
beforeAll(() => {
  console.error = (...args: any[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Warning: ReactDOM.render')) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
