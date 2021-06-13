<script lang="ts">
    import { profile } from "~/stores/profile.store";

    export let message;

    function formatDate(date: Date): string {
        return Intl.DateTimeFormat('en', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    }
</script>

<section class="pt-2">
    <article class="px-3 py-1 flex" class:justify-end="{ message.recipient !== $profile }">
        <div class="shadow rounded w-3/4" class:bg-blue-100="{ message.recipient === $profile }" class:bg-white="{ message.recipient !== $profile }">
            {#if message.attachment }
                <img class="rounded-md p-1" src="{ message.attachment.src }" alt="{ message.attachment.type }">
            {/if}
            <h1 class="px-3">{ message.message }</h1>
            <p class="text-right text-xs text-gray-500 p-1"> { formatDate(message.timestamp) }</p>
        </div>
    </article>
</section>

<style lang="postcss">
</style>