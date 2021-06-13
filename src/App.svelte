<script lang="ts">
    import Contacts from './components/Contacts.svelte';
    import Timeline from './components/chat/Timeline.svelte';
    import Loading from './components/Loading.svelte';

    let selectedContact;
    let isLoading: boolean = false;

    function onContactSelected(event) {
        selectedContact = event.detail;
    }
</script>

<aside class="flex grid-cols-1 md:grid-cols-2 divide-x divide-blue-100 ">
    <div class="w-full md:w-1/4">
        <Contacts on:contactSelected={ onContactSelected }></Contacts>
    </div>
    <div class="hidden md:w-3/4 md:block">
        {#if isLoading}
            <Loading></Loading>
        {:else if selectedContact}
            <Timeline contact={ selectedContact } ></Timeline>
        {/if}
    </div>
</aside>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>