//@flow
import React from 'react'
import TodoItem from './TodoItem'

// 預先定義props的結構
type Props = {
  initText: string
}

type Item = {
  text: string,
  isCompleted: boolean
}

class TodoList extends React.Component {
  // 預先定義state的結構
  state : {
    items: Array<Item>,
    inputValue: string
  }
  //建構式
  constructor(props : Props) {
    //super是呼叫上層父類別的建構式
    super(props)

    //設定初始的狀態。注意！這裡有個反樣式。
    this.state = {
      items: [],
      inputValue: ''
    }
  }
  handleChange = (e : Event) => {
    if (e.target instanceof HTMLInputElement) {
      this.setState({inputValue: e.target.value})
    }
  }

  //按下Enter時
  handleKeyPress = (e : KeyboardEvent) => {
    if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
      const aItem = {
        text: e.target.value,
        isCompleted: false
      }
      const newItems = [
        aItem, ...this.state.items
      ]

      //按下enter後，加到列表項目中並清空輸入框
      this.setState({items: newItems, inputValue: ''})
    }
  }
  //處理樣式變化其中一個陣列中成員的方法
  handleStylingItem = (index : number) => {
    //拷貝一個新陣列
    const newItems = [...this.state.items]

    //切換isCompleted的布林值
    newItems[index].isCompleted = !newItems[index].isCompleted

    //整個陣列重新更新
    this.setState({items: newItems})
  }

  handleRemoveItem = (index : number) => {
    const oldItems = this.state.items

    //從陣列中移除一個index的成員的純粹函式
    const newItems = oldItems
      .slice(0, index)
      .concat(oldItems.slice(index + 1))

    //整個陣列重新更新
    this.setState({items: newItems})
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          placeholder={this.props.initText}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}/>
        <ul>
          {
            this.state.items.map((item, index) => {
              return <TodoItem
                key={index}
                style={item.isCompleted? {color: 'red', textDecoration: 'line-through'} : {color: 'green'}}
                text={item.text}
                index={index}
                onItemClick={this.handleStylingItem}
              />
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList