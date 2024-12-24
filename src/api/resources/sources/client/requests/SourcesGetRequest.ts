/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         lang: "lang",
 *         countries: "countries",
 *         predefinedSources: "predefined_sources",
 *         sourceName: "source_name",
 *         sourceUrl: "source_url",
 *         newsDomainType: "news_domain_type",
 *         newsType: "news_type"
 *     }
 */
export interface SourcesGetRequest {
    lang: string;
    countries: string;
    predefinedSources: string;
    includeAdditionalInfo?: boolean;
    fromRank?: number;
    toRank?: number;
    sourceName: string;
    sourceUrl: string;
    isNewsDomain?: boolean;
    newsDomainType: string;
    newsType: string;
}