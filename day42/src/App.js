import React, {Component} from 'react'
import './App.css'
import resume from './resume.json'
import Experience from './Experience'
import Project from './Project'
import Skill from './Skill'
import Education from './Education'
import Language from './Language'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.renderExperience = this.renderExperience.bind(this)
  }
  renderExperience () {
    let resultArray = []
    resume.experiences.forEach((item, i) => {
      resultArray.push(<Experience item={item} key={i} />)
    })
    return resultArray
  }

  renderProjects () {
    let resultArray = []
    resume.projects.forEach((item, i) => {
      resultArray.push(<Project item={item} key={i} />)
    })
    return resultArray
  }

  renderSkills () {
    let resultArray = []
    resume.skills.forEach((item, i) => {
      resultArray.push(<Skill item={item} key={i} />)
    })
    return resultArray
  }

  renderEduction () {
    let resultArray = []
    resume.education.forEach((item, i) => {
      resultArray.push(<Education item={item} key={i} />)
    })
    return resultArray
  }

  renderLanguage () {
    let resultArray = []
    resume.languages.forEach((item, i) => {
      resultArray.push(<Language item={item} key={i} />)
    })
    return resultArray
  }

  renderInterest () {
    let resultArray = []
    resume.interests.forEach((item, i) => {
      resultArray.push(<li key={i}>{item}</li>)
    })
    return resultArray
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='sidebar-wrapper'>
          <div className='profile-container'>
            <img className='profile' src={resume.image} alt=''/>
            <h1 className='name'>{resume.name}</h1>
            <h3 className='tagline'>Full Stack Developer</h3>
          </div>
          <div className='contact-container container-block'>
            <ul className='list-unstyled contact-list'>
              <li className='email'>
                <i className='fa fa-envelope'></i>
                <a href='mailto: yourname@email.com'>{resume.email}</a>
              </li>
              <li className='phone'>
                <i className='fa fa-phone'></i>
                <a href='tel:0123 456 789'>0123 456 789</a>
              </li>
              <li className='website'>
                <i className='fa fa-globe'></i>
                <a
                  href='http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/'
                  target='_blank' rel="noopener noreferrer">portfoliosite.com</a>
              </li>
              <li className='twitter'>
                <i className='fa fa-twitter'></i>
                <a href='https://twitter.com/3rdwave_themes' target='_blank' rel="noopener noreferrer">@twittername</a>
              </li>
            </ul>
          </div>
          <div className='education-container container-block'>
            <h2 className='container-block-title'>Education</h2>
            {this.renderEduction()}
          </div>
          <div className='languages-container container-block'>
            <h2 className='container-block-title'>Languages</h2>
            <ul className='list-unstyled interests-list'>
              {this.renderLanguage()}
            </ul>
          </div>

          <div className='interests-container container-block'>
            <h2 className='container-block-title'>Interests</h2>
            <ul className='list-unstyled interests-list'>
              {this.renderInterest()}
            </ul>
          </div>

        </div>

        <div className='main-wrapper'>

          <section className='section summary-section'>
            <h2 className='section-title'>
              <i className='fa fa-user'></i>Career Profile</h2>
            <div className='summary'>
              <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. You can
                <a
                  href='http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/'
                  target='_blank' rel="noopener noreferrer">download this free resume/CV template here</a>.
                Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu.</p>
            </div>

          </section>

          <section className='section experiences-section'>
            <h2 className='section-title'><i className='fa fa-briefcase' />Experiences</h2>
            {this.renderExperience()}
          </section>

          <section className='section projects-section'>
            <h2 className='section-title'>
              <i className='fa fa-archive'></i>Projects</h2>
            <div className='intro'>
              <p>You can list your side projects or open source libraries in this section.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in
                nunc bibendum fringilla a eu lectus.</p>
            </div>
            {this.renderProjects()}
          </section>

          <section className='skills-section section'>
            <h2 className='section-title'>
              <i className='fa fa-rocket'></i>Skills &amp Proficiency</h2>
            <div className='skillset'>
              {this.renderSkills()}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App