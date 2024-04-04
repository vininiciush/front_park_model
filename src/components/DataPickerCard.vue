<template>
    <label for="main-date">Data: </label>
    <input 
        id="main-date" 
        type="date" 
        style="margin-bottom: 50px;"
        v-model="this.currentDate"
    >
    <button style="margin-left: 20px;"
        @click.prevent="changeInDate()"
    
    >Search

    </button>
</template>

<script>
export default {
    mounted(){
        var dataAtual = new Date();
        var ano = dataAtual.getFullYear();
        var mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
        var dia = dataAtual.getDate().toString().padStart(2, '0');
        var dataFormatada = ano + '-' + mes + '-' + dia;
        this.currentDate = dataFormatada;
        this.changeInDate();
    },
    data(){
        return {
            currentDate: undefined
        }
    },
    inject: ['$bus'],
    methods: {
        changeInDate(){
            this.$bus.$emit('DateChange', {'date': this.currentDate});
        }
    }
}
</script>

<style>

</style>