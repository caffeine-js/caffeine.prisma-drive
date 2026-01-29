import * as runtime from '@prisma/client/runtime/client';

type AggregatePostType = {
    _count: PostTypeCountAggregateOutputType | null;
    _min: PostTypeMinAggregateOutputType | null;
    _max: PostTypeMaxAggregateOutputType | null;
};
type PostTypeMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    name: string | null;
    slug: string | null;
    schema: string | null;
    isHighlighted: boolean | null;
};
type PostTypeMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    name: string | null;
    slug: string | null;
    schema: string | null;
    isHighlighted: boolean | null;
};
type PostTypeCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    name: number;
    slug: number;
    schema: number;
    isHighlighted: number;
    _all: number;
};
type PostTypeMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
    slug?: true;
    schema?: true;
    isHighlighted?: true;
};
type PostTypeMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
    slug?: true;
    schema?: true;
    isHighlighted?: true;
};
type PostTypeCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
    slug?: true;
    schema?: true;
    isHighlighted?: true;
    _all?: true;
};
type PostTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PostType to aggregate.
     */
    where?: PostTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTypes to fetch.
     */
    orderBy?: PostTypeOrderByWithRelationInput | PostTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PostTypes
    **/
    _count?: true | PostTypeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PostTypeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PostTypeMaxAggregateInputType;
};
type GetPostTypeAggregateType<T extends PostTypeAggregateArgs> = {
    [P in keyof T & keyof AggregatePostType]: P extends '_count' | 'count' ? T[P] extends true ? number : GetScalarType<T[P], AggregatePostType[P]> : GetScalarType<T[P], AggregatePostType[P]>;
};
type PostTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: PostTypeWhereInput;
    orderBy?: PostTypeOrderByWithAggregationInput | PostTypeOrderByWithAggregationInput[];
    by: PostTypeScalarFieldEnum[] | PostTypeScalarFieldEnum;
    having?: PostTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostTypeCountAggregateInputType | true;
    _min?: PostTypeMinAggregateInputType;
    _max?: PostTypeMaxAggregateInputType;
};
type PostTypeGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date | null;
    name: string;
    slug: string;
    schema: string;
    isHighlighted: boolean;
    _count: PostTypeCountAggregateOutputType | null;
    _min: PostTypeMinAggregateOutputType | null;
    _max: PostTypeMaxAggregateOutputType | null;
};
type GetPostTypeGroupByPayload<T extends PostTypeGroupByArgs> = PrismaPromise<Array<PickEnumerable<PostTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PostTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : GetScalarType<T[P], PostTypeGroupByOutputType[P]> : GetScalarType<T[P], PostTypeGroupByOutputType[P]>;
}>>;
type PostTypeWhereInput = {
    AND?: PostTypeWhereInput | PostTypeWhereInput[];
    OR?: PostTypeWhereInput[];
    NOT?: PostTypeWhereInput | PostTypeWhereInput[];
    id?: StringFilter<"PostType"> | string;
    createdAt?: DateTimeFilter<"PostType"> | Date | string;
    updatedAt?: DateTimeNullableFilter<"PostType"> | Date | string | null;
    name?: StringFilter<"PostType"> | string;
    slug?: StringFilter<"PostType"> | string;
    schema?: StringFilter<"PostType"> | string;
    isHighlighted?: BoolFilter<"PostType"> | boolean;
    posts?: PostListRelationFilter;
};
type PostTypeOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    schema?: SortOrder;
    isHighlighted?: SortOrder;
    posts?: PostOrderByRelationAggregateInput;
};
type PostTypeWhereUniqueInput = AtLeast<{
    id?: string;
    name?: string;
    slug?: string;
    AND?: PostTypeWhereInput | PostTypeWhereInput[];
    OR?: PostTypeWhereInput[];
    NOT?: PostTypeWhereInput | PostTypeWhereInput[];
    createdAt?: DateTimeFilter<"PostType"> | Date | string;
    updatedAt?: DateTimeNullableFilter<"PostType"> | Date | string | null;
    schema?: StringFilter<"PostType"> | string;
    isHighlighted?: BoolFilter<"PostType"> | boolean;
    posts?: PostListRelationFilter;
}, "id" | "name" | "slug">;
type PostTypeOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    schema?: SortOrder;
    isHighlighted?: SortOrder;
    _count?: PostTypeCountOrderByAggregateInput;
    _max?: PostTypeMaxOrderByAggregateInput;
    _min?: PostTypeMinOrderByAggregateInput;
};
type PostTypeScalarWhereWithAggregatesInput = {
    AND?: PostTypeScalarWhereWithAggregatesInput | PostTypeScalarWhereWithAggregatesInput[];
    OR?: PostTypeScalarWhereWithAggregatesInput[];
    NOT?: PostTypeScalarWhereWithAggregatesInput | PostTypeScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"PostType"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"PostType"> | Date | string;
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PostType"> | Date | string | null;
    name?: StringWithAggregatesFilter<"PostType"> | string;
    slug?: StringWithAggregatesFilter<"PostType"> | string;
    schema?: StringWithAggregatesFilter<"PostType"> | string;
    isHighlighted?: BoolWithAggregatesFilter<"PostType"> | boolean;
};
type PostTypeCreateInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    schema: string;
    isHighlighted: boolean;
    posts?: PostCreateNestedManyWithoutPostTypeInput;
};
type PostTypeUncheckedCreateInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    schema: string;
    isHighlighted: boolean;
    posts?: PostUncheckedCreateNestedManyWithoutPostTypeInput;
};
type PostTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    schema?: StringFieldUpdateOperationsInput | string;
    isHighlighted?: BoolFieldUpdateOperationsInput | boolean;
    posts?: PostUpdateManyWithoutPostTypeNestedInput;
};
type PostTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    schema?: StringFieldUpdateOperationsInput | string;
    isHighlighted?: BoolFieldUpdateOperationsInput | boolean;
    posts?: PostUncheckedUpdateManyWithoutPostTypeNestedInput;
};
type PostTypeCreateManyInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    schema: string;
    isHighlighted: boolean;
};
type PostTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    schema?: StringFieldUpdateOperationsInput | string;
    isHighlighted?: BoolFieldUpdateOperationsInput | boolean;
};
type PostTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    schema?: StringFieldUpdateOperationsInput | string;
    isHighlighted?: BoolFieldUpdateOperationsInput | boolean;
};
type PostTypeCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    schema?: SortOrder;
    isHighlighted?: SortOrder;
};
type PostTypeMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    schema?: SortOrder;
    isHighlighted?: SortOrder;
};
type PostTypeMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    schema?: SortOrder;
    isHighlighted?: SortOrder;
};
type PostTypeScalarRelationFilter = {
    is?: PostTypeWhereInput;
    isNot?: PostTypeWhereInput;
};
type StringFieldUpdateOperationsInput = {
    set?: string;
};
type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
type PostTypeCreateNestedOneWithoutPostsInput = {
    create?: XOR<PostTypeCreateWithoutPostsInput, PostTypeUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: PostTypeCreateOrConnectWithoutPostsInput;
    connect?: PostTypeWhereUniqueInput;
};
type PostTypeUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<PostTypeCreateWithoutPostsInput, PostTypeUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: PostTypeCreateOrConnectWithoutPostsInput;
    upsert?: PostTypeUpsertWithoutPostsInput;
    connect?: PostTypeWhereUniqueInput;
    update?: XOR<XOR<PostTypeUpdateToOneWithWhereWithoutPostsInput, PostTypeUpdateWithoutPostsInput>, PostTypeUncheckedUpdateWithoutPostsInput>;
};
type PostTypeCreateWithoutPostsInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    schema: string;
    isHighlighted: boolean;
};
type PostTypeUncheckedCreateWithoutPostsInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    schema: string;
    isHighlighted: boolean;
};
type PostTypeCreateOrConnectWithoutPostsInput = {
    where: PostTypeWhereUniqueInput;
    create: XOR<PostTypeCreateWithoutPostsInput, PostTypeUncheckedCreateWithoutPostsInput>;
};
type PostTypeUpsertWithoutPostsInput = {
    update: XOR<PostTypeUpdateWithoutPostsInput, PostTypeUncheckedUpdateWithoutPostsInput>;
    create: XOR<PostTypeCreateWithoutPostsInput, PostTypeUncheckedCreateWithoutPostsInput>;
    where?: PostTypeWhereInput;
};
type PostTypeUpdateToOneWithWhereWithoutPostsInput = {
    where?: PostTypeWhereInput;
    data: XOR<PostTypeUpdateWithoutPostsInput, PostTypeUncheckedUpdateWithoutPostsInput>;
};
type PostTypeUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    schema?: StringFieldUpdateOperationsInput | string;
    isHighlighted?: BoolFieldUpdateOperationsInput | boolean;
};
type PostTypeUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    schema?: StringFieldUpdateOperationsInput | string;
    isHighlighted?: BoolFieldUpdateOperationsInput | boolean;
};
type PostTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | PostTypeCountOutputTypeCountPostsArgs;
};
/**
 * PostTypeCountOutputType without action
 */
type PostTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTypeCountOutputType
     */
    select?: PostTypeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PostTypeCountOutputType without action
 */
type PostTypeCountOutputTypeCountPostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: PostWhereInput;
};
type PostTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    name?: boolean;
    slug?: boolean;
    schema?: boolean;
    isHighlighted?: boolean;
    posts?: boolean | PostType$postsArgs<ExtArgs>;
    _count?: boolean | PostTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["postType"]>;
type PostTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    name?: boolean;
    slug?: boolean;
    schema?: boolean;
    isHighlighted?: boolean;
}, ExtArgs["result"]["postType"]>;
type PostTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    name?: boolean;
    slug?: boolean;
    schema?: boolean;
    isHighlighted?: boolean;
}, ExtArgs["result"]["postType"]>;
type PostTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "slug" | "schema" | "isHighlighted", ExtArgs["result"]["postType"]>;
type PostTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | PostType$postsArgs<ExtArgs>;
    _count?: boolean | PostTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
