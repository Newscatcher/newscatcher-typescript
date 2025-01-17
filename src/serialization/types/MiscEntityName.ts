/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const MiscEntityName: core.serialization.Schema<serializers.MiscEntityName.Raw, NewscatcherApi.MiscEntityName> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.list(core.serialization.string()),
    ]);

export declare namespace MiscEntityName {
    type Raw = string | string[];
}
