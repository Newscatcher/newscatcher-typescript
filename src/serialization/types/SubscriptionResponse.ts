/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const SubscriptionResponse: core.serialization.ObjectSchema<
    serializers.SubscriptionResponse.Raw,
    NewscatcherApi.SubscriptionResponse
> = core.serialization.object({
    active: core.serialization.boolean(),
    callsPerSeconds: core.serialization.property("calls_per_seconds", core.serialization.number().optional()),
    planName: core.serialization.property("plan_name", core.serialization.string()),
    usageAssignedCalls: core.serialization.property("usage_assigned_calls", core.serialization.number().optional()),
    usageRemainingCalls: core.serialization.property("usage_remaining_calls", core.serialization.number().optional()),
    historicalDays: core.serialization.property("historical_days", core.serialization.number().optional()),
});

export declare namespace SubscriptionResponse {
    interface Raw {
        active: boolean;
        calls_per_seconds?: number | null;
        plan_name: string;
        usage_assigned_calls?: number | null;
        usage_remaining_calls?: number | null;
        historical_days?: number | null;
    }
}
