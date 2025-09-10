<script>
    let items = [];
    let name = '';
    let stack = '';
    let editIndex = -1;

    function addItem() {
        if (name.trim() === '' || stack.trim() === '') return;

        const item = { name, stack };

        if (editIndex === -1) {
            items = [...items, item];
        } else {
            items = items.map((it, i) => i === editIndex ? item : it);
            editIndex = -1;
        }

        resetFields();
    }

    function editItem(index) {
        editIndex = index;
        name = items[index].name;
        stack = items[index].stack;
    }

    function deleteItem(index) {
        items = items.filter((_, i) => i !== index);
    }

    function resetFields() {
        name = '';
        stack = '';
    }
</script>

<main>
    <h1>📋 Build Item Rendra</h1>

    <div class="form">
        <input bind:value={name} placeholder="Nama" />
        <input bind:value={stack} placeholder="Stack" />
        <button class="add" on:click={addItem}>
            {editIndex === -1 ? '➕ Tambah Item' : '✏️ Perbarui Item'}
        </button>
    </div>

    <h2>Daftar Item</h2>
    <div class="list">
        {#each items as item, index}
            <div class="card">
                <div class="info">
                    <strong>{item.name}</strong>
                    <span>{item.stack}</span>
                </div>
                <div class="actions">
                    <button class="edit" on:click={() => editItem(index)}>Edit</button>
                    <button class="delete" on:click={() => deleteItem(index)}>Hapus</button>
                </div>
            </div>
        {/each}
    </div>
</main>

<style>
    main {
        font-family: system-ui, sans-serif;
        max-width: 500px;
        margin: 2rem auto;
        padding: 1rem;
    }

    h1, h2 {
        text-align: center;
    }

    .form {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    input {
        flex: 1;
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
    }

    button {
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    button.add {
        background: #4CAF50;
        color: white;
    }

    button.edit {
        background: #2196F3;
        color: white;
    }

    button.delete {
        background: #f44336;
        color: white;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f9f9f9;
        border-radius: 0.75rem;
        padding: 0.75rem 1rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .info {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .info strong {
        font-size: 1.1rem;
    }

    .info span {
        color: #666;
        font-size: 0.9rem;
    }

    .actions {
        display: flex;
        gap: 0.5rem;
    }
</style>
