type SiteConfig = {
    subtitle: string
    bannerlink: string
    intro: string
    bannerCredit: string
}

export const siteConfig: SiteConfig = {
    subtitle: "Tutorial", 
    bannerlink: "https://www.pixiv.net/artworks/111024784",
    intro: "this is my introduction.",
    bannerCredit: "description",
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

type IconLink = {
    name: string
    icon: string
    url: string
}

export const ProfileLinks: IconLink[] = [
    {
        name: "Twitter", 
        icon: "fa6-brands:twitter",
        url: "https://twitter.com", 
    }, 
    {
        name: "Steam", 
        icon: "fa6-brands:steam", 
        url: "https://store.steampowered.com", 
    }, 
    {
        name: "GitHub", 
        icon: "fa6-brands:github",
        url: "https://github.com/sunshanqian-kyushu-u", 
    }
]
