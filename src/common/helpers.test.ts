import { findStickerIcon, findStickerThemeVariant } from "./helpers";

describe('helpers', () => {
  describe('findStickerThemeVariant', () => {
    test('given variant from path, return the variant name', () => {
      expect(findStickerThemeVariant('yellow')).toEqual('yellow');
      expect(findStickerThemeVariant('blue')).toEqual('blue');
      expect(findStickerThemeVariant('shouldNotFind')).toBeUndefined();
    });

    test('given icon from path, return the icon name', () => {
      expect(findStickerIcon('wave')).toEqual('wave');
      expect(findStickerIcon('shouldNotFind')).toBeUndefined();
    });
  });
});
