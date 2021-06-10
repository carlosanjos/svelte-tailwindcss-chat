import type { AttachmentType } from "~/enum/attachment.enum";

export interface MessageInterface {
    id: string;
    //recipient: UserInterface;
    message: string;
    timestamp: Date;
    readAt: Date;
    attachment?: {
        id: number;
        src: string;
        type: AttachmentType;
    };
}