/**
 * 计算单词数量
 * 
 * @param text - 要统计的文本内容
 * @returns 单词数量
 */
export const countWords = (text: string) => text.trim().split(/\s+/).length;

/**
 * 计算阅读时间（按 200 wpm 计算）
 * 
 * @param wordCount - 单词数量
 * @returns 阅读时间（分钟，向上取整）
 */
export const getReadingTime = (wordCount: number) => Math.ceil(wordCount / 200);