/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";
import { SourceResponseSourcesItem } from "./SourceResponseSourcesItem";

export const SourceResponse: core.serialization.ObjectSchema<
    serializers.SourceResponse.Raw,
    NewscatcherApi.SourceResponse
> = core.serialization.object({
    message: core.serialization.string(),
    sources: core.serialization.list(SourceResponseSourcesItem),
    userInput: core.serialization.property(
        "user_input",
        core.serialization.record(core.serialization.string(), core.serialization.unknown())
    ),
});

export declare namespace SourceResponse {
    interface Raw {
        message: string;
        sources: SourceResponseSourcesItem.Raw[];
        user_input: Record<string, unknown>;
    }
}
