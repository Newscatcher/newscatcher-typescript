## 2.1.0 - 2026-04-23
### Added
* **`NlpDataEntity.qwen_embedding`** — new optional field returning a 1024-dimensional Qwen3-Embedding-0.6B vector for articles indexed from January 1, 2026 onward (requires `v3_nlp_embeddings` plan).
* **`core.url.queryBuilder()`** — new internal fluent builder for constructing URL query strings; all client GET methods now use it for more reliable query parameter serialization including comma-array support.
### Changed
* **`ClusteringVariable`** — documented as deprecated from January 1, 2026 onward; the parameter is now ignored for articles published on or after that date, which always use a combined `title + content` Qwen3 embedding.
* **`ClusteringThreshold`** — default value updated from `0.6` to `0.7` in documentation and example code across all relevant request types.
* **`HasNlp` / `IncludeNlpData`** — documentation now notes that NLP data is only available for articles indexed from July 2023 onward.

