<template>
    <div>
        <button class="nav-button" 
        :disabled="currentPage <= 0"
        @click.prevent="backPage"
        >
            Back
        </button>
        <div
            class="item-pageable"
        >
            {{ currentPage }}
        </div>
        <button class="nav-button" :disabled="currentPage >= totalPages - 1"
            @click.prevent="nextPage">
            Next
        </button>
    </div>
</template>

<script>
export default {
    props: ['currentPage', 'totalPages', 'nextPage', 'backPage']
}
</script>

<style>
.item-pageable{
    margin-right: 15px;
    margin-left: 15px;
}
</style>