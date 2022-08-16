/* eslint-disable */
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type EdgeKeySpecifier = ('cursor' | 'node' | EdgeKeySpecifier)[];
export type EdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('productCreate' | 'productLike' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	productCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productLike?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('createdAt' | 'id' | 'updatedAt' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeDeletableKeySpecifier = ('createdAt' | 'deletedAt' | 'id' | 'updatedAt' | NodeDeletableKeySpecifier)[];
export type NodeDeletableFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginationKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PaginationKeySpecifier)[];
export type PaginationFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginationPageInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | 'pageCount' | PaginationPageInfoKeySpecifier)[];
export type PaginationPageInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PictureKeySpecifier = ('createdAt' | 'hash' | 'height' | 'id' | 'mimetype' | 'originalName' | 'size' | 'updatedAt' | 'url' | 'width' | PictureKeySpecifier)[];
export type PictureFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	originalName?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('createdAt' | 'description' | 'id' | 'likes' | 'name' | 'owner' | 'pictures' | 'priceCurrency' | 'priceValue' | 'updatedAt' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	pictures?: FieldPolicy<any> | FieldReadFunction<any>,
	priceCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	priceValue?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCreateOutputKeySpecifier = ('product' | ProductCreateOutputKeySpecifier)[];
export type ProductCreateOutputFieldPolicy = {
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductEdgeKeySpecifier = ('cursor' | 'node' | ProductEdgeKeySpecifier)[];
export type ProductEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductLikeOutputKeySpecifier = ('product' | ProductLikeOutputKeySpecifier)[];
export type ProductLikeOutputFieldPolicy = {
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductsPaginationKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ProductsPaginationKeySpecifier)[];
export type ProductsPaginationFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('product' | 'productsPagination' | 'user' | 'viewer' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productsPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('createdAt' | 'email' | 'firstName' | 'id' | 'lastName' | 'ownedProductsPagination' | 'updatedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	ownedProductsPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Edge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EdgeKeySpecifier | (() => undefined | EdgeKeySpecifier),
		fields?: EdgeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	NodeDeletable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeDeletableKeySpecifier | (() => undefined | NodeDeletableKeySpecifier),
		fields?: NodeDeletableFieldPolicy,
	},
	Pagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginationKeySpecifier | (() => undefined | PaginationKeySpecifier),
		fields?: PaginationFieldPolicy,
	},
	PaginationPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginationPageInfoKeySpecifier | (() => undefined | PaginationPageInfoKeySpecifier),
		fields?: PaginationPageInfoFieldPolicy,
	},
	Picture?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PictureKeySpecifier | (() => undefined | PictureKeySpecifier),
		fields?: PictureFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductCreateOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCreateOutputKeySpecifier | (() => undefined | ProductCreateOutputKeySpecifier),
		fields?: ProductCreateOutputFieldPolicy,
	},
	ProductEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductEdgeKeySpecifier | (() => undefined | ProductEdgeKeySpecifier),
		fields?: ProductEdgeFieldPolicy,
	},
	ProductLikeOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductLikeOutputKeySpecifier | (() => undefined | ProductLikeOutputKeySpecifier),
		fields?: ProductLikeOutputFieldPolicy,
	},
	ProductsPagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductsPaginationKeySpecifier | (() => undefined | ProductsPaginationKeySpecifier),
		fields?: ProductsPaginationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;