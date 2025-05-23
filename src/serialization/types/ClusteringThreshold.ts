/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const ClusteringThreshold: core.serialization.Schema<
    serializers.ClusteringThreshold.Raw,
    NewscatcherApi.ClusteringThreshold
> = core.serialization.number();

export declare namespace ClusteringThreshold {
    type Raw = number;
}
