import { writable, get } from 'svelte/store';
import type { ProfileInterface } from '~/interfaces/profile.interface';
import { currentUserSeed } from '~/seeds/users.seed';

function createProfileStore() {
    const { subscribe, set, update } = writable<ProfileInterface>(currentUserSeed);

    return {
        subscribe,
        update,
        set
    }
}

export const profile = createProfileStore();