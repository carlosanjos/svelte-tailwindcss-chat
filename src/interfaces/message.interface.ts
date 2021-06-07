export interface MessageInterface {
    id: number;
    recipient: number; //a user in the future
    message: string;
    timestamp: Date;
    attachment?: {
        id: number;
        src: string;
        type: string;
    };
}