/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as NewscatcherApi from "../../../../index";

/**
 * @example
 *     {
 *         authorName: "Joanna Stern",
 *         sources: ["wsj.com", "nytimes.com"],
 *         lang: "en",
 *         from: new Date("2024-01-01T00:00:00.000Z"),
 *         to: new Date("2024-06-30T00:00:00.000Z")
 *     }
 */
export interface AuthorsPostRequest {
    authorName: NewscatcherApi.AuthorName;
    notAuthorName?: NewscatcherApi.NotAuthorName;
    predefinedSources?: NewscatcherApi.PredefinedSources;
    sources?: NewscatcherApi.Sources;
    notSources?: NewscatcherApi.NotSources;
    lang?: NewscatcherApi.Lang;
    notLang?: NewscatcherApi.NotLang;
    countries?: NewscatcherApi.Countries;
    notCountries?: NewscatcherApi.NotCountries;
    from?: NewscatcherApi.From;
    to?: NewscatcherApi.To;
    publishedDatePrecision?: NewscatcherApi.PublishedDatePrecision;
    byParseDate?: NewscatcherApi.ByParseDate;
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
    iabTags?: NewscatcherApi.IabTags;
    notIabTags?: NewscatcherApi.NotIabTags;
    customTags?: NewscatcherApi.CustomTags;
}
