/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";

export const AdditionalDomainInfoEntity: core.serialization.ObjectSchema<
    serializers.AdditionalDomainInfoEntity.Raw,
    NewscatcherApi.AdditionalDomainInfoEntity
> = core.serialization.object({
    isNewsDomain: core.serialization.property("is_news_domain", core.serialization.boolean().optional()),
    newsType: core.serialization.property("news_type", core.serialization.string().optional()),
    newsDomainType: core.serialization.property("news_domain_type", core.serialization.string().optional()),
});

export declare namespace AdditionalDomainInfoEntity {
    interface Raw {
        is_news_domain?: boolean | null;
        news_type?: string | null;
        news_domain_type?: string | null;
    }
}
