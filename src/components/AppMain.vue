<script >
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'AppMain',
    props: ['projects'],
    components: {
        ProjectCard
    }
};
</script>

<template>
    <main>
        <div class="container">
            <h2 class="mt-4">Progetti</h2>
            <div class="row">
                <ProjectCard v-for="project in projects" :title="project.title" :description="project.description" />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss"></style>