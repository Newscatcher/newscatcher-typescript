/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as NewscatcherApi from "../../../../api/index";
import * as core from "../../../../core";

export const MoreLikeThisRequestRankedOnly: core.serialization.Schema<
    serializers.MoreLikeThisRequestRankedOnly.Raw,
    NewscatcherApi.MoreLikeThisRequestRankedOnly
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.boolean()]);

export declare namespace MoreLikeThisRequestRankedOnly {
    type Raw = string | boolean;
}
