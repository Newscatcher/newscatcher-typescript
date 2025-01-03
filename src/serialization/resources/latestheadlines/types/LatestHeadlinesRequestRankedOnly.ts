/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as NewscatcherApi from "../../../../api/index";
import * as core from "../../../../core";

export const LatestHeadlinesRequestRankedOnly: core.serialization.Schema<
    serializers.LatestHeadlinesRequestRankedOnly.Raw,
    NewscatcherApi.LatestHeadlinesRequestRankedOnly
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.boolean()]);

export declare namespace LatestHeadlinesRequestRankedOnly {
    type Raw = string | boolean;
}
