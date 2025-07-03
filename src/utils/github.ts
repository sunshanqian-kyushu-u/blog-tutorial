export async function fetchRepoInfo (repo: string): Promise<{
    owner: string;              // owner
    name: string;               // name
    url: string;                // 仓库首页链接
    avatar: string;             // 头像 url
    description: string;        // 仓库描述
    stars: number;              // Star 数
    forks: number;              // Fork 数
    license: string | null;     // 许可
}> {
    const res = await fetch(`https://api.github.com/repos/${repo}`);

    if (!res.ok) {
        throw new Error(res.statusText);
    }

    const json = await res.json();

    return {
        owner: json.owner.login, 
        name: json.name,
        url: json.html_url,
        avatar: json.owner.avatar_url,
        description: json.description ?? '',
        stars: json.stargazers_count,
        forks: json.forks_count,
        license: json.license ? (json.license.spdx_id || json.license.name) : null
    }
}
