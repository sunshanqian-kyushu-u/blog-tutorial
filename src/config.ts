type SiteConfig = {
    subtitle: string
}

export const siteConfig: SiteConfig = {
    subtitle: "Tutorial", 
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
