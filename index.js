const removeMD = require('remove-markdown')

module.exports = (themeConfig, ctx) => {
    themeConfig = Object.assign(
        themeConfig,
        {
            summaryLength: typeof themeConfig.summaryLength === 'number' ? themeConfig.summaryLength : 200,
        }
    )

    const config = {
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
        }
    }
    return config
}