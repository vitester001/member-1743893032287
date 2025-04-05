import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting with name when no greeting provided', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting with name when greeting provided', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should handle empty string name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should handle empty string greeting', () => {
    // Empty string greeting should fall back to default greeting
    expect(greet('John', '')).toBe('Hello, John!');
  });

  it('should handle special characters in name', () => {
    expect(greet('John@#$')).toBe('Hello, John@#$!');
  });

  it('should handle special characters in greeting', () => {
    expect(greet('John', 'Hey@#$')).toBe('Hey@#$, John!');
  });

  it('should handle whitespace in name', () => {
    expect(greet('   John   ')).toBe('Hello,    John   !');
  });

  it('should handle whitespace in greeting', () => {
    expect(greet('John', '   Hi   ')).toBe('   Hi   , John!');
  });
});
