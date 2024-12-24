/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as NewscatcherApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Searchsimilar {
    interface Options {
        environment?: core.Supplier<environments.NewscatcherApiEnvironment | string>;
        /** Override the x-api-token header */
        apiToken: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the x-api-token header */
        apiToken?: string;
    }
}

export class Searchsimilar {
    constructor(protected readonly _options: Searchsimilar.Options) {}

    /**
     * This endpoint returns a list of articles that are similar to the query provided. You also have the option to get similar articles for the results of a search.
     *
     * @param {NewscatcherApi.SearchSimilarGetRequest} request
     * @param {Searchsimilar.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link NewscatcherApi.UnprocessableEntityError}
     *
     * @example
     *     await client.searchsimilar.get({
     *         q: "q",
     *         predefinedSources: "predefined_sources",
     *         sources: "sources",
     *         notSources: "not_sources",
     *         lang: "lang",
     *         notLang: "not_lang",
     *         countries: "countries",
     *         notCountries: "not_countries",
     *         parentUrl: "parent_url",
     *         allLinks: "all_links",
     *         allDomainLinks: "all_domain_links",
     *         iptcTags: "iptc_tags",
     *         notIptcTags: "not_iptc_tags"
     *     })
     */
    public async get(
        request: NewscatcherApi.SearchSimilarGetRequest,
        requestOptions?: Searchsimilar.RequestOptions
    ): Promise<NewscatcherApi.SearchSimilarGetResponse> {
        const {
            q,
            searchIn,
            includeSimilarDocuments,
            similarDocumentsNumber,
            similarDocumentsFields,
            predefinedSources,
            sources,
            notSources,
            lang,
            notLang,
            countries,
            notCountries,
            from: from_,
            to,
            byParseDate,
            publishedDatePrecision,
            sortBy,
            rankedOnly,
            fromRank,
            toRank,
            isHeadline,
            isOpinion,
            isPaidContent,
            parentUrl,
            allLinks,
            allDomainLinks,
            wordCountMin,
            wordCountMax,
            page,
            pageSize,
            includeNlpData,
            hasNlp,
            theme,
            notTheme,
            titleSentimentMin,
            titleSentimentMax,
            contentSentimentMin,
            contentSentimentMax,
            iptcTags,
            notIptcTags,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["q"] = q;
        if (searchIn != null) {
            _queryParams["search_in"] = searchIn;
        }

        if (includeSimilarDocuments != null) {
            _queryParams["include_similar_documents"] = includeSimilarDocuments.toString();
        }

        if (similarDocumentsNumber != null) {
            _queryParams["similar_documents_number"] = similarDocumentsNumber.toString();
        }

        if (similarDocumentsFields != null) {
            _queryParams["similar_documents_fields"] = similarDocumentsFields;
        }

        _queryParams["predefined_sources"] = predefinedSources;
        _queryParams["sources"] = sources;
        _queryParams["not_sources"] = notSources;
        _queryParams["lang"] = lang;
        _queryParams["not_lang"] = notLang;
        _queryParams["countries"] = countries;
        _queryParams["not_countries"] = notCountries;
        if (from_ != null) {
            _queryParams["from_"] = from_;
        }

        if (to != null) {
            _queryParams["to_"] = to;
        }

        if (byParseDate != null) {
            _queryParams["by_parse_date"] = byParseDate.toString();
        }

        if (publishedDatePrecision != null) {
            _queryParams["published_date_precision"] = publishedDatePrecision;
        }

        if (sortBy != null) {
            _queryParams["sort_by"] = sortBy;
        }

        if (rankedOnly != null) {
            _queryParams["ranked_only"] = rankedOnly;
        }

        if (fromRank != null) {
            _queryParams["from_rank"] = fromRank.toString();
        }

        if (toRank != null) {
            _queryParams["to_rank"] = toRank.toString();
        }

        if (isHeadline != null) {
            _queryParams["is_headline"] = isHeadline.toString();
        }

        if (isOpinion != null) {
            _queryParams["is_opinion"] = isOpinion.toString();
        }

        if (isPaidContent != null) {
            _queryParams["is_paid_content"] = isPaidContent.toString();
        }

        _queryParams["parent_url"] = parentUrl;
        _queryParams["all_links"] = allLinks;
        _queryParams["all_domain_links"] = allDomainLinks;
        if (wordCountMin != null) {
            _queryParams["word_count_min"] = wordCountMin.toString();
        }

        if (wordCountMax != null) {
            _queryParams["word_count_max"] = wordCountMax.toString();
        }

        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (includeNlpData != null) {
            _queryParams["include_nlp_data"] = includeNlpData.toString();
        }

        if (hasNlp != null) {
            _queryParams["has_nlp"] = hasNlp.toString();
        }

        if (theme != null) {
            _queryParams["theme"] = theme;
        }

        if (notTheme != null) {
            _queryParams["not_theme"] = notTheme;
        }

        if (titleSentimentMin != null) {
            _queryParams["title_sentiment_min"] = titleSentimentMin.toString();
        }

        if (titleSentimentMax != null) {
            _queryParams["title_sentiment_max"] = titleSentimentMax.toString();
        }

        if (contentSentimentMin != null) {
            _queryParams["content_sentiment_min"] = contentSentimentMin.toString();
        }

        if (contentSentimentMax != null) {
            _queryParams["content_sentiment_max"] = contentSentimentMax.toString();
        }

        _queryParams["iptc_tags"] = iptcTags;
        _queryParams["not_iptc_tags"] = notIptcTags;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.NewscatcherApiEnvironment.Default,
                "api/search_similar"
            ),
            method: "GET",
            headers: {
                "x-api-token": await core.Supplier.get(this._options.apiToken),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "newscatcher-sdk",
                "X-Fern-SDK-Version": "1.0.1",
                "User-Agent": "newscatcher-sdk/1.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SearchSimilarGetResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new NewscatcherApi.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.NewscatcherApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.NewscatcherApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.NewscatcherApiTimeoutError();
            case "unknown":
                throw new errors.NewscatcherApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint returns a list of articles that are similar to the query provided. You also have the option to get similar articles for the results of a search.
     *
     * @param {NewscatcherApi.MoreLikeThisRequest} request
     * @param {Searchsimilar.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link NewscatcherApi.UnprocessableEntityError}
     *
     * @example
     *     await client.searchsimilar.post({
     *         q: "q"
     *     })
     */
    public async post(
        request: NewscatcherApi.MoreLikeThisRequest,
        requestOptions?: Searchsimilar.RequestOptions
    ): Promise<NewscatcherApi.SearchSimilarPostResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.NewscatcherApiEnvironment.Default,
                "api/search_similar"
            ),
            method: "POST",
            headers: {
                "x-api-token": await core.Supplier.get(this._options.apiToken),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "newscatcher-sdk",
                "X-Fern-SDK-Version": "1.0.1",
                "User-Agent": "newscatcher-sdk/1.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.MoreLikeThisRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SearchSimilarPostResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new NewscatcherApi.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.NewscatcherApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.NewscatcherApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.NewscatcherApiTimeoutError();
            case "unknown":
                throw new errors.NewscatcherApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
