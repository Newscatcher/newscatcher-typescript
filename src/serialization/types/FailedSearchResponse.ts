/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";
import { ArticleResult } from "./ArticleResult";

export const FailedSearchResponse: core.serialization.ObjectSchema<
    serializers.FailedSearchResponse.Raw,
    NewscatcherApi.FailedSearchResponse
> = core.serialization.object({
    status: core.serialization.string().optional(),
    totalHits: core.serialization.property("total_hits", core.serialization.number().optional()),
    page: core.serialization.number().optional(),
    totalPages: core.serialization.property("total_pages", core.serialization.number().optional()),
    pageSize: core.serialization.property("page_size", core.serialization.number().optional()),
    articles: core.serialization.list(ArticleResult).optional(),
    userInput: core.serialization.property(
        "user_input",
        core.serialization.record(core.serialization.string(), core.serialization.unknown())
    ),
});

export declare namespace FailedSearchResponse {
    interface Raw {
        status?: string | null;
        total_hits?: number | null;
        page?: number | null;
        total_pages?: number | null;
        page_size?: number | null;
        articles?: ArticleResult.Raw[] | null;
        user_input: Record<string, unknown>;
    }
}