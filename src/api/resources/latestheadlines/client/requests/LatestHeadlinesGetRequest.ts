/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         lang: "lang",
 *         notLang: "not_lang",
 *         countries: "countries",
 *         notCountries: "not_countries",
 *         sources: "sources",
 *         predefinedSources: "predefined_sources",
 *         notSources: "not_sources",
 *         notAuthorName: "not_author_name",
 *         parentUrl: "parent_url",
 *         allLinks: "all_links",
 *         allDomainLinks: "all_domain_links",
 *         iptcTags: "iptc_tags",
 *         notIptcTags: "not_iptc_tags",
 *         iabTags: "iab_tags",
 *         notIabTags: "not_iab_tags"
 *     }
 */
export interface LatestHeadlinesGetRequest {
    when?: string;
    byParseDate?: string;
    sortBy?: string;
    lang: string;
    notLang: string;
    countries: string;
    notCountries: string;
    sources: string;
    predefinedSources: string;
    notSources: string;
    notAuthorName: string;
    rankedOnly?: string;
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
    includeNlpData?: boolean;
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
    iabTags: string;
    notIabTags: string;
}
