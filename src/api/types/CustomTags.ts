/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Filters articles based on provided taxonomy that is tailored to your specific needs and is accessible only with your API key. To specify tags, use the following pattern:
 *
 * - `custom_tags.taxonomy=Tag1,Tag2,Tag3`, where `taxonomy` is the taxonomy name and `Tag1,Tag2,Tag3` are comma-separated tags. For POST requests, you can also specify tags as an array of strings.
 *
 * Examples:
 * - `custom_tags.industry="Manufacturing, Supply Chain, Logistics"`
 * - `"custom_tags.industry": ["Manufacturing", "Supply Chain", "Logistics"]`
 *
 * To learn more, see the [Custom tags](/docs/v3/documentation/guides-and-concepts/custom-tags).
 */
export type CustomTags = string | string[];
