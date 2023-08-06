interface BlogPost {
    title: string;
    description: string;
    date: string;
	categories: Categories[];
	published: boolean;
    image?: string;

    slug: string;
}

type BlogPostReference = {
    next: BlogPost;
    previous: BlogPost;
} & BlogPost;
