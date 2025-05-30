/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";
import { SourceInfo } from "./SourceInfo";

export const SourcesResponseDtoSourcesItem: core.serialization.Schema<
    serializers.SourcesResponseDtoSourcesItem.Raw,
    NewscatcherApi.SourcesResponseDtoSourcesItem
> = core.serialization.undiscriminatedUnion([SourceInfo, core.serialization.string()]);

export declare namespace SourcesResponseDtoSourcesItem {
    type Raw = SourceInfo.Raw | string;
}
