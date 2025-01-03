/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const Cluster: core.serialization.ObjectSchema<serializers.Cluster.Raw, NewscatcherApi.Cluster> =
    core.serialization.object({
        clusterId: core.serialization.property("cluster_id", core.serialization.string()),
        clusterSize: core.serialization.property("cluster_size", core.serialization.number()),
        articles: core.serialization.list(
            core.serialization.record(core.serialization.string(), core.serialization.unknown())
        ),
    });

export declare namespace Cluster {
    interface Raw {
        cluster_id: string;
        cluster_size: number;
        articles: Record<string, unknown>[];
    }
}
