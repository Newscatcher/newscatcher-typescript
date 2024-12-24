/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as NewscatcherApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Subscription {
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

export class Subscription {
    constructor(protected readonly _options: Subscription.Options) {}

    /**
     * This endpoint allows you to get info about your subscription plan.
     *
     * @param {Subscription.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link NewscatcherApi.UnprocessableEntityError}
     *
     * @example
     *     await client.subscription.get()
     */
    public async get(requestOptions?: Subscription.RequestOptions): Promise<NewscatcherApi.SubscriptionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.NewscatcherApiEnvironment.Default,
                "api/subscription"
            ),
            method: "GET",
            headers: {
                "x-api-token": await core.Supplier.get(this._options.apiToken),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "newscatcher-sdk",
                "X-Fern-SDK-Version": "1.0.0",
                "User-Agent": "newscatcher-sdk/1.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SubscriptionResponse.parseOrThrow(_response.body, {
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
     * This endpoint allows you to get info about your subscription plan.
     *
     * @param {Subscription.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link NewscatcherApi.UnprocessableEntityError}
     *
     * @example
     *     await client.subscription.post()
     */
    public async post(requestOptions?: Subscription.RequestOptions): Promise<NewscatcherApi.SubscriptionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.NewscatcherApiEnvironment.Default,
                "api/subscription"
            ),
            method: "POST",
            headers: {
                "x-api-token": await core.Supplier.get(this._options.apiToken),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "newscatcher-sdk",
                "X-Fern-SDK-Version": "1.0.0",
                "User-Agent": "newscatcher-sdk/1.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SubscriptionResponse.parseOrThrow(_response.body, {
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
