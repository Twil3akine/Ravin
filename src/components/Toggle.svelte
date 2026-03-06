<script lang="ts">
  export let checked = false;
  export let disabled = false;
  export let ariaLabel = "Toggle";
</script>

<button
  type="button"
  role="switch"
  aria-checked={checked}
  aria-label={ariaLabel}
  {disabled}
  class="toggle-btn"
  class:checked
  on:click={() => (checked = !checked)}
>
  <span class="toggle-thumb" />
</button>

<style>
  .toggle-btn {
    position: relative;
    width: 2.5rem;
    height: 1.25rem;
    border-radius: 9999px;
    background-color: var(--theme-border);
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
    padding: 0;
  }

  .toggle-btn:focus-visible {
    outline: 2px solid var(--theme-accent);
    outline-offset: 2px;
  }

  .toggle-btn.checked {
    background-color: var(--theme-text);
  }

  .toggle-btn[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .toggle-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(1.25rem - 4px);
    height: calc(1.25rem - 4px);
    background-color: var(--theme-bg);
    border-radius: 50%;
    transition: transform 0.2s ease;
  }

  .toggle-btn.checked .toggle-thumb {
    transform: translateX(1.25rem);
  }
</style>
