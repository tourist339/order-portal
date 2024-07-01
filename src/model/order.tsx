export type Order = {
    id: string,
    details: string,
    status: Status,
    created?: Date,
    due?: Date,
    image: Image,
    comments: string,
    assignee: string,
}

export enum Status {
    TODO,
    INPROGRESS,
    COMPLETED,
}

export type Image = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    title?: string;
  };
  