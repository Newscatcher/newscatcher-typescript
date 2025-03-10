/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as NewscatcherApi from "../index";

/**
 * The response model for a successful `Aggregation count` request. Response field behavior:
 * - Required fields are guaranteed to be present and non-null.
 * - Optional fields may be `null`/`undefined` if the data couldn't be extracted
 * during processing.
 */
export interface AggregationCountResponseDto extends NewscatcherApi.BaseSearchResponseDto {
    /** The aggregation results. Can be either a dictionary or a list of dictionaries. */
    aggregations?: NewscatcherApi.Aggregations;
    userInput?: NewscatcherApi.UserInputDto;
}
