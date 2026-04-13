## 2.1.0 - 2026-04-13
* The SDK now exposes a `cause` property on `NewscatcherApiError` and `NewscatcherApiTimeoutError`, making it easier to inspect the underlying error that triggered a failure. The `BasicAuth` interface fields (`username` and `password`) are now optional, providing more flexibility when constructing authentication credentials.

