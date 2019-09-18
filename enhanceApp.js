
function sortPages(pages) {
    if(!pages.length) return []


    const _pages = pages.filter((element) => {
        if(typeof element.frontmatter.home === "object" && element.frontmatter.home)
            return false
        
        if(element.regularPath === '/')
            return false
        
        return true

    }).sort((a,b) => {

        if( typeof b.lastUpdated === "object"
        && typeof a.lastUpdated === "object"
        && typeof a.lastUpdated.timestamp === "number"
        && typeof b.lastUpdated.timestamp === "number")
        {
            return  b.lastUpdated.timestamp - a.lastUpdated.timestamp
        }
        else
            return 0
    })
    return _pages

}

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer
}) => {
    if (!isServer) {
        import('./components/vue-infinite-scroll').then(infiniteScroll => {
            Vue.use(infiniteScroll.default)
        })
    }
    Vue.mixin({
        computed:{
            $articleLsts(){
                return sortPages(siteData.pages)
            }
        }
    })
} 