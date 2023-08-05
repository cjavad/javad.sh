import { writable } from "svelte/store";

export type Theme = "light" | "dark"

export default writable<Theme>("dark");