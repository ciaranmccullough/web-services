import axios from "axios";
import { apiUrls } from "../settings";
import IProjectResponse from "./response/IProjectResponse";

export async function fetchProjects(): Promise<IProjectResponse> {
    const response = await axios.get(apiUrls.getProjects);

    return response.data;
}
