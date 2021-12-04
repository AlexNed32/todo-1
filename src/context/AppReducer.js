export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'ADD_TODO':
            return {
                todos: [...state.todos, action.payload]
            }
        case 'SWITCH_STATUS':
            return {
                todos: [...state.todos.map((todo) => todo.id === action.payload ? { ...todo, status: !todo.status } : { ...todo })]
            }
        case 'EDIT_TODO':
            const upatedTodo = action.payload;

            const updateTodos = state.todos.map((todo) => {
                if (todo.id === upatedTodo.id) {
                    return upatedTodo
                }
                return todo;
            })

            return {
                todos: updateTodos
            }

        default:
            return state
    }
}
