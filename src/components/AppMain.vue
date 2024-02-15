<script >
import ProjectCard from './ProjectCard.vue';
export default {
    props: ['projects'],
    components: {
        ProjectCard
    }
};
</script>

<template>
    <main>
        <div class="container">
            <h2>Progetti</h2>
            <dvi class="row">
                <ProjectCard v-for="project in projects" :title="project.title" :description="project.description" />
            </dvi>
        </div>
    </main>
</template>

<style scoped lang="scss"></style>