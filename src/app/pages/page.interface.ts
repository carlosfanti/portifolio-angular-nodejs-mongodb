export interface Page {
    _id?: string;
    url: string;
    img: string;
    idPost: string;
    en: {
        title: string;
        name: string;
        content: string;
    };
    es: {
        title: string;
        name: string;
        content: string;
    };
    pt: {
        title: string;
        name: string;
        content: string;
    };
}
