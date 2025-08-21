# Reference

## Search

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.SearchGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for articles based on specified criteria such as keyword, language, country, source, and more.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.get({
    q: "technology AND (Apple OR Microsoft) NOT Google",
    searchIn: "title_content, title_content_translated",
    includeTranslationFields: true,
    predefinedSources: "top 100 US, top 5 GB",
    from: "2024-07-01T00:00:00Z",
    to: "2024-07-01T00:00:00Z",
    includeNlpData: true,
    hasNlp: true,
    theme: "Business,Finance",
    notTheme: "Crime",
    iptcTags: "20000199,20000209",
    notIptcTags: "20000205,20000209",
    iabTags: "Business,Events",
    notIabTags: "Agriculture,Metals",
    customTags: "Tag1,Tag2,Tag3",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.SearchGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.SearchPostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for articles based on specified criteria such as keyword, language, country, source, and more.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.post({
    q: "renewable energy",
    predefinedSources: ["top 50 US"],
    lang: ["en"],
    from: "2024-01-01T00:00:00Z",
    to: "2024-06-30T00:00:00Z",
    additionalDomainInfo: true,
    isNewsDomain: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.SearchPostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## LatestHeadlines

<details><summary><code>client.latestheadlines.<a href="/src/api/resources/latestheadlines/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.LatestHeadlinesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the latest headlines for the specified time period. You can filter results by language, country, source, and more.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.latestheadlines.get({
    predefinedSources: "top 100 US, top 5 GB",
    includeTranslationFields: true,
    includeNlpData: true,
    hasNlp: true,
    theme: "Business,Finance",
    notTheme: "Crime",
    iptcTags: "20000199,20000209",
    notIptcTags: "20000205,20000209",
    iabTags: "Business,Events",
    notIabTags: "Agriculture,Metals",
    customTags: "Tag1,Tag2,Tag3",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.LatestHeadlinesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Latestheadlines.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.latestheadlines.<a href="/src/api/resources/latestheadlines/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.LatestHeadlinesPostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the latest headlines for the specified time period. You can filter results by language, country, source, and more.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.latestheadlines.post({
    lang: "en",
    predefinedSources: ["top 50 US", "top 20 GB"],
    isOpinion: false,
    pageSize: 10,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.LatestHeadlinesPostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Latestheadlines.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Breaking News

<details><summary><code>client.breakingNews.<a href="/src/api/resources/breakingNews/client/Client.ts">breakingNewsGet</a>({ ...params }) -> NewscatcherApi.BreakingNewsResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves breaking news articles and sorts them based on specified criteria.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.breakingNews.breakingNewsGet({
    topNArticles: 5,
    includeTranslationFields: true,
    includeNlpData: true,
    hasNlp: true,
    theme: "Business,Finance",
    notTheme: "Crime",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.BreakingNewsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BreakingNews.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.breakingNews.<a href="/src/api/resources/breakingNews/client/Client.ts">breakingNewsPost</a>({ ...params }) -> NewscatcherApi.BreakingNewsResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves breaking news articles and sorts them based on specified criteria.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.breakingNews.breakingNewsPost({
    sortBy: "relevancy",
    page: 1,
    pageSize: 100,
    includeNlpData: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.BreakingNewsPostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BreakingNews.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Authors

<details><summary><code>client.authors.<a href="/src/api/resources/authors/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.AuthorsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for articles written by a specified author. You can filter results by language, country, source, and more.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authors.get({
    authorName: "Jane Smith",
    predefinedSources: "top 100 US, top 5 GB",
    from: "2024-07-01T00:00:00Z",
    to: "2024-07-01T00:00:00Z",
    includeTranslationFields: true,
    includeNlpData: true,
    hasNlp: true,
    theme: "Business,Finance",
    notTheme: "Crime",
    nerName: "Tesla",
    iptcTags: "20000199,20000209",
    notIptcTags: "20000205,20000209",
    iabTags: "Business,Events",
    notIabTags: "Agriculture,Metals",
    customTags: "Tag1,Tag2,Tag3",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.AuthorsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authors.<a href="/src/api/resources/authors/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.AuthorsPostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for articles by author. You can filter results by language, country, source, and more.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authors.post({
    authorName: "Joanna Stern",
    sources: ["wsj.com", "nytimes.com"],
    lang: "en",
    from: "2024-01-01T00:00:00Z",
    to: "2024-06-30T00:00:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.AuthorsPostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SearchLink

<details><summary><code>client.searchLink.<a href="/src/api/resources/searchLink/client/Client.ts">searchUrlGet</a>({ ...params }) -> NewscatcherApi.SearchResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for articles based on specified links or IDs. You can filter results by date range.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.searchLink.searchUrlGet({
    from: "2024-07-01T00:00:00Z",
    to: "2024-01-01T00:00:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.SearchUrlGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SearchLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.searchLink.<a href="/src/api/resources/searchLink/client/Client.ts">searchUrlPost</a>({ ...params }) -> NewscatcherApi.SearchResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for articles using their ID(s) or link(s).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.searchLink.searchUrlPost({
    ids: ["8ea8a784568ffaa05cb6d1ab2d2e84dd", "0146a551ef05ab1c494a55e806e3ce64"],
    links: [
        "https://www.nytimes.com/2024/08/30/technology/ai-chatbot-chatgpt-manipulation.html",
        "https://www.bbc.com/news/articles/c39k379grzlo",
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.SearchUrlPostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SearchLink.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SearchSimilar

<details><summary><code>client.searchsimilar.<a href="/src/api/resources/searchsimilar/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.SearchSimilarGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for articles similar to a specified query.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.searchsimilar.get({
    q: "technology AND (Apple OR Microsoft) NOT Google",
    searchIn: "title_content, title_content_translated",
    includeTranslationFields: true,
    similarDocumentsFields: "title,summary",
    predefinedSources: "top 100 US, top 5 GB",
    from: "2024-07-01T00:00:00Z",
    to: "2024-07-01T00:00:00Z",
    includeNlpData: true,
    hasNlp: true,
    theme: "Business,Finance",
    notTheme: "Crime",
    nerName: "Tesla",
    iptcTags: "20000199,20000209",
    notIptcTags: "20000205,20000209",
    customTags: "Tag1,Tag2,Tag3",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.SearchSimilarGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Searchsimilar.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.searchsimilar.<a href="/src/api/resources/searchsimilar/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.SearchSimilarPostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for articles similar to the specified query. You can filter results by language, country, source, and more.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.searchsimilar.post({
    q: "artificial intelligence",
    includeSimilarDocuments: true,
    similarDocumentsNumber: 5,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.SearchSimilarPostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Searchsimilar.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sources

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.SourcesResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of sources based on specified criteria such as language, country, rank, and more.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.get({
    predefinedSources: "top 100 US, top 5 GB",
    sourceUrl: "bbc.com",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.SourcesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.SourcesResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the list of sources available in the database. You can filter the sources by language, country, and more.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.post({
    predefinedSources: ["top 50 US"],
    includeAdditionalInfo: true,
    isNewsDomain: true,
    newsDomainType: "Original Content",
    newsType: "General News Outlets",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.SourcesPostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Aggregation

<details><summary><code>client.aggregation.<a href="/src/api/resources/aggregation/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.AggregationGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the count of articles aggregated by day or hour based on various search criteria, such as keyword, language, country, and source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aggregation.get({
    q: "technology AND (Apple OR Microsoft) NOT Google",
    searchIn: "title_content, title_content_translated",
    predefinedSources: "top 100 US, top 5 GB",
    from: "2024-07-01T00:00:00Z",
    to: "2024-07-01T00:00:00Z",
    includeNlpData: true,
    hasNlp: true,
    theme: "Business,Finance",
    notTheme: "Crime",
    iptcTags: "20000199,20000209",
    notIptcTags: "20000205,20000209",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.AggregationGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aggregation.<a href="/src/api/resources/aggregation/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.AggregationPostResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the count of articles aggregated by day or hour based on various search criteria, such as keyword, language, country, and source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aggregation.post({
    q: "renewable energy",
    aggregationBy: "day",
    predefinedSources: "top 50 US",
    from: "2024-01-01T00:00:00Z",
    to: "2024-06-30T00:00:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `NewscatcherApi.AggregationPostRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Aggregation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Subscription

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">get</a>() -> NewscatcherApi.SubscriptionResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves information about your subscription plan.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Subscription.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">post</a>() -> NewscatcherApi.SubscriptionResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves information about your subscription plan.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.post();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Subscription.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
