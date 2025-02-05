import type { UserConfig } from '~/types'

function joinUrl(path?: string) {
  const baseUrl = '/diary-blog'
  return path ? `${baseUrl}${path}` : baseUrl
}

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    // title: '魔王の日記',
    // subtitle: 'Memories in the Dark',
    // subtitle: 'Thoughts of the Demon King',
    website: `https://lukakabot.github.io/diary-blog`,
    navLinks: [
      {
        name: 'Posts',
        href: joinUrl(),
      },
      {
        name: 'Archive',
        href: joinUrl('/archive'),
      },
      {
        name: 'Categories',
        href: joinUrl('/categories'),
      },
      {
        name: 'About',
        href: joinUrl('/about'),
      },
    ],
  },
  // seo: { twitter: "@moeyua13" },
}
