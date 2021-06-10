import type { ContactsInterface } from "~/interfaces/contacts.interface";
import { MessageInterface } from "~/interfaces/message.interface";
import type { ProfileInterface } from "~/interfaces/profile.interface";

export class UserService {
    public getCurrentUser() {
        return {
            id: Math.random().toString(36).substring(7),
            displayName: 'Lara Croft',
            avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e',
            isOnline: true,
            lastOnline: new Date(),
            createdAt: new Date(),
            status: 'Electric Eel',
        }
    }

    public getContacts(user: ProfileInterface): ContactsInterface[] {
        return new Array(20).fill({
            id: 'buba-123',
            profile: user,
            isMuted: this.randomItem([true, false]),
            isBlocked: false,
            chat: [this.getMessages()],
        });
    }

    public getMessages(): MessageInterface {
        return {
            id: Math.random().toString(36).substring(7),
            message: 'Foo-bar',
            readAt: this.randomItem([null, new Date()]),
            timestamp: new Date()
        }
    }

    private randomItem(arr): any {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}