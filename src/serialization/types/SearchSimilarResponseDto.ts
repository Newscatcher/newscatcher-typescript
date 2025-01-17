/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as NewscatcherApi from "../../api/index";
import * as core from "../../core";
import { SimilarArticleEntity } from "./SimilarArticleEntity";
import { UserInputDto } from "./UserInputDto";
import { BaseSearchResponseDto } from "./BaseSearchResponseDto";

export const SearchSimilarResponseDto: core.serialization.ObjectSchema<
    serializers.SearchSimilarResponseDto.Raw,
    NewscatcherApi.SearchSimilarResponseDto
> = core.serialization
    .object({
        articles: core.serialization.list(SimilarArticleEntity).optional(),
        userInput: core.serialization.property("user_input", UserInputDto.optional()),
    })
    .extend(BaseSearchResponseDto);

export declare namespace SearchSimilarResponseDto {
    interface Raw extends BaseSearchResponseDto.Raw {
        articles?: SimilarArticleEntity.Raw[] | null;
        user_input?: UserInputDto.Raw | null;
    }
}
