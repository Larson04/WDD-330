<script>
    // get all posts
    // render posts
    import { posts } from "./state.svelte.js";

    
    const url = "https://localhost:3000/posts";

    async function getPosts(){
        try{
            const response = await fetch(url);
            const data = await response.json();
            posts.data = data;
        } catch(error){ 
            console.log(error);
        }
    }
    getPosts();
</script>

<h2>Posts</h2>
{#each posts.data as post}
    <h3>{post.title}</h3>
    <p>{post.content}</p>
{/each}