type $PostTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PostType";
    objects: {
        posts: $PostPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        createdAt: Date;
        updatedAt: Date | null;
        name: string;
        slug: string;
        schema: string;
        isHighlighted: boolean;
    }, ExtArgs["result"]["postType"]>;
    composites: {};
};
type PostTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PostTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostTypeCountAggregateInputType | true;
};
interface PostTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: TypeMap<ExtArgs>['model']['PostType'];
        meta: {
            name: 'PostType';
        };
    };
    /**
     * Find zero or one PostType that matches the filter.
     * @param {PostTypeFindUniqueArgs} args - Arguments to find a PostType
     * @example
     * // Get one PostType
     * const postType = await prisma.postType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTypeFindUniqueArgs>(args: SelectSubset<T, PostTypeFindUniqueArgs<ExtArgs>>): Prisma__PostTypeClient<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PostType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTypeFindUniqueOrThrowArgs} args - Arguments to find a PostType
     * @example
     * // Get one PostType
     * const postType = await prisma.postType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, PostTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostTypeClient<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PostType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeFindFirstArgs} args - Arguments to find a PostType
     * @example
     * // Get one PostType
     * const postType = await prisma.postType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTypeFindFirstArgs>(args?: SelectSubset<T, PostTypeFindFirstArgs<ExtArgs>>): Prisma__PostTypeClient<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PostType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeFindFirstOrThrowArgs} args - Arguments to find a PostType
     * @example
     * // Get one PostType
     * const postType = await prisma.postType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, PostTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostTypeClient<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PostTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTypes
     * const postTypes = await prisma.postType.findMany()
     *
     * // Get first 10 PostTypes
     * const postTypes = await prisma.postType.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postTypeWithIdOnly = await prisma.postType.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostTypeFindManyArgs>(args?: SelectSubset<T, PostTypeFindManyArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PostType.
     * @param {PostTypeCreateArgs} args - Arguments to create a PostType.
     * @example
     * // Create one PostType
     * const PostType = await prisma.postType.create({
     *   data: {
     *     // ... data to create a PostType
     *   }
     * })
     *
     */
    create<T extends PostTypeCreateArgs>(args: SelectSubset<T, PostTypeCreateArgs<ExtArgs>>): Prisma__PostTypeClient<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PostTypes.
     * @param {PostTypeCreateManyArgs} args - Arguments to create many PostTypes.
     * @example
     * // Create many PostTypes
     * const postType = await prisma.postType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostTypeCreateManyArgs>(args?: SelectSubset<T, PostTypeCreateManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Create many PostTypes and returns the data saved in the database.
     * @param {PostTypeCreateManyAndReturnArgs} args - Arguments to create many PostTypes.
     * @example
     * // Create many PostTypes
     * const postType = await prisma.postType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PostTypes and only return the `id`
     * const postTypeWithIdOnly = await prisma.postType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, PostTypeCreateManyAndReturnArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PostType.
     * @param {PostTypeDeleteArgs} args - Arguments to delete one PostType.
     * @example
     * // Delete one PostType
     * const PostType = await prisma.postType.delete({
     *   where: {
     *     // ... filter to delete one PostType
     *   }
     * })
     *
     */
    delete<T extends PostTypeDeleteArgs>(args: SelectSubset<T, PostTypeDeleteArgs<ExtArgs>>): Prisma__PostTypeClient<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PostType.
     * @param {PostTypeUpdateArgs} args - Arguments to update one PostType.
     * @example
     * // Update one PostType
     * const postType = await prisma.postType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostTypeUpdateArgs>(args: SelectSubset<T, PostTypeUpdateArgs<ExtArgs>>): Prisma__PostTypeClient<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PostTypes.
     * @param {PostTypeDeleteManyArgs} args - Arguments to filter PostTypes to delete.
     * @example
     * // Delete a few PostTypes
     * const { count } = await prisma.postType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostTypeDeleteManyArgs>(args?: SelectSubset<T, PostTypeDeleteManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Update zero or more PostTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTypes
     * const postType = await prisma.postType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostTypeUpdateManyArgs>(args: SelectSubset<T, PostTypeUpdateManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Update zero or more PostTypes and returns the data updated in the database.
     * @param {PostTypeUpdateManyAndReturnArgs} args - Arguments to update many PostTypes.
     * @example
     * // Update many PostTypes
     * const postType = await prisma.postType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PostTypes and only return the `id`
     * const postTypeWithIdOnly = await prisma.postType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PostTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, PostTypeUpdateManyAndReturnArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PostType.
     * @param {PostTypeUpsertArgs} args - Arguments to update or create a PostType.
     * @example
     * // Update or create a PostType
     * const postType = await prisma.postType.upsert({
     *   create: {
     *     // ... data to create a PostType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostType we want to update
     *   }
     * })
     */
    upsert<T extends PostTypeUpsertArgs>(args: SelectSubset<T, PostTypeUpsertArgs<ExtArgs>>): Prisma__PostTypeClient<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PostTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeCountArgs} args - Arguments to filter PostTypes to count.
     * @example
     * // Count the number of PostTypes
     * const count = await prisma.postType.count({
     *   where: {
     *     // ... the filter for the PostTypes we want to count
     *   }
     * })
    **/
    count<T extends PostTypeCountArgs>(args?: Subset<T, PostTypeCountArgs>): PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : GetScalarType<T['select'], PostTypeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PostType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostTypeAggregateArgs>(args: Subset<T, PostTypeAggregateArgs>): PrismaPromise<GetPostTypeAggregateType<T>>;
    /**
     * Group by PostType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PostTypeGroupByArgs, HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>, OrderByArg extends True extends HasSelectOrTake ? {
        orderBy: PostTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: PostTypeGroupByArgs['orderBy'];
    }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True ? `Error: "by" must not be empty.` : HavingValid extends False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Keys<T> ? 'orderBy' extends Keys<T> ? ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Keys<T> ? 'orderBy' extends Keys<T> ? ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: SubsetIntersection<T, PostTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTypeGroupByPayload<T> : PrismaPromise<InputErrors>;
    /**
     * Fields of the PostType model
     */
    readonly fields: PostTypeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PostType.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
interface Prisma__PostTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    posts<T extends PostType$postsArgs<ExtArgs> = {}>(args?: Subset<T, PostType$postsArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the PostType model
 */
interface PostTypeFieldRefs {
    readonly id: FieldRef<"PostType", 'String'>;
    readonly createdAt: FieldRef<"PostType", 'DateTime'>;
    readonly updatedAt: FieldRef<"PostType", 'DateTime'>;
    readonly name: FieldRef<"PostType", 'String'>;
    readonly slug: FieldRef<"PostType", 'String'>;
    readonly schema: FieldRef<"PostType", 'String'>;
    readonly isHighlighted: FieldRef<"PostType", 'Boolean'>;
}
/**
 * PostType findUnique
 */
type PostTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTypeInclude<ExtArgs> | null;
    /**
     * Filter, which PostType to fetch.
     */
    where: PostTypeWhereUniqueInput;
};
/**
 * PostType findUniqueOrThrow
 */
type PostTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTypeInclude<ExtArgs> | null;
    /**
     * Filter, which PostType to fetch.
     */
    where: PostTypeWhereUniqueInput;
};
/**
 * PostType findFirst
 */
type PostTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTypeInclude<ExtArgs> | null;
    /**
     * Filter, which PostType to fetch.
     */
    where?: PostTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTypes to fetch.
     */
    orderBy?: PostTypeOrderByWithRelationInput | PostTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostTypes.
     */
    cursor?: PostTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostTypes.
     */
    distinct?: PostTypeScalarFieldEnum | PostTypeScalarFieldEnum[];
};
/**
 * PostType findFirstOrThrow
 */
type PostTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTypeInclude<ExtArgs> | null;
    /**
     * Filter, which PostType to fetch.
     */
    where?: PostTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTypes to fetch.
     */
    orderBy?: PostTypeOrderByWithRelationInput | PostTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostTypes.
     */
    cursor?: PostTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostTypes.
     */
    distinct?: PostTypeScalarFieldEnum | PostTypeScalarFieldEnum[];
};
/**
 * PostType findMany
 */
type PostTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTypeInclude<ExtArgs> | null;
    /**
     * Filter, which PostTypes to fetch.
     */
    where?: PostTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTypes to fetch.
     */
    orderBy?: PostTypeOrderByWithRelationInput | PostTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PostTypes.
     */
    cursor?: PostTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTypes.
     */
    skip?: number;
    distinct?: PostTypeScalarFieldEnum | PostTypeScalarFieldEnum[];
};
/**
 * PostType create
 */
type PostTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTypeInclude<ExtArgs> | null;
    /**
     * The data needed to create a PostType.
     */
    data: XOR<PostTypeCreateInput, PostTypeUncheckedCreateInput>;
};
/**
 * PostType createMany
 */
type PostTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTypes.
     */
    data: PostTypeCreateManyInput | PostTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PostType createManyAndReturn
 */
type PostTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * The data used to create many PostTypes.
     */
    data: PostTypeCreateManyInput | PostTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PostType update
 */
type PostTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTypeInclude<ExtArgs> | null;
    /**
     * The data needed to update a PostType.
     */
    data: XOR<PostTypeUpdateInput, PostTypeUncheckedUpdateInput>;
    /**
     * Choose, which PostType to update.
     */
    where: PostTypeWhereUniqueInput;
};
/**
 * PostType updateMany
 */
type PostTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTypes.
     */
    data: XOR<PostTypeUpdateManyMutationInput, PostTypeUncheckedUpdateManyInput>;
    /**
     * Filter which PostTypes to update
     */
    where?: PostTypeWhereInput;
    /**
     * Limit how many PostTypes to update.
     */
    limit?: number;
};
/**
 * PostType updateManyAndReturn
 */
type PostTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * The data used to update PostTypes.
     */
    data: XOR<PostTypeUpdateManyMutationInput, PostTypeUncheckedUpdateManyInput>;
    /**
     * Filter which PostTypes to update
     */
    where?: PostTypeWhereInput;
    /**
     * Limit how many PostTypes to update.
     */
    limit?: number;
};
/**
 * PostType upsert
 */
type PostTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTypeInclude<ExtArgs> | null;
    /**
     * The filter to search for the PostType to update in case it exists.
     */
    where: PostTypeWhereUniqueInput;
    /**
     * In case the PostType found by the `where` argument doesn't exist, create a new PostType with this data.
     */
    create: XOR<PostTypeCreateInput, PostTypeUncheckedCreateInput>;
    /**
     * In case the PostType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTypeUpdateInput, PostTypeUncheckedUpdateInput>;
};
/**
 * PostType delete
 */
type PostTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTypeInclude<ExtArgs> | null;
    /**
     * Filter which PostType to delete.
     */
    where: PostTypeWhereUniqueInput;
};
/**
 * PostType deleteMany
 */
type PostTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PostTypes to delete
     */
    where?: PostTypeWhereInput;
    /**
     * Limit how many PostTypes to delete.
     */
    limit?: number;
};
/**
 * PostType.posts
 */
type PostType$postsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
};
/**
 * PostType without action
 */
type PostTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostType
     */
    select?: PostTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostType
     */
    omit?: PostTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTypeInclude<ExtArgs> | null;
};

