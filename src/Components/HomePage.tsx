import React from 'react'
import Header from './Header'
import Mail from './Mail'
import Social from './Social'
import About from './About'
import Project from './Project'
import Skill from './Skill'
import Experience from './Experience'
import Contact from './Contact'

const HomePage = () => {
  return (
    <>
    <Header/>
    <About/>
    <Project/>
    <Skill/>
    <Experience/>
    <Contact/>
    <Mail/>
    <Social/>
    </>
  )
}

export default HomePage