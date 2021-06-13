<script lang="ts">
    import Search from './contacts/Search.svelte';
    import List from './contacts/List.svelte';
    import { contacts } from '~/stores/contacts.store';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function clickEvent(contact) {
        dispatch('contactSelected', contact);
    }
</script>
<main class="flex flex-col h-screen">
    <header class="flex mx-2 my-2">
        <Search></Search>
    </header>
    <aside class="flex-grow overflow-y-auto">
        {#each $contacts as contact }
            <div on:click={ () => clickEvent(contact) }>
                <List bind:contact></List>
            </div>
        {/each}
    </aside>
</main>