type AggregatePostTag = {
    _count: PostTagCountAggregateOutputType | null;
    _min: PostTagMinAggregateOutputType | null;
    _max: PostTagMaxAggregateOutputType | null;
};
type PostTagMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    name: string | null;
    slug: string | null;
    hidden: boolean | null;
};
type PostTagMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    name: string | null;
    slug: string | null;
    hidden: boolean | null;
};
type PostTagCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    name: number;
    slug: number;
    hidden: number;
    _all: number;
};
type PostTagMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
    slug?: true;
    hidden?: true;
};
type PostTagMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
    slug?: true;
    hidden?: true;
};
type PostTagCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
    slug?: true;
    hidden?: true;
    _all?: true;
};
type PostTagAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PostTag to aggregate.
     */
    where?: PostTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PostTags
    **/
    _count?: true | PostTagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PostTagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PostTagMaxAggregateInputType;
};
type GetPostTagAggregateType<T extends PostTagAggregateArgs> = {
    [P in keyof T & keyof AggregatePostTag]: P extends '_count' | 'count' ? T[P] extends true ? number : GetScalarType<T[P], AggregatePostTag[P]> : GetScalarType<T[P], AggregatePostTag[P]>;
};
type PostTagGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: PostTagWhereInput;
    orderBy?: PostTagOrderByWithAggregationInput | PostTagOrderByWithAggregationInput[];
    by: PostTagScalarFieldEnum[] | PostTagScalarFieldEnum;
    having?: PostTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostTagCountAggregateInputType | true;
    _min?: PostTagMinAggregateInputType;
    _max?: PostTagMaxAggregateInputType;
};
type PostTagGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date | null;
    name: string;
    slug: string;
    hidden: boolean;
    _count: PostTagCountAggregateOutputType | null;
    _min: PostTagMinAggregateOutputType | null;
    _max: PostTagMaxAggregateOutputType | null;
};
type GetPostTagGroupByPayload<T extends PostTagGroupByArgs> = PrismaPromise<Array<PickEnumerable<PostTagGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PostTagGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : GetScalarType<T[P], PostTagGroupByOutputType[P]> : GetScalarType<T[P], PostTagGroupByOutputType[P]>;
}>>;
type PostTagWhereInput = {
    AND?: PostTagWhereInput | PostTagWhereInput[];
    OR?: PostTagWhereInput[];
    NOT?: PostTagWhereInput | PostTagWhereInput[];
    id?: StringFilter<"PostTag"> | string;
    createdAt?: DateTimeFilter<"PostTag"> | Date | string;
    updatedAt?: DateTimeNullableFilter<"PostTag"> | Date | string | null;
    name?: StringFilter<"PostTag"> | string;
    slug?: StringFilter<"PostTag"> | string;
    hidden?: BoolFilter<"PostTag"> | boolean;
    posts?: PostListRelationFilter;
};
type PostTagOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    hidden?: SortOrder;
    posts?: PostOrderByRelationAggregateInput;
};
type PostTagWhereUniqueInput = AtLeast<{
    id?: string;
    name?: string;
    slug?: string;
    AND?: PostTagWhereInput | PostTagWhereInput[];
    OR?: PostTagWhereInput[];
    NOT?: PostTagWhereInput | PostTagWhereInput[];
    createdAt?: DateTimeFilter<"PostTag"> | Date | string;
    updatedAt?: DateTimeNullableFilter<"PostTag"> | Date | string | null;
    hidden?: BoolFilter<"PostTag"> | boolean;
    posts?: PostListRelationFilter;
}, "id" | "name" | "slug">;
type PostTagOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    hidden?: SortOrder;
    _count?: PostTagCountOrderByAggregateInput;
    _max?: PostTagMaxOrderByAggregateInput;
    _min?: PostTagMinOrderByAggregateInput;
};
type PostTagScalarWhereWithAggregatesInput = {
    AND?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[];
    OR?: PostTagScalarWhereWithAggregatesInput[];
    NOT?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"PostTag"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"PostTag"> | Date | string;
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PostTag"> | Date | string | null;
    name?: StringWithAggregatesFilter<"PostTag"> | string;
    slug?: StringWithAggregatesFilter<"PostTag"> | string;
    hidden?: BoolWithAggregatesFilter<"PostTag"> | boolean;
};
type PostTagCreateInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    hidden: boolean;
    posts?: PostCreateNestedManyWithoutTagsInput;
};
type PostTagUncheckedCreateInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    hidden: boolean;
    posts?: PostUncheckedCreateNestedManyWithoutTagsInput;
};
type PostTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    hidden?: BoolFieldUpdateOperationsInput | boolean;
    posts?: PostUpdateManyWithoutTagsNestedInput;
};
type PostTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    hidden?: BoolFieldUpdateOperationsInput | boolean;
    posts?: PostUncheckedUpdateManyWithoutTagsNestedInput;
};
type PostTagCreateManyInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    hidden: boolean;
};
type PostTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    hidden?: BoolFieldUpdateOperationsInput | boolean;
};
type PostTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    hidden?: BoolFieldUpdateOperationsInput | boolean;
};
type PostTagCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    hidden?: SortOrder;
};
type PostTagMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    hidden?: SortOrder;
};
type PostTagMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    hidden?: SortOrder;
};
type PostTagListRelationFilter = {
    every?: PostTagWhereInput;
    some?: PostTagWhereInput;
    none?: PostTagWhereInput;
};
type PostTagOrderByRelationAggregateInput = {
    _count?: SortOrder;
};
type PostTagCreateNestedManyWithoutPostsInput = {
    create?: XOR<PostTagCreateWithoutPostsInput, PostTagUncheckedCreateWithoutPostsInput> | PostTagCreateWithoutPostsInput[] | PostTagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: PostTagCreateOrConnectWithoutPostsInput | PostTagCreateOrConnectWithoutPostsInput[];
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
};
type PostTagUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<PostTagCreateWithoutPostsInput, PostTagUncheckedCreateWithoutPostsInput> | PostTagCreateWithoutPostsInput[] | PostTagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: PostTagCreateOrConnectWithoutPostsInput | PostTagCreateOrConnectWithoutPostsInput[];
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
};
type PostTagUpdateManyWithoutPostsNestedInput = {
    create?: XOR<PostTagCreateWithoutPostsInput, PostTagUncheckedCreateWithoutPostsInput> | PostTagCreateWithoutPostsInput[] | PostTagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: PostTagCreateOrConnectWithoutPostsInput | PostTagCreateOrConnectWithoutPostsInput[];
    upsert?: PostTagUpsertWithWhereUniqueWithoutPostsInput | PostTagUpsertWithWhereUniqueWithoutPostsInput[];
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    update?: PostTagUpdateWithWhereUniqueWithoutPostsInput | PostTagUpdateWithWhereUniqueWithoutPostsInput[];
    updateMany?: PostTagUpdateManyWithWhereWithoutPostsInput | PostTagUpdateManyWithWhereWithoutPostsInput[];
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[];
};
type PostTagUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<PostTagCreateWithoutPostsInput, PostTagUncheckedCreateWithoutPostsInput> | PostTagCreateWithoutPostsInput[] | PostTagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: PostTagCreateOrConnectWithoutPostsInput | PostTagCreateOrConnectWithoutPostsInput[];
    upsert?: PostTagUpsertWithWhereUniqueWithoutPostsInput | PostTagUpsertWithWhereUniqueWithoutPostsInput[];
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    update?: PostTagUpdateWithWhereUniqueWithoutPostsInput | PostTagUpdateWithWhereUniqueWithoutPostsInput[];
    updateMany?: PostTagUpdateManyWithWhereWithoutPostsInput | PostTagUpdateManyWithWhereWithoutPostsInput[];
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[];
};
type PostTagCreateWithoutPostsInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    hidden: boolean;
};
type PostTagUncheckedCreateWithoutPostsInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    hidden: boolean;
};
type PostTagCreateOrConnectWithoutPostsInput = {
    where: PostTagWhereUniqueInput;
    create: XOR<PostTagCreateWithoutPostsInput, PostTagUncheckedCreateWithoutPostsInput>;
};
type PostTagUpsertWithWhereUniqueWithoutPostsInput = {
    where: PostTagWhereUniqueInput;
    update: XOR<PostTagUpdateWithoutPostsInput, PostTagUncheckedUpdateWithoutPostsInput>;
    create: XOR<PostTagCreateWithoutPostsInput, PostTagUncheckedCreateWithoutPostsInput>;
};
type PostTagUpdateWithWhereUniqueWithoutPostsInput = {
    where: PostTagWhereUniqueInput;
    data: XOR<PostTagUpdateWithoutPostsInput, PostTagUncheckedUpdateWithoutPostsInput>;
};
type PostTagUpdateManyWithWhereWithoutPostsInput = {
    where: PostTagScalarWhereInput;
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutPostsInput>;
};
type PostTagScalarWhereInput = {
    AND?: PostTagScalarWhereInput | PostTagScalarWhereInput[];
    OR?: PostTagScalarWhereInput[];
    NOT?: PostTagScalarWhereInput | PostTagScalarWhereInput[];
    id?: StringFilter<"PostTag"> | string;
    createdAt?: DateTimeFilter<"PostTag"> | Date | string;
    updatedAt?: DateTimeNullableFilter<"PostTag"> | Date | string | null;
    name?: StringFilter<"PostTag"> | string;
    slug?: StringFilter<"PostTag"> | string;
    hidden?: BoolFilter<"PostTag"> | boolean;
};
type PostTagUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    hidden?: BoolFieldUpdateOperationsInput | boolean;
};
type PostTagUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    hidden?: BoolFieldUpdateOperationsInput | boolean;
};
type PostTagUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    hidden?: BoolFieldUpdateOperationsInput | boolean;
};
type PostTagCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | PostTagCountOutputTypeCountPostsArgs;
};
/**
 * PostTagCountOutputType without action
 */
type PostTagCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTagCountOutputType
     */
    select?: PostTagCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PostTagCountOutputType without action
 */
type PostTagCountOutputTypeCountPostsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: PostWhereInput;
};
type PostTagSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    name?: boolean;
    slug?: boolean;
    hidden?: boolean;
    posts?: boolean | PostTag$postsArgs<ExtArgs>;
    _count?: boolean | PostTagCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["postTag"]>;
type PostTagSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    name?: boolean;
    slug?: boolean;
    hidden?: boolean;
}, ExtArgs["result"]["postTag"]>;
type PostTagSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    name?: boolean;
    slug?: boolean;
    hidden?: boolean;
}, ExtArgs["result"]["postTag"]>;
type PostTagOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "slug" | "hidden", ExtArgs["result"]["postTag"]>;
type PostTagInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | PostTag$postsArgs<ExtArgs>;
    _count?: boolean | PostTagCountOutputTypeDefaultArgs<ExtArgs>;
};
type $PostTagPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PostTag";
    objects: {
        posts: $PostPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        createdAt: Date;
        updatedAt: Date | null;
        name: string;
        slug: string;
        hidden: boolean;
    }, ExtArgs["result"]["postTag"]>;
    composites: {};
};
type PostTagCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PostTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostTagCountAggregateInputType | true;
};
interface PostTagDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: TypeMap<ExtArgs>['model']['PostTag'];
        meta: {
            name: 'PostTag';
        };
    };
    /**
     * Find zero or one PostTag that matches the filter.
     * @param {PostTagFindUniqueArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTagFindUniqueArgs>(args: SelectSubset<T, PostTagFindUniqueArgs<ExtArgs>>): Prisma__PostTagClient<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PostTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTagFindUniqueOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTagFindUniqueOrThrowArgs>(args: SelectSubset<T, PostTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostTagClient<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PostTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTagFindFirstArgs>(args?: SelectSubset<T, PostTagFindFirstArgs<ExtArgs>>): Prisma__PostTagClient<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PostTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTagFindFirstOrThrowArgs>(args?: SelectSubset<T, PostTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostTagClient<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTags
     * const postTags = await prisma.postTag.findMany()
     *
     * // Get first 10 PostTags
     * const postTags = await prisma.postTag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postTagWithIdOnly = await prisma.postTag.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostTagFindManyArgs>(args?: SelectSubset<T, PostTagFindManyArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PostTag.
     * @param {PostTagCreateArgs} args - Arguments to create a PostTag.
     * @example
     * // Create one PostTag
     * const PostTag = await prisma.postTag.create({
     *   data: {
     *     // ... data to create a PostTag
     *   }
     * })
     *
     */
    create<T extends PostTagCreateArgs>(args: SelectSubset<T, PostTagCreateArgs<ExtArgs>>): Prisma__PostTagClient<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PostTags.
     * @param {PostTagCreateManyArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTag = await prisma.postTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostTagCreateManyArgs>(args?: SelectSubset<T, PostTagCreateManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Create many PostTags and returns the data saved in the database.
     * @param {PostTagCreateManyAndReturnArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTag = await prisma.postTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PostTags and only return the `id`
     * const postTagWithIdOnly = await prisma.postTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostTagCreateManyAndReturnArgs>(args?: SelectSubset<T, PostTagCreateManyAndReturnArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PostTag.
     * @param {PostTagDeleteArgs} args - Arguments to delete one PostTag.
     * @example
     * // Delete one PostTag
     * const PostTag = await prisma.postTag.delete({
     *   where: {
     *     // ... filter to delete one PostTag
     *   }
     * })
     *
     */
    delete<T extends PostTagDeleteArgs>(args: SelectSubset<T, PostTagDeleteArgs<ExtArgs>>): Prisma__PostTagClient<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PostTag.
     * @param {PostTagUpdateArgs} args - Arguments to update one PostTag.
     * @example
     * // Update one PostTag
     * const postTag = await prisma.postTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostTagUpdateArgs>(args: SelectSubset<T, PostTagUpdateArgs<ExtArgs>>): Prisma__PostTagClient<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PostTags.
     * @param {PostTagDeleteManyArgs} args - Arguments to filter PostTags to delete.
     * @example
     * // Delete a few PostTags
     * const { count } = await prisma.postTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostTagDeleteManyArgs>(args?: SelectSubset<T, PostTagDeleteManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Update zero or more PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTags
     * const postTag = await prisma.postTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostTagUpdateManyArgs>(args: SelectSubset<T, PostTagUpdateManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Update zero or more PostTags and returns the data updated in the database.
     * @param {PostTagUpdateManyAndReturnArgs} args - Arguments to update many PostTags.
     * @example
     * // Update many PostTags
     * const postTag = await prisma.postTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PostTags and only return the `id`
     * const postTagWithIdOnly = await prisma.postTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PostTagUpdateManyAndReturnArgs>(args: SelectSubset<T, PostTagUpdateManyAndReturnArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PostTag.
     * @param {PostTagUpsertArgs} args - Arguments to update or create a PostTag.
     * @example
     * // Update or create a PostTag
     * const postTag = await prisma.postTag.upsert({
     *   create: {
     *     // ... data to create a PostTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTag we want to update
     *   }
     * })
     */
    upsert<T extends PostTagUpsertArgs>(args: SelectSubset<T, PostTagUpsertArgs<ExtArgs>>): Prisma__PostTagClient<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagCountArgs} args - Arguments to filter PostTags to count.
     * @example
     * // Count the number of PostTags
     * const count = await prisma.postTag.count({
     *   where: {
     *     // ... the filter for the PostTags we want to count
     *   }
     * })
    **/
    count<T extends PostTagCountArgs>(args?: Subset<T, PostTagCountArgs>): PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : GetScalarType<T['select'], PostTagCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostTagAggregateArgs>(args: Subset<T, PostTagAggregateArgs>): PrismaPromise<GetPostTagAggregateType<T>>;
    /**
     * Group by PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PostTagGroupByArgs, HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>, OrderByArg extends True extends HasSelectOrTake ? {
        orderBy: PostTagGroupByArgs['orderBy'];
    } : {
        orderBy?: PostTagGroupByArgs['orderBy'];
    }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True ? `Error: "by" must not be empty.` : HavingValid extends False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Keys<T> ? 'orderBy' extends Keys<T> ? ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Keys<T> ? 'orderBy' extends Keys<T> ? ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: SubsetIntersection<T, PostTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTagGroupByPayload<T> : PrismaPromise<InputErrors>;
    /**
     * Fields of the PostTag model
     */
    readonly fields: PostTagFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PostTag.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
interface Prisma__PostTagClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    posts<T extends PostTag$postsArgs<ExtArgs> = {}>(args?: Subset<T, PostTag$postsArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the PostTag model
 */
interface PostTagFieldRefs {
    readonly id: FieldRef<"PostTag", 'String'>;
    readonly createdAt: FieldRef<"PostTag", 'DateTime'>;
    readonly updatedAt: FieldRef<"PostTag", 'DateTime'>;
    readonly name: FieldRef<"PostTag", 'String'>;
    readonly slug: FieldRef<"PostTag", 'String'>;
    readonly hidden: FieldRef<"PostTag", 'Boolean'>;
}
/**
 * PostTag findUnique
 */
type PostTagFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput;
};
/**
 * PostTag findUniqueOrThrow
 */
type PostTagFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput;
};
/**
 * PostTag findFirst
 */
type PostTagFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[];
};
/**
 * PostTag findFirstOrThrow
 */
type PostTagFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[];
};
/**
 * PostTag findMany
 */
type PostTagFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter, which PostTags to fetch.
     */
    where?: PostTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PostTags.
     */
    cursor?: PostTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTags.
     */
    skip?: number;
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[];
};
/**
 * PostTag create
 */
type PostTagCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * The data needed to create a PostTag.
     */
    data: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>;
};
/**
 * PostTag createMany
 */
type PostTagCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTags.
     */
    data: PostTagCreateManyInput | PostTagCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PostTag createManyAndReturn
 */
type PostTagCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * The data used to create many PostTags.
     */
    data: PostTagCreateManyInput | PostTagCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PostTag update
 */
type PostTagUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * The data needed to update a PostTag.
     */
    data: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>;
    /**
     * Choose, which PostTag to update.
     */
    where: PostTagWhereUniqueInput;
};
/**
 * PostTag updateMany
 */
type PostTagUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>;
    /**
     * Filter which PostTags to update
     */
    where?: PostTagWhereInput;
    /**
     * Limit how many PostTags to update.
     */
    limit?: number;
};
/**
 * PostTag updateManyAndReturn
 */
type PostTagUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>;
    /**
     * Filter which PostTags to update
     */
    where?: PostTagWhereInput;
    /**
     * Limit how many PostTags to update.
     */
    limit?: number;
};
/**
 * PostTag upsert
 */
type PostTagUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * The filter to search for the PostTag to update in case it exists.
     */
    where: PostTagWhereUniqueInput;
    /**
     * In case the PostTag found by the `where` argument doesn't exist, create a new PostTag with this data.
     */
    create: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>;
    /**
     * In case the PostTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>;
};
/**
 * PostTag delete
 */
type PostTagDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter which PostTag to delete.
     */
    where: PostTagWhereUniqueInput;
};
/**
 * PostTag deleteMany
 */
type PostTagDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PostTags to delete
     */
    where?: PostTagWhereInput;
    /**
     * Limit how many PostTags to delete.
     */
    limit?: number;
};
/**
 * PostTag.posts
 */
type PostTag$postsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
};

