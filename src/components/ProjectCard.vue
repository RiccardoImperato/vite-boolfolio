<script >
export default {
    name: 'ProjectCard',
    props: {
        title: String,
        description: String
    },

};
</script>

<template>
    <div class="col col-md-4 g-4">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{{ title }}</h4>
                <p class="card-text">
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    height: 200px;
}
</style>