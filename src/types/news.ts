export interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  altText: string;
}

export interface Category {
  id: string;
  name: string;
  isActive?: boolean;
}
