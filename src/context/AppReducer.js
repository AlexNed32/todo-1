export default function (state, action) {
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
            const updateTodo = action.payload;
            console.log('updateTodo', updateTodo)
            const updateTodos = state.todos.map((todo) => {
                if (todo.id === updateTodo.id) {
                    return updateTodo
                }
                return todo;
            })
            console.log('updateTodos', updateTodos)

            return {
                ...state,
                todos: updateTodos
            }

        default:
            return state
    }
}
