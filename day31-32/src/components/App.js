//@flow
import React from 'react'
import TodoItem from './TodoItem'
import TodoAddForm from './TodoAddForm'
import TodoEditForm from './TodoEditForm'
import TodoList from './TodoList'

import type {Item}
from '../definitions/TodoTypeDefinition.js'

//匯入css檔
import '../style/bootstrap.css'
import '../style/animate.css'

class App extends React.Component {
  // 預先定義state的結構
  state : {
    items: Array < Item >
  }

  //建構式
  constructor(props : Props) {
    //super是呼叫上層父類別的建構式
    super(props)

    //設定初始的狀態。注意！這裡有個反樣式。
    this.state = {
      items: []
    }
  }

  handleItemAdd = (aItem : Item) => {
    //加入新的項目到最前面 此處有變動
    const newItems = [
      aItem, ...this.state.items
    ]

    //按下enter後，加到列表項目中並清空輸入框
    this.setState({items: newItems})
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

  //處理其中一個陣列中成員變為編輯中的方法
  handleEditItem = (index : number) => {
    //拷貝一個新陣列
    const newItems = [...this.state.items]

    //切換isEditing的布林值
    newItems[index].isEditing = !newItems[index].isEditing

    //整個陣列重新更新
    this.setState({items: newItems})
  }

  //處理其中一個陣列中成員編輯完後更新的方法
  handleEditItemUpdate = (index : number, title : string) => {
    //拷貝一個新陣列
    const newItems = [...this.state.items]

    //項目的標題指定為傳入參數，更新標題
    newItems[index].title = title

    //切換isEditing的布林值
    newItems[index].isEditing = !newItems[index].isEditing

    //整個陣列重新更新
    this.setState({items: newItems})
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">TodoApp</h3>
            </div>
            <div className="panel-body">
              <TodoAddForm
                placeholderText="項目文字寫在這，按Enter鍵可以加入列表中"
                onItemAdd={this.handleItemAdd}/>
              <TodoList>
                {
                  this.state.items.map((item, index) => (
                    (item.isEditing)
                    ? <TodoEditForm
                        key={item.id}
                        title={item.title}
                        onItemUpdate={(title) => {
                          this.handleEditItemUpdate(index, title)
                        }}
                      />
                    : <TodoItem
                        key={item.id}
                        isCompleted={item.isCompleted}
                        title={item.title}
                        onItemDoubleClick={() => {
                          this.handleEditItem(index)
                        }}
                        onItemClick={() => {
                          this.handleStylingItem(index)
                        }}
                      />
                    )
                  )
                }
              </TodoList>
            </div>
            <div className="panel-footer">雙點擊項目可以進行編輯，按下Enter後儲存</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App