/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as NewscatcherApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { AuthorSearchRequestFrom } from "../../types/AuthorSearchRequestFrom";
import { AuthorSearchRequestTo } from "../../types/AuthorSearchRequestTo";
import { AuthorSearchRequestRankedOnly } from "../../types/AuthorSearchRequestRankedOnly";

export const AuthorSearchRequest: core.serialization.Schema<
    serializers.AuthorSearchRequest.Raw,
    NewscatcherApi.AuthorSearchRequest
> = core.serialization.object({
    authorName: core.serialization.property("author_name", core.serialization.string()),
    notAuthorName: core.serialization.property("not_author_name", core.serialization.string().optional()),
    sources: core.serialization.unknown().optional(),
    predefinedSources: core.serialization.property("predefined_sources", core.serialization.unknown().optional()),
    notSources: core.serialization.property("not_sources", core.serialization.unknown().optional()),
    lang: core.serialization.unknown().optional(),
    notLang: core.serialization.property("not_lang", core.serialization.unknown().optional()),
    countries: core.serialization.unknown().optional(),
    notCountries: core.serialization.property("not_countries", core.serialization.unknown().optional()),
    from: core.serialization.property("from_", AuthorSearchRequestFrom.optional()),
    to: core.serialization.property("to_", AuthorSearchRequestTo.optional()),
    publishedDatePrecision: core.serialization.property(
        "published_date_precision",
        core.serialization.string().optional()
    ),
    byParseDate: core.serialization.property("by_parse_date", core.serialization.boolean().optional()),
    sortBy: core.serialization.property("sort_by", core.serialization.string().optional()),
    rankedOnly: core.serialization.property("ranked_only", AuthorSearchRequestRankedOnly.optional()),
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
    iabTags: core.serialization.property("iab_tags", core.serialization.unknown().optional()),
    notIabTags: core.serialization.property("not_iab_tags", core.serialization.unknown().optional()),
});

export declare namespace AuthorSearchRequest {
    interface Raw {
        author_name: string;
        not_author_name?: string | null;
        sources?: unknown | null;
        predefined_sources?: unknown | null;
        not_sources?: unknown | null;
        lang?: unknown | null;
        not_lang?: unknown | null;
        countries?: unknown | null;
        not_countries?: unknown | null;
        from_?: AuthorSearchRequestFrom.Raw | null;
        to_?: AuthorSearchRequestTo.Raw | null;
        published_date_precision?: string | null;
        by_parse_date?: boolean | null;
        sort_by?: string | null;
        ranked_only?: AuthorSearchRequestRankedOnly.Raw | null;
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
        iab_tags?: unknown | null;
        not_iab_tags?: unknown | null;
    }
}
