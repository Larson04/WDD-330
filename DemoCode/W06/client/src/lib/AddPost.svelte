<script>
    import { posts } from "./state.svelte.js";

    let title = $state("");
    let content = $state("");
    const url = "https://localhost:3000/posts";

    /* When for is submitted, 
        Get input from form
        send the input to the server POST
        clear the form
        display the new post
  */ 

    async function submitHandler(ev) {
        ev.preventDefault();
        const newPost = {
            title, // shorthand for title: title, ONLY WORKS WHEN NAMED THE SAME
            content
        };
        const options ={
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }
        const response = await fetch(url, options);
        const result = await response.json();
        posts.data = [...posts.data, result];
    }
</script>

<h2>Add New Post</h2>
<form id="add-post" onsubmit={submitHandler}>
    <p>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" bind:value={title}/>
    </p>
    <p>
        <label for="content">Content:</label>
        <textarea id="content" name="content" bind:value={content}></textarea>
    </p>
    <button>Add</button>
</form>