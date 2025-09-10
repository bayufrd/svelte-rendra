<script>
    import { items, editIndex } from "../store/items";

    export let item;
    export let index;

    function editItem() {
        editIndex.set(index);
    }

    function deleteItem() {
        items.update(arr => arr.filter((_, i) => i !== index));
    }
</script>

<div class="card">
    <div class="info">
        <strong>{item.name}</strong>
        <span>{item.stack}</span>
    </div>
    <div class="actions">
        <button class="edit" on:click={editItem}>Edit</button>
        <button class="delete" on:click={deleteItem}>Hapus</button>
    </div>
</div>
