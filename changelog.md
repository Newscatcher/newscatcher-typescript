## 2.0.1 - 2026-03-19
* fix: improve baseUrl fallback handling in HTTP client
* Refine the baseUrl resolution logic to use nullish coalescing for cleaner
* fallback behavior when baseUrl is not explicitly provided. This ensures
* the environment value is used as a fallback only when baseUrl is null
* or undefined, providing more predictable URL resolution.
* Key changes:
* Simplify baseUrl fallback logic using nullish coalescing operator
* Add explicit type annotation to mockServerPool export
* Improve HTTP client initialization reliability
* 🌿 Generated with Fern

