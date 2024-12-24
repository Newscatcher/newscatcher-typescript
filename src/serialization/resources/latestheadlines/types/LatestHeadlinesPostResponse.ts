/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as NewscatcherApi from "../../../../api/index";
import * as core from "../../../../core";
import { ClusteringSearchResponse } from "../../../types/ClusteringSearchResponse";
import { LatestHeadlinesResponse } from "../../../types/LatestHeadlinesResponse";

export const LatestHeadlinesPostResponse: core.serialization.Schema<
    serializers.LatestHeadlinesPostResponse.Raw,
    NewscatcherApi.LatestHeadlinesPostResponse
> = core.serialization.undiscriminatedUnion([ClusteringSearchResponse, LatestHeadlinesResponse]);

export declare namespace LatestHeadlinesPostResponse {
    type Raw = ClusteringSearchResponse.Raw | LatestHeadlinesResponse.Raw;
}