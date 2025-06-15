type SiteConfig = {
    subtitle: string
    bannerlink: string
}

export const siteConfig: SiteConfig = {
    subtitle: "Tutorial", 
    bannerlink: "https://www.pixiv.net/artworks/111024784",
}

type Link = {
    name: string
    url: string
    external: boolean
}

export const NavbarLinks: Link[] = [
    {
        name: "Home", 
        url: "/", 
        external: false
    }, 
    {
        name: "Archive", 
        url: "/archive", 
        external: false
    }, 
    {
        name: "About", 
        url: "/about", 
        external: false
    }, 
    {
        name: "GitHub", 
        url: "https://github.com", 
        external: true
    }
]
