/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Sets the similarity threshold for grouping articles into clusters. A lower value creates more inclusive clusters, while a higher value requires greater similarity between articles.
 *
 * For example:
 * - `0.3`: Results in larger, more diverse clusters.
 * - `0.6`: Balances cluster size and article similarity (default).
 * - `0.9`: Creates smaller, tightly related clusters.
 *
 * To learn more, see [Clustering news articles](/docs/v3/documentation/guides-and-concepts/clustering-news-articles).
 */
export type ClusteringThreshold = number;
