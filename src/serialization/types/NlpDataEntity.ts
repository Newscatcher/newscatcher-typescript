/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";
import { SentimentScores } from "./SentimentScores";
import { NamedEntityList } from "./NamedEntityList";
import { NamedEntityListItem } from "./NamedEntityListItem";

export const NlpDataEntity: core.serialization.ObjectSchema<
    serializers.NlpDataEntity.Raw,
    NewscatcherApi.NlpDataEntity
> = core.serialization.object({
    theme: core.serialization.string().optional(),
    summary: core.serialization.string().optional(),
    sentiment: SentimentScores.optional(),
    newEmbedding: core.serialization.property(
        "new_embedding",
        core.serialization.list(core.serialization.number()).optional()
    ),
    nerPer: core.serialization.property("ner_PER", NamedEntityList.optional()),
    nerOrg: core.serialization.property("ner_ORG", NamedEntityList.optional()),
    nerMisc: core.serialization.property("ner_MISC", NamedEntityList.optional()),
    nerLoc: core.serialization.property("ner_LOC", NamedEntityList.optional()),
    iptcTagsName: core.serialization.property(
        "iptc_tags_name",
        core.serialization.list(core.serialization.string()).optional()
    ),
    iptcTagsId: core.serialization.property(
        "iptc_tags_id",
        core.serialization.list(core.serialization.string()).optional()
    ),
    iabTagsName: core.serialization.property(
        "iab_tags_name",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace NlpDataEntity {
    interface Raw {
        theme?: string | null;
        summary?: string | null;
        sentiment?: SentimentScores.Raw | null;
        new_embedding?: number[] | null;
        ner_PER?: NamedEntityList.Raw | null;
        ner_ORG?: NamedEntityList.Raw | null;
        ner_MISC?: NamedEntityList.Raw | null;
        ner_LOC?: NamedEntityList.Raw | null;
        iptc_tags_name?: string[] | null;
        iptc_tags_id?: string[] | null;
        iab_tags_name?: string[] | null;
    }
}
