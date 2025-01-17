/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as NewscatcherApi from "../../../../api/index";
import * as core from "../../../../core";
import { SearchResponseDto } from "../../../types/SearchResponseDto";
import { ClusteredSearchResponseDto } from "../../../types/ClusteredSearchResponseDto";

export const SearchGetResponse: core.serialization.Schema<
    serializers.SearchGetResponse.Raw,
    NewscatcherApi.SearchGetResponse
> = core.serialization.undiscriminatedUnion([SearchResponseDto, ClusteredSearchResponseDto]);

export declare namespace SearchGetResponse {
    type Raw = SearchResponseDto.Raw | ClusteredSearchResponseDto.Raw;
}
