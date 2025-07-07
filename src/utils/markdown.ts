import { unified } from "unified";
import remarkParse from "remark-parse";
// import remarkMdx from 'remark-mdx'
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

export async function mdxToHtml(postBody?: string): Promise<string> {
    if (!postBody) return ''

    const file = await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypePrettyCode, {
                // options
            })
            .use(rehypeStringify)
            .process(postBody)

    return file.toString()
}
