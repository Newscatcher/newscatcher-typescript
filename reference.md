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
    q: "\"supply chain\" AND Amazon NOT China",
    search_in: "title_content, title_content_translated",
    include_translation_fields: true,
    predefined_sources: "top 100 US, top 5 GB",
    source_name: "sport",
    sources: "nytimes.com",
    not_sources: "cnn.com",
    lang: "en",
    not_lang: "fr",
    countries: "US",
    not_countries: "UK",
    not_author_name: "John Doe",
    from_: "2024-07-01T00:00:00Z",
    to_: "2024-07-01T00:00:00Z",
    parent_url: "https://www.washingtonpost.com/politics",
    all_links: "https://aiindex.stanford.edu/report",
    all_domain_links: "nvidia.com",
    news_type: "General News Outlets",
    include_nlp_data: true,
    has_nlp: true,
    theme: "Business,Finance",
    not_theme: "Crime",
    ORG_entity_name: "Apple",
    PER_entity_name: "Elon Musk",
    LOC_entity_name: "California",
    MISC_entity_name: "Bitcoin",
    iptc_tags: "20000199,20000209",
    not_iptc_tags: "20000205,20000209",
    iab_tags: "Business,Events",
    not_iab_tags: "Agriculture,Metals",
    custom_tags: "Tag1,Tag2,Tag3"
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

**requestOptions:** `SearchClient.RequestOptions` 
    
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
    q: "\"supply chain\" AND Amazon NOT China",
    page_size: 1
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

**requestOptions:** `SearchClient.RequestOptions` 
    
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
    when: "7d",
    lang: "en",
    not_lang: "fr",
    countries: "US",
    not_countries: "UK",
    predefined_sources: "top 100 US, top 5 GB",
    sources: "nytimes.com",
    not_sources: "cnn.com",
    not_author_name: "John Doe",
    parent_url: "https://www.washingtonpost.com/politics",
    all_links: "https://aiindex.stanford.edu/report",
    all_domain_links: "nvidia.com",
    include_translation_fields: true,
    include_nlp_data: true,
    has_nlp: true,
    theme: "Business,Finance",
    not_theme: "Crime",
    ORG_entity_name: "Apple",
    PER_entity_name: "Elon Musk",
    LOC_entity_name: "California",
    MISC_entity_name: "Bitcoin",
    iptc_tags: "20000199,20000209",
    not_iptc_tags: "20000205,20000209",
    iab_tags: "Business,Events",
    not_iab_tags: "Agriculture,Metals",
    custom_tags: "Tag1,Tag2,Tag3"
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

**requestOptions:** `LatestheadlinesClient.RequestOptions` 
    
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
    when: "7d",
    page_size: 1
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

**requestOptions:** `LatestheadlinesClient.RequestOptions` 
    
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
    top_n_articles: 5,
    include_translation_fields: true,
    include_nlp_data: true,
    has_nlp: true,
    theme: "Business,Finance",
    not_theme: "Crime",
    ORG_entity_name: "Apple",
    PER_entity_name: "Elon Musk",
    LOC_entity_name: "California",
    MISC_entity_name: "Bitcoin"
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

**requestOptions:** `BreakingNewsClient.RequestOptions` 
    
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
    sort_by: "relevancy",
    ranked_only: true,
    top_n_articles: 1
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

**requestOptions:** `BreakingNewsClient.RequestOptions` 
    
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
    author_name: "Jane Smith",
    not_author_name: "John Doe",
    predefined_sources: "top 100 US, top 5 GB",
    sources: "nytimes.com",
    not_sources: "cnn.com",
    lang: "en",
    not_lang: "fr",
    countries: "US",
    not_countries: "UK",
    from_: "2024-07-01T00:00:00Z",
    to_: "2024-07-01T00:00:00Z",
    parent_url: "https://www.washingtonpost.com/politics",
    all_links: "https://aiindex.stanford.edu/report",
    all_domain_links: "nvidia.com",
    include_translation_fields: true,
    include_nlp_data: true,
    has_nlp: true,
    theme: "Business,Finance",
    not_theme: "Crime",
    ner_name: "Tesla",
    iptc_tags: "20000199,20000209",
    not_iptc_tags: "20000205,20000209",
    iab_tags: "Business,Events",
    not_iab_tags: "Agriculture,Metals",
    custom_tags: "Tag1,Tag2,Tag3"
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

