export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_TODO':
            return {
                todos: state.todos
            }
        default:
            return state
    }
}
