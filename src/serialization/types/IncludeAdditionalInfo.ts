/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const IncludeAdditionalInfo: core.serialization.Schema<
    serializers.IncludeAdditionalInfo.Raw,
    NewscatcherApi.IncludeAdditionalInfo
> = core.serialization.boolean();

export declare namespace IncludeAdditionalInfo {
    type Raw = boolean;
}
