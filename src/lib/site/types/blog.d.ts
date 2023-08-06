export enum Categories {
    COOL = "cool",
    TECH = "tech",
};

export interface BlogPost {
    title: string;
    description: string;
    date: string;
	categories: Categories[];
	published: boolean;

    slug: string;
}

export type BlogPostReference = {
    next: BlogPost;
    previous: BlogPost;
} & BlogPost;
