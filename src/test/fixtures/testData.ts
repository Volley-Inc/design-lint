// Common test data fixtures

export const mockErrors = {
  textStyle: {
    id: 'text-1',
    type: 'text-style',
    message: 'Text style not found in library',
    value: 'Heading 1',
    node: {
      id: 'node-1',
      name: 'Header Text',
      type: 'TEXT',
    },
  },
  fillStyle: {
    id: 'fill-1',
    type: 'fill-style',
    message: 'Fill style not found in library',
    value: 'Primary Blue',
    node: {
      id: 'node-2',
      name: 'Button Background',
      type: 'RECTANGLE',
    },
  },
  strokeStyle: {
    id: 'stroke-1',
    type: 'stroke-style',
    message: 'Stroke style not found in library',
    value: 'Border Dark',
    node: {
      id: 'node-3',
      name: 'Card Border',
      type: 'FRAME',
    },
  },
  effectStyle: {
    id: 'effect-1',
    type: 'effect-style',
    message: 'Effect style not found in library',
    value: 'Drop Shadow',
    node: {
      id: 'node-4',
      name: 'Modal Container',
      type: 'FRAME',
    },
  },
};

export const mockBulkErrors = [
  {
    id: 'bulk-1',
    name: 'Login Screen',
    errors: [mockErrors.textStyle, mockErrors.fillStyle],
  },
  {
    id: 'bulk-2',
    name: 'Dashboard',
    errors: [mockErrors.strokeStyle, mockErrors.effectStyle],
  },
  {
    id: 'bulk-3',
    name: 'Settings Page',
    errors: [mockErrors.textStyle],
  },
];

export const mockIgnoredErrors = {
  'node-1': new Set(['Heading 1']),
  'node-3': new Set(['Border Dark']),
};

export const mockSettings = {
  ignoreList: ['node-1', 'node-3'],
  checkTextStyles: true,
  checkFillStyles: true,
  checkStrokeStyles: true,
  checkEffectStyles: true,
};

export const mockStyleSuggestions = [
  {
    name: 'Heading 1',
    key: 'heading-1-key',
    description: 'Main heading style',
  },
  {
    name: 'Body Text',
    key: 'body-text-key',
    description: 'Regular paragraph text',
  },
  {
    name: 'Caption',
    key: 'caption-key',
    description: 'Small descriptive text',
  },
];
