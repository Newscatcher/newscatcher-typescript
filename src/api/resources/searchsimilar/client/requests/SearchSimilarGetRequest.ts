/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as NewscatcherApi from "../../../../index";

/**
 * @example
 *     {
 *         q: "technology AND (Apple OR Microsoft) NOT Google",
 *         similarDocumentsFields: "title,summary",
 *         predefinedSources: "top 100 US, top 5 GB",
 *         from: new Date("2024-07-01T00:00:00.000Z"),
 *         to: new Date("2024-07-01T00:00:00.000Z"),
 *         theme: "Business,Finance",
 *         notTheme: "Crime",
 *         nerName: "Tesla",
 *         iptcTags: "20000199,20000209",
 *         notIptcTags: "20000205,20000209",
 *         customTags: "Tag1,Tag2,Tag3"
 *     }
 */
export interface SearchSimilarGetRequest {
    /**
     * The keyword(s) to search for in articles. Query syntax supports logical operators (`AND`, `OR`, `NOT`) and wildcards:
     *
     * - For an exact match, use double quotes. For example, `"technology news"`.
     * - Use `*` to search for any keyword.
     * - Use `+` to include and `-` to exclude specific words or phrases.
     *   For example, `+Apple`, `-Google`.
     * - Use `AND`, `OR`, and `NOT` to refine search results.
     *   For example, `technology AND (Apple OR Microsoft) NOT Google`.
     *
     * For more details, see [Advanced querying](/docs/v3/documentation/guides-and-concepts/advanced-querying).
     */
    q: string;
    /**
     * The article fields to search in. To search in multiple fields, use a comma-separated string.
     *
     * Example: `"title, summary"`
     *
     * **Note**: The `summary` option is available if NLP is enabled in your plan.
     *
     * Available options: `title`, `summary`, `content`.
     */
    searchIn?: string;
    /**
     * If true, includes similar documents in the response.
     */
    includeSimilarDocuments?: boolean;
    /**
     * The number of similar documents to return.
     */
    similarDocumentsNumber?: number;
    /**
     * The fields to consider for finding similar documents.
     */
    similarDocumentsFields?: string;
    /**
     * Predefined top news sources per country.
     *
     * Format: start with the word `top`, followed by the number of desired sources, and then the two-letter country code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Multiple countries with the number of top sources can be specified as a comma-separated string.
     *
     * Examples:
     * - `"top 100 US"`
     * - `"top 33 AT"`
     * - `"top 50 US, top 20 GB"`
     * - `"top 33 AT, top 50 IT"`
     */
    predefinedSources?: string;
    /**
     * One or more news sources to narrow down the search. The format must be a domain URL. Subdomains, such as `finance.yahoo.com`, are also acceptable.To specify multiple sources, use a comma-separated string.
     *
     * Examples:
     * - `"nytimes.com"`
     * - `"theguardian.com, finance.yahoo.com"`
     */
    sources?: string;
    /**
     * The news sources to exclude from the search. To exclude multiple sources, use a comma-separated string.
     *
     * Example: `"cnn.com, wsj.com"`
     */
    notSources?: string;
    /**
     * The language(s) of the search. The only accepted format is the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code. To select multiple languages, use a comma-separated string.
     *
     * Example: `"en, es"`
     *
     * To learn more, see [Enumerated parameters > Language](/docs/v3/api-reference/overview/enumerated-parameters#language-lang-and-not-lang).
     */
    lang?: string;
    /**
     * The language(s) to exclude from the search. The accepted format is the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code. To exclude multiple languages, use a comma-separated string.
     *
     * Example: `"fr, de"`
     *
     * To learn more, see [Enumerated parameters > Language](/docs/v3/api-reference/overview/enumerated-parameters#language-lang-and-not-lang).
     */
    notLang?: string;
    /**
     * The countries where the news publisher is located. The accepted format is the two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. To select multiple countries, use a comma-separated string.
     *
     * Example: `"US, CA"`
     *
     * To learn more, see [Enumerated parameters > Country](/docs/v3/api-reference/overview/enumerated-parameters#country-country-and-not-country).
     */
    countries?: string;
    /**
     * The publisher location countries to exclude from the search. The accepted format is the two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. To exclude multiple countries, use a comma-separated string.
     *
     * Example:`"US, CA"`
     *
     * To learn more, see [Enumerated parameters > Country](/docs/v3/api-reference/overview/enumerated-parameters#country-country-and-not-country).
     */
    notCountries?: string;
    /**
     * The starting point in time to search from. Accepts date-time strings in ISO 8601 format and plain text. The default time zone is UTC.
     *
     * Formats with examples:
     * - YYYY-mm-ddTHH:MM:SS: `2024-07-01T00:00:00`
     * - YYYY-MM-dd: `2024-07-01`
     * - YYYY/mm/dd HH:MM:SS: `2024/07/01 00:00:00`
     * - YYYY/mm/dd: `2024/07/01`
     * - English phrases: `1 day ago`, `today`
     *
     * **Note**: By default, applied to the publication date of the article. To use the article's parse date instead, set the `by_parse_date` parameter to `true`.
     */
    from?: Date;
    /**
     * The ending point in time to search up to. Accepts date-time strings in ISO 8601 format and plain text. The default time zone is UTC.
     *
     * Formats with examples:
     * - YYYY-mm-ddTHH:MM:SS: `2024-07-01T00:00:00`
     * - YYYY-MM-dd: `2024-07-01`
     * - YYYY/mm/dd HH:MM:SS: `2024/07/01 00:00:00`
     * - YYYY/mm/dd: `2024/07/01`
     * - English phrases: `1 day ago`, `today`
     *
     * **Note**: By default, applied to the publication date of the article. To use the article's parse date instead, set the `by_parse_date` parameter to `true`.
     */
    to?: Date;
    /**
     * If true, the `from_` and `to_` parameters use article parse dates instead of published dates. Additionally, the `parse_date` variable is added to the output for each article object.
     */
    byParseDate?: boolean;
    /**
     * The precision of the published date. There are three types:
     * - `full`: The day and time of an article is correctly identified with the appropriate timezone.
     * - `timezone unknown`: The day and time of an article is correctly identified without timezone.
     * - `date`: Only the day is identified without an exact time.
     */
    publishedDatePrecision?: NewscatcherApi.SearchSimilarGetRequestPublishedDatePrecision;
    /**
     * The sorting order of the results. Possible values are:
     * - `relevancy`: The most relevant results first.
     * - `date`: The most recently published results first.
     * - `rank`: The results from the highest-ranked sources first.
     */
    sortBy?: NewscatcherApi.SearchSimilarGetRequestSortBy;
    /**
     * If true, limits the search to sources ranked in the top 1 million online websites. If false, includes unranked sources which are assigned a rank of 999999.
     */
    rankedOnly?: boolean;
    /**
     * The lowest boundary of the rank of a news website to filter by. A lower rank indicates a more popular source.
     */
    fromRank?: number;
    /**
     * The highest boundary of the rank of a news website to filter by. A lower rank indicates a more popular source.
     */
    toRank?: number;
    /**
     * If true, only returns articles that were posted on the home page of a given news domain.
     */
    isHeadline?: boolean;
    /**
     * If true, returns only opinion pieces. If false, excludes opinion-based articles and returns news only.
     */
    isOpinion?: boolean;
    /**
     * If false, returns only articles that have publicly available complete content. Some publishers partially block content, so this setting ensures that only full articles are retrieved.
     */
    isPaidContent?: boolean;
    /**
     * The categorical URL(s) to filter your search. To filter your search by multiple categorical URLs, use a comma-separated string.
     *
     * Example: `"wsj.com/politics, wsj.com/tech"`
     */
    parentUrl?: string;
    /**
     * The complete URL(s) mentioned in the article. For multiple URLs, use a comma-separated string.
     *
     * Example: `"https://aiindex.stanford.edu/report, https://www.stateof.ai"`
     *
     * For more details, see [Search by URL](/docs/v3/documentation/how-to/search-by-url).
     */
    allLinks?: string;
    /**
     * The domain(s) mentioned in the article. For multiple domains, use a comma-separated string.
     *
     * Example: `"who.int, nih.gov"`
     *
     * For more details, see [Search by URL](/docs/v3/documentation/how-to/search-by-url).
     */
    allDomainLinks?: string;
    /**
     * The minimum number of words an article must contain. To be used for avoiding articles with small content.
     */
    wordCountMin?: number;
    /**
     * The maximum number of words an article can contain. To be used for avoiding articles with large content.
     */
    wordCountMax?: number;
    /**
     * The page number to scroll through the results. Use for pagination, as a single API response can return up to 1,000 articles.
     *
     * For details, see [How to paginate large datasets](https://www.newscatcherapi.com/docs/v3/documentation/how-to/paginate-large-datasets).
     */
    page?: number;
    /**
     * The number of articles to return per page.
     */
    pageSize?: number;
    /**
     * If true, includes an NLP layer with each article in the response. This layer provides enhanced information such as theme classification, article summary, sentiment analysis, tags, and named entity recognition.
     *
     * The NLP layer includes:
     * - Theme: General topic of the article.
     * - Summary: A concise overview of the article content.
     * - Sentiment: Separate scores for title and content (range: -1 to 1).
     * - Named entities: Identified persons (PER), organizations (ORG), locations (LOC), and miscellaneous entities (MISC).
     * - IPTC tags: Standardized news category tags.
     * - IAB tags: Content categories for digital advertising.
     *
     * **Note**: The `include_nlp_data` parameter is only available if NLP is included in your subscription plan.
     *
     * To learn more, see [NLP features](/docs/v3/documentation/guides-and-concepts/nlp-features).
     */
    includeNlpData?: boolean;
    /**
     * If true, filters the results to include only articles with an NLP layer. This allows you to focus on articles that have been processed with advanced NLP techniques.
     *
     * **Note**: The `has_nlp` parameter is only available if NLP is included in your subscription plan.
     *
     * To learn more, see [NLP features](/docs/v3/documentation/guides-and-concepts/nlp-features).
     */
    hasNlp?: boolean;
    /**
     * Filters articles based on their general topic, as determined by NLP analysis. To select multiple themes, use a comma-separated string.
     *
     * Example: `"Finance, Tech"`
     *
     * **Note**: The `theme` parameter is only available if NLP is included in your subscription plan.
     *
     * To learn more, see [NLP features](/docs/v3/documentation/guides-and-concepts/nlp-features).
     *
     * Available options: `Business`, `Economics`, `Entertainment`, `Finance`, `Health`, `Politics`, `Science`, `Sports`, `Tech`, `Crime`, `Financial Crime`, `Lifestyle`, `Automotive`, `Travel`, `Weather`, `General`.
     */
    theme?: string;
    /**
     * Inverse of the `theme` parameter. Excludes articles based on their general topic, as determined by NLP analysis. To exclude multiple themes, use a comma-separated string.
     *
     * Example: `"Crime, Tech"`
     *
     * **Note**: The `not_theme` parameter is only available if NLP is included in your subscription plan.
     *
     * To learn more, see [NLP features](/docs/v3/documentation/guides-and-concepts/nlp-features).
     */
    notTheme?: string;
    /**
     * The name of person, organization, location, product or other named entity to search for. To specify multiple names use a comma-separated string.
     *
     * Example: `"Tesla, Amazon"`
     */
    nerName?: string;
    /**
     * Filters articles based on the minimum sentiment score of their titles.
     *
     * Range is `-1.0` to `1.0`, where:
     * - Negative values indicate negative sentiment.
     * - Positive values indicate positive sentiment.
     * - Values close to 0 indicate neutral sentiment.
     *
     * **Note**: The `title_sentiment_min` parameter is only available if NLP is included in your subscription plan.
     *
     * To learn more, see [NLP features](/docs/v3/documentation/guides-and-concepts/nlp-features).
     */
    titleSentimentMin?: number;
    /**
     * Filters articles based on the maximum sentiment score of their titles.
     *
     * Range is `-1.0` to `1.0`, where:
     * - Negative values indicate negative sentiment.
     * - Positive values indicate positive sentiment.
     * - Values close to 0 indicate neutral sentiment.
     *
     * **Note**: The `title_sentiment_max` parameter is only available if NLP is included in your subscription plan.
     *
     * To learn more, see [NLP features](/docs/v3/documentation/guides-and-concepts/nlp-features).
     */
    titleSentimentMax?: number;
    /**
     * Filters articles based on the minimum sentiment score of their content.
     *
     * Range is `-1.0` to `1.0`, where:
     * - Negative values indicate negative sentiment.
     * - Positive values indicate positive sentiment.
     * - Values close to 0 indicate neutral sentiment.
     *
     * **Note**: The `content_sentiment_min` parameter is only available if NLP is included in your subscription plan.
     *
     * To learn more, see [NLP features](/docs/v3/documentation/guides-and-concepts/nlp-features).
     */
    contentSentimentMin?: number;
    /**
     * Filters articles based on the maximum sentiment score of their content.
     *
     * Range is `-1.0` to `1.0`, where:
     * - Negative values indicate negative sentiment.
     * - Positive values indicate positive sentiment.
     * - Values close to 0 indicate neutral sentiment.
     *
     * **Note**: The `content_sentiment_max` parameter is only available if NLP is included in your subscription plan.
     *
     * To learn more, see [NLP features](/docs/v3/documentation/guides-and-concepts/nlp-features).
     */
    contentSentimentMax?: number;
    /**
     * Filters articles based on International Press Telecommunications Council (IPTC) media topic tags. To specify multiple IPTC tags, use a comma-separated string of tag IDs.
     *
     * Example: `"20000199, 20000209"`
     *
     * **Note**: The `iptc_tags` parameter is only available if tags are included in your subscription plan.
     *
     * To learn more, see [IPTC Media Topic NewsCodes](https://www.iptc.org/std/NewsCodes/treeview/mediatopic/mediatopic-en-GB.html).
     */
    iptcTags?: string;
    /**
     * Inverse of the `iptc_tags` parameter. Excludes articles based on International Press Telecommunications Council (IPTC) media topic tags. To specify multiple IPTC tags to exclude, use a comma-separated string of tag IDs.
     *
     * Example: `"20000205, 20000209"`
     *
     * **Note**: The `not_iptc_tags` parameter is only available if tags are included in your subscription plan.
     *
     * To learn more, see [IPTC Media Topic NewsCodes](https://www.iptc.org/std/NewsCodes/treeview/mediatopic/mediatopic-en-GB.html).
     */
    notIptcTags?: string;
    /**
     * Filters articles based on provided taxonomy that is tailored to your specific needs and is accessible only with your API key. To specify tags, use the following pattern:
     *
     * - `custom_tags.taxonomy=Tag1,Tag2,Tag3`, where `taxonomy` is the taxonomy name and `Tag1,Tag2,Tag3` is a comma-separated list of tags.
     *
     * Example: `custom_tags.industry="Manufacturing, Supply Chain, Logistics"`
     *
     * To learn more, see the [Custom tags](/docs/v3/documentation/guides-and-concepts/custom-tags).
     */
    customTags?: string;
}
