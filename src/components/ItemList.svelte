<script>
    import { items } from "../store/items";
    import ItemCard from "./ItemCard.svelte";
</script>

<div class="list">
    {#each $items as item, index}
        <ItemCard {item} {index} />
    {/each}
</div>
