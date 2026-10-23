
export interface IData {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

export interface IDataResponse {
    success: boolean;
    count: number;
    cachedAt: string;
    data: IData[];
}



export interface INews {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    type: string;
    isLive: boolean;
    firstPublished: string | null;
    lastPublished: string | null;
    source: string;
}

export interface INewsResponse {
    success: boolean;
    count: number;
    cachedAt: string;
    total: number;
    limit: number;
    offset: number;
    data: INews[];
}


export interface INewsArticle {
    id: string;
    title: string;
    description: string | null;
    link: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    type: string;
    isLive: boolean;
    firstPublished: string | null;
    lastPublished: string | null;
    source: string;
}

export interface INewsSection {
    title: string;
    curationId: string;
    curationType: string;
    link: string | null;
    count: number;
    articles: INewsArticle[];
}

export interface INewsSectionsResponse {
    success: boolean;
    count: number;
    cachedAt: string;
    data: INewsSection[];
}