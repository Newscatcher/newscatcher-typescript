/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const IptcTags: core.serialization.Schema<serializers.IptcTags.Raw, NewscatcherApi.IptcTags> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.list(core.serialization.string()),
    ]);

export declare namespace IptcTags {
    type Raw = string | string[];
}
