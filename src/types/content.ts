export interface ContentType {
  body: string;
  frontmatter: {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
  };
  id: string;
  excerpt: any;
}
