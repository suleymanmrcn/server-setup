import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Production Server Guide',
  tagline: 'Zero-to-Production: Ubuntu & CentOS',
  favicon: 'img/favicon.svg',

  url: 'https://slymanmrcan.github.io',
  baseUrl: '/server-setup/',

  organizationName: 'slymanmrcan',
  projectName: 'server-setup',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: 'docs',
          editUrl: 'https://github.com/slymanmrcan/server-setup/tree/main/',
          sidebarCollapsible: true,
          sidebarCollapsed: true,
        },
        blog: false, // ✅ Blog kapalı
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: ['tr', 'en'],
      },
    ],
  ],

  themeConfig: {
    image: 'img/server-guide-social-card.svg',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Server Guide',
      logo: {
        alt: 'Server Guide',
        src: 'img/server-guide-logo.svg',
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'general',
          position: 'left',
          label: 'Dokuman',
        },
        {
          type: 'docSidebar',
          sidebarId: 'technical',
          position: 'left',
          label: 'Teknik Bilgi',
        },
        {
          type: 'docSidebar',
          sidebarId: 'commands',
          position: 'left',
          label: 'Komutlar',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resources',
          position: 'left',
          label: 'Faydali Linkler',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/slymanmrcan/server-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Server Guide`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
