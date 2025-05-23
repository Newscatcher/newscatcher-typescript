/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const SortBy: core.serialization.Schema<serializers.SortBy.Raw, NewscatcherApi.SortBy> =
    core.serialization.enum_(["relevancy", "date", "rank"]);

export declare namespace SortBy {
    type Raw = "relevancy" | "date" | "rank";
}
