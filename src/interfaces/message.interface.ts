import type { AttachmentType } from "~/enum/attachment.enum";
import type { ProfileInterface } from "./profile.interface";

export interface MessageInterface {
    readonly id?: string;
    sender: ProfileInterface;
    recipient: ProfileInterface;
    message: string;
    timestamp: Date;
    readAt: Date;
    attachment?: {
        src: string;
        type: AttachmentType;
    };
}