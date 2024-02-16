<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsList',
    data() {
        return {
            'projects': [],
            'baseUrl': 'http://127.0.0.1:8000/',
            'apiUrls': {
                'projects': 'api/projects'
            }
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        getProjects() {
            axios.get(this.baseUrl + this.apiUrls.projects).then(response => {
                this.projects = response.data.results;
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    created() {
        this.getProjects();
    }
}
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