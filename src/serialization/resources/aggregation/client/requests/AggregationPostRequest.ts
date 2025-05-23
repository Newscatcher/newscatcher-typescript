/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as NewscatcherApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { Q } from "../../../../types/Q";
import { SearchIn } from "../../../../types/SearchIn";
import { PredefinedSources } from "../../../../types/PredefinedSources";
import { Sources } from "../../../../types/Sources";
import { NotSources } from "../../../../types/NotSources";
import { Lang } from "../../../../types/Lang";
import { NotLang } from "../../../../types/NotLang";
import { Countries } from "../../../../types/Countries";
import { NotCountries } from "../../../../types/NotCountries";
import { NotAuthorName } from "../../../../types/NotAuthorName";
import { From } from "../../../../types/From";
import { To } from "../../../../types/To";
import { PublishedDatePrecision } from "../../../../types/PublishedDatePrecision";
import { ByParseDate } from "../../../../types/ByParseDate";
import { SortBy } from "../../../../types/SortBy";
import { RankedOnly } from "../../../../types/RankedOnly";
import { FromRank } from "../../../../types/FromRank";
import { ToRank } from "../../../../types/ToRank";
import { IsHeadline } from "../../../../types/IsHeadline";
import { IsOpinion } from "../../../../types/IsOpinion";
import { IsPaidContent } from "../../../../types/IsPaidContent";
import { ParentUrl } from "../../../../types/ParentUrl";
import { AllLinks } from "../../../../types/AllLinks";
import { AllDomainLinks } from "../../../../types/AllDomainLinks";
import { WordCountMin } from "../../../../types/WordCountMin";
import { WordCountMax } from "../../../../types/WordCountMax";
import { Page } from "../../../../types/Page";
import { PageSize } from "../../../../types/PageSize";
import { IncludeNlpData } from "../../../../types/IncludeNlpData";
import { HasNlp } from "../../../../types/HasNlp";
import { Theme } from "../../../../types/Theme";
import { NotTheme } from "../../../../types/NotTheme";
import { OrgEntityName } from "../../../../types/OrgEntityName";
import { PerEntityName } from "../../../../types/PerEntityName";
import { LocEntityName } from "../../../../types/LocEntityName";
import { MiscEntityName } from "../../../../types/MiscEntityName";
import { TitleSentimentMin } from "../../../../types/TitleSentimentMin";
import { TitleSentimentMax } from "../../../../types/TitleSentimentMax";
import { ContentSentimentMin } from "../../../../types/ContentSentimentMin";
import { ContentSentimentMax } from "../../../../types/ContentSentimentMax";
import { IptcTags } from "../../../../types/IptcTags";
import { NotIptcTags } from "../../../../types/NotIptcTags";
import { AggregationBy } from "../../../../types/AggregationBy";

export const AggregationPostRequest: core.serialization.Schema<
    serializers.AggregationPostRequest.Raw,
    NewscatcherApi.AggregationPostRequest
