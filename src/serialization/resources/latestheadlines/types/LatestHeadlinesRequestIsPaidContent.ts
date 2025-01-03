/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as NewscatcherApi from "../../../../api/index";
import * as core from "../../../../core";

export const LatestHeadlinesRequestIsPaidContent: core.serialization.Schema<
    serializers.LatestHeadlinesRequestIsPaidContent.Raw,
    NewscatcherApi.LatestHeadlinesRequestIsPaidContent
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.boolean()]);

export declare namespace LatestHeadlinesRequestIsPaidContent {
    type Raw = string | boolean;
}
