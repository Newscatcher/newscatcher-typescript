/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const BaseSearchResponseDto: core.serialization.ObjectSchema<
    serializers.BaseSearchResponseDto.Raw,
    NewscatcherApi.BaseSearchResponseDto
> = core.serialization.object({
    status: core.serialization.string(),
    totalHits: core.serialization.property("total_hits", core.serialization.number()),
    page: core.serialization.number(),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
});

export declare namespace BaseSearchResponseDto {
    interface Raw {
        status: string;
        total_hits: number;
        page: number;
        total_pages: number;
        page_size: number;
    }
}
