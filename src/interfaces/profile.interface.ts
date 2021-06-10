export interface ProfileInterface {
    id: string;
    displayName: string;
    avatar: string;
    isOnline: boolean;
    lastOnline: Date;
    createdAt: Date;
    status?: string;
    email?: string;
    deletedAt?: Date;
}