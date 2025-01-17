/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as NewscatcherApi from "../../../../api/index";
import * as core from "../../../../core";

export const SearchRequestIsPaidContent: core.serialization.Schema<
    serializers.SearchRequestIsPaidContent.Raw,
    NewscatcherApi.SearchRequestIsPaidContent
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.boolean()]);

export declare namespace SearchRequestIsPaidContent {
    type Raw = string | boolean;
}
