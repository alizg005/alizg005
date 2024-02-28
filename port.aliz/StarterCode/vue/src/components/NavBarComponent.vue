<template>
    <nav>
        <ul>
            <li><a @click="scrollToSection('about')">About</a></li>
            <li><a @click="scrollToSection('skills')">Skills</a></li>
            <li><a @click="scrollToSection('projects')">Projects</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}

</script>
<style scoped>
nav {
    background-color: rgba(255, 255, 255, 0)fff;
    padding: 10px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;
}

li {
    margin-left: 5%;
}

a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 120%;
}
</style>