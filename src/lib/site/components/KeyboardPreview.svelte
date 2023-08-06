<script lang="ts">
	import { onDestroy } from "svelte";
	import kbd from "../stores/kbd";

    const keyCodeToIcon = (code: string) => {
        // Special character
        switch (code) {
            case 'Backspace':
                return 'del'
            case 'Enter':
                return 'enter'
            case 'Tab':
                return 'tab'
            case 'Escape':
                return 'esc'
            case 'ArrowUp':
                return '▲'
            case 'ArrowDown':
                return '▼'
            case 'ArrowLeft':
                return '◀'
            case 'ArrowRight':
                return '▶'
            case 'ShiftLeft':
            case 'ShiftRight':
                return '⇧'
            case 'ControlLeft':
            case 'ControlRight':
                return 'ctrl'
            case 'AltLeft':
            case 'AltRight':
                return '⌥'
            case 'MetaLeft':
            case 'MetaRight':
                return '⌘'
            case 'CapsLock':
                return 'caps'
            case 'PageUp':
                return 'pgup'
            case 'PageDown':
                return 'pgdn'
        }

        // Attempt to parse out of `KeyX` format
        let match = code.match(/^Key(.+)$/)
        if (match) {
            return match[1].toLowerCase();
        }

        // Attempt to parse out of `DigitX` format
        match = code.match(/^Digit(.+)$/);
        
        if (match) {
            return match[1];
        }

        // Attempt to parse out of `NumpadX` format
        match = code.match(/^Numpad(.+)$/);

        if (match) {
            return match[1];
        }

        // Attempt to parse out of `FXX` format
        match = code.match(/^F(.+)$/);

        if (match) {
            return `F${match[1]}`;
        }

        return code.toLowerCase();
    }

    const unsubscribe = kbd.subscribe((value) => {
        // Update keyboard state
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="!fixed bottom-5 right-5 flex gap-1 my-1">
    {#each Object.entries($kbd) as [code, value], i}
        {#if value}
            <kbd class="kbd rounded">{keyCodeToIcon(code)}</kbd>
        {/if}

        {#if i % 10 === 9}
            <br />
        {/if}
    {/each}
</div>
