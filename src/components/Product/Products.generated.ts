/* eslint-disable */
import type * as Types from '../../graphql/generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ProductFragment = { __typename: 'Product', id: string, likes: number, name: string, priceValue: number, pictures: Array<{ __typename: 'Picture', id: string, url: string }> };


export type ProductFragmentVariables = Types.Exact<{ [key: string]: never; }>;

export type ProductLikeMutationVariables = Types.Exact<{
  productId: Types.Scalars['String'];
}>;


export type ProductLikeMutation = { __typename: 'Mutation', productLike: { __typename: 'ProductLikeOutput', product: { __typename: 'Product', id: string, likes: number } } };

export const ProductFragmentDoc = /*#__PURE__*/ gql`
    fragment product on Product {
  id
  likes
  name
  pictures {
    id
    url
  }
  priceValue
}
    `;
export const ProductLikeDocument = /*#__PURE__*/ gql`
    mutation productLike($productId: String!) {
  productLike(input: {id: $productId}) {
    product {
      id
      likes
    }
  }
}
    `;
export type ProductLikeMutationFn = Apollo.MutationFunction<ProductLikeMutation, ProductLikeMutationVariables>;

/**
 * __useProductLikeMutation__
 *
 * To run a mutation, you first call `useProductLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProductLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [productLikeMutation, { data, loading, error }] = useProductLikeMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useProductLikeMutation(baseOptions?: Apollo.MutationHookOptions<ProductLikeMutation, ProductLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProductLikeMutation, ProductLikeMutationVariables>(ProductLikeDocument, options);
      }
export type ProductLikeMutationHookResult = ReturnType<typeof useProductLikeMutation>;
export type ProductLikeMutationResult = Apollo.MutationResult<ProductLikeMutation>;
export type ProductLikeMutationOptions = Apollo.BaseMutationOptions<ProductLikeMutation, ProductLikeMutationVariables>;