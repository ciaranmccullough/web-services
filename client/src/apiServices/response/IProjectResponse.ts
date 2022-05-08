import { IImgResponse } from "./IImg";

export interface IProjectItems {
    title: string;
    description: string;
    buttonText: string;
    link: string;
    image: IImgResponse;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
}

export interface IProjectDataResponse {
    id: number;
    attributes: IProjectItems;
}

export default interface IProjectResponse {
    data: IProjectDataResponse[];
}

export const defaultProjectsResponse: IProjectResponse = {
    data: [],
};
