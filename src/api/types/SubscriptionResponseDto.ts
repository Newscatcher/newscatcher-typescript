/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Response model for a successful `Subscription` request retrieving plan information. Response field behavior:
 * - Required fields are guaranteed to be present and non-null.
 * - Optional fields may be `null`/`undefined` if the data couldn't
 * be extracted during processing.
 */
export interface SubscriptionResponseDto {
    /** Indicates whether the subscription is currently active. */
    active: boolean;
    /** The number of API calls allowed per second allowed in the current plan. */
    concurrentCalls: number;
    /** The name of the subscription plan. */
    plan: string;
    /** The total number of API calls assigned to the current subscription. */
    planCalls: number;
    /** The number of API calls remaining for the current subscription period. */
    remainingCalls: number;
    /** The number of historical days accessible under the current subscription plan. */
    historicalDays: number;
}
