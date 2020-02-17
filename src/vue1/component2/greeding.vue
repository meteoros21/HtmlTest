<template>
    <div class="hello">Hello {{yourName}}</div>
</template>

<script>
    module.exports = {
    // export default {
        name: 'greeding',
        props: {
            yourName: {
                type: String,
                default: () => 'There'
            }
        }
    }
</script>

<style scoped>
    .hello {
        background-color: #ddd;
    }
</style>