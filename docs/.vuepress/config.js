module.exports = {
    port: 8088,
    title: 'my-doc',  // 设置网站标题
    dest: './dist',    // 设置输出目录
    base: '/my-doc/', // 设置站点根路径
    repo: 'https://github.com/ov100/my-doc', // 添加 github 链接
    themeConfig: {
        // 添加导航栏
        nav: [
            { text: 'java', link: '/' },
            /*
            {
                text: 'github',
                // 这里是下拉列表展现形式。
                items: [
                    { text: 'focus-outside', link: 'https://github.com/txs1992/focus-outside' },
                    { text: 'stylus-converter', link: 'https://github.com/txs1992/stylus-converter' }
                ]
            }
            */
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/java/': getGuideSidebar('基础', '并发'),
        },
        sidebarDepth:1
    },

    plugins: [
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['flowchart']
    ]
}

function getGuideSidebar (groupA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                'java-started',
                'base/thread',
                'base/synchronized',
                'base/volatile'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'concurrent/concurrent-started'
            ]
        }
    ]
}
