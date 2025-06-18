// 1. 从 `astro:content` 导入工具函数
import { defineCollection, z } from 'astro:content';

// 2. 定义你的集合
// 注：好像在新版的内容集合中不需要导入 glob 和 file 这种加载器
const blog = defineCollection({ 
    schema: z.object({
        // id: z.number(),
        title: z.string(),
        // 要注意 2022-07-01 的不是字符串而是日期
        published: z.date(),
        category: z.string(),
        draft: z.boolean().optional(),
    }),
 });

// 4. 导出一个 `collections` 对象来注册你的集合
export const collections = { blog };
