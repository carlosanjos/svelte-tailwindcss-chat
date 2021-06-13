import type { ContactsInterface } from "~/interfaces/contacts.interface";
import type { MessageInterface } from "~/interfaces/message.interface";
import type { ProfileInterface } from "~/interfaces/profile.interface";

const now = new Date();
const oneMinute = 1000 * 60 * 60;

export const currentUserSeed: ProfileInterface = {
    id: 'e333477d-902f-4654-90f4-7c3ebf5bbc26',
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e',
    createdAt: now,
    displayName: 'Lara Croft',
    isOnline: true,
    lastOnline: now,
};

export const contactsSeed: ContactsInterface[] = [{
    id: 'dabbca61-c24c-4709-8061-16f2643c9d4b', 
    isBlocked: false,
    isMuted: false,
    profile: {
        id: 'acca1179-ee46-4321-a82a-0902df319e52',
        avatar: 'https://images.unsplash.com/photo-1623113562048-627016402138',
        createdAt: now,
        isOnline: true,
        lastOnline: now,
        displayName: 'Peter Parker',
    }
}, {
    id: 'e42282dc-ef9c-4b67-b4bc-ce48bd7454cb', 
    isBlocked: false,
    isMuted: false,
    profile: {
        id: '3e8111b6-b362-4410-bfad-e1b719456b50',
        avatar: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd',
        createdAt: now,
        isOnline: true,
        lastOnline: now,
        displayName: 'Bruce Wayne',
    }
}];

export const messagesSeed: MessageInterface[] = [{
    sender: currentUserSeed,
    recipient: contactsSeed[0].profile,
    message: 'What does the fox say?',
    readAt: null,
    timestamp: now,
}, {
    sender: contactsSeed[0].profile,
    recipient: currentUserSeed,
    message: 'Wapapapow',
    readAt: null,
    timestamp: new Date(now.getTime() - oneMinute),
}, {
    sender: currentUserSeed,
    recipient: contactsSeed[0].profile,
    message: '🙈 I duuno what to do',
    readAt: null,
    timestamp: new Date(now.getTime() - oneMinute * 2),
}, {
    sender: currentUserSeed,
    recipient: contactsSeed[0].profile,
    message: 'What a wonderful world',
    readAt: null,
    timestamp: new Date(now.getTime() - oneMinute * 3),
},{
    sender: contactsSeed[0].profile,
    recipient: currentUserSeed,
    message: 'Not too soon 🐝',
    readAt: null,
    timestamp: new Date(now.getTime() - oneMinute * 4),
}, {
    sender: contactsSeed[1].profile,
    recipient: currentUserSeed,
    message: 'What is love?',
    readAt: null,
    timestamp: now,
}, {
    sender: currentUserSeed,
    recipient: contactsSeed[1].profile,
    message: 'Baby don\'t hurt me, don\'t hurt me, no more',
    readAt: null,
    timestamp: new Date(now.getTime() - oneMinute * 1),
}];