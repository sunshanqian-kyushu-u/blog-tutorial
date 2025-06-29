import { getCollection } from 'astro:content';
import {countWords, getReadingTime } from '../utils/text';

/**
 * 获取所有 blog 的 summary
 * 
 * summary 的输出示例
 * 
 * [
 *     {
 *          "slug": "markdown-extended", 
 *          "title": ...,
 *          ...
 *          "tags": {
 *              "Demo",
 *              "Example",
 *              ...
 *          },
 *          "description": "...",
 *          ...
 *     },
 *     {
 *          ...
 *     }
 * ]
 * 
 * @returns - blogSummaries
 */
export const getBlogSummaries = async () => {
    // 读取所有 blog 条目
    const blogs = await getCollection('blog');

    // 过滤掉 draft，然后按 published 倒序
    const publishedBlogs = blogs
    .filter((b) => b.data.draft !== true)
    .sort((a, b) => b.data.published.getTime() - a.data.published.getTime());

    // 生成摘要数据
    const summaries = publishedBlogs.map((b) => {
        const { title, published, category, tags, description } = b.data;

        const wordCount = countWords(b.body);
        const minutesRead = getReadingTime(wordCount);

        return {
            slug: b.slug,
            title,
            published,
            category,
            tags,
            description,
            wordCount,
            minutesRead,
        };
    });

    return summaries;
}
