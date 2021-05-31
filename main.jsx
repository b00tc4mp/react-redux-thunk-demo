const { StrictMode } = React
const { createStore, applyMiddleware } = Redux
const { Provider } = ReactRedux
const { default: thunk } = ReduxThunk
const { render } = ReactDOM

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

const store = createStore(rootReducer, applyMiddleware(thunk))

render(<StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
</StrictMode>, document.getElementById('root'))
