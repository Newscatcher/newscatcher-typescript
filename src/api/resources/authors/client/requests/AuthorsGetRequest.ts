/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         authorName: "author_name",
 *         sources: "sources",
 *         predefinedSources: "predefined_sources",
 *         notSources: "not_sources",
 *         lang: "lang",
 *         notLang: "not_lang",
 *         countries: "countries",
 *         notCountries: "not_countries",
 *         parentUrl: "parent_url",
 *         allLinks: "all_links",
 *         allDomainLinks: "all_domain_links",
 *         iptcTags: "iptc_tags",
 *         notIptcTags: "not_iptc_tags",
 *         iabTags: "iab_tags",
 *         notIabTags: "not_iab_tags"
 *     }
 */
export interface AuthorsGetRequest {
    authorName: string;
    notAuthorName?: string;
    sources: string;
    predefinedSources: string;
    notSources: string;
    lang: string;
    notLang: string;
    countries: string;
    notCountries: string;
    from?: string;
    to?: string;
    publishedDatePrecision?: string;
    byParseDate?: boolean;
    sortBy?: string;
    rankedOnly?: string;
    fromRank?: number;
    toRank?: number;
    isHeadline?: boolean;
    isOpinion?: boolean;
    isPaidContent?: boolean;
    parentUrl: string;
    allLinks: string;
    allDomainLinks: string;
    wordCountMin?: number;
    wordCountMax?: number;
    page?: number;
    pageSize?: number;
    includeNlpData?: boolean;
    hasNlp?: boolean;
    theme?: string;
    notTheme?: string;
    titleSentimentMin?: number;
    titleSentimentMax?: number;
    contentSentimentMin?: number;
    contentSentimentMax?: number;
    iptcTags: string;
    notIptcTags: string;
    iabTags: string;
    notIabTags: string;
}
