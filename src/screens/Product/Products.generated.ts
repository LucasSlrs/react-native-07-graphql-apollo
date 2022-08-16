/* eslint-disable */
import type * as Types from '../../graphql/generated/types';

import { gql } from '@apollo/client';
import { ProductFragmentDoc } from '../../components/Product/Products.generated';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ProductListQueryVariables = Types.Exact<{
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type ProductListQuery = { __typename: 'Query', productsPagination: { __typename: 'ProductsPagination', totalCount: number, nodes: Array<{ __typename: 'Product', id: string, likes: number, name: string, priceValue: number, pictures: Array<{ __typename: 'Picture', id: string, url: string }> }> } };


export const ProductListDocument = /*#__PURE__*/ gql`
    query productList($take: Int, $skip: Int) {
  productsPagination(take: $take, skip: $skip) {
    totalCount
    nodes {
      ...product
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useProductListQuery(baseOptions?: Apollo.QueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
      }
export function useProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<typeof useProductListLazyQuery>;
export type ProductListQueryResult = Apollo.QueryResult<ProductListQuery, ProductListQueryVariables>;