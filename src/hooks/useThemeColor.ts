import { useEffect } from 'react';

export const useThemeColor = (color: string) => {
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (!metaThemeColor) return;

    metaThemeColor.setAttribute('content', color);
  }, [color]);
};
