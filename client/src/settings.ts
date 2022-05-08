import * as dotenv from "dotenv";
dotenv.config();

const settings = {
    basePath: process.env.REACT_APP_BASE_PATH,
};

export const apiUrls = {
    getProjects: `${settings.basePath}api/projects?populate=*`,
};
