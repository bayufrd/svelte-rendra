import { writable } from "svelte/store";

export const items = writable([]);
export const editIndex = writable(-1);
