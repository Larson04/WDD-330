<script>
  import Login from "./lib/Login.svelte";
  import NavBar from "./lib/NavBar.svelte";
  import Post from "./lib/Post.svelte";
  import Profile from "./lib/Profile.svelte";

  let route = $state('');
  let params = $state();

  function handleRouteChange() {
    console.log(location);
    const [routeString, paramString] = location.hash.split('?');
    params = new URLSearchParams('?' + paramString);
    route = routeString;
    

  }

  window.addEventListener('popstate', handleRouteChange)
</script>

<header>
  <NavBar />
</header>
<main>
  
  <h1>My Awesome Blog</h1>



  <div class="card">
    {#if route === '#home' || route === ''}
      <p> Welcome Home</p>
    {:else if route === '#login'}
      <Login />
    {:else if route === '#postList'}
      <ul>
        <li><a href='#post?id=1'>Post1</a></li>
        <li><a href='#post?id=2'>Post2</a></li>
      </ul>
    {:else if route === '#post'}
      <Post postId={params.get('id')}/>
    {:else if route === '#profile'}
      <Profile />
    {:else}
    <p>Page not found</p>
    {/if}
  </div>
</main>

<style>
  
</style>
