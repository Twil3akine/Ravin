<script lang="ts">
    import { onMount } from "svelte";

    // Astroの getHeadings() から渡される型を想定
    export let headings: { depth: number; slug: string; text: string }[] = [];

    let activeId = "";

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // 画面上部を通過した見出しをアクティブにする
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

        return () => observer.disconnect();
    });
</script>

<nav class="toc" aria-label="Table of Contents">
    <ul>
        {#each headings as heading}
            <li class="depth-{heading.depth}">
                <a
                    href="#{heading.slug}"
                    class:active={activeId === heading.slug}
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
