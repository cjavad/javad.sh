import { writable } from "svelte/store";

// Keyboard state
const kbdStore = writable<Record<string, boolean>>({});



export default kbdStore;