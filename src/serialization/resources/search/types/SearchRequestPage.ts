/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as NewscatcherApi from "../../../../api/index";
import * as core from "../../../../core";

export const SearchRequestPage: core.serialization.Schema<
    serializers.SearchRequestPage.Raw,
    NewscatcherApi.SearchRequestPage
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.number()]);

export declare namespace SearchRequestPage {
    type Raw = string | number;
}