## [3.1.0] - 2026-10-22
### Breaking Changes
- **`NewsDomainType`** — changed from a const-enum object to a plain `string | ("Original Content" | "Aggregator" | ...)[]` type alias; replace enum-member references (e.g. `NewsDomainType.OriginalContent`) with their string literals (e.g. `"Original Content"`).

### Added
- **`NewscatcherApiError.requestId`** — new getter that extracts the request ID from the `X-Request-Id` response header for easier debugging.
- **`NewscatcherApiTimeoutError`** — now extends `NewscatcherApiError` so timeout errors are caught by the same `instanceof NewscatcherApiError` guard as other API errors.
- **`BaseRequestOptions.additionalBodyParameters`** — new optional `Record<string, unknown>` field that merges extra key/value pairs into the JSON body of any POST request.
- **`BaseRequestOptions.stream` / `BaseClientOptions.stream`** — new optional SSE reconnection configuration (`reconnectionEnabled`, `maxReconnectionAttempts`) on both per-request and client-level options.
- **`getUserAgent()`** — new exported function that builds a structured User-Agent string from the detected runtime environment; `Runtime` interface gains optional `os` and `arch` fields.

### Changed
- **Error classes** (`BadRequestError`, `ForbiddenError`, `UnauthorizedError`, and others) — now declare a typed `public readonly body` field, making the error payload directly accessible without a cast.
- **`search.get()` and `sources.get()`** — `news_domain_type` now correctly serializes array values element-by-element, matching the behavior of the POST variants.
- **Query-string serialization** — `null` values are now skipped alongside `undefined`, preventing literal `"null"` strings from appearing in request URLs.
- **HTTP client timeout** — the request timeout now remains active until the response body is fully read for non-streaming responses, preventing silent truncation on slow connections.

## 3.0.0 - 2026-05-19
### Breaking Changes
* **`NlpDataEntity.summary_translated`** — field renamed to `translation_summary`; update all property accesses to use the new name.
### Added
* **`BaseClientOptions.auth`** — new optional `auth` field accepting `false` (to disable auth), a function returning auth headers, an `AuthProvider` instance, or `HeaderAuthProvider.AuthOptions`, enabling flexible per-client auth overrides.
* **Duration shorthand** — `From` and `To` types now accept duration shorthand strings such as `7d`, `30d`, `24h`, and `48h` in addition to existing date formats.

## 2.1.1 - 2026-04-30
* fix: improve query parameter serialization for array date fields and POST endpoints
* Refactor query string construction across all resource clients to use
* the fluent `core.url.queryBuilder()` API consistently for both GET and
* POST requests. Additionally, fix `from_` and `to_` date parameter
* serialization to correctly handle array values by mapping each element
* individually, rather than treating the entire array as a single value.
* Key changes:
* `from_` and `to_` parameters now correctly serialize array values by
* mapping each element through `toJson()` or passing strings as-is
* All GET endpoints migrate from `queryParameters: { ..._queryParams, ...requestOptions?.queryParams }` to the `queryString` builder, ensuring consistent comma-array and special-character handling
* All POST endpoints migrate from `queryParameters: requestOptions?.queryParams` to `core.url.queryBuilder().mergeAdditional(...).build()`
* `Fetcher.Args.queryParameters` is marked `@deprecated` in favor of `queryString`; the field is retained for backwards compatibility
* Internal `redactQueryParameters` refactored for clarity with no behavioral change
* 🌿 Generated with Fern

## 2.1.0 - 2026-04-23
### Added
* **`NlpDataEntity.qwen_embedding`** — new optional field returning a 1024-dimensional Qwen3-Embedding-0.6B vector for articles indexed from January 1, 2026 onward (requires `v3_nlp_embeddings` plan).
* **`core.url.queryBuilder()`** — new internal fluent builder for constructing URL query strings; all client GET methods now use it for more reliable query parameter serialization including comma-array support.
### Changed
* **`ClusteringVariable`** — documented as deprecated from January 1, 2026 onward; the parameter is now ignored for articles published on or after that date, which always use a combined `title + content` Qwen3 embedding.
* **`ClusteringThreshold`** — default value updated from `0.6` to `0.7` in documentation and example code across all relevant request types.
* **`HasNlp` / `IncludeNlpData`** — documentation now notes that NLP data is only available for articles indexed from July 2023 onward.

