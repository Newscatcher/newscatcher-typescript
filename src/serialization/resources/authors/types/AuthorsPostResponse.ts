/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as NewscatcherApi from "../../../../api/index";
import * as core from "../../../../core";
import { SearchResponse } from "../../../types/SearchResponse";
import { FailedSearchResponse } from "../../../types/FailedSearchResponse";

export const AuthorsPostResponse: core.serialization.Schema<
    serializers.AuthorsPostResponse.Raw,
    NewscatcherApi.AuthorsPostResponse
> = core.serialization.undiscriminatedUnion([SearchResponse, FailedSearchResponse]);

export declare namespace AuthorsPostResponse {
    type Raw = SearchResponse.Raw | FailedSearchResponse.Raw;
}
