/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as NewscatcherApi from "../../../../index";

/**
 * @example
 *     {
 *         q: "artificial intelligence",
 *         includeSimilarDocuments: true,
 *         similarDocumentsNumber: 5
 *     }
 */
export interface SearchSimilarPostRequest {
    q: NewscatcherApi.Q;
    searchIn?: NewscatcherApi.SearchIn;
    includeSimilarDocuments?: NewscatcherApi.IncludeSimilarDocuments;
    similarDocumentsNumber?: NewscatcherApi.SimilarDocumentsNumber;
    similarDocumentsFields?: NewscatcherApi.SimilarDocumentsFields;
    predefinedSources?: NewscatcherApi.PredefinedSources;
    sources?: NewscatcherApi.Sources;
    notSources?: NewscatcherApi.NotSources;
    lang?: NewscatcherApi.Lang;
    notLang?: NewscatcherApi.NotLang;
    countries?: NewscatcherApi.Countries;
    notCountries?: NewscatcherApi.NotCountries;
    from?: NewscatcherApi.From;
    to?: NewscatcherApi.To;
    byParseDate?: NewscatcherApi.ByParseDate;
    publishedDatePrecision?: NewscatcherApi.PublishedDatePrecision;
    sortBy?: NewscatcherApi.SortBy;
    rankedOnly?: NewscatcherApi.RankedOnly;
    fromRank?: NewscatcherApi.FromRank;
    toRank?: NewscatcherApi.ToRank;
    isHeadline?: NewscatcherApi.IsHeadline;
    isOpinion?: NewscatcherApi.IsOpinion;
    isPaidContent?: NewscatcherApi.IsPaidContent;
    parentUrl?: NewscatcherApi.ParentUrl;
    allLinks?: NewscatcherApi.AllLinks;
    allDomainLinks?: NewscatcherApi.AllDomainLinks;
    wordCountMin?: NewscatcherApi.WordCountMin;
    wordCountMax?: NewscatcherApi.WordCountMax;
    page?: NewscatcherApi.Page;
    pageSize?: NewscatcherApi.PageSize;
    includeNlpData?: NewscatcherApi.IncludeNlpData;
    hasNlp?: NewscatcherApi.HasNlp;
    theme?: NewscatcherApi.Theme;
    notTheme?: NewscatcherApi.NotTheme;
    nerName?: NewscatcherApi.NerName;
    titleSentimentMin?: NewscatcherApi.TitleSentimentMin;
    titleSentimentMax?: NewscatcherApi.TitleSentimentMax;
    contentSentimentMin?: NewscatcherApi.ContentSentimentMin;
    contentSentimentMax?: NewscatcherApi.ContentSentimentMax;
    iptcTags?: NewscatcherApi.IptcTags;
    notIptcTags?: NewscatcherApi.NotIptcTags;
    customTags?: NewscatcherApi.CustomTags;
}
