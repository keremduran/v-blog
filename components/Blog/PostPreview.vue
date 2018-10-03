<template>
    <nuxt-link
        :to="id">
        <article class="post-preview">
            <div
                class="post-preview-thumbnail"
                :style="{backgroundImage: 'url(' + thumbnailUrl + ')'}">
            </div>
            <div class="post-preview-content">
                <div class="post-preview-title">
                    <h1>{{ title }}</h1>
                </div>
                <div class="post-preview-summary">
                    <p>{{ summary }}</p>
                </div>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        thumbnailUrl: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}

.post-preview {  
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0, 0.5);
    width: 20rem;
    margin: 1rem;
    height: 26rem;
    overflow: hidden;
}

.post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 66%;
}

.post-preview-content {
    text-align: center;
    padding: 1rem;
}

.post-preview-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
}

</style>


