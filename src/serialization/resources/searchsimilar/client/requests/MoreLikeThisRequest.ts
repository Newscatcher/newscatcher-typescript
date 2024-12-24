/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as NewscatcherApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { MoreLikeThisRequestFrom } from "../../types/MoreLikeThisRequestFrom";
import { MoreLikeThisRequestTo } from "../../types/MoreLikeThisRequestTo";
import { MoreLikeThisRequestRankedOnly } from "../../types/MoreLikeThisRequestRankedOnly";

export const MoreLikeThisRequest: core.serialization.Schema<
    serializers.MoreLikeThisRequest.Raw,
    NewscatcherApi.MoreLikeThisRequest
> = core.serialization.object({
    q: core.serialization.string(),
    searchIn: core.serialization.property("search_in", core.serialization.string().optional()),
    includeSimilarDocuments: core.serialization.property(
        "include_similar_documents",
        core.serialization.boolean().optional()
    ),
    similarDocumentsNumber: core.serialization.property(
        "similar_documents_number",
        core.serialization.number().optional()
    ),
    similarDocumentsFields: core.serialization.property(
        "similar_documents_fields",
        core.serialization.string().optional()
    ),
    predefinedSources: core.serialization.property("predefined_sources", core.serialization.unknown().optional()),
    sources: core.serialization.unknown().optional(),
    notSources: core.serialization.property("not_sources", core.serialization.unknown().optional()),
    lang: core.serialization.unknown().optional(),
    notLang: core.serialization.property("not_lang", core.serialization.unknown().optional()),
    countries: core.serialization.unknown().optional(),
    notCountries: core.serialization.property("not_countries", core.serialization.unknown().optional()),
    from: core.serialization.property("from_", MoreLikeThisRequestFrom.optional()),
    to: core.serialization.property("to_", MoreLikeThisRequestTo.optional()),
    byParseDate: core.serialization.property("by_parse_date", core.serialization.boolean().optional()),
    publishedDatePrecision: core.serialization.property(
        "published_date_precision",
        core.serialization.string().optional()
    ),
    sortBy: core.serialization.property("sort_by", core.serialization.string().optional()),
    rankedOnly: core.serialization.property("ranked_only", MoreLikeThisRequestRankedOnly.optional()),
    fromRank: core.serialization.property("from_rank", core.serialization.number().optional()),
    toRank: core.serialization.property("to_rank", core.serialization.number().optional()),
    isHeadline: core.serialization.property("is_headline", core.serialization.boolean().optional()),
    isOpinion: core.serialization.property("is_opinion", core.serialization.boolean().optional()),
    isPaidContent: core.serialization.property("is_paid_content", core.serialization.boolean().optional()),
    parentUrl: core.serialization.property("parent_url", core.serialization.unknown().optional()),
    allLinks: core.serialization.property("all_links", core.serialization.unknown().optional()),
    allDomainLinks: core.serialization.property("all_domain_links", core.serialization.unknown().optional()),
    wordCountMin: core.serialization.property("word_count_min", core.serialization.number().optional()),
    wordCountMax: core.serialization.property("word_count_max", core.serialization.number().optional()),
    page: core.serialization.number().optional(),
    pageSize: core.serialization.property("page_size", core.serialization.number().optional()),
    includeNlpData: core.serialization.property("include_nlp_data", core.serialization.boolean().optional()),
    hasNlp: core.serialization.property("has_nlp", core.serialization.boolean().optional()),
    theme: core.serialization.string().optional(),
    notTheme: core.serialization.property("not_theme", core.serialization.string().optional()),
    titleSentimentMin: core.serialization.property("title_sentiment_min", core.serialization.number().optional()),
    titleSentimentMax: core.serialization.property("title_sentiment_max", core.serialization.number().optional()),
    contentSentimentMin: core.serialization.property("content_sentiment_min", core.serialization.number().optional()),
    contentSentimentMax: core.serialization.property("content_sentiment_max", core.serialization.number().optional()),
    iptcTags: core.serialization.property("iptc_tags", core.serialization.unknown().optional()),
    notIptcTags: core.serialization.property("not_iptc_tags", core.serialization.unknown().optional()),
});

export declare namespace MoreLikeThisRequest {
    interface Raw {
        q: string;
        search_in?: string | null;
        include_similar_documents?: boolean | null;
        similar_documents_number?: number | null;
        similar_documents_fields?: string | null;
        predefined_sources?: unknown | null;
        sources?: unknown | null;
        not_sources?: unknown | null;
        lang?: unknown | null;
        not_lang?: unknown | null;
        countries?: unknown | null;
        not_countries?: unknown | null;
        from_?: MoreLikeThisRequestFrom.Raw | null;
        to_?: MoreLikeThisRequestTo.Raw | null;
        by_parse_date?: boolean | null;
        published_date_precision?: string | null;
        sort_by?: string | null;
        ranked_only?: MoreLikeThisRequestRankedOnly.Raw | null;
        from_rank?: number | null;
        to_rank?: number | null;
        is_headline?: boolean | null;
        is_opinion?: boolean | null;
        is_paid_content?: boolean | null;
        parent_url?: unknown | null;
        all_links?: unknown | null;
        all_domain_links?: unknown | null;
        word_count_min?: number | null;
        word_count_max?: number | null;
        page?: number | null;
        page_size?: number | null;
        include_nlp_data?: boolean | null;
        has_nlp?: boolean | null;
        theme?: string | null;
        not_theme?: string | null;
        title_sentiment_min?: number | null;
        title_sentiment_max?: number | null;
        content_sentiment_min?: number | null;
        content_sentiment_max?: number | null;
        iptc_tags?: unknown | null;
        not_iptc_tags?: unknown | null;
    }
}
