<script lang="ts">
    import { onMount } from "svelte";

    export let headings: { depth: number; slug: string; text: string }[] = [];
    let activeId = "";

    // クリックによるスクロール中かどうかを判定するフラグ
    let isClickScrolling = false;
    // タイマー管理用
    let scrollTimeout: NodeJS.Timeout;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // クリックによる移動中は上書きしない
                if (isClickScrolling) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeId = entry.target.id;
                    }
                });
            },
            { rootMargin: "-10% 0px -80% 0px" },
        );

        headings.forEach((heading) => {
            const el = document.getElementById(heading.slug);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
            clearTimeout(scrollTimeout);
        };
    });

    function handleClick(slug: string) {
        activeId = slug;
        isClickScrolling = true;

        // 既存のタイマーをクリア
        if (scrollTimeout) clearTimeout(scrollTimeout);

        // ジャンプにかかる時間（約800ms〜1000ms程度）待機してから監視を再開
        // スムーズスクロールを導入している場合は、その秒数に合わせて長めに設定してください
        scrollTimeout = setTimeout(() => {
            isClickScrolling = false;
        }, 1000);
    }
</script>

<nav class="toc" aria-label="Table of Contents">
    <ul>
        {#each headings as heading}
            <li class="depth-{heading.depth}">
                <a
                    href="#{heading.slug}"
                    class:active={activeId === heading.slug}
                    on:click={() => handleClick(heading.slug)}
                >
                    {heading.text}
                </a>
            </li>
        {/each}
    </ul>
</nav>

<style>
    .toc {
        font-size: 0.875rem;
    }
    .toc ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .toc li {
        margin-bottom: 0.5rem;
    }
    .depth-3 {
        padding-left: 1rem;
    }
    .depth-4 {
        padding-left: 2rem;
    }
    .toc a {
        text-decoration: none;
        color: var(--theme-text-muted, #666);
        transition:
            color 0.2s ease,
            opacity 0.2s ease;
    }
    .toc a:hover {
        color: var(--theme-text, #000);
    }
    .toc a.active {
        color: var(--theme-accent);
        font-weight: bold;
    }
</style>
