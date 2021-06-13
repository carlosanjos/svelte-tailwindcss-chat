<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let timer;

    const debounce = searchTerm => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            dispatch('searchTerm', searchTerm);
        }, 150);
    }
</script>
<div class="flex flex-row border-gray items-center w-full border rounded-3xl h-10 px-2">
    <button class="focus:outline-none flex items-center justify-center h-10 w-10 hover:text-red-600 text-blue-400 ml-1">
        <span class="material-icons px-2">search</span>
    </button>
    <div class="w-full">
        <input
            type="text"
            id="message"
            class="border rounded-2xl border-transparent w-full focus:outline-none text-sm h-8 flex items-center"
            placeholder="Search your messages..."
            on:keyup={({ target: { value }}) => debounce(value)}>
    </div>
</div>