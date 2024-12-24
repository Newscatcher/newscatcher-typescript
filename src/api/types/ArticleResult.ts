/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as NewscatcherApi from "../index";

/**
 * ArticleResult DTO class.
 */
export interface ArticleResult {
    title: string;
    author?: string;
    authors?: NewscatcherApi.Authors;
    journalists?: NewscatcherApi.Journalists;
    publishedDate?: string;
    publishedDatePrecision?: string;
    updatedDate?: string;
    updatedDatePrecision?: string;
    parseDate?: string;
    link: string;
    domainUrl: string;
    fullDomainUrl: string;
    nameSource?: string;
    isHeadline?: string;
    paidContent?: boolean;
    extractionData: string;
    country?: string;
    rights?: string;
    rank: number;
    media?: string;
    language?: string;
    description?: string;
    content: string;
    titleTranslatedEn?: string;
    contentTranslatedEn?: string;
    wordCount?: number;
    isOpinion?: boolean;
    twitterAccount?: string;
    allLinks?: NewscatcherApi.DtoResponsesMoreLikeThisResponseArticleResultAllLinks;
    allDomainLinks?: NewscatcherApi.DtoResponsesMoreLikeThisResponseArticleResultAllDomainLinks;
    nlp?: Record<string, unknown>;
    id: string;
    score: number;
    similarDocuments?: NewscatcherApi.SimilarDocument[];
    customTags?: Record<string, unknown>;
}