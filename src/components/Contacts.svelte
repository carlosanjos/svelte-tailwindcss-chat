<script lang="ts">
    import Search from './contacts/Search.svelte';
    import List from './contacts/List.svelte';
    import { UserService } from '~/services/user.service';

    const userSerivce = new UserService();
    const currentUser = userSerivce.getCurrentUser();
    const contacts = userSerivce.getContacts(currentUser)
</script>
<main class="flex flex-col h-screen">
    <header class="flex mx-2 my-2">
        <Search></Search>
    </header>
    <aside class="flex-grow overflow-y-auto">
        {#each contacts as contact }
            <List contact={ contact }></List>
        {/each}
    </aside>
</main>