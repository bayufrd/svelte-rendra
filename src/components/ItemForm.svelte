<script>
    import { items, editIndex } from "../store/items";
    import { get } from "svelte/store";

    let name = "";
    let stack = "";

    $: if ($editIndex !== -1) {
        const item = get(items)[$editIndex];
        if (item) {
            name = item.name;
            stack = item.stack;
        }
    }

    function addItem() {
    if (name.trim() === "" || stack === "" || isNaN(stack)) return;

    const item = { 
        name, 
        stack: Number(stack)
    };

    if (get(editIndex) === -1) {
        items.update(arr => [...arr, item]);
    } else {
        items.update(arr => arr.map((it, i) => i === get(editIndex) ? item : it));
        editIndex.set(-1);
    }

    resetFields();
}


    function resetFields() {
        name = "";
        stack = "";
    }
</script>

<div class="form">
    <input bind:value={name} placeholder="Nama" />
    <input type="number" bind:value={stack} placeholder="Stack" />
    <button class="add" on:click={addItem}>
        {$editIndex === -1 ? "➕ Tambah Item" : "✏️ Perbarui Item"}
    </button>
</div>
