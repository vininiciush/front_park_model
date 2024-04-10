<template>
  <div class="park-position">
    <div class="park-sensor" :style="{'background-color' : this.park.isActive ? 'green' : 'red'}">

    </div>
    <div style="margin-bottom: 10px">
        Vaga: {{ park.park }}
    </div>
    <div>
        Lotação: {{ park.load }}%
    </div>
  </div>
</template>

<script>
export default {
    props: ['park'],
    created(){
        console.log(this.park.isActive)
    }
}
</script>

<style>
.park-position {
    height: 160px;
    width: 100px;
    background-color: black;
    color: white;
    border: 10px;
    border-style: solid;
    border-color: yellow;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
    border-bottom: none;
}

.park-sensor {
    height: 20px;
    width: 20px;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 10px;
}
</style>