> = core.serialization.object({
    q: Q,
    searchIn: core.serialization.property("search_in", SearchIn.optional()),
    predefinedSources: core.serialization.property("predefined_sources", PredefinedSources.optional()),
    sources: Sources.optional(),
    notSources: core.serialization.property("not_sources", NotSources.optional()),
    lang: Lang.optional(),
    notLang: core.serialization.property("not_lang", NotLang.optional()),
    countries: Countries.optional(),
    notCountries: core.serialization.property("not_countries", NotCountries.optional()),
    notAuthorName: core.serialization.property("not_author_name", NotAuthorName.optional()),
    from: core.serialization.property("from_", From.optional()),
    to: core.serialization.property("to_", To.optional()),
    publishedDatePrecision: core.serialization.property("published_date_precision", PublishedDatePrecision.optional()),
    byParseDate: core.serialization.property("by_parse_date", ByParseDate.optional()),
    sortBy: core.serialization.property("sort_by", SortBy.optional()),
    rankedOnly: core.serialization.property("ranked_only", RankedOnly.optional()),
    fromRank: core.serialization.property("from_rank", FromRank.optional()),
    toRank: core.serialization.property("to_rank", ToRank.optional()),
    isHeadline: core.serialization.property("is_headline", IsHeadline.optional()),
    isOpinion: core.serialization.property("is_opinion", IsOpinion.optional()),
    isPaidContent: core.serialization.property("is_paid_content", IsPaidContent.optional()),
    parentUrl: core.serialization.property("parent_url", ParentUrl.optional()),
    allLinks: core.serialization.property("all_links", AllLinks.optional()),
    allDomainLinks: core.serialization.property("all_domain_links", AllDomainLinks.optional()),
    wordCountMin: core.serialization.property("word_count_min", WordCountMin.optional()),
    wordCountMax: core.serialization.property("word_count_max", WordCountMax.optional()),
    page: Page.optional(),
    pageSize: core.serialization.property("page_size", PageSize.optional()),
    includeNlpData: core.serialization.property("include_nlp_data", IncludeNlpData.optional()),
    hasNlp: core.serialization.property("has_nlp", HasNlp.optional()),
    theme: Theme.optional(),
    notTheme: core.serialization.property("not_theme", NotTheme.optional()),
    orgEntityName: core.serialization.property("ORG_entity_name", OrgEntityName.optional()),
    perEntityName: core.serialization.property("PER_entity_name", PerEntityName.optional()),
    locEntityName: core.serialization.property("LOC_entity_name", LocEntityName.optional()),
    miscEntityName: core.serialization.property("MISC_entity_name", MiscEntityName.optional()),
    titleSentimentMin: core.serialization.property("title_sentiment_min", TitleSentimentMin.optional()),
    titleSentimentMax: core.serialization.property("title_sentiment_max", TitleSentimentMax.optional()),
    contentSentimentMin: core.serialization.property("content_sentiment_min", ContentSentimentMin.optional()),
    contentSentientMax: core.serialization.property("content_sentient_max", ContentSentimentMax.optional()),
    iptcTags: core.serialization.property("iptc_tags", IptcTags.optional()),
    notIptcTags: core.serialization.property("not_iptc_tags", NotIptcTags.optional()),
    aggregationBy: core.serialization.property("aggregation_by", AggregationBy.optional()),
});

export declare namespace AggregationPostRequest {
    interface Raw {
        q: Q.Raw;
        search_in?: SearchIn.Raw | null;
        predefined_sources?: PredefinedSources.Raw | null;
        sources?: Sources.Raw | null;
        not_sources?: NotSources.Raw | null;
        lang?: Lang.Raw | null;
        not_lang?: NotLang.Raw | null;
        countries?: Countries.Raw | null;
        not_countries?: NotCountries.Raw | null;
        not_author_name?: NotAuthorName.Raw | null;
        from_?: From.Raw | null;
        to_?: To.Raw | null;
        published_date_precision?: PublishedDatePrecision.Raw | null;
        by_parse_date?: ByParseDate.Raw | null;
        sort_by?: SortBy.Raw | null;
        ranked_only?: RankedOnly.Raw | null;
        from_rank?: FromRank.Raw | null;
        to_rank?: ToRank.Raw | null;
        is_headline?: IsHeadline.Raw | null;
        is_opinion?: IsOpinion.Raw | null;
        is_paid_content?: IsPaidContent.Raw | null;
        parent_url?: ParentUrl.Raw | null;
        all_links?: AllLinks.Raw | null;
        all_domain_links?: AllDomainLinks.Raw | null;
        word_count_min?: WordCountMin.Raw | null;
        word_count_max?: WordCountMax.Raw | null;
        page?: Page.Raw | null;
        page_size?: PageSize.Raw | null;
        include_nlp_data?: IncludeNlpData.Raw | null;
        has_nlp?: HasNlp.Raw | null;
        theme?: Theme.Raw | null;
        not_theme?: NotTheme.Raw | null;
        ORG_entity_name?: OrgEntityName.Raw | null;
        PER_entity_name?: PerEntityName.Raw | null;
        LOC_entity_name?: LocEntityName.Raw | null;
        MISC_entity_name?: MiscEntityName.Raw | null;
        title_sentiment_min?: TitleSentimentMin.Raw | null;
        title_sentiment_max?: TitleSentimentMax.Raw | null;
        content_sentiment_min?: ContentSentimentMin.Raw | null;
        content_sentient_max?: ContentSentimentMax.Raw | null;
        iptc_tags?: IptcTags.Raw | null;
        not_iptc_tags?: NotIptcTags.Raw | null;
        aggregation_by?: AggregationBy.Raw | null;
    }
}
