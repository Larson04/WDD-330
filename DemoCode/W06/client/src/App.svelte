<script>
  import AddPost from './lib/AddPost.svelte'
  import PostList from './lib/PostList.svelte';
  
</script>

<main>
  <h1>My Awesome Blog</h1>

  <div class="card">
    <AddPost />
  </div>
  <PostList />

</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
