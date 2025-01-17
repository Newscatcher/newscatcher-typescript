/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const SearchIn: core.serialization.Schema<serializers.SearchIn.Raw, NewscatcherApi.SearchIn> =
    core.serialization.string();

export declare namespace SearchIn {
    type Raw = string;
}
