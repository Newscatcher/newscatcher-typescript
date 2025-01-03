/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         q: "q",
 *         predefinedSources: "predefined_sources",
 *         sources: "sources",
 *         notSources: "not_sources",
 *         lang: "lang",
 *         notLang: "not_lang",
 *         countries: "countries",
 *         notCountries: "not_countries",
 *         notAuthorName: "not_author_name",
 *         parentUrl: "parent_url",
 *         allLinks: "all_links",
 *         allDomainLinks: "all_domain_links",
 *         iptcTags: "iptc_tags",
 *         notIptcTags: "not_iptc_tags",
 *         sourceName: "source_name",
 *         iabTags: "iab_tags",
 *         notIabTags: "not_iab_tags",
 *         newsDomainType: "news_domain_type",
 *         newsType: "news_type"
 *     }
 */
export interface SearchGetRequest {
    q: string;
    searchIn?: string;
    predefinedSources: string;
    sources: string;
    notSources: string;
    lang: string;
    notLang: string;
    countries: string;
    notCountries: string;
    notAuthorName: string;
    from?: string;
    to?: string;
    publishedDatePrecision?: string;
    byParseDate?: string;
    sortBy?: string;
    rankedOnly?: string;
    fromRank?: string;
    toRank?: string;
    isHeadline?: string;
    isOpinion?: string;
    isPaidContent?: string;
    parentUrl: string;
    allLinks: string;
    allDomainLinks: string;
    wordCountMin?: string;
    wordCountMax?: string;
    page?: string;
    pageSize?: string;
    clusteringVariable?: string;
    clusteringEnabled?: string;
    clusteringThreshold?: number;
    includeNlpData?: string;
    hasNlp?: boolean;
    theme?: string;
    notTheme?: string;
    orgEntityName?: string;
    perEntityName?: string;
    locEntityName?: string;
    miscEntityName?: string;
    titleSentimentMin?: number;
    titleSentimentMax?: number;
    contentSentimentMin?: number;
    contentSentimentMax?: number;
    iptcTags: string;
    notIptcTags: string;
    sourceName: string;
    iabTags: string;
    notIabTags: string;
    excludeDuplicates?: boolean;
    additionalDomainInfo?: boolean;
    isNewsDomain?: boolean;
    newsDomainType: string;
    newsType: string;
}
