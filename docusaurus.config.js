// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const graphqlMarkdownConfig = require("./graphql-markdown.config");

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mindkey",
  tagline: "Technical Documentation",
  // url: "https://pr3b.github.io", //github-pages
  url: "https://docusaurus.netlify.app", //netlify
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon:
    "https://mindkey.com/wp-content/uploads/2022/07/cropped-mindkey-favicon-32x32.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pr3b", // Usually your GitHub org/user name.
  projectName: "mindkey.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  // trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: "apiref",
            spec: "swagger.yaml",
            route: "docs/recruitingAPI",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#000000",
        },
      },
    ],
  ],

  // plugins: [["@graphql-markdown/docusaurus", graphqlMarkdownConfig]],

  plugins: [
    [
      "docusaurus-graphql-plugin",
      {
        schema: "github.graphql",
        routeBasePath: "/swapi.md",
      },
    ],
  ],

  // mermaid
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        // title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "https://mindkey.com/wp-content/uploads/2017/07/mindkey-logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Get Started",
            to: "docs/mindkey-api",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Integrations",
            to: "docs/integration",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Recruiting",
            to: "docs/recruiting",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "System",
            to: "docs/system-api",
          },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",

        copyright: `© ${new Date().getFullYear()} MindKey Software A/S All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
