/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The aggregation interval for the results. Possible values are:
 * - `day`: Aggregates results by day.
 * - `hour`: Aggregates results by hour.
 */
export type AggregationBy = "day" | "hour";

export const AggregationBy = {
    Day: "day",
    Hour: "hour",
} as const;
