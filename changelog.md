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

