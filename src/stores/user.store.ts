import { writable } from 'svelte/store';
import type { ProfileInterface } from '~/interfaces/profile.interface';

function createUserStore() {
    let user: ProfileInterface;

    const { subscribe, set, update } = writable<ProfileInterface>(user);

    return {
        subscribe,
    }
}

export const user = createUserStore();