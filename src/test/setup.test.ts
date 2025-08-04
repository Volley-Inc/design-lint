describe('Jest Setup', () => {
  it('should have Figma global mock available', () => {
    expect(global.figma).toBeDefined();
    expect(global.figma.ui.postMessage).toBeDefined();
  });

  it('should have parent global mock available', () => {
    expect(global.parent).toBeDefined();
    expect(global.parent.postMessage).toBeDefined();
  });

  it('should run a basic test', () => {
    expect(true).toBe(true);
  });
});
