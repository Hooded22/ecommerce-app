import { Metadata } from 'next';
import { getDictionary, Language } from '@/dictionaries';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({ params: { lang } }: { params: { lang: Language } }) {
  const dictionary = await getDictionary(lang);
  return <p>{dictionary.customers.title}</p>;
}
