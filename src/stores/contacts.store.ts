import { writable } from 'svelte/store';
import type { ContactsInterface } from '~/interfaces/contacts.interface';
import { contactsSeed } from '~/seeds/users.seed';


function createContactsStore() {
    const { subscribe, set, update } = writable<ContactsInterface[]>(contactsSeed);

    return {
        subscribe,
        update,
        set
    }
}

export const contacts = createContactsStore();