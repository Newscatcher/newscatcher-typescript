/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as NewscatcherApi from "../../../../api/index";
import * as core from "../../../../core";

export const LatestHeadlinesRequestIsOpinion: core.serialization.Schema<
    serializers.LatestHeadlinesRequestIsOpinion.Raw,
    NewscatcherApi.LatestHeadlinesRequestIsOpinion
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.boolean()]);

export declare namespace LatestHeadlinesRequestIsOpinion {
    type Raw = string | boolean;
}
