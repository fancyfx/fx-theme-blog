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
            
            <RowCard v-for="num in postList" :key="num.id"></RowCard>
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
            // postList:[{id:1},{id:2},{id:3}],
            postList:[],
        }
    },
    methods: {
        loadMore(){
            this.busy = true
            let date = new Date()
            this.postList.push({ id: date.getTime() })
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