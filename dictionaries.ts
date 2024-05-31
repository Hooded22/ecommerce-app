import 'server-only';
import { Locale } from 'next/dist/compiled/@vercel/og/satori';

export type Language = 'en' | 'pl';
export type Dictionary = typeof import('@/dictionaries/en.json');

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  pl: () => import('@/dictionaries/pl.json').then((module) => module.default),
};

export const getDictionary = async (locale: Language) => dictionaries[locale]();
