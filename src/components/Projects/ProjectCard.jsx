import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./ProjectCard.module.css" 
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox-plus-jquery.js';
import 'jquery';
import 'easing';


export const ProjectCard = ({ project : {title, thumbnail, extraImage, description, skills, source} }) => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl(thumbnail)} alt={`Image of ${title}`} 
         className={styles.image}/>
        <h3  className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}> {
            skills.map((skill, id) => {
                return <li key={id} className={styles.skill}>{skill} </li>
            })
        }</ul>
        <div className={styles.links}>




            <a href={getImageUrl(thumbnail)} data-lightbox={title} className={styles.link}>Demo</a>
            
            <a href={getImageUrl(extraImage)} data-lightbox={title}></a>

            




            <a href={source} className={styles.link}>Source</a>
        </div>
    </div>
  )
}
