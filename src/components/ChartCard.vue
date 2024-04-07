<template>
    <div class="chart">
        <Line :data="chartData" />
    </div>
</template>
  
  <script>
  import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
  import { Line } from 'vue-chartjs'
  import axios from 'axios'
  
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
  
  export default {
    inject: ['$bus'],
    components: {Line },
    created(){
      this.$bus.$on('DateChange', (param) => {
            this.updateChartWithApiData(param.date)
        });

    },
    data() {
      return {
        chartData: {
          labels: ['0 hours', '1 hours', '2 hours', '3 hours', '4 hours', '5 hours', '6 hours', '7 hours', '8 hours', '9 hours', '10 hours', '11 hours', '12 hours', '13 hours', '14 hours', '15 hours', '16 hours', '17 hours', '18 hours', '19 hours', '20 hours', '21 hours', '22 hours', '23 hours'],
          datasets: [{label: 'Lotacao', backgroundColor: '#f87979', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}]
        },
        re_render: true
      }
    },
    methods:{
      async updateChartWithApiData(actualDate) {
        var url = 'http://localhost:8085/v1/sensors/park/load?date=' + actualDate;
        var info = await axios.get(url)
        var chartData = info.data;
        const sensors = chartData.map(obj => obj.sensors);
        this.chartData= {labels: this.chartData.labels, datasets: [{label: 'Lotacao', backgroundColor: '#f87979', data: sensors}]}
      }
    }
  }
  </script>

<style>
.chart {
    width: 1000px;
    height: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
}
</style>