export const state = () => ({
    offset: 0,
    paginationLimit: 10
})

export const mutations = {
    increment(state) {
        state.offset += state.paginationLimit;
    },
    decrement(state) {
        state.offset -= state.paginationLimit;
    },
    reset(state) {
        state.offset = 0;
    }
}