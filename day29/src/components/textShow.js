// @flow
import React from 'react'
import PropTypes from 'prop-types'

const TextShow = (props: {text: string}) => ( 
    <h1>{props.text}</h1>
)

// 加入props的資料類型驗証
TextShow.propTypes = {
    text: PropTypes.string.isRequired
}

// 匯出TextShow模組
export default TextShow