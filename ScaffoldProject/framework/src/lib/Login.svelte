<script>
    import { login, signup } from "./auth.svelte.js";

    let email = "";
    let password = "";

    function loginHandler(e) {
        e.preventDefault();
        login({email, password});        
    }

    function signupHandler(e) {
        e.preventDefault();
        signup({email, password});
    }
</script>

<h2>Login</h2>
<form on:submit={loginHandler}>
    <label for="username">Username: </label>
    <input type="email" id="username" name="username" placeholder="username" bind:value={email}>
    <label for="password">Password: </label>
    <input type="password" id="password" name="password" placeholder="password" bind:value={password}>
    <button type="submit">Login</button><button type="button" on:click ={signupHandler}>Sign up</button>
</form>
