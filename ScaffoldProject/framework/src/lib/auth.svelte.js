//connect to supabase
//register new user
//login to an existing account (getting a token)
//logout from current session
//Check to see if there is a currently logged in user

import { userData } from './stores.svelte.js';
import { supabase } from './supaBase.js';

export async function signup(user) {
    
    let { data, error } = await supabase.auth.signUp({
        email: 'someone@email.com',
        password: 'jODMfbMsLeORsugqdayI'
    })

    if (error) {
        console.log(error.message);
    } else {
        return data;
    }
}  

export async function login(creds){
    
    let { data, error } = await supabase.auth.signInWithPassword({
        email: 'someone@email.com',
        password: 'jODMfbMsLeORsugqdayI'
    })

    if (error) {
        console.log(error.message);
    } else {
        userData.isLoggedIn = true;
        userData.user = creds.user;
        return creds;
    }

}

export async function checkAuth(){
    const { 
        data: { session },
        error
    } = await supabase.auth.getSession()
    if(session){
        console.log("logged in");
        userData.isLoggedIn = true;
        userData.user = session.user;
    } else {
        console.log("not logged in");
        userData.isLoggedIn = false;
    }

  return session;
}