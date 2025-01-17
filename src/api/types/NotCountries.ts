/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The publisher location countries to exclude from the search. The accepted format is the two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. To exclude multiple countries, use a comma-separated string or an array of strings.
 *
 * Examples:
 * - `"UK,FR"`
 * - `["UK", "FR"]`
 *
 * To learn more, see [Enumerated parameters > Country](/docs/v3/api-reference/overview/enumerated-parameters#country-country-and-not-country).
 */
export type NotCountries = string | string[];
