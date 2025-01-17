/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The language(s) to exclude from the search. The accepted format is the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code. To exclude multiple languages, use a comma-separated string or an array of strings.
 *
 * Examples:
 * - `"fr,de"`
 * - `["fr", "de"]`
 *
 * To learn more, see [Enumerated parameters > Language](/docs/v3/api-reference/overview/enumerated-parameters#language-lang-and-not-lang).
 */
export type NotLang = string | string[];
