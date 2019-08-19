module.export = (themeConfig, ctx) => {

    // 主题配置
    themeConfig = Object.assign(
        themeConfig,
        {
            summaryLength: typeof themeConfig.summaryLength === 'number' ? themeConfig.summaryLength : 200,
        }
    )

    
    // 摘要
    const config = {
        extendPageData : function (pageCtx) {
            const strippedContent = pageCtx._strippedContent
            if (!strippedContent) {
                return
            }
            
            pageCtx.summary = strippedContent
                            .trim()
                            .replace(/^#+\s+(.*)/, '')
                            .slice(0, themeConfig.summaryLength)
                            + ' ...'
        }
    }


    return config;
    
}