type AggregatePostContent = {
    _count: PostContentCountAggregateOutputType | null;
    _min: PostContentMinAggregateOutputType | null;
    _max: PostContentMaxAggregateOutputType | null;
};
type PostContentMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    postId: string | null;
    content: string | null;
};
type PostContentMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    postId: string | null;
    content: string | null;
};
type PostContentCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    postId: number;
    content: number;
    info: number;
    _all: number;
};
type PostContentMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    postId?: true;
    content?: true;
};
type PostContentMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    postId?: true;
    content?: true;
};
type PostContentCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    postId?: true;
    content?: true;
    info?: true;
    _all?: true;
};
type PostContentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PostContent to aggregate.
     */
    where?: PostContentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostContents to fetch.
     */
    orderBy?: PostContentOrderByWithRelationInput | PostContentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostContentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostContents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostContents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PostContents
    **/
    _count?: true | PostContentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PostContentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PostContentMaxAggregateInputType;
};
type GetPostContentAggregateType<T extends PostContentAggregateArgs> = {
    [P in keyof T & keyof AggregatePostContent]: P extends '_count' | 'count' ? T[P] extends true ? number : GetScalarType<T[P], AggregatePostContent[P]> : GetScalarType<T[P], AggregatePostContent[P]>;
};
type PostContentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: PostContentWhereInput;
    orderBy?: PostContentOrderByWithAggregationInput | PostContentOrderByWithAggregationInput[];
    by: PostContentScalarFieldEnum[] | PostContentScalarFieldEnum;
    having?: PostContentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostContentCountAggregateInputType | true;
    _min?: PostContentMinAggregateInputType;
    _max?: PostContentMaxAggregateInputType;
};
type PostContentGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date | null;
    postId: string;
    content: string;
    info: runtime.JsonValue;
    _count: PostContentCountAggregateOutputType | null;
    _min: PostContentMinAggregateOutputType | null;
    _max: PostContentMaxAggregateOutputType | null;
};
type GetPostContentGroupByPayload<T extends PostContentGroupByArgs> = PrismaPromise<Array<PickEnumerable<PostContentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PostContentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : GetScalarType<T[P], PostContentGroupByOutputType[P]> : GetScalarType<T[P], PostContentGroupByOutputType[P]>;
}>>;
type PostContentWhereInput = {
    AND?: PostContentWhereInput | PostContentWhereInput[];
    OR?: PostContentWhereInput[];
    NOT?: PostContentWhereInput | PostContentWhereInput[];
    id?: StringFilter<"PostContent"> | string;
    createdAt?: DateTimeFilter<"PostContent"> | Date | string;
    updatedAt?: DateTimeNullableFilter<"PostContent"> | Date | string | null;
    postId?: StringFilter<"PostContent"> | string;
    content?: StringFilter<"PostContent"> | string;
    info?: JsonFilter<"PostContent">;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
};
type PostContentOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    postId?: SortOrder;
    content?: SortOrder;
    info?: SortOrder;
    post?: PostOrderByWithRelationInput;
};
type PostContentWhereUniqueInput = AtLeast<{
    id?: string;
    postId?: string;
    AND?: PostContentWhereInput | PostContentWhereInput[];
    OR?: PostContentWhereInput[];
    NOT?: PostContentWhereInput | PostContentWhereInput[];
    createdAt?: DateTimeFilter<"PostContent"> | Date | string;
    updatedAt?: DateTimeNullableFilter<"PostContent"> | Date | string | null;
    content?: StringFilter<"PostContent"> | string;
    info?: JsonFilter<"PostContent">;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
}, "id" | "postId">;
type PostContentOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    postId?: SortOrder;
    content?: SortOrder;
    info?: SortOrder;
    _count?: PostContentCountOrderByAggregateInput;
    _max?: PostContentMaxOrderByAggregateInput;
    _min?: PostContentMinOrderByAggregateInput;
};
type PostContentScalarWhereWithAggregatesInput = {
    AND?: PostContentScalarWhereWithAggregatesInput | PostContentScalarWhereWithAggregatesInput[];
    OR?: PostContentScalarWhereWithAggregatesInput[];
    NOT?: PostContentScalarWhereWithAggregatesInput | PostContentScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"PostContent"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"PostContent"> | Date | string;
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PostContent"> | Date | string | null;
    postId?: StringWithAggregatesFilter<"PostContent"> | string;
    content?: StringWithAggregatesFilter<"PostContent"> | string;
    info?: JsonWithAggregatesFilter<"PostContent">;
};
type PostContentCreateInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    content: string;
    info: JsonNullValueInput | runtime.InputJsonValue;
    post: PostCreateNestedOneWithoutPostContentInput;
};
type PostContentUncheckedCreateInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    postId: string;
    content: string;
    info: JsonNullValueInput | runtime.InputJsonValue;
};
type PostContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    content?: StringFieldUpdateOperationsInput | string;
    info?: JsonNullValueInput | runtime.InputJsonValue;
    post?: PostUpdateOneRequiredWithoutPostContentNestedInput;
};
type PostContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    postId?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    info?: JsonNullValueInput | runtime.InputJsonValue;
};
type PostContentCreateManyInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    postId: string;
    content: string;
    info: JsonNullValueInput | runtime.InputJsonValue;
};
type PostContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    content?: StringFieldUpdateOperationsInput | string;
    info?: JsonNullValueInput | runtime.InputJsonValue;
};
type PostContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    postId?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    info?: JsonNullValueInput | runtime.InputJsonValue;
};
type PostContentCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    postId?: SortOrder;
    content?: SortOrder;
    info?: SortOrder;
};
type PostContentMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    postId?: SortOrder;
    content?: SortOrder;
};
type PostContentMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    postId?: SortOrder;
    content?: SortOrder;
};
type PostContentNullableScalarRelationFilter = {
    is?: PostContentWhereInput | null;
    isNot?: PostContentWhereInput | null;
};
type PostContentCreateNestedOneWithoutPostInput = {
    create?: XOR<PostContentCreateWithoutPostInput, PostContentUncheckedCreateWithoutPostInput>;
    connectOrCreate?: PostContentCreateOrConnectWithoutPostInput;
    connect?: PostContentWhereUniqueInput;
};
type PostContentUncheckedCreateNestedOneWithoutPostInput = {
    create?: XOR<PostContentCreateWithoutPostInput, PostContentUncheckedCreateWithoutPostInput>;
    connectOrCreate?: PostContentCreateOrConnectWithoutPostInput;
    connect?: PostContentWhereUniqueInput;
};
type PostContentUpdateOneWithoutPostNestedInput = {
    create?: XOR<PostContentCreateWithoutPostInput, PostContentUncheckedCreateWithoutPostInput>;
    connectOrCreate?: PostContentCreateOrConnectWithoutPostInput;
    upsert?: PostContentUpsertWithoutPostInput;
    disconnect?: PostContentWhereInput | boolean;
    delete?: PostContentWhereInput | boolean;
    connect?: PostContentWhereUniqueInput;
    update?: XOR<XOR<PostContentUpdateToOneWithWhereWithoutPostInput, PostContentUpdateWithoutPostInput>, PostContentUncheckedUpdateWithoutPostInput>;
};
type PostContentUncheckedUpdateOneWithoutPostNestedInput = {
    create?: XOR<PostContentCreateWithoutPostInput, PostContentUncheckedCreateWithoutPostInput>;
    connectOrCreate?: PostContentCreateOrConnectWithoutPostInput;
    upsert?: PostContentUpsertWithoutPostInput;
    disconnect?: PostContentWhereInput | boolean;
    delete?: PostContentWhereInput | boolean;
    connect?: PostContentWhereUniqueInput;
    update?: XOR<XOR<PostContentUpdateToOneWithWhereWithoutPostInput, PostContentUpdateWithoutPostInput>, PostContentUncheckedUpdateWithoutPostInput>;
};
type PostContentCreateWithoutPostInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    content: string;
    info: JsonNullValueInput | runtime.InputJsonValue;
};
type PostContentUncheckedCreateWithoutPostInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    content: string;
    info: JsonNullValueInput | runtime.InputJsonValue;
};
type PostContentCreateOrConnectWithoutPostInput = {
    where: PostContentWhereUniqueInput;
    create: XOR<PostContentCreateWithoutPostInput, PostContentUncheckedCreateWithoutPostInput>;
};
type PostContentUpsertWithoutPostInput = {
    update: XOR<PostContentUpdateWithoutPostInput, PostContentUncheckedUpdateWithoutPostInput>;
    create: XOR<PostContentCreateWithoutPostInput, PostContentUncheckedCreateWithoutPostInput>;
    where?: PostContentWhereInput;
};
type PostContentUpdateToOneWithWhereWithoutPostInput = {
    where?: PostContentWhereInput;
    data: XOR<PostContentUpdateWithoutPostInput, PostContentUncheckedUpdateWithoutPostInput>;
};
type PostContentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    content?: StringFieldUpdateOperationsInput | string;
    info?: JsonNullValueInput | runtime.InputJsonValue;
};
type PostContentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    content?: StringFieldUpdateOperationsInput | string;
    info?: JsonNullValueInput | runtime.InputJsonValue;
};
type PostContentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    postId?: boolean;
    content?: boolean;
    info?: boolean;
    post?: boolean | PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["postContent"]>;
type PostContentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    postId?: boolean;
    content?: boolean;
    info?: boolean;
    post?: boolean | PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["postContent"]>;
type PostContentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    postId?: boolean;
    content?: boolean;
    info?: boolean;
    post?: boolean | PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["postContent"]>;
type PostContentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "postId" | "content" | "info", ExtArgs["result"]["postContent"]>;
type PostContentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
};
type PostContentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
};
type PostContentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
};
type $PostContentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PostContent";
    objects: {
        post: $PostPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        createdAt: Date;
        updatedAt: Date | null;
        postId: string;
        content: string;
        info: runtime.JsonValue;
    }, ExtArgs["result"]["postContent"]>;
    composites: {};
};
type PostContentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PostContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostContentCountAggregateInputType | true;
};
interface PostContentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: TypeMap<ExtArgs>['model']['PostContent'];
        meta: {
            name: 'PostContent';
        };
    };
    /**
     * Find zero or one PostContent that matches the filter.
     * @param {PostContentFindUniqueArgs} args - Arguments to find a PostContent
     * @example
     * // Get one PostContent
     * const postContent = await prisma.postContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostContentFindUniqueArgs>(args: SelectSubset<T, PostContentFindUniqueArgs<ExtArgs>>): Prisma__PostContentClient<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PostContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostContentFindUniqueOrThrowArgs} args - Arguments to find a PostContent
     * @example
     * // Get one PostContent
     * const postContent = await prisma.postContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostContentFindUniqueOrThrowArgs>(args: SelectSubset<T, PostContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostContentClient<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PostContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostContentFindFirstArgs} args - Arguments to find a PostContent
     * @example
     * // Get one PostContent
     * const postContent = await prisma.postContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostContentFindFirstArgs>(args?: SelectSubset<T, PostContentFindFirstArgs<ExtArgs>>): Prisma__PostContentClient<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PostContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostContentFindFirstOrThrowArgs} args - Arguments to find a PostContent
     * @example
     * // Get one PostContent
     * const postContent = await prisma.postContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostContentFindFirstOrThrowArgs>(args?: SelectSubset<T, PostContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostContentClient<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PostContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostContents
     * const postContents = await prisma.postContent.findMany()
     *
     * // Get first 10 PostContents
     * const postContents = await prisma.postContent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postContentWithIdOnly = await prisma.postContent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostContentFindManyArgs>(args?: SelectSubset<T, PostContentFindManyArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PostContent.
     * @param {PostContentCreateArgs} args - Arguments to create a PostContent.
     * @example
     * // Create one PostContent
     * const PostContent = await prisma.postContent.create({
     *   data: {
     *     // ... data to create a PostContent
     *   }
     * })
     *
     */
    create<T extends PostContentCreateArgs>(args: SelectSubset<T, PostContentCreateArgs<ExtArgs>>): Prisma__PostContentClient<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PostContents.
     * @param {PostContentCreateManyArgs} args - Arguments to create many PostContents.
     * @example
     * // Create many PostContents
     * const postContent = await prisma.postContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostContentCreateManyArgs>(args?: SelectSubset<T, PostContentCreateManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Create many PostContents and returns the data saved in the database.
     * @param {PostContentCreateManyAndReturnArgs} args - Arguments to create many PostContents.
     * @example
     * // Create many PostContents
     * const postContent = await prisma.postContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PostContents and only return the `id`
     * const postContentWithIdOnly = await prisma.postContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostContentCreateManyAndReturnArgs>(args?: SelectSubset<T, PostContentCreateManyAndReturnArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PostContent.
     * @param {PostContentDeleteArgs} args - Arguments to delete one PostContent.
     * @example
     * // Delete one PostContent
     * const PostContent = await prisma.postContent.delete({
     *   where: {
     *     // ... filter to delete one PostContent
     *   }
     * })
     *
     */
    delete<T extends PostContentDeleteArgs>(args: SelectSubset<T, PostContentDeleteArgs<ExtArgs>>): Prisma__PostContentClient<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PostContent.
     * @param {PostContentUpdateArgs} args - Arguments to update one PostContent.
     * @example
     * // Update one PostContent
     * const postContent = await prisma.postContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostContentUpdateArgs>(args: SelectSubset<T, PostContentUpdateArgs<ExtArgs>>): Prisma__PostContentClient<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PostContents.
     * @param {PostContentDeleteManyArgs} args - Arguments to filter PostContents to delete.
     * @example
     * // Delete a few PostContents
     * const { count } = await prisma.postContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostContentDeleteManyArgs>(args?: SelectSubset<T, PostContentDeleteManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Update zero or more PostContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostContents
     * const postContent = await prisma.postContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostContentUpdateManyArgs>(args: SelectSubset<T, PostContentUpdateManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Update zero or more PostContents and returns the data updated in the database.
     * @param {PostContentUpdateManyAndReturnArgs} args - Arguments to update many PostContents.
     * @example
     * // Update many PostContents
     * const postContent = await prisma.postContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PostContents and only return the `id`
     * const postContentWithIdOnly = await prisma.postContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PostContentUpdateManyAndReturnArgs>(args: SelectSubset<T, PostContentUpdateManyAndReturnArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PostContent.
     * @param {PostContentUpsertArgs} args - Arguments to update or create a PostContent.
     * @example
     * // Update or create a PostContent
     * const postContent = await prisma.postContent.upsert({
     *   create: {
     *     // ... data to create a PostContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostContent we want to update
     *   }
     * })
     */
    upsert<T extends PostContentUpsertArgs>(args: SelectSubset<T, PostContentUpsertArgs<ExtArgs>>): Prisma__PostContentClient<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PostContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostContentCountArgs} args - Arguments to filter PostContents to count.
     * @example
     * // Count the number of PostContents
     * const count = await prisma.postContent.count({
     *   where: {
     *     // ... the filter for the PostContents we want to count
     *   }
     * })
    **/
    count<T extends PostContentCountArgs>(args?: Subset<T, PostContentCountArgs>): PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : GetScalarType<T['select'], PostContentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PostContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostContentAggregateArgs>(args: Subset<T, PostContentAggregateArgs>): PrismaPromise<GetPostContentAggregateType<T>>;
    /**
     * Group by PostContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PostContentGroupByArgs, HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>, OrderByArg extends True extends HasSelectOrTake ? {
        orderBy: PostContentGroupByArgs['orderBy'];
    } : {
        orderBy?: PostContentGroupByArgs['orderBy'];
    }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True ? `Error: "by" must not be empty.` : HavingValid extends False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Keys<T> ? 'orderBy' extends Keys<T> ? ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Keys<T> ? 'orderBy' extends Keys<T> ? ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: SubsetIntersection<T, PostContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostContentGroupByPayload<T> : PrismaPromise<InputErrors>;
    /**
     * Fields of the PostContent model
     */
    readonly fields: PostContentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PostContent.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
interface Prisma__PostContentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the PostContent model
 */
interface PostContentFieldRefs {
    readonly id: FieldRef<"PostContent", 'String'>;
    readonly createdAt: FieldRef<"PostContent", 'DateTime'>;
    readonly updatedAt: FieldRef<"PostContent", 'DateTime'>;
    readonly postId: FieldRef<"PostContent", 'String'>;
    readonly content: FieldRef<"PostContent", 'String'>;
    readonly info: FieldRef<"PostContent", 'Json'>;
}
/**
 * PostContent findUnique
 */
type PostContentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentInclude<ExtArgs> | null;
    /**
     * Filter, which PostContent to fetch.
     */
    where: PostContentWhereUniqueInput;
};
/**
 * PostContent findUniqueOrThrow
 */
type PostContentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentInclude<ExtArgs> | null;
    /**
     * Filter, which PostContent to fetch.
     */
    where: PostContentWhereUniqueInput;
};
/**
 * PostContent findFirst
 */
type PostContentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentInclude<ExtArgs> | null;
    /**
     * Filter, which PostContent to fetch.
     */
    where?: PostContentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostContents to fetch.
     */
    orderBy?: PostContentOrderByWithRelationInput | PostContentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostContents.
     */
    cursor?: PostContentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostContents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostContents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostContents.
     */
    distinct?: PostContentScalarFieldEnum | PostContentScalarFieldEnum[];
};
/**
 * PostContent findFirstOrThrow
 */
type PostContentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentInclude<ExtArgs> | null;
    /**
     * Filter, which PostContent to fetch.
     */
    where?: PostContentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostContents to fetch.
     */
    orderBy?: PostContentOrderByWithRelationInput | PostContentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostContents.
     */
    cursor?: PostContentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostContents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostContents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostContents.
     */
    distinct?: PostContentScalarFieldEnum | PostContentScalarFieldEnum[];
};
/**
 * PostContent findMany
 */
type PostContentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentInclude<ExtArgs> | null;
    /**
     * Filter, which PostContents to fetch.
     */
    where?: PostContentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostContents to fetch.
     */
    orderBy?: PostContentOrderByWithRelationInput | PostContentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PostContents.
     */
    cursor?: PostContentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostContents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostContents.
     */
    skip?: number;
    distinct?: PostContentScalarFieldEnum | PostContentScalarFieldEnum[];
};
/**
 * PostContent create
 */
type PostContentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentInclude<ExtArgs> | null;
    /**
     * The data needed to create a PostContent.
     */
    data: XOR<PostContentCreateInput, PostContentUncheckedCreateInput>;
};
/**
 * PostContent createMany
 */
type PostContentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostContents.
     */
    data: PostContentCreateManyInput | PostContentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PostContent createManyAndReturn
 */
type PostContentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * The data used to create many PostContents.
     */
    data: PostContentCreateManyInput | PostContentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PostContent update
 */
type PostContentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentInclude<ExtArgs> | null;
    /**
     * The data needed to update a PostContent.
     */
    data: XOR<PostContentUpdateInput, PostContentUncheckedUpdateInput>;
    /**
     * Choose, which PostContent to update.
     */
    where: PostContentWhereUniqueInput;
};
/**
 * PostContent updateMany
 */
type PostContentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PostContents.
     */
    data: XOR<PostContentUpdateManyMutationInput, PostContentUncheckedUpdateManyInput>;
    /**
     * Filter which PostContents to update
     */
    where?: PostContentWhereInput;
    /**
     * Limit how many PostContents to update.
     */
    limit?: number;
};
/**
 * PostContent updateManyAndReturn
 */
type PostContentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * The data used to update PostContents.
     */
    data: XOR<PostContentUpdateManyMutationInput, PostContentUncheckedUpdateManyInput>;
    /**
     * Filter which PostContents to update
     */
    where?: PostContentWhereInput;
    /**
     * Limit how many PostContents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PostContent upsert
 */
type PostContentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentInclude<ExtArgs> | null;
    /**
     * The filter to search for the PostContent to update in case it exists.
     */
    where: PostContentWhereUniqueInput;
    /**
     * In case the PostContent found by the `where` argument doesn't exist, create a new PostContent with this data.
     */
    create: XOR<PostContentCreateInput, PostContentUncheckedCreateInput>;
    /**
     * In case the PostContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostContentUpdateInput, PostContentUncheckedUpdateInput>;
};
/**
 * PostContent delete
 */
type PostContentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentInclude<ExtArgs> | null;
    /**
     * Filter which PostContent to delete.
     */
    where: PostContentWhereUniqueInput;
};
/**
 * PostContent deleteMany
 */
type PostContentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PostContents to delete
     */
    where?: PostContentWhereInput;
    /**
     * Limit how many PostContents to delete.
     */
    limit?: number;
};

