let nextTodoId = 0

const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

function addTodoAsync(text) {
  return dispatch => {
    setTimeout(() => {
      console.log('adding a todo takes time ,)')
      
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(addTodo(text))
    }, 1000)
  }
}

const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

function toggleTodoAsync(id) {
  return dispatch => {
    setTimeout(() => {
      console.log('toggling a todo takes time :)')
      
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(toggleTodo(id))
    }, 1000)
  }
}

const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}