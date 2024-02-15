<script >
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'Main',
    props: ['projects'],

};
</script>

<template>
    <main>
        <div class="container">
            <h2>Progetti</h2>
            <dvi class="row">
                <div class="col col-md-4 g-4" v-for="project in projects">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <p class="card-text">
                                {{ project.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </dvi>
        </div>
    </main>
</template>

<style scoped lang="scss"></style>