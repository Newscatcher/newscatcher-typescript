/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const RankedOnly: core.serialization.Schema<serializers.RankedOnly.Raw, NewscatcherApi.RankedOnly> =
    core.serialization.boolean();

export declare namespace RankedOnly {
    type Raw = boolean;
}
