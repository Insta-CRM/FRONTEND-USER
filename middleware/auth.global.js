export default defineNuxtRouteMiddleware((to, from) => {
    const isAuth = true;

    if (! isAuth && to.name !== "login") {
        return navigateTo("/login")
    }

    return
    
})
