import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import TOC from './TOC.svelte';

describe('TOC Component', () => {
  const mockHeadings = [
    { depth: 2, slug: 'first-heading', text: 'First Heading' },
    { depth: 3, slug: 'second-heading', text: 'Second Heading' },
  ];

  it('見出しと正しいリンクがレンダリングされる', () => {
    render(TOC, { headings: mockHeadings });

    expect(screen.getByText('First Heading')).toBeInTheDocument();

    const firstLink = screen.getByRole('link', { name: 'First Heading' });
    expect(firstLink).toHaveAttribute('href', '#first-heading');
  });

  it('クリック時にactive状態が更新される', async () => {
    render(TOC, { headings: mockHeadings });

    const firstLink = screen.getByRole('link', { name: 'First Heading' });

    // 初期状態の確認
    expect(firstLink).not.toHaveClass('active');

    // クリックイベントを発火
    await fireEvent.click(firstLink);

    // activeクラスが付与されているか確認
    expect(firstLink).toHaveClass('active');
  });
});
