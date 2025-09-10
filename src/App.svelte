<script>
    import ItemForm from "./components/ItemForm.svelte";
    import ItemList from "./components/ItemList.svelte";
</script>

<main>
    <h1>📋 Build Item Rendra</h1>
    <ItemForm />
    <h2>Daftar Item</h2>
    <ItemList />
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
</style>
