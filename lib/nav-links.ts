export type MenuItem = {
    navtitle: string;
    navDetail: string;
    navLink: string;
}

export type HeaderItem = {
    menuTitle: string;
    menuUrl: string;
    menu?: MenuItem[] | undefined;
    trending?: {
        imageUrl: string;
        title: string;
        description: string;
    }
}

export const HEADER: HeaderItem[] = [
    {
        menuTitle: "How it works",
        menuUrl: "/how-it-works"
    },
    {
        menuTitle: "Features",
        menuUrl: "#",
        menu: [
            {
                navtitle: "How do we help?",
                navDetail: "Healthcare without borders",
                navLink: "#"
            },
            {
                navtitle: "Our Modes",
                navDetail: "Designed and personalized for you",
                navLink: "#"
            }
        ],
        trending : {
            imageUrl: "",
            title: "",
            description:"",
        }
    },
    {
        menuTitle: "Meet Asabe",
        menuUrl: "#"
    },
    {
        menuTitle: "Shop Dolce",
        menuUrl: "#"
    },
    {
        menuTitle: "Pricing",
        menuUrl: "/pricing"
    },
    {
        menuTitle: "Resources",
        menuUrl: "#",
        menu: [
            {
                navtitle: "About us",
                navDetail: "Why do we want to help?",
                navLink: ""
            },
            {
                navtitle: "Our Recipes",
                navDetail: "Designed and personalized for you",
                navLink: ""
            },
            {
                navtitle: "Trial Corner",
                navDetail: "Read Insights, research, tips  & more",
                navLink: ""
            },
            {
                navtitle: "Our Research Program",
                navDetail: "Join us to build the future",
                navLink: ""
            }
        ],
        trending: {
            imageUrl: "",
            title: "",
            description:"",
        }
    }
]