**requestOptions:** `AuthorsClient.RequestOptions` 
    
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
    author_name: "David Muir"
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

**requestOptions:** `AuthorsClient.RequestOptions` 
    
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
    ids: "5f8d0d55b6e45e00179c6e7e",
    links: "https://nytimes.com/article1",
    from_: "2024-07-01T00:00:00Z",
    to_: "2024-01-01T00:00:00Z"
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

**requestOptions:** `SearchLinkClient.RequestOptions` 
    
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
    links: "https://www.reuters.com/business/energy/oil-prices-up-after-israeli-attacks-oversupply-caps-gains-2025-09-10/"
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

**requestOptions:** `SearchLinkClient.RequestOptions` 
    
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
    q: "\"supply chain\" AND Amazon NOT China",
    search_in: "title_content, title_content_translated",
    include_translation_fields: true,
    similar_documents_fields: "title,summary",
    predefined_sources: "top 100 US, top 5 GB",
    sources: "nytimes.com",
    not_sources: "cnn.com",
    lang: "en",
    not_lang: "fr",
    countries: "US",
    not_countries: "UK",
    from_: "2024-07-01T00:00:00Z",
    to_: "2024-07-01T00:00:00Z",
    parent_url: "https://www.washingtonpost.com/politics",
    all_links: "https://aiindex.stanford.edu/report",
    all_domain_links: "nvidia.com",
    include_nlp_data: true,
    has_nlp: true,
    theme: "Business,Finance",
    not_theme: "Crime",
    ner_name: "Tesla",
    iptc_tags: "20000199,20000209",
    not_iptc_tags: "20000205,20000209",
    custom_tags: "Tag1,Tag2,Tag3"
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

**requestOptions:** `SearchsimilarClient.RequestOptions` 
    
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
    q: "\"supply chain\" AND Amazon NOT China",
    include_similar_documents: true,
    similar_documents_number: 5,
    page_size: 10
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

**requestOptions:** `SearchsimilarClient.RequestOptions` 
    
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
    lang: "en",
    countries: "US",
    predefined_sources: "top 100 US, top 5 GB",
    source_name: "sport",
    source_url: "bbc.com",
    news_type: "General News Outlets"
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

**requestOptions:** `SourcesClient.RequestOptions` 
    
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
    predefined_sources: "top 10 US"
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

**requestOptions:** `SourcesClient.RequestOptions` 
    
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
    q: "\"supply chain\" AND Amazon NOT China",
    search_in: "title_content, title_content_translated",
    predefined_sources: "top 100 US, top 5 GB",
    sources: "nytimes.com",
    not_sources: "cnn.com",
    lang: "en",
    not_lang: "fr",
    countries: "US",
    not_countries: "UK",
    not_author_name: "John Doe",
    from_: "2024-07-01T00:00:00Z",
    to_: "2024-07-01T00:00:00Z",
    parent_url: "https://www.washingtonpost.com/politics",
    all_links: "https://aiindex.stanford.edu/report",
    all_domain_links: "nvidia.com",
    include_nlp_data: true,
    has_nlp: true,
    theme: "Business,Finance",
    not_theme: "Crime",
    ORG_entity_name: "Apple",
    PER_entity_name: "Elon Musk",
    LOC_entity_name: "California",
    MISC_entity_name: "Bitcoin",
    iptc_tags: "20000199,20000209",
    not_iptc_tags: "20000205,20000209"
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

**requestOptions:** `AggregationClient.RequestOptions` 
    
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
    q: "\"supply chain\" AND Amazon NOT China",
    aggregation_by: "day"
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

**requestOptions:** `AggregationClient.RequestOptions` 
    
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

**requestOptions:** `SubscriptionClient.RequestOptions` 
    
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

**requestOptions:** `SubscriptionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
