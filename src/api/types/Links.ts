/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The article link or list of article links to search for. To specify multiple links, use a comma-separated string or an array of strings.
 *
 * Examples:
 * - `"https://nytimes.com/article1, https://bbc.com/article2"`
 * - `["https://nytimes.com/article1", "https://bbc.com/article2"]`
 *
 * **Caution**: You can use either the `links` or the `ids` parameter, but not both at the same time.
 */
export type Links = string | string[];
