/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as NewscatcherApi from "../../../../api/index";
import * as core from "../../../../core";

export const SearchGetRequestClusteringVariable: core.serialization.Schema<
    serializers.SearchGetRequestClusteringVariable.Raw,
    NewscatcherApi.SearchGetRequestClusteringVariable
> = core.serialization.enum_(["content", "title", "summary"]);

export declare namespace SearchGetRequestClusteringVariable {
    type Raw = "content" | "title" | "summary";
}
