/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as NewscatcherApi from "../index";

/**
 * FailedSearchResponse DTO class.
 */
export interface FailedSearchResponse {
    status?: string;
    totalHits?: number;
    page?: number;
    totalPages?: number;
    pageSize?: number;
    articles?: NewscatcherApi.ArticleResult[];
    userInput: Record<string, unknown>;
}
