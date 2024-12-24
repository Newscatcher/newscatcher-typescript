/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const SearchResponse: core.serialization.ObjectSchema<
    serializers.SearchResponse.Raw,
    NewscatcherApi.SearchResponse
> = core.serialization.object({
    status: core.serialization.string().optional(),
    totalHits: core.serialization.property("total_hits", core.serialization.number()),
    page: core.serialization.number(),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    articles: core.serialization.list(
        core.serialization.record(core.serialization.string(), core.serialization.unknown())
    ),
    userInput: core.serialization.property(
        "user_input",
        core.serialization.record(core.serialization.string(), core.serialization.unknown())
    ),
});

export declare namespace SearchResponse {
    interface Raw {
        status?: string | null;
        total_hits: number;
        page: number;
        total_pages: number;
        page_size: number;
        articles: Record<string, unknown>[];
        user_input: Record<string, unknown>;
    }
}