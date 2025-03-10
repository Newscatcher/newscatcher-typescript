/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as NewscatcherApi from "../../../../api/index";
import * as core from "../../../../core";
import { AggregationCountResponseDto } from "../../../types/AggregationCountResponseDto";
import { FailedAggregationCountResponseDto } from "../../../types/FailedAggregationCountResponseDto";

export const AggregationGetResponse: core.serialization.Schema<
    serializers.AggregationGetResponse.Raw,
    NewscatcherApi.AggregationGetResponse
> = core.serialization.undiscriminatedUnion([AggregationCountResponseDto, FailedAggregationCountResponseDto]);

export declare namespace AggregationGetResponse {
    type Raw = AggregationCountResponseDto.Raw | FailedAggregationCountResponseDto.Raw;
}
