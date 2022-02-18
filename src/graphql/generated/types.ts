/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: Currency;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: Date;
};

export type Edge = {
  cursor: Scalars['ID'];
  node: Node;
};

export type Mutation = {
  __typename?: 'Mutation';
  productCreate: ProductCreateOutput;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};

export type Node = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type NodeDeletable = {
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type Pagination = {
  edges: Array<Edge>;
  nodes: Array<Node>;
  pageInfo: PaginationPageInfo;
  totalCount: Scalars['Int'];
};

export type PaginationPageInfo = {
  __typename?: 'PaginationPageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  pageCount: Scalars['Int'];
};

export type Picture = Node & {
  __typename?: 'Picture';
  createdAt: Scalars['DateTime'];
  hash: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  mimetype: Scalars['String'];
  originalName?: Maybe<Scalars['String']>;
  size: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type Product = Node & {
  __typename?: 'Product';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: User;
  pictures: Array<Picture>;
  priceCurrency: Scalars['Currency'];
  priceValue: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ProductCreateInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  pictureIds: Array<Scalars['ID']>;
  priceCurrency: Scalars['Currency'];
  priceValue: Scalars['Int'];
};

export type ProductCreateOutput = {
  __typename?: 'ProductCreateOutput';
  product: Product;
};

export type ProductEdge = Edge & {
  __typename?: 'ProductEdge';
  cursor: Scalars['ID'];
  node: Product;
};

export type ProductsPagination = Pagination & {
  __typename?: 'ProductsPagination';
  edges: Array<ProductEdge>;
  nodes: Array<Product>;
  pageInfo: PaginationPageInfo;
  totalCount: Scalars['Int'];
};

export type ProductsPaginationFilterName = {
  search?: Maybe<Scalars['String']>;
};

export type ProductsPaginationFilterPrice = {
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export type ProductsPaginationFilters = {
  name?: Maybe<ProductsPaginationFilterName>;
  price?: Maybe<ProductsPaginationFilterPrice>;
};

export type ProductsPaginationSorters = {
  createdAt?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type Query = {
  __typename?: 'Query';
  product: Product;
  productsPagination: ProductsPagination;
  user?: Maybe<User>;
  viewer?: Maybe<User>;
};


export type QueryProductArgs = {
  productId?: Maybe<Scalars['ID']>;
};


export type QueryProductsPaginationArgs = {
  filter?: Maybe<ProductsPaginationFilters>;
  skip?: Maybe<Scalars['Int']>;
  sorter?: Maybe<ProductsPaginationSorters>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  userId: Scalars['ID'];
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type User = Node & {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  ownedProductsPagination: ProductsPagination;
  updatedAt: Scalars['DateTime'];
};


export type UserOwnedProductsPaginationArgs = {
  filter?: Maybe<ProductsPaginationFilters>;
  skip?: Maybe<Scalars['Int']>;
  sorter?: Maybe<ProductsPaginationSorters>;
  take?: Maybe<Scalars['Int']>;
};
