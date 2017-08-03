// from http://ithelp.ithome.com.tw/articles/10186982

//@flow
import React from 'react'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
import TodoAddForm from './TodoAddForm'
import TodoEditForm from './TodoEditForm'
import TodoSearchForm from './TodoSearchForm'

import type {Item}
from '../definitions/TodoTypeDefinition.js'

//匯入css檔
import '../style/bootstrap.css'
import '../style/animate.css'

let keepSearchedItems: Array<Item> = []
let isSearching: boolean = false
let isFilteringOut: boolean = false


class App extends React.Component {
  // 預先定義state的結構
  state: {
    items: Array<Item>,
    sortType: '' | 'asc' | 'desc'
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

  //處理切換過濾是否要顯示已完成項目
  handleItemFilter = () => {

   //isFilteringOut是在這個模組的作用域變數
   isFilteringOut = !isFilteringOut

   const newItems = [...this.state.items]

    //整個陣列重新更新
    this.setState({
      items: newItems,
    })
  }

  handleItemSort = (sortType: SortType) => {

      let newItems = [...this.state.items]

      if(sortType === 'asc') {
        //按筆劃從少到多排序
        newItems = newItems.sort((a, b) => (
            a.title.localeCompare(b.title, 'zh-Hans-TW-u-co-stroke')
          )
        )
      }

      if(sortType === 'desc') {
        //按筆劃從多到少排序
        newItems = newItems.sort((a, b) => (
            b.title.localeCompare(a.title, 'zh-Hans-TW-u-co-stroke')
          )
        )
      }

      this.setState({
            items: newItems,
            sortType
        })
  }

   //處理搜尋所有項目的方法
  handleItemSearch = (searchword: string) => {
    //觸發排序回復不排序
    this.handleItemSort('')

    // 一開始先拷貝目前在state中的items到陣列中，保存所有的items
    // 並設定isSearching為true，表示正準備搜尋
    if(!isSearching) {
      isSearching = true
      keepSearchedItems = [...this.state.items]
    }

    // 當還在搜尋(isSearching為true)時，如果searchword是空字串，代表使用者已經把文字框清空了
    // 準備回復原先的列表資料情況，並設定(isSearching為false)
    if(isSearching && searchword === '') {
      isSearching = false

      this.setState({
        items: keepSearchedItems,
      })

    } else {
      //過濾(搜尋)一律從原本的items資料中搜尋，也就是keepSearchedItems中的值
      const newItems  = keepSearchedItems.filter((item) => (
          item.title.includes(searchword)
      ))

      //整個陣列重新更新
      this.setState({
        items: newItems,
      })
    }
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
                onItemAdd={this.handleItemAdd}
              />
              <TodoSearchForm placeholderText="搜尋" onItemSearch={this.handleItemSearch} />
              <TodoList onItemFilter={this.handleItemFilter} onItemSort={this.handleItemSort} sortType={this.state.sortType}>
                {
                  this.state.items.map((item, index) => {
                    if(isFilteringOut && item.isCompleted){
                      return null
                    }
                    return  (
                      (item.isEditing)
                        ? <TodoEditForm
                            key={item.id}
                            title={item.title}
                            onItemUpdate={(title) => { this.handleEditItemUpdate(index, title) }}
                          />
                        : <TodoItem
                            key={item.id}
                            isCompleted={item.isCompleted}
                            title={item.title}
                            onItemDoubleClick={() => { this.handleEditItem(index) }}
                            onItemClick={() => { this.handleStylingItem(index) }}
                        />
                    )
                  }
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