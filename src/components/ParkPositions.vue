<template>
    
    <div class="parking-lot">
        <ParkCard
            v-for="park in loadData.content"
            :key="park.id"
            :park="park"
            >
        </ParkCard>
        
    </div>
    <PageableCard
        class="pageable"
        :currentPage="currentPage"
        :totalPages="loadData.totalPages"
        :nextPage="nextParkPage"
        :backPage="backParkPage"
    >

    </PageableCard>
</template>

<script>
import ParkCard from './ParkCard.vue';
import PageableCard from './PageableCard.vue'
import axios from 'axios'

export default {
    components: {
        ParkCard,
        PageableCard
    },
    inject: ['$bus'],
    created(){
        this.$bus.$on('DateChange', (param) => {
            this.currentDate = param.date
            this.updateParkFromApi(param.date)
        });
    },
    data(){
        return {
            loadData: {},
            currentPage: 0,
            currentDate: undefined
        }
    },
    methods: {
        nextParkPage(){
            this.currentPage ++;
            this.updateParkFromApi(this.currentDate);
        },
        backParkPage(){
            this.currentPage --;
            this.updateParkFromApi(this.currentDate);
        },
        async updateParkFromApi(actualDate) {
            var url = 'http://localhost:8085/v1/sensors/load?page='+ this.currentPage +'&size=12&date=' + actualDate;
            var info = await axios.get(url)
            this.loadData = info.data;
        }
    }
}
</script>

<style>
.parking-lot {
    display: flex;
    flex-direction: row;
    background-color: black;
    margin-left: 100px;
    margin-right: 100px;
    height: 300px;
}

.pageable {
    display: flex;
    justify-content: center;
    margin-top: 16px;
}
</style>