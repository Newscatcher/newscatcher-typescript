/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const TitleSentimentMax: core.serialization.Schema<
    serializers.TitleSentimentMax.Raw,
    NewscatcherApi.TitleSentimentMax
> = core.serialization.number();

export declare namespace TitleSentimentMax {
    type Raw = number;
}
