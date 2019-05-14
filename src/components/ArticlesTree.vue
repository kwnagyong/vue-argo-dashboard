<template>
    <tree
            :data="treeData"
    />
</template>

<script>
    export default {
        name: "ArticleTree",
        data: () => ({
            treeData: [
                { text: '품목명2(규격20x20) 10BOX' },
                { text: '품목명1(규격40x40) 30EA' },

            ]
        })
    }
</script>

<style scoped>

</style>
