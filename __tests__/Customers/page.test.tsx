import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/app/[lang]/dashboard/customers/page';

describe('Page', () => {
  it('renders a heading', async () => {
    render(await Page({ params: { lang: 'en' } }));

    const title = screen.getByText('Customers Page');

    expect(title).toBeInTheDocument();
  });
});
