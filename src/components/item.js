
import React from "react";
import {useStaticQuery,　graphql} from "gatsby";
import Img from "gatsby-image";
import itemStyles from "../styles/components/item.module.scss";

const Item =(props)=>{
    const data = useStaticQuery(graphql`
    query{
        person: file(relativePath: {eq:"human.jpg"}){
            childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        society: file(relativePath: {eq:"society.jpg"}){
            childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        earth: file(relativePath: {eq:"earth.jpg"}){
            childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        planet: file(relativePath: {eq:"space.jpg"}){
            childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
    }
    `)
    const index = props.index
    return(
        <div className={itemStyles.card}>
            <div className={itemStyles.cardImage}>
                <Img 
                fluid={data[index].childImageSharp.fluid} 
                className={itemStyles.image}/>
            </div>
            <div className={itemStyles.cardText}>
                <h1 className={itemStyles.cardTitle}>{props.title}</h1>
                {
                    props.ja.split('\n').map(line => 
                        <p className={itemStyles.cardDesc}>
                            {line}
                        </p>)}
            </div>
        </div>
    )
}

export default Item;