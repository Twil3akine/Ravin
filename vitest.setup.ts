import '@testing-library/jest-dom';
import { vi } from 'vitest';

// 1. IntersectionObserverをクラスとしてモック化 (TOC用)
class IntersectionObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn();
}
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

// 2. Element.prototype.animateをモック化し、即座に完了させる (Spoilerのtransition用)
if (!Element.prototype.animate) {
  Element.prototype.animate = vi.fn().mockImplementation(() => {
    const animation: any = {
      finished: Promise.resolve(),
      cancel: vi.fn(),
      onfinish: null,
      play: vi.fn(),
      pause: vi.fn(),
    };

    // 非同期で即座に完了イベント(onfinish)を発火させ、DOMから要素を削除させる
    setTimeout(() => {
      if (typeof animation.onfinish === 'function') {
        animation.onfinish();
      }
    }, 0);

    return animation;
  });
}
