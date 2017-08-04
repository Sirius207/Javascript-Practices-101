// TodoApp 元件中包含了顯示 Todo 的 TodoList 元件，Todo 的內容透過 props 傳入 TodoList 中。由於 TodoList 僅單純 Render UI 不涉及內部 state 操作是 stateless component，所以使用 Functional Component 寫法。需要特別注意的是這邊我們用 map function 來迭代 Todos，需要留意的是每個迭代的元素必須要有 unique key 不然會發生錯誤（可以用自定義 id，或是使用 map function 的第二個參數 index）
const TodoList = (props) => (
	<ul>
		{
			props.items.map((item) => (
				<li key={item.id}>{item.text}</li>
			))
		}
	</ul>
)

// 整個 App 的主要元件，這邊比較重要的是事件處理的部份，內部有
class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			items: [],
			text: '',
		}
	}
	onChange(e) {
    	this.setState({text: e.target.value});
	}
	handleSubmit(e) {
    	e.preventDefault();
    	const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    	const nextText = '';
    	this.setState({items: nextItems, text: nextText});
	}
	render() {
	    return (
	      <div>
	        <h3>TODO</h3>
	        <TodoList items={this.state.items} />
	        <form onSubmit={this.handleSubmit}>
	          <input onChange={this.onChange} value={this.state.text} />
            <span>{this.state.text}</span>
	          <button>{'Add #' + (this.state.items.length + 1)}</button>
	        </form>
	      </div>
	    );
	}
}

ReactDOM.render(<TodoApp />, document.getElementById('app'));