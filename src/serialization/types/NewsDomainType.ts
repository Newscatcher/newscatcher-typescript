/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const NewsDomainType: core.serialization.Schema<serializers.NewsDomainType.Raw, NewscatcherApi.NewsDomainType> =
    core.serialization.enum_(["Original Content", "Aggregator", "Press Releases", "Republisher", "Other"]);

export declare namespace NewsDomainType {
    type Raw = "Original Content" | "Aggregator" | "Press Releases" | "Republisher" | "Other";
}
