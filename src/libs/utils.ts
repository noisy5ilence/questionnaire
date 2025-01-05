import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const interpolate = (template: string, values: Answers): string => {
  return template
    .replace(/{(.*?)}/g, (_, templateKey: string) => {
      const isUpperCase = templateKey[0] === templateKey[0].toUpperCase();
      const key = `${templateKey.charAt(0).toLowerCase()}${templateKey.slice(1)}`;

      const value = values[key]?.substitution ?? values[key]?.answer;

      if (!value) return '';

      return `${value.charAt(0)[isUpperCase ? 'toUpperCase' : 'toLowerCase']()}${value.slice(1)}`;
    })
    .replace(/\s+/g, ' ')
    .trim();
};
