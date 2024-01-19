import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ReviewItemProps } from '../../types/Review/ItemProps';
import { ReviewUserProps } from '../../types/Review/UserProps';
import { PatchDataProps } from '../../components/Member/Review/Review';

interface CombinedReviewData {
  itemInfos: ReviewItemProps[];
  reviewUserInfo: ReviewUserProps;
};

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/review"
  }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getReview: builder.query<CombinedReviewData, number>({
      query: (memberId) => `/${memberId}`,
      providesTags: ["Reviews"],      
    }),

    modifyReview: builder.mutation<{}, { reviewId: number, data: PatchDataProps }>({
      query: ({ reviewId, data }) => ({
        url: `/${reviewId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Reviews"],
    }),

    deleteReview: builder.mutation({
      query: ({ reviewId, memberId }) => ({
        url: `/${reviewId}/${memberId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Reviews"]
    })
  }),
});

export const { useGetReviewQuery, useModifyReviewMutation, useDeleteReviewMutation } = reviewApi;