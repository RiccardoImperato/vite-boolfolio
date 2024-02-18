<script >
export default {
    name: 'ProjectCard',
    props: {
        title: String,
        description: String,
        slug: String,
    },

};
</script>

<template>
    <div class="col col-md-4 g-4">
        <div class="card">
            <div class="card-body d-flex flex-column justify-content-between align-items-start">
                <div>
                    <h4 class="card-title mb-3">{{ title }}</h4>
                    <p class="card-text">{{ description }}</p>
                </div>
                <router-link :to="{ name: 'single-project', params: { slug: slug } }"
                    class="btn btn-primary">Dettagli</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    height: 250px;

    .detail {
        margin-top: auto;
    }
}
</style>