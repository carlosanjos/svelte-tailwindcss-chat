import { ProfileInterface } from "~/interfaces/profile.interface";

export const users: ProfileInterface[] = new Array(15).fill(createUser());

function createUser(): ProfileInterface {
    return {
        id: Math.random().toString(36).substring(7),
        displayName: 'Peter Parker',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e',
        isOnline: true,
        lastOnline: new Date(),
        createdAt: new Date(),
        status: 'Life is short',
    }
}