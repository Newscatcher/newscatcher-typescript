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

This endpoint allows you to search for articles. You can search for articles by keyword, language, country, source, and more.

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
    q: "q",
    predefinedSources: "predefined_sources",
    sources: "sources",
    notSources: "not_sources",
    lang: "lang",
    notLang: "not_lang",
    countries: "countries",
    notCountries: "not_countries",
    notAuthorName: "not_author_name",
    parentUrl: "parent_url",
    allLinks: "all_links",
    allDomainLinks: "all_domain_links",
    iptcTags: "iptc_tags",
    notIptcTags: "not_iptc_tags",
    sourceName: "source_name",
    iabTags: "iab_tags",
    notIabTags: "not_iab_tags",
    newsDomainType: "news_domain_type",
    newsType: "news_type",
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

This endpoint allows you to search for articles. You can search for articles by keyword, language, country, source, and more.

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
    q: "q",
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

**request:** `NewscatcherApi.SearchRequest`

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

## Latestheadlines

<details><summary><code>client.latestheadlines.<a href="/src/api/resources/latestheadlines/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.LatestHeadlinesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to get latest headlines. You need to specify since when you want to get the latest headlines. You can also filter by language, country, source, and more.

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
    lang: "lang",
    notLang: "not_lang",
    countries: "countries",
    notCountries: "not_countries",
    sources: "sources",
    predefinedSources: "predefined_sources",
    notSources: "not_sources",
    notAuthorName: "not_author_name",
    parentUrl: "parent_url",
    allLinks: "all_links",
    allDomainLinks: "all_domain_links",
    iptcTags: "iptc_tags",
    notIptcTags: "not_iptc_tags",
    iabTags: "iab_tags",
    notIabTags: "not_iab_tags",
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

This endpoint allows you to get latest headlines. You need to specify since when you want to get the latest headlines. You can also filter by language, country, source, and more.

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
await client.latestheadlines.post();
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

**request:** `NewscatcherApi.LatestHeadlinesRequest`

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

## Authors

<details><summary><code>client.authors.<a href="/src/api/resources/authors/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.AuthorsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to search for articles by author. You need to specify the author name. You can also filter by language, country, source, and more.

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
    authorName: "author_name",
    sources: "sources",
    predefinedSources: "predefined_sources",
    notSources: "not_sources",
    lang: "lang",
    notLang: "not_lang",
    countries: "countries",
    notCountries: "not_countries",
    parentUrl: "parent_url",
    allLinks: "all_links",
    allDomainLinks: "all_domain_links",
    iptcTags: "iptc_tags",
    notIptcTags: "not_iptc_tags",
    iabTags: "iab_tags",
    notIabTags: "not_iab_tags",
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

This endpoint allows you to search for articles by author. You need to specify the author name. You can also filter by language, country, source, and more.

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
    authorName: "author_name",
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

**request:** `NewscatcherApi.AuthorSearchRequest`

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

<details><summary><code>client.searchLink.<a href="/src/api/resources/searchLink/client/Client.ts">searchUrlGet</a>({ ...params }) -> NewscatcherApi.SearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to search for articles. You can search for articles by id(s) or link(s).

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
    ids: "ids",
    links: "links",
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

<details><summary><code>client.searchLink.<a href="/src/api/resources/searchLink/client/Client.ts">searchUrlPost</a>({ ...params }) -> NewscatcherApi.SearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to search for articles. You can search for articles by id(s) or link(s).

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
await client.searchLink.searchUrlPost();
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

**request:** `NewscatcherApi.SearchUrlRequest`

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

## Searchsimilar

<details><summary><code>client.searchsimilar.<a href="/src/api/resources/searchsimilar/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.SearchSimilarGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint returns a list of articles that are similar to the query provided. You also have the option to get similar articles for the results of a search.

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
    q: "q",
    predefinedSources: "predefined_sources",
    sources: "sources",
    notSources: "not_sources",
    lang: "lang",
    notLang: "not_lang",
    countries: "countries",
    notCountries: "not_countries",
    parentUrl: "parent_url",
    allLinks: "all_links",
    allDomainLinks: "all_domain_links",
    iptcTags: "iptc_tags",
    notIptcTags: "not_iptc_tags",
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

This endpoint returns a list of articles that are similar to the query provided. You also have the option to get similar articles for the results of a search.

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
    q: "q",
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

**request:** `NewscatcherApi.MoreLikeThisRequest`

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

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">get</a>({ ...params }) -> NewscatcherApi.SourceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to get the list of sources that are available in the database. You can filter the sources by language and country. The maximum number of sources displayed is set according to your plan. You can find the list of plans and their features here: https://newscatcherapi.com/news-api#news-api-pricing

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
    lang: "lang",
    countries: "countries",
    predefinedSources: "predefined_sources",
    sourceName: "source_name",
    sourceUrl: "source_url",
    newsDomainType: "news_domain_type",
    newsType: "news_type",
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

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">post</a>({ ...params }) -> NewscatcherApi.SourceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to get the list of sources that are available in the database. You can filter the sources by language and country. The maximum number of sources displayed is set according to your plan. You can find the list of plans and their features here: https://newscatcherapi.com/news-api#news-api-pricing

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
await client.sources.post();
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

**request:** `NewscatcherApi.SourcesRequest`

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

## Subscription

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">get</a>() -> NewscatcherApi.SubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to get info about your subscription plan.

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

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">post</a>() -> NewscatcherApi.SubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to get info about your subscription plan.

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
