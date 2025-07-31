// Figma node type mocks
export const mockTextNode = (overrides: Partial<TextNode> = {}): TextNode =>
  ({
    id: "1:1",
    name: "Text Node",
    type: "TEXT",
    characters: "Sample text",
    fontSize: 16,
    fontName: { family: "Inter", style: "Regular" },
    fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }],
    visible: true,
    opacity: 1,
    locked: false,
    parent: null,
    removed: false,
    children: [],
    ...overrides
  } as any);

export const mockFrameNode = (overrides: Partial<FrameNode> = {}): FrameNode =>
  ({
    id: "2:1",
    name: "Frame",
    type: "FRAME",
    children: [],
    fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
    strokes: [],
    strokeWeight: 0,
    visible: true,
    opacity: 1,
    locked: false,
    parent: null,
    removed: false,
    width: 800,
    height: 600,
    ...overrides
  } as any);

export const mockRectangleNode = (
  overrides: Partial<RectangleNode> = {}
): RectangleNode =>
  ({
    id: "3:1",
    name: "Rectangle",
    type: "RECTANGLE",
    fills: [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }],
    strokes: [],
    strokeWeight: 0,
    visible: true,
    opacity: 1,
    locked: false,
    parent: null,
    removed: false,
    width: 100,
    height: 100,
    ...overrides
  } as any);

export const mockGroupNode = (overrides: Partial<GroupNode> = {}): GroupNode =>
  ({
    id: "4:1",
    name: "Group",
    type: "GROUP",
    children: [],
    visible: true,
    opacity: 1,
    locked: false,
    parent: null,
    removed: false,
    ...overrides
  } as any);

// Color and style mocks
export const mockRGBColor = (r = 0, g = 0, b = 0): RGB => ({ r, g, b });

export const mockSolidPaint = (color: RGB = mockRGBColor()): SolidPaint => ({
  type: "SOLID",
  color,
  opacity: 1,
  visible: true
});

// Error mocks for testing
export interface MockError {
  id: string;
  type: string;
  message: string;
  value?: string;
  node?: BaseNode;
}

export const mockError = (overrides: Partial<MockError> = {}): MockError => ({
  id: "1",
  type: "text-style",
  message: "Missing text style",
  ...overrides
});

// Figma API communication mocks
export const mockPostMessage = jest.fn();
export const mockOnMessage = jest.fn();

export const setupFigmaApiMocks = () => {
  global.figma = {
    ...global.figma,
    ui: {
      ...global.figma.ui,
      postMessage: mockPostMessage,
      onmessage: mockOnMessage
    }
  };

  // Reset mocks before each test
  beforeEach(() => {
    mockPostMessage.mockClear();
    mockOnMessage.mockClear();
  });
};
