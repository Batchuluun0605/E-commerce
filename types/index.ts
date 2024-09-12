export type Category = {
  _id: string;
  name: string;
  link: string;
  image: string;
  slug: string;
  createdAt?: string;
  submenu?: SubCategory[];
};

export type SubCategory = {
  name: string;
  slug: string;
  link: string;
  parent: string;
};

export type Page = {
  _id: string;
  name: string;
  slug: string;
  link: string;
  createdAt?: string;
  subpage?: SubPage[];
};

export type SubPage = {
  _id: string;
  name: string;
  slug: string;
  link: string;
  createdAt?: string;
  parent?: string;
};

export type Product = {
  _id: string;
  name: string;
  featured: boolean;
  slug: string;
  description: string;
  category: Category;
  subCategories: SubCategory[];
  brand: Brand;
  content: string;
  details: Detail[];
  quetions: Quetion[];
  reviews: Review[];
  subProducts: SubProduct[];
};

export type Brand = {};
export type Quetion = {};
export type Detail = {};
export type Style = {
  name: string;
  color: string;
  images: string;
};
export type Option = {
  images: string[];
  sold: number;
  option: string;
  qty: number;
  price: number;
  discount: number;
  _id: string;
};
export type Review = {};
export type SubProduct = {
  sku: string;
  style: Style;
  options: Option[];
  _id: string;
};

export type CartType = {};

export type Slide = {
  _id: string;
  name: string;
  link: string;
  slug: string;
  title: string;
  description: string;
  subtitle: string;
  btn: string;
  image: string;
  textColor: string;
  createdAt?: string;
};
