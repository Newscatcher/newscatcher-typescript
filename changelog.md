## 2.1.0 - 2026-04-13
* The SDK now exposes the underlying error cause on `NewscatcherApiError` and `NewscatcherApiTimeoutError` via a new optional `cause` property, making it easier to trace the root cause of network and timeout failures. The `BasicAuth` interface's `username` and `password` fields are now optional, and the Authorization header is omitted when both are empty.

