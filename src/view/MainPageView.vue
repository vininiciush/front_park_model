<template>
    <DataPickerCard>

    </DataPickerCard>
    
    <ParkPositions>

    </ParkPositions>

    <ChartCard>

    </ChartCard>
</template>

<script>
import ParkPositions from '@/components/ParkPositions.vue';
import ChartCard from '@/components/ChartCard.vue';
import DataPickerCard from '@/components/DataPickerCard.vue'

export default {
    inject:['$bus'],
    components: {
        ParkPositions,
        ChartCard,
        DataPickerCard
    }
}
</script>

<style> 

</style>