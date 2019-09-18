<template>
    <div>
        <div v-if="postList.length === 0" class="centent-list-nodata">
            <p>空空如也，快去添加一些内容吧！</p> 
        </div>
        <transition-group 
        v-else
        tag="div" 
        enter-active-class="animated fadeInDown delay-2s"
        v-infinite-scroll="loadMore" 
        infinite-scroll-disabled="busy" 
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="false">
            
            <RowCard v-for="post in postList" :key="post.key" :post-data="post"></RowCard>
        </transition-group>
    </div>
    
    
</template>

<script>
import RowCard from './card/rowCard.vue'
export default {
    components:{RowCard},
    data() {
        return {
            busy:false,
            defaultShowCardNum: 1,
            postList:[],
        }
    },
    created(){
        this.initPostCard()
    },
    beforeMount(){
        // 计算默认显示的Card 的数量能否铺满整个屏幕高度
        const maxCardNum = Math.floor(Math.floor((window.innerHeight - 50) / 290))
        this.defaultShowCardNum = maxCardNum > this.defaultShowCardNum ? maxCardNum : this.defaultShowCardNum
        this.initPostCard()
            
    },
    methods: {
        initPostCard(){
            if(this.$articleLsts.length > 1 )
            {
                this.postList = this.$articleLsts.slice(0,this.defaultShowCardNum + 1)
            }
        },
        loadMore(){
            this.busy = true
            const index = this.defaultShowCardNum++ + 1
            if(this.$articleLsts.length > index)
            {
                this.postList.push(this.$articleLsts[index])
                
            }
            this.busy = false
            
        }
    },
}
</script>

<style scoped>
.centent-list-nodata{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: #738a94;
    font-weight: 500;
    min-height: 600px;
}
</style>