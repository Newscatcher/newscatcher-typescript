/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const CustomTags: core.serialization.Schema<serializers.CustomTags.Raw, NewscatcherApi.CustomTags> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.list(core.serialization.string()),
    ]);

export declare namespace CustomTags {
    type Raw = string | string[];
}
