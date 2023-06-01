export const useStates = () => {
    const state = ref(null);


    const setState = (newStete) => state.value = newStete;
    
    return {state, setState}
}