type AggregatePost = {
    _count: PostCountAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
};
type PostMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    postTypeId: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    cover: string | null;
};
type PostMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    postTypeId: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    cover: string | null;
};
type PostCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    postTypeId: number;
    name: number;
    slug: number;
    description: number;
    cover: number;
    _all: number;
};
type PostMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    postTypeId?: true;
    name?: true;
    slug?: true;
    description?: true;
    cover?: true;
};
type PostMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    postTypeId?: true;
    name?: true;
    slug?: true;
    description?: true;
    cover?: true;
};
type PostCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    postTypeId?: true;
    name?: true;
    slug?: true;
    description?: true;
    cover?: true;
    _all?: true;
};
type PostAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType;
};
type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count' ? T[P] extends true ? number : GetScalarType<T[P], AggregatePost[P]> : GetScalarType<T[P], AggregatePost[P]>;
};
type PostGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: PostWhereInput;
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[];
    by: PostScalarFieldEnum[] | PostScalarFieldEnum;
    having?: PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostCountAggregateInputType | true;
    _min?: PostMinAggregateInputType;
    _max?: PostMaxAggregateInputType;
};
type PostGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date | null;
    postTypeId: string;
    name: string;
    slug: string;
    description: string;
    cover: string;
    _count: PostCountAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
};
type GetPostGroupByPayload<T extends PostGroupByArgs> = PrismaPromise<Array<PickEnumerable<PostGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : GetScalarType<T[P], PostGroupByOutputType[P]> : GetScalarType<T[P], PostGroupByOutputType[P]>;
}>>;
type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[];
    OR?: PostWhereInput[];
    NOT?: PostWhereInput | PostWhereInput[];
    id?: StringFilter<"Post"> | string;
    createdAt?: DateTimeFilter<"Post"> | Date | string;
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null;
    postTypeId?: StringFilter<"Post"> | string;
    name?: StringFilter<"Post"> | string;
    slug?: StringFilter<"Post"> | string;
    description?: StringFilter<"Post"> | string;
    cover?: StringFilter<"Post"> | string;
    postType?: XOR<PostTypeScalarRelationFilter, PostTypeWhereInput>;
    postContent?: XOR<PostContentNullableScalarRelationFilter, PostContentWhereInput> | null;
    tags?: PostTagListRelationFilter;
};
type PostOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    postTypeId?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    description?: SortOrder;
    cover?: SortOrder;
    postType?: PostTypeOrderByWithRelationInput;
    postContent?: PostContentOrderByWithRelationInput;
    tags?: PostTagOrderByRelationAggregateInput;
};
type PostWhereUniqueInput = AtLeast<{
    id?: string;
    name?: string;
    slug?: string;
    AND?: PostWhereInput | PostWhereInput[];
    OR?: PostWhereInput[];
    NOT?: PostWhereInput | PostWhereInput[];
    createdAt?: DateTimeFilter<"Post"> | Date | string;
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null;
    postTypeId?: StringFilter<"Post"> | string;
    description?: StringFilter<"Post"> | string;
    cover?: StringFilter<"Post"> | string;
    postType?: XOR<PostTypeScalarRelationFilter, PostTypeWhereInput>;
    postContent?: XOR<PostContentNullableScalarRelationFilter, PostContentWhereInput> | null;
    tags?: PostTagListRelationFilter;
}, "id" | "name" | "slug">;
type PostOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    postTypeId?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    description?: SortOrder;
    cover?: SortOrder;
    _count?: PostCountOrderByAggregateInput;
    _max?: PostMaxOrderByAggregateInput;
    _min?: PostMinOrderByAggregateInput;
};
type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[];
    OR?: PostScalarWhereWithAggregatesInput[];
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Post"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string;
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null;
    postTypeId?: StringWithAggregatesFilter<"Post"> | string;
    name?: StringWithAggregatesFilter<"Post"> | string;
    slug?: StringWithAggregatesFilter<"Post"> | string;
    description?: StringWithAggregatesFilter<"Post"> | string;
    cover?: StringWithAggregatesFilter<"Post"> | string;
};
type PostCreateInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    description: string;
    cover: string;
    postType: PostTypeCreateNestedOneWithoutPostsInput;
    postContent?: PostContentCreateNestedOneWithoutPostInput;
    tags?: PostTagCreateNestedManyWithoutPostsInput;
};
type PostUncheckedCreateInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    postTypeId: string;
    name: string;
    slug: string;
    description: string;
    cover: string;
    postContent?: PostContentUncheckedCreateNestedOneWithoutPostInput;
    tags?: PostTagUncheckedCreateNestedManyWithoutPostsInput;
};
type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
    postType?: PostTypeUpdateOneRequiredWithoutPostsNestedInput;
    postContent?: PostContentUpdateOneWithoutPostNestedInput;
    tags?: PostTagUpdateManyWithoutPostsNestedInput;
};
type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    postTypeId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
    postContent?: PostContentUncheckedUpdateOneWithoutPostNestedInput;
    tags?: PostTagUncheckedUpdateManyWithoutPostsNestedInput;
};
type PostCreateManyInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    postTypeId: string;
    name: string;
    slug: string;
    description: string;
    cover: string;
};
type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
};
type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    postTypeId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
};
type PostListRelationFilter = {
    every?: PostWhereInput;
    some?: PostWhereInput;
    none?: PostWhereInput;
};
type PostOrderByRelationAggregateInput = {
    _count?: SortOrder;
};
type PostScalarRelationFilter = {
    is?: PostWhereInput;
    isNot?: PostWhereInput;
};
type PostCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    postTypeId?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    description?: SortOrder;
    cover?: SortOrder;
};
type PostMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    postTypeId?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    description?: SortOrder;
    cover?: SortOrder;
};
type PostMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    postTypeId?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    description?: SortOrder;
    cover?: SortOrder;
};
type PostCreateNestedManyWithoutPostTypeInput = {
    create?: XOR<PostCreateWithoutPostTypeInput, PostUncheckedCreateWithoutPostTypeInput> | PostCreateWithoutPostTypeInput[] | PostUncheckedCreateWithoutPostTypeInput[];
    connectOrCreate?: PostCreateOrConnectWithoutPostTypeInput | PostCreateOrConnectWithoutPostTypeInput[];
    createMany?: PostCreateManyPostTypeInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
};
type PostUncheckedCreateNestedManyWithoutPostTypeInput = {
    create?: XOR<PostCreateWithoutPostTypeInput, PostUncheckedCreateWithoutPostTypeInput> | PostCreateWithoutPostTypeInput[] | PostUncheckedCreateWithoutPostTypeInput[];
    connectOrCreate?: PostCreateOrConnectWithoutPostTypeInput | PostCreateOrConnectWithoutPostTypeInput[];
    createMany?: PostCreateManyPostTypeInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
};
type PostUpdateManyWithoutPostTypeNestedInput = {
    create?: XOR<PostCreateWithoutPostTypeInput, PostUncheckedCreateWithoutPostTypeInput> | PostCreateWithoutPostTypeInput[] | PostUncheckedCreateWithoutPostTypeInput[];
    connectOrCreate?: PostCreateOrConnectWithoutPostTypeInput | PostCreateOrConnectWithoutPostTypeInput[];
    upsert?: PostUpsertWithWhereUniqueWithoutPostTypeInput | PostUpsertWithWhereUniqueWithoutPostTypeInput[];
    createMany?: PostCreateManyPostTypeInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?: PostUpdateWithWhereUniqueWithoutPostTypeInput | PostUpdateWithWhereUniqueWithoutPostTypeInput[];
    updateMany?: PostUpdateManyWithWhereWithoutPostTypeInput | PostUpdateManyWithWhereWithoutPostTypeInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
};
type PostUncheckedUpdateManyWithoutPostTypeNestedInput = {
    create?: XOR<PostCreateWithoutPostTypeInput, PostUncheckedCreateWithoutPostTypeInput> | PostCreateWithoutPostTypeInput[] | PostUncheckedCreateWithoutPostTypeInput[];
    connectOrCreate?: PostCreateOrConnectWithoutPostTypeInput | PostCreateOrConnectWithoutPostTypeInput[];
    upsert?: PostUpsertWithWhereUniqueWithoutPostTypeInput | PostUpsertWithWhereUniqueWithoutPostTypeInput[];
    createMany?: PostCreateManyPostTypeInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?: PostUpdateWithWhereUniqueWithoutPostTypeInput | PostUpdateWithWhereUniqueWithoutPostTypeInput[];
    updateMany?: PostUpdateManyWithWhereWithoutPostTypeInput | PostUpdateManyWithWhereWithoutPostTypeInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
};
type PostCreateNestedManyWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
};
type PostUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
};
type PostUpdateManyWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[];
    upsert?: PostUpsertWithWhereUniqueWithoutTagsInput | PostUpsertWithWhereUniqueWithoutTagsInput[];
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?: PostUpdateWithWhereUniqueWithoutTagsInput | PostUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?: PostUpdateManyWithWhereWithoutTagsInput | PostUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
};
type PostUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[];
    upsert?: PostUpsertWithWhereUniqueWithoutTagsInput | PostUpsertWithWhereUniqueWithoutTagsInput[];
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?: PostUpdateWithWhereUniqueWithoutTagsInput | PostUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?: PostUpdateManyWithWhereWithoutTagsInput | PostUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
};
type PostCreateNestedOneWithoutPostContentInput = {
    create?: XOR<PostCreateWithoutPostContentInput, PostUncheckedCreateWithoutPostContentInput>;
    connectOrCreate?: PostCreateOrConnectWithoutPostContentInput;
    connect?: PostWhereUniqueInput;
};
type PostUpdateOneRequiredWithoutPostContentNestedInput = {
    create?: XOR<PostCreateWithoutPostContentInput, PostUncheckedCreateWithoutPostContentInput>;
    connectOrCreate?: PostCreateOrConnectWithoutPostContentInput;
    upsert?: PostUpsertWithoutPostContentInput;
    connect?: PostWhereUniqueInput;
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostContentInput, PostUpdateWithoutPostContentInput>, PostUncheckedUpdateWithoutPostContentInput>;
};
type PostCreateWithoutPostTypeInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    description: string;
    cover: string;
    postContent?: PostContentCreateNestedOneWithoutPostInput;
    tags?: PostTagCreateNestedManyWithoutPostsInput;
};
type PostUncheckedCreateWithoutPostTypeInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    description: string;
    cover: string;
    postContent?: PostContentUncheckedCreateNestedOneWithoutPostInput;
    tags?: PostTagUncheckedCreateNestedManyWithoutPostsInput;
};
type PostCreateOrConnectWithoutPostTypeInput = {
    where: PostWhereUniqueInput;
    create: XOR<PostCreateWithoutPostTypeInput, PostUncheckedCreateWithoutPostTypeInput>;
};
type PostCreateManyPostTypeInputEnvelope = {
    data: PostCreateManyPostTypeInput | PostCreateManyPostTypeInput[];
    skipDuplicates?: boolean;
};
type PostUpsertWithWhereUniqueWithoutPostTypeInput = {
    where: PostWhereUniqueInput;
    update: XOR<PostUpdateWithoutPostTypeInput, PostUncheckedUpdateWithoutPostTypeInput>;
    create: XOR<PostCreateWithoutPostTypeInput, PostUncheckedCreateWithoutPostTypeInput>;
};
type PostUpdateWithWhereUniqueWithoutPostTypeInput = {
    where: PostWhereUniqueInput;
    data: XOR<PostUpdateWithoutPostTypeInput, PostUncheckedUpdateWithoutPostTypeInput>;
};
type PostUpdateManyWithWhereWithoutPostTypeInput = {
    where: PostScalarWhereInput;
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostTypeInput>;
};
type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[];
    OR?: PostScalarWhereInput[];
    NOT?: PostScalarWhereInput | PostScalarWhereInput[];
    id?: StringFilter<"Post"> | string;
    createdAt?: DateTimeFilter<"Post"> | Date | string;
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null;
    postTypeId?: StringFilter<"Post"> | string;
    name?: StringFilter<"Post"> | string;
    slug?: StringFilter<"Post"> | string;
    description?: StringFilter<"Post"> | string;
    cover?: StringFilter<"Post"> | string;
};
type PostCreateWithoutTagsInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    description: string;
    cover: string;
    postType: PostTypeCreateNestedOneWithoutPostsInput;
    postContent?: PostContentCreateNestedOneWithoutPostInput;
};
type PostUncheckedCreateWithoutTagsInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    postTypeId: string;
    name: string;
    slug: string;
    description: string;
    cover: string;
    postContent?: PostContentUncheckedCreateNestedOneWithoutPostInput;
};
type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput;
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>;
};
type PostUpsertWithWhereUniqueWithoutTagsInput = {
    where: PostWhereUniqueInput;
    update: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>;
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>;
};
type PostUpdateWithWhereUniqueWithoutTagsInput = {
    where: PostWhereUniqueInput;
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>;
};
type PostUpdateManyWithWhereWithoutTagsInput = {
    where: PostScalarWhereInput;
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutTagsInput>;
};
type PostCreateWithoutPostContentInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    description: string;
    cover: string;
    postType: PostTypeCreateNestedOneWithoutPostsInput;
    tags?: PostTagCreateNestedManyWithoutPostsInput;
};
type PostUncheckedCreateWithoutPostContentInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    postTypeId: string;
    name: string;
    slug: string;
    description: string;
    cover: string;
    tags?: PostTagUncheckedCreateNestedManyWithoutPostsInput;
};
type PostCreateOrConnectWithoutPostContentInput = {
    where: PostWhereUniqueInput;
    create: XOR<PostCreateWithoutPostContentInput, PostUncheckedCreateWithoutPostContentInput>;
};
type PostUpsertWithoutPostContentInput = {
    update: XOR<PostUpdateWithoutPostContentInput, PostUncheckedUpdateWithoutPostContentInput>;
    create: XOR<PostCreateWithoutPostContentInput, PostUncheckedCreateWithoutPostContentInput>;
    where?: PostWhereInput;
};
type PostUpdateToOneWithWhereWithoutPostContentInput = {
    where?: PostWhereInput;
    data: XOR<PostUpdateWithoutPostContentInput, PostUncheckedUpdateWithoutPostContentInput>;
};
type PostUpdateWithoutPostContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
    postType?: PostTypeUpdateOneRequiredWithoutPostsNestedInput;
    tags?: PostTagUpdateManyWithoutPostsNestedInput;
};
type PostUncheckedUpdateWithoutPostContentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    postTypeId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
    tags?: PostTagUncheckedUpdateManyWithoutPostsNestedInput;
};
type PostCreateManyPostTypeInput = {
    id?: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    name: string;
    slug: string;
    description: string;
    cover: string;
};
type PostUpdateWithoutPostTypeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
    postContent?: PostContentUpdateOneWithoutPostNestedInput;
    tags?: PostTagUpdateManyWithoutPostsNestedInput;
};
type PostUncheckedUpdateWithoutPostTypeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
    postContent?: PostContentUncheckedUpdateOneWithoutPostNestedInput;
    tags?: PostTagUncheckedUpdateManyWithoutPostsNestedInput;
};
type PostUncheckedUpdateManyWithoutPostTypeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
};
type PostUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
    postType?: PostTypeUpdateOneRequiredWithoutPostsNestedInput;
    postContent?: PostContentUpdateOneWithoutPostNestedInput;
};
type PostUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    postTypeId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
    postContent?: PostContentUncheckedUpdateOneWithoutPostNestedInput;
};
type PostUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    postTypeId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    cover?: StringFieldUpdateOperationsInput | string;
};
type PostCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tags?: boolean | PostCountOutputTypeCountTagsArgs;
};
/**
 * PostCountOutputType without action
 */
type PostCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PostCountOutputType without action
 */
type PostCountOutputTypeCountTagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: PostTagWhereInput;
};
type PostSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    postTypeId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    cover?: boolean;
    postType?: boolean | PostTypeDefaultArgs<ExtArgs>;
    postContent?: boolean | Post$postContentArgs<ExtArgs>;
    tags?: boolean | Post$tagsArgs<ExtArgs>;
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["post"]>;
type PostSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    postTypeId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    cover?: boolean;
    postType?: boolean | PostTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["post"]>;
type PostSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    postTypeId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    cover?: boolean;
    postType?: boolean | PostTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["post"]>;
type PostOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "postTypeId" | "name" | "slug" | "description" | "cover", ExtArgs["result"]["post"]>;
type PostInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    postType?: boolean | PostTypeDefaultArgs<ExtArgs>;
    postContent?: boolean | Post$postContentArgs<ExtArgs>;
    tags?: boolean | Post$tagsArgs<ExtArgs>;
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
};
type PostIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    postType?: boolean | PostTypeDefaultArgs<ExtArgs>;
};
type PostIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    postType?: boolean | PostTypeDefaultArgs<ExtArgs>;
};
type $PostPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Post";
    objects: {
        postType: $PostTypePayload<ExtArgs>;
        postContent: $PostContentPayload<ExtArgs> | null;
        tags: $PostTagPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        createdAt: Date;
        updatedAt: Date | null;
        postTypeId: string;
        name: string;
        slug: string;
        description: string;
        cover: string;
    }, ExtArgs["result"]["post"]>;
    composites: {};
};
type PostCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostCountAggregateInputType | true;
};
interface PostDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: TypeMap<ExtArgs>['model']['Post'];
        meta: {
            name: 'Post';
        };
    };
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     *
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     *
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     *
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): PrismaPromise<BatchPayload>;
    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<runtime.Types.Result.GetResult<$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(args?: Subset<T, PostCountArgs>): PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : GetScalarType<T['select'], PostCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>;
    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PostGroupByArgs, HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>, OrderByArg extends True extends HasSelectOrTake ? {
        orderBy: PostGroupByArgs['orderBy'];
    } : {
        orderBy?: PostGroupByArgs['orderBy'];
    }, OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>, ByFields extends MaybeTupleToUnion<T['by']>, ByValid extends Has<ByFields, OrderFields>, HavingFields extends GetHavingFields<T['having']>, HavingValid extends Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? True : False, InputErrors extends ByEmpty extends True ? `Error: "by" must not be empty.` : HavingValid extends False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Keys<T> ? 'orderBy' extends Keys<T> ? ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Keys<T> ? 'orderBy' extends Keys<T> ? ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : PrismaPromise<InputErrors>;
    /**
     * Fields of the Post model
     */
    readonly fields: PostFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Post.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
interface Prisma__PostClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    postType<T extends PostTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostTypeDefaultArgs<ExtArgs>>): Prisma__PostTypeClient<runtime.Types.Result.GetResult<$PostTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    postContent<T extends Post$postContentArgs<ExtArgs> = {}>(args?: Subset<T, Post$postContentArgs<ExtArgs>>): Prisma__PostContentClient<runtime.Types.Result.GetResult<$PostContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tags<T extends Post$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$tagsArgs<ExtArgs>>): PrismaPromise<runtime.Types.Result.GetResult<$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Post model
 */
interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>;
    readonly createdAt: FieldRef<"Post", 'DateTime'>;
    readonly updatedAt: FieldRef<"Post", 'DateTime'>;
    readonly postTypeId: FieldRef<"Post", 'String'>;
    readonly name: FieldRef<"Post", 'String'>;
    readonly slug: FieldRef<"Post", 'String'>;
    readonly description: FieldRef<"Post", 'String'>;
    readonly cover: FieldRef<"Post", 'String'>;
}
/**
 * Post findUnique
 */
type PostFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
};
/**
 * Post findUniqueOrThrow
 */
type PostFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
};
/**
 * Post findFirst
 */
type PostFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
};
/**
 * Post findFirstOrThrow
 */
type PostFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
};
/**
 * Post findMany
 */
type PostFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
};
/**
 * Post create
 */
type PostCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>;
};
/**
 * Post createMany
 */
type PostCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Post createManyAndReturn
 */
type PostCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Post update
 */
type PostUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput;
};
/**
 * Post updateMany
 */
type PostUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
};
/**
 * Post updateManyAndReturn
 */
type PostUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Post upsert
 */
type PostUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput;
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>;
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
};
/**
 * Post delete
 */
type PostDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput;
};
/**
 * Post deleteMany
 */
type PostDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to delete.
     */
    limit?: number;
};
/**
 * Post.postContent
 */
type Post$postContentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostContent
     */
    select?: PostContentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostContent
     */
    omit?: PostContentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostContentInclude<ExtArgs> | null;
    where?: PostContentWhereInput;
};
/**
 * Post.tags
 */
type Post$tagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    where?: PostTagWhereInput;
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[];
    cursor?: PostTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[];
};
/**
 * Post without action
 */
type PostDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
};

type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
};
type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
};
type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
};
type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
};
type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
};
type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
};
type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
};
type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
};
type JsonFilter<$PrismaModel = never> = PatchUndefined<Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
};
type JsonWithAggregatesFilter<$PrismaModel = never> = PatchUndefined<Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
};
type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
};
type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
};
type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
};
type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
};
type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
};
type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
};
type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
};
type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
};
type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
};
type NestedJsonFilter<$PrismaModel = never> = PatchUndefined<Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
};

type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
declare const Sql: typeof runtime.Sql;
type Sql = runtime.Sql;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
type Union = any;
type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
type Boolean = True | False;
type True = 1;
type False = 0;
type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
type Keys<U extends Union> = U extends unknown ? keyof U : never;
type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "postType" | "postTag" | "postContent" | "post";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        PostType: {
            payload: $PostTypePayload<ExtArgs>;
            fields: PostTypeFieldRefs;
            operations: {
                findUnique: {
                    args: PostTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: PostTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTypePayload>;
                };
                findFirst: {
                    args: PostTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: PostTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTypePayload>;
                };
                findMany: {
                    args: PostTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTypePayload>[];
                };
                create: {
                    args: PostTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTypePayload>;
                };
                createMany: {
                    args: PostTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: PostTypeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTypePayload>[];
                };
                delete: {
                    args: PostTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTypePayload>;
                };
                update: {
                    args: PostTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTypePayload>;
                };
                deleteMany: {
                    args: PostTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: PostTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: PostTypeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTypePayload>[];
                };
                upsert: {
                    args: PostTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTypePayload>;
                };
                aggregate: {
                    args: PostTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<AggregatePostType>;
                };
                groupBy: {
                    args: PostTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<PostTypeGroupByOutputType>[];
                };
                count: {
                    args: PostTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<PostTypeCountAggregateOutputType> | number;
                };
            };
        };
        PostTag: {
            payload: $PostTagPayload<ExtArgs>;
            fields: PostTagFieldRefs;
            operations: {
                findUnique: {
                    args: PostTagFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTagPayload> | null;
                };
                findUniqueOrThrow: {
                    args: PostTagFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTagPayload>;
                };
                findFirst: {
                    args: PostTagFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTagPayload> | null;
                };
                findFirstOrThrow: {
                    args: PostTagFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTagPayload>;
                };
                findMany: {
                    args: PostTagFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTagPayload>[];
                };
                create: {
                    args: PostTagCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTagPayload>;
                };
                createMany: {
                    args: PostTagCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: PostTagCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTagPayload>[];
                };
                delete: {
                    args: PostTagDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTagPayload>;
                };
                update: {
                    args: PostTagUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTagPayload>;
                };
                deleteMany: {
                    args: PostTagDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: PostTagUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: PostTagUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTagPayload>[];
                };
                upsert: {
                    args: PostTagUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostTagPayload>;
                };
                aggregate: {
                    args: PostTagAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<AggregatePostTag>;
                };
                groupBy: {
                    args: PostTagGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<PostTagGroupByOutputType>[];
                };
                count: {
                    args: PostTagCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<PostTagCountAggregateOutputType> | number;
                };
            };
        };
        PostContent: {
            payload: $PostContentPayload<ExtArgs>;
            fields: PostContentFieldRefs;
            operations: {
                findUnique: {
                    args: PostContentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostContentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: PostContentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostContentPayload>;
                };
                findFirst: {
                    args: PostContentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostContentPayload> | null;
                };
                findFirstOrThrow: {
                    args: PostContentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostContentPayload>;
                };
                findMany: {
                    args: PostContentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostContentPayload>[];
                };
                create: {
                    args: PostContentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostContentPayload>;
                };
                createMany: {
                    args: PostContentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: PostContentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostContentPayload>[];
                };
                delete: {
                    args: PostContentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostContentPayload>;
                };
                update: {
                    args: PostContentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostContentPayload>;
                };
                deleteMany: {
                    args: PostContentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: PostContentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: PostContentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostContentPayload>[];
                };
                upsert: {
                    args: PostContentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostContentPayload>;
                };
                aggregate: {
                    args: PostContentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<AggregatePostContent>;
                };
                groupBy: {
                    args: PostContentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<PostContentGroupByOutputType>[];
                };
                count: {
                    args: PostContentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<PostContentCountAggregateOutputType> | number;
                };
            };
        };
        Post: {
            payload: $PostPayload<ExtArgs>;
            fields: PostFieldRefs;
            operations: {
                findUnique: {
                    args: PostFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostPayload> | null;
                };
                findUniqueOrThrow: {
                    args: PostFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostPayload>;
                };
                findFirst: {
                    args: PostFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostPayload> | null;
                };
                findFirstOrThrow: {
                    args: PostFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostPayload>;
                };
                findMany: {
                    args: PostFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostPayload>[];
                };
                create: {
                    args: PostCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostPayload>;
                };
                createMany: {
                    args: PostCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: PostCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostPayload>[];
                };
                delete: {
                    args: PostDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostPayload>;
                };
                update: {
                    args: PostUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostPayload>;
                };
                deleteMany: {
                    args: PostDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: PostUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: PostUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostPayload>[];
                };
                upsert: {
                    args: PostUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<$PostPayload>;
                };
                aggregate: {
                    args: PostAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<AggregatePost>;
                };
                groupBy: {
                    args: PostGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<PostGroupByOutputType>[];
                };
                count: {
                    args: PostCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<PostCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
declare const PostTypeScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly name: "name";
    readonly slug: "slug";
    readonly schema: "schema";
    readonly isHighlighted: "isHighlighted";
};
type PostTypeScalarFieldEnum = (typeof PostTypeScalarFieldEnum)[keyof typeof PostTypeScalarFieldEnum];
declare const PostTagScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly name: "name";
    readonly slug: "slug";
    readonly hidden: "hidden";
};
type PostTagScalarFieldEnum = (typeof PostTagScalarFieldEnum)[keyof typeof PostTagScalarFieldEnum];
declare const PostContentScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly postId: "postId";
    readonly content: "content";
    readonly info: "info";
};
type PostContentScalarFieldEnum = (typeof PostContentScalarFieldEnum)[keyof typeof PostContentScalarFieldEnum];
declare const PostScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly postTypeId: "postTypeId";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly cover: "cover";
};
type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum];
declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Json'
 */
type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'Int'
 */
type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
type BatchPayload = {
    count: number;
};
type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
type GlobalOmitConfig = {
    postType?: PostTypeOmit;
    postTag?: PostTagOmit;
    postContent?: PostContentOmit;
    post?: PostOmit;
};
type LogLevel = 'info' | 'query' | 'warn' | 'error';
type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};

/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PostTypes
 * const postTypes = await prisma.postType.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
interface PrismaClient<in LogOpts extends LogLevel = never, in out OmitOpts extends PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.postType`: Exposes CRUD operations for the **PostType** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more PostTypes
  * const postTypes = await prisma.postType.findMany()
  * ```
  */
    get postType(): PostTypeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.postTag`: Exposes CRUD operations for the **PostTag** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PostTags
      * const postTags = await prisma.postTag.findMany()
      * ```
      */
    get postTag(): PostTagDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.postContent`: Exposes CRUD operations for the **PostContent** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PostContents
      * const postContents = await prisma.postContent.findMany()
      * ```
      */
    get postContent(): PostContentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.post`: Exposes CRUD operations for the **Post** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Posts
      * const posts = await prisma.post.findMany()
      * ```
      */
    get post(): PostDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}

declare const prisma: PrismaClient<never, GlobalOmitConfig | undefined, runtime.DefaultArgs>;

export { prisma };
