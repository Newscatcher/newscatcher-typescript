## 1.3.0 - 2026-03-09
* feat: add modular exports and improve API functionality
* This change introduces significant new capabilities to the newscatcher-sdk by adding modular exports for individual API resources and enhancing the core functionality with better runtime detection and request handling.
* The main enhancement enables consumers to import specific API functionality (e.g., just search or authors) rather than the entire SDK, improving tree-shaking and bundle size optimization. Additionally, several core improvements enhance reliability across different runtime environments.
* Key changes:
* Add modular exports for 9 API resources (search, latestheadlines, breakingNews, authors, searchLink, searchsimilar, sources, aggregation, subscription)
* Enhance request caching with runtime-aware cache control support
* Improve Node.js detection to avoid bundler warnings in edge environments
* Add streaming response support with cache disabling for real-time data
* Extend mock testing framework with SSE body support and configurable field filtering
* Add crypto dependency for enhanced security features
* 🌿 Generated with Fern

