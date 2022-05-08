import IProjectResponse, { IProjectDataResponse, IProjectItems } from "../apiServices/response/IProjectResponse";

export interface IProject extends IProjectResponse {}

export interface IProjectData extends IProjectDataResponse {}

export interface IProjectLocalData {
    header: string;
    subheader: string;
    buttonText: string;
}
