interface IImgMeta {
    public_id: string;
    resource_type: string;
}

interface IImgData {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null;
    width: number;
    height: number;
    size: number;
    url: string;
    provider_metadata: IImgMeta;
}

interface IImgFormat {
    thumbnail: IImgData;
    medium: IImgData;
    small: IImgData;
}

interface IImgAttribute {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: IImgFormat;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: IImgMeta;
    createdAt: string;
    updatedAt: string;
}

interface IData {
    id: number;
    attributes: IImgAttribute;
}

export interface IImgResponse {
    data: IData;
}
