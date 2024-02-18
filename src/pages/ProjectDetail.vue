<script>
import axios from 'axios';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: {},
            'baseUrl': 'http://127.0.0.1:8000/',
            'apiUrls': {
                'projects': 'api/projects'
            }
        }
    },
    methods: {
        getProjects() {
            axios.get(this.baseUrl + this.apiUrls.projects + '/' + this.$route.params.slug).then((response) => {
                this.project = response.data;
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
    <div class="container text-center py-5">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
    </div>
</template>