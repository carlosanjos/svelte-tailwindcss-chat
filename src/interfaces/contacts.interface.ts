import type { ProfileInterface } from "./profile.interface";


export interface ContactsInterface {
    id: string;
    profile: ProfileInterface;
    isMuted: boolean;
    isBlocked: boolean;
}