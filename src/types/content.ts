export interface ContentType {
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
