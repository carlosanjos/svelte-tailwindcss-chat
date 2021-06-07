<script lang="ts">
    import List from './components/List.svelte';
    import Timeline from './components/chat/Timeline.svelte';
</script>

<aside class="flex grid-cols-1 md:grid-cols-2">
    <div class="w-full md:w-1/4">
        <List></List>
    </div>
    <div class="hidden md:w-3/4 md:block">
        <Timeline></Timeline>
    </div>
</aside>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>