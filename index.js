const removeMD = require('remove-markdown')
const moment = require('moment');

module.exports = (themeConfig, ctx) => {
    themeConfig = Object.assign(
        themeConfig,
        {
            summaryLength: typeof themeConfig.summaryLength === 'number' ? themeConfig.summaryLength : 200,
        }
    )

    return {
        // 摘要
        extendPageData (pageCtx) {
            const strippedContent = pageCtx._strippedContent
            if (!strippedContent) {
                return
            }
            pageCtx.summary = removeMD(
                            strippedContent
                            .trim()
                            .replace(/^#+\s+(.*)/, '')
                            .slice(0, themeConfig.summaryLength)
                            )+ ' ...'
        },
        plugins: [
            [
                '@vuepress/last-updated',
                {
                    transformer: (timestamp, lang) => {
                        const _lang = themeConfig.lang || lang
                        moment.locale(_lang)
                        return {
                            timestamp:timestamp,
                            moment:moment(timestamp).fromNow()
                        }
                        
                    }
                }
            ]
        ]
    }

}