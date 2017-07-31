//@flow
import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = (props: {text: string, index: number, onItemClick: Function}) => {

  const handleClick = () => {
    //實際上呼叫的是由上層元件從props.onItemClick傳入的方法(上層元件的方法)
    props.onItemClick(props.index)
  }

  return <li onClick={handleClick}>{props.text}</li>
}

//加入props的資料類型驗証
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onItemClick: PropTypes.func,
}

//匯出TodoItem模組
export default TodoItem