export default defineNuxtPlugin(() => {

    return {
        provide: {
            isDark: (set) => set = !set
        }
    }

})
