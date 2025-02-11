<script>
	import Post from './lib/Post.svelte';
	let posts = $state([]);
  let searchInput = $state('');
  let filteredPosts = $state([]);
	const url = 'https://dummyjson.com/posts/'
	async function getPosts(url) {
		const response = await fetch(url);
		return response.json();
	}

  function searchHandler(ev) {
    ev.preventDefault();
    console.log(searchInput);


    // filteredPosts = posts.filter(post => {
    //   if (post.title.toLowerCase().includes(searchInput.toLowerCase())){
    //     return post
    //   }
    //   else if (post.body.toLowerCase().includes(searchInput.toLowerCase())) {
    //     return post
    //   }
    //   else if (post.tags.includes(searchInput.toLowerCase())) {
    //     return post
    //   }
      
    // })
    
  }
function filterPosts() {
  filteredPosts = 
        posts.filter((post) => 
          post.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          post.body.toLowerCase().includes(searchInput.toLowerCase()) // ||
          // posts.tags.indexOf(searchInput.toLowerCase()) != -1
          
          
        ) || [];

}

	async function innit() {
		const data = await getPosts(url);
		posts = data.posts;
    filteredPosts = posts
    filterPosts();
		console.log(data);
	}
	
	innit();
</script>

<main>
<h1>Svelte Demo</h1>
<form action="" onsubmit={searchHandler}>
  <input type="search" id = "search" name="search" bind:value={searchInput}/>
  <button type="submit">Search</button>
</form>
{#each filteredPosts as post}
	<Post post={post} />
	<!-- { JSON.stringify(post) } -->
{/each}
</main>

<style>
	main {
		font-family: courier;
	}
  button {
		padding: .5em .5em;
		border: 1px solid;
		background: transparent;
	}
</style>

