import React, {Component} from 'react'
import alphabets from './alphabets.json'
import classNames from 'classnames'

class EasyABC extends Component {
  constructor (props) {
    super(props)
    this.state = {
      alphabets: alphabets,
      currentPosition: 0,
      currentTick: 0,
      random: false,
      sound: false
    }
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
    this.playSound = this.playSound.bind(this)
    this.switchRandom = this.switchRandom.bind(this)
    this.switchSound = this.switchSound.bind(this)
    this.manualPlaySound = this.manualPlaySound.bind(this)
  }

  next () {
    if (this.state.random) {
      if (this.state.currentTick < 2) {
        this.setState({currentTick: this.state.currentTick + 1})
      } else {
        this.setState({currentPosition: this.randomNumber(0, 25), currentTick: 0})
      }
    } else {
      if (this.state.currentPosition === this.state.alphabets.length) {
        if (this.state.currentTick < 2) {
          this.setState({currentTick: this.state.currentTick + 1})
        } else {
          this.setState({currentPosition: 0, currentTick: 0})
        }
      } else {
        if (this.state.currentTick < 2) {
          this.setState({currentTick: this.state.currentTick + 1})
        } else {
          this.setState({currentPosition: this.state.currentPosition + 1, currentTick: 0})
        }
      }
      this.playSound()
    }
  }

  prev () {
    if (this.state.currentPosition > 0) {
      this.setState({currentPosition: this.state.currentPosition - 1})
    } else {
      this.setState({currentPosition: this.state.alphabets.length - 1})
    }
  }

  randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  componentDidMount () {
    let letterSound = document.querySelector(`audio[data-key="letter"]`)
    if (this.state.currentPosition === 0) {
      letterSound.play()
    }
  }

  componentDidUpdate () {
    this.playSound()
  }

  manualPlaySound () {
    let letterSound = document.querySelector(`audio[data-key="letter"]`)
    let wordSound = document.querySelector(`audio[data-key="word"]`)
    if (this.state.currentTick === 0) {
      letterSound.currentTime = 0
      letterSound.play()
    } else {
      wordSound.currentTime = 0
      wordSound.play()
    }
  }

  playSound () {
    let letterSound = document.querySelector(`audio[data-key="letter"]`)
    let wordSound = document.querySelector(`audio[data-key="word"]`)
    if (this.state.sound) {
      if (this.state.currentTick === 0) {
        letterSound.currentTime = 0
        letterSound.play()
      } else {
        wordSound.currentTime = 0
        wordSound.play()
      }
    }
  }

  switchRandom () {
    this.setState({random: !this.state.random})
    this.next()
  }

  switchSound () {
    this.setState({sound: !this.state.sound})
  }

  render () {
    let showImage = this.state.currentTick !== 0
    let showWord = this.state.currentTick === 2
    return (
      <div className='game'>
        <span className='random-label'>Random Letters: </span>
        <label className='switch'>
          <input type='checkbox'
            onClick={this.switchRandom}
            defaultValue='false'
            checked={this.state.random} />
          <div className='slider round' />
        </label>
        <span className='random-label'>Sound: </span>
        <label className='switch'>
          <input type='checkbox'
            onClick={this.switchSound}
            defaultValue='false'
            checked={this.state.sound} />
          <div className='slider round' />
        </label>
        <div className='option'>
          <div className='fields'>
            <div className='field-block'>
              {this.state.alphabets[this.state.currentPosition].letter}
            </div>
            <audio src={this.state.alphabets[this.state.currentPosition].letterSound} data-key='letter' />
          </div>
          <div className='buttons'>
            <a onClick={this.prev} className='button prev'>Previous</a>
            <a onClick={this.manualPlaySound}className='button sound'>Sound</a>
            <a onClick={this.next} className='button next'>Next</a>
          </div>
          <div className='fields'>
            <div className='field-block'>
              <div className='left-field'>
                <div className={classNames('placeholder-span', {hide: showImage})}>Click Next</div>
                <img className={classNames('letter-image', {hide: !showImage})}
                  alt={this.state.alphabets[this.state.currentPosition].word}
                  src={this.state.alphabets[this.state.currentPosition].image} />
                <audio src={this.state.alphabets[this.state.currentPosition].wordSound} data-key='word' />
              </div>
              <div className='right-field'>
                <div className={classNames('placeholder-span', {hide: showWord})}>Click Prev</div>
                <div className={classNames('word', {hide: !showWord})}>
                  {this.state.alphabets[this.state.currentPosition].word.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EasyABC
