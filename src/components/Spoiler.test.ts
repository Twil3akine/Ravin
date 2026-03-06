import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Spoiler from './Spoiler.svelte';

describe('Spoiler Component', () => {
  it('デフォルトのタイトルでレンダリングされ、初期状態では閉じている', () => {
    const { container } = render(Spoiler);

    expect(screen.getByText('クリックして展開')).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');

    const content = container.querySelector('.spoiler-content');
    expect(content).not.toBeInTheDocument();
  });

  it('カスタムタイトルをpropsで受け取れる', () => {
    render(Spoiler, { title: 'ネタバレ注意' });

    expect(screen.getByText('ネタバレ注意')).toBeInTheDocument();
  });

  it('クリックで開閉状態がトグルされる', async () => {
    const { container } = render(Spoiler);
    const button = screen.getByRole('button');

    // 1回目のクリック：開く
    await fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(container.querySelector('.spoiler-content')).toBeInTheDocument();

    // 2回目のクリック：閉じる
    await fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');

    // アニメーション（250ms）が完了してDOMから消えるのを待機する
    await waitFor(() => {
      expect(
        container.querySelector('.spoiler-content'),
      ).not.toBeInTheDocument();
    });
  });
});
