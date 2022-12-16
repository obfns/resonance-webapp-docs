/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Resonance Documentation",
    tagline: "Articles and References for the Resonance Platform",
    url: "https://docs.buildresonance.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "buildresonance", // Usually your GitHub org/user name.
    projectName: "resonance-webapp-docs", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "Resonance Docs",
            logo: {
                alt: "Resonance",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "doc",
                    docId: "concepts/why",
                    position: "left",
                    label: "Getting Started",
                },
                {
                    type: "dropdown",
                    label: "Admin Identity",
                    position: "left",
                    items: [
                        {
                            href: "/adminidentity/api/graphql-admin/reference",
                            label: "Admin GraphQL API Reference",
                        },
                        {
                            href: "/adminidentity/api/rest/reference",
                            label: "REST API Reference",
                        },
                    ],
                },
                {
                    type: "dropdown",
                    label: "Demand",
                    position: "left",
                    items: [
                        {
                            href: "/demand/api/graphql-admin/reference",
                            label: "Admin GraphQL API Reference",
                        },
                        {
                            href: "/demand/api/graphql-storefront/reference",
                            label: "Storefront GraphQL API Reference",
                        },
                    ],
                },
                {
                    type: "dropdown",
                    label: "Supply",
                    position: "left",
                    items: [
                        {
                            href: "/supply/api/graphql-admin/reference",
                            label: "Admin GraphQL API Reference",
                        },
                    ],
                },
                {
                    href: "https://github.com/obfns/resonance-webapp-docs",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Getting Started",
                            to: "/concepts/why",
                        },
                        // {
                        //     label: "Admin Identity",
                        //     to: "/concepts/api/overall-concepts",
                        // },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/obfns/resonance-webapp-docs",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Resonance`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/obfns/resonance-webapp-docs/tree/main",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                sitemap: {
                    changefreq: "weekly",
                    priority: 0.5,
                    filename: "sitemap.xml",
                },
            },
        ],
        [
            "redocusaurus",
            {
                specs: [
                    {
                        spec: "https://22ykohfjth.execute-api.us-east-1.amazonaws.com/openapi",
                        route: "/adminidentity/api/rest/reference",
                    },
                ],
            },
        ],
    ],
    plugins: [
        [
            "@edno/docusaurus2-graphql-doc-generator",
            {
                rootPath: "./docs",
            },
        ],
        [
            "@cmfcmf/docusaurus-search-local",
            {
                indexDocSidebarParentCategories: 3,
                indexBlog: false,
            },
        ],
        [
            "@docusaurus/plugin-client-redirects",
            {
                createRedirects(existingPath) {
                    if (existingPath.includes("/demand-hqs/")) {
                        return [
                            existingPath.replace("/demand-hqs/", "/demand-hq/"),
                        ];
                    }
                    return undefined; // Return a falsy value: no redirect created
                },
            },
        ],
    ],
};
