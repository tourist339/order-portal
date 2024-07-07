export type TeamMember={
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    designation: string,
    notificationType: Notification[],
}

export enum Notification{
    PHONE,
    EMAIL,
    SMS
}