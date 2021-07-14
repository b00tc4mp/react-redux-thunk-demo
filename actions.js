function addTodo(text) {
  return dispatch => {
    createTodo(text, (error, id) => {
      if (error) return alert(error.message)

      dispatch({
        type: 'ADD_TODO',
        id,
        text
      })
    })
  }
}

const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

function toggleTodo(id) {
  return dispatch => {
    toggleTodoStatus(id, error => {
      if (error) return alert(error.message)

      dispatch({
        type: 'TOGGLE_TODO',
        id
      })
    })
  }
}

const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}