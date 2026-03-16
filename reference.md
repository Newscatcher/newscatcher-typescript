# Reference
## Search
<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.GetSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for articles based on specified criteria such as keywords, language, country, source, and more.
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
    predefined_sources: "top 50 US, top 20 GB",
    source_name: "sport,tech",
    sources: "nytimes.com,finance.yahoo.com",
    not_sources: "cnn.com,wsj.com",
    lang: "en,es",
    not_lang: "fr,de",
    countries: "US,CA",
    not_countries: "UK,FR",
    not_author_name: "John Doe, Jane Doe",
    from_: "2024-07-01T00:00:00Z",
    to_: "2024-01-01T00:00:00Z",
    published_date_precision: "full",
    by_parse_date: true,
    ranked_only: true,
    from_rank: 100,
    to_rank: 100,
    is_headline: true,
    is_opinion: true,
    is_paid_content: false,
    parent_url: "wsj.com/politics,wsj.com/tech",
    all_links: "https://aiindex.stanford.edu/report,https://www.stateof.ai",
    all_domain_links: "who.int,nih.gov",
    all_links_text: "Nvidia,Tesla",
    additional_domain_info: true,
    is_news_domain: true,
    news_type: "General News Outlets,Tech News and Updates",
    word_count_min: 300,
    word_count_max: 1000,
    page: 2,
    page_size: 50,
    clustering_enabled: true,
    clustering_threshold: 0.6,
    include_nlp_data: true,
    has_nlp: true,
    theme: "Finance,Tech",
    not_theme: "Crime,Sports",
    ORG_entity_name: "\"Apple Inc\" OR Microsoft",
    PER_entity_name: "\"Elon Musk\" OR \"Jeff Bezos\"",
    LOC_entity_name: "\"San Francisco\" OR \"New York City\"",
    MISC_entity_name: "AWS OR \"Microsoft Azure\"",
    title_sentiment_min: -0.5,
    title_sentiment_max: 0.5,
    content_sentiment_min: -0.5,
    content_sentiment_max: 0.5,
    iptc_tags: "20000199,20000209",
    not_iptc_tags: "20000205,20000209",
    iab_tags: "Business,Events",
    not_iab_tags: "Agriculture,Metals",
    custom_tags: "Tag1,Tag2",
    exclude_duplicates: true,
    robots_compliant: true
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

**request:** `NewscatcherApi.GetSearchRequest` 
    
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

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.PostSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for articles based on specified criteria such as keywords, language, country, source, and more.
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

**request:** `NewscatcherApi.PostSearchRequest` 
    
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
<details><summary><code>client.latestHeadlines.<a href="/src/api/resources/latestHeadlines/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.GetLatestHeadlinesResponse</code></summary>
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
await client.latestHeadlines.get({
    when: "7d",
    by_parse_date: true,
    lang: "en,es",
    not_lang: "fr,de",
    countries: "US,CA",
    not_countries: "UK,FR",
    predefined_sources: "top 50 US, top 20 GB",
    sources: "nytimes.com,finance.yahoo.com",
    not_sources: "cnn.com,wsj.com",
    not_author_name: "John Doe, Jane Doe",
    ranked_only: true,
    is_headline: true,
    is_opinion: true,
    is_paid_content: false,
    parent_url: "wsj.com/politics,wsj.com/tech",
    all_links: "https://aiindex.stanford.edu/report,https://www.stateof.ai",
    all_domain_links: "who.int,nih.gov",
    all_links_text: "Nvidia,Tesla",
    word_count_min: 300,
    word_count_max: 1000,
    page: 2,
    page_size: 50,
    clustering_enabled: true,
    clustering_threshold: 0.6,
    include_translation_fields: true,
    include_nlp_data: true,
    has_nlp: true,
    theme: "Finance,Tech",
    not_theme: "Crime,Sports",
    ORG_entity_name: "\"Apple Inc\" OR Microsoft",
    PER_entity_name: "\"Elon Musk\" OR \"Jeff Bezos\"",
    LOC_entity_name: "\"San Francisco\" OR \"New York City\"",
    MISC_entity_name: "AWS OR \"Microsoft Azure\"",
    title_sentiment_min: -0.5,
    title_sentiment_max: 0.5,
    content_sentiment_min: -0.5,
    content_sentiment_max: 0.5,
    iptc_tags: "20000199,20000209",
    not_iptc_tags: "20000205,20000209",
    iab_tags: "Business,Events",
    not_iab_tags: "Agriculture,Metals",
    custom_tags: "Tag1,Tag2",
    robots_compliant: true
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

**request:** `NewscatcherApi.GetLatestHeadlinesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LatestHeadlinesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.latestHeadlines.<a href="/src/api/resources/latestHeadlines/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.PostLatestHeadlinesResponse</code></summary>
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
await client.latestHeadlines.post({
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

**request:** `NewscatcherApi.PostLatestHeadlinesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LatestHeadlinesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## BreakingNews
<details><summary><code>client.breakingNews.<a href="/src/api/resources/breakingNews/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.BreakingNewsResponseDto</code></summary>
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
await client.breakingNews.get({
    ranked_only: true,
    from_rank: 100,
    to_rank: 100,
    page: 2,
    page_size: 50,
    top_n_articles: 5,
    include_translation_fields: true,
    include_nlp_data: true,
    has_nlp: true,
    theme: "Finance,Tech",
    not_theme: "Crime,Sports",
    ORG_entity_name: "\"Apple Inc\" OR Microsoft",
    PER_entity_name: "\"Elon Musk\" OR \"Jeff Bezos\"",
    LOC_entity_name: "\"San Francisco\" OR \"New York City\"",
    MISC_entity_name: "AWS OR \"Microsoft Azure\"",
    title_sentiment_min: -0.5,
    title_sentiment_max: 0.5,
    content_sentiment_min: -0.5,
    content_sentiment_max: 0.5
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

**request:** `NewscatcherApi.GetBreakingNewsRequest` 
    
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

<details><summary><code>client.breakingNews.<a href="/src/api/resources/breakingNews/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.BreakingNewsResponseDto</code></summary>
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
await client.breakingNews.post({
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

**request:** `NewscatcherApi.PostBreakingNewsRequest` 
    
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
<details><summary><code>client.authors.<a href="/src/api/resources/authors/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.GetAuthorsResponse</code></summary>
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
    not_author_name: "John Doe, Jane Doe",
    predefined_sources: "top 50 US, top 20 GB",
    sources: "nytimes.com,finance.yahoo.com",
    not_sources: "cnn.com,wsj.com",
    lang: "en,es",
    not_lang: "fr,de",
    countries: "US,CA",
    not_countries: "UK,FR",
    from_: "2024-07-01T00:00:00Z",
    to_: "2024-01-01T00:00:00Z",
    published_date_precision: "full",
    by_parse_date: true,
    ranked_only: true,
    from_rank: 100,
    to_rank: 100,
    is_headline: true,
    is_opinion: true,
    is_paid_content: false,
    parent_url: "wsj.com/politics,wsj.com/tech",
    all_links: "https://aiindex.stanford.edu/report,https://www.stateof.ai",
    all_domain_links: "who.int,nih.gov",
    all_links_text: "Nvidia,Tesla",
    word_count_min: 300,
    word_count_max: 1000,
    page: 2,
    page_size: 50,
    include_translation_fields: true,
    include_nlp_data: true,
    has_nlp: true,
    theme: "Finance,Tech",
    not_theme: "Crime,Sports",
    ner_name: "Tesla,Amazon",
    title_sentiment_min: -0.5,
    title_sentiment_max: 0.5,
    content_sentiment_min: -0.5,
    content_sentiment_max: 0.5,
    iptc_tags: "20000199,20000209",
    not_iptc_tags: "20000205,20000209",
    iab_tags: "Business,Events",
    not_iab_tags: "Agriculture,Metals",
    custom_tags: "Tag1,Tag2",
    robots_compliant: true
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

**request:** `NewscatcherApi.GetAuthorsRequest` 
    
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

<details><summary><code>client.authors.<a href="/src/api/resources/authors/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.PostAuthorsResponse</code></summary>
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

**request:** `NewscatcherApi.PostAuthorsRequest` 
    
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

## SearchByLink
<details><summary><code>client.searchByLink.<a href="/src/api/resources/searchByLink/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.SearchResponseDto</code></summary>
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
await client.searchByLink.get({
    ids: "5f8d0d55b6e45e00179c6e7e",
    links: "https://nytimes.com/article1,https://bbc.com/article2",
    from_: "2024-07-01T00:00:00Z",
    to_: "2024-01-01T00:00:00Z",
    page: 2,
    page_size: 50,
    robots_compliant: true
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

**request:** `NewscatcherApi.GetSearchByLinkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SearchByLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.searchByLink.<a href="/src/api/resources/searchByLink/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.SearchResponseDto</code></summary>
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
await client.searchByLink.post({
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

**request:** `NewscatcherApi.PostSearchByLinkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SearchByLinkClient.RequestOptions` 
    
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
    lang: "en,es",
    countries: "US,CA",
    predefined_sources: "top 50 US, top 20 GB",
    source_name: "sport,tech",
    source_url: "bbc.com",
    include_additional_info: true,
    is_news_domain: true,
    news_type: "General News Outlets,Tech News and Updates",
    from_rank: 100,
    to_rank: 100
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

**request:** `NewscatcherApi.GetSourcesRequest` 
    
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

**request:** `NewscatcherApi.PostSourcesRequest` 
    
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

## AggregationCount
<details><summary><code>client.aggregationCount.<a href="/src/api/resources/aggregationCount/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.GetAggregationCountResponse</code></summary>
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
await client.aggregationCount.get({
    q: "\"supply chain\" AND Amazon NOT China",
    search_in: "title_content, title_content_translated",
    predefined_sources: "top 50 US, top 20 GB",
    sources: "nytimes.com,finance.yahoo.com",
    not_sources: "cnn.com,wsj.com",
    lang: "en,es",
    not_lang: "fr,de",
    countries: "US,CA",
    not_countries: "UK,FR",
    not_author_name: "John Doe, Jane Doe",
    from_: "2024-07-01T00:00:00Z",
    to_: "2024-01-01T00:00:00Z",
    published_date_precision: "full",
    by_parse_date: true,
    ranked_only: true,
    from_rank: 100,
    to_rank: 100,
    is_headline: true,
    is_opinion: true,
    is_paid_content: false,
    parent_url: "wsj.com/politics,wsj.com/tech",
    all_links: "https://aiindex.stanford.edu/report,https://www.stateof.ai",
    all_domain_links: "who.int,nih.gov",
    all_links_text: "Nvidia,Tesla",
    word_count_min: 300,
    word_count_max: 1000,
    page: 2,
    page_size: 50,
    include_nlp_data: true,
    has_nlp: true,
    theme: "Finance,Tech",
    not_theme: "Crime,Sports",
    ORG_entity_name: "\"Apple Inc\" OR Microsoft",
    PER_entity_name: "\"Elon Musk\" OR \"Jeff Bezos\"",
    LOC_entity_name: "\"San Francisco\" OR \"New York City\"",
    MISC_entity_name: "AWS OR \"Microsoft Azure\"",
    title_sentiment_min: -0.5,
    title_sentiment_max: 0.5,
    content_sentiment_min: -0.5,
    content_sentiment_max: 0.5,
    iptc_tags: "20000199,20000209",
    not_iptc_tags: "20000205,20000209",
    robots_compliant: true
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

**request:** `NewscatcherApi.GetAggregationCountRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AggregationCountClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aggregationCount.<a href="/src/api/resources/aggregationCount/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.PostAggregationCountResponse</code></summary>
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
await client.aggregationCount.post({
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

**request:** `NewscatcherApi.PostAggregationCountRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AggregationCountClient.RequestOptions` 
    
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

