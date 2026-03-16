export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: "admin" | "user";
}

export interface Notification {
    id: string;
    type: "info" | "warning" | "success";
    message: string;
    read: boolean;
    createdAt: string;
}