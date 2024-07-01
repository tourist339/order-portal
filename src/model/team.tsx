export type Team={
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    designation: string,
    property: Property[],
    notificationType: Notification[],
}

export enum Notification{
    PHONE,
    EMAIL,
    SMS
}