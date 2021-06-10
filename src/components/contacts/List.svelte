<script lang="ts">
    import type { ContactsInterface } from "~/interfaces/contacts.interface";
    export let contact: ContactsInterface;


    function formatDate(date: Date): string {
        return Intl.DateTimeFormat('en', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    }
</script>

<section class="flex m-2">
    <div class="w-2/12 py-3">
        <img class="w-12 h-12 rounded-full" src="{ contact.profile.avatar }" alt="avatar">
    </div>

    <article class="w-10/12 py-2 border-b border-gray-200">
        <div class="flex justify-between">
            <h2 class="font-semibold">{ contact.profile.displayName }</h2>
            <p class="text-xs text-gray-400">{ formatDate(contact.profile.lastOnline) } </p>
        </div>
        <div class="flex justify-between items-center">
            <p class="text-gray-500">{ contact.chat[0].message }</p>
            <div class="flex items-center justify-center">
                {#if contact.isMuted }
                    <span class="material-icons px-1 text-blue-300 items-center">notifications_off</span>
                {/if}

                {#if contact.chat.filter(message => message.readAt === null).length > 0 }
                    <p class="rounded-full bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center">
                        { contact.chat.filter(message => message.readAt === null).length }
                    </p>
                {/if}
            </div>
        </div>
    </article>
</section>