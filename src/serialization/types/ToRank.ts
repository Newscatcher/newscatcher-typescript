/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const ToRank: core.serialization.Schema<serializers.ToRank.Raw, NewscatcherApi.ToRank> =
    core.serialization.number();

export declare namespace ToRank {
    type Raw = number;
}
