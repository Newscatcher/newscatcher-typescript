/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * If true, returns the following additional datapoints about each news source:
 * - `nb_articles_for_7d`: The number of articles published by the source in the last week.
 * - `country`: Source country of origin.
 * - `rank`: SEO rank.
 * - `is_news_domain`: Boolean indicating if the source is a news domain.
 * - `news_domain_type`: Type of news domain (e.g., "Original Content").
 * - `news_type`: Category of news (e.g., "General News Outlets").
 */
export type IncludeAdditionalInfo = boolean;
