import { writable } from 'svelte/store';
import type { MessageInterface } from '~/interfaces/message.interface';
import { messagesSeed } from '~/seeds/users.seed';

function createMessageStore() {
    const { subscribe, set, update } = writable<MessageInterface[]>(messagesSeed);

    return {
        subscribe,
        update,
        set
    }
}

export const messages = createMessageStore();