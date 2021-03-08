import React from "react";
import {useStaticQuery,　graphql} from "gatsby";
import Img from "gatsby-image";
import itemStyles from "../styles/components/item.module.scss";
import withSizes from 'react-sizes'

const mapSizesToProps = ({ width }) => ({
  isDesktop: width >= 1080,
})

const Item =(props)=>{
    const data = useStaticQuery(graphql`
    query{
        sense: file(relativePath: {eq:"red-disk.png"}){
            childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        body: file(relativePath: {eq:"green-disk.png"}){
            childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        life: file(relativePath: {eq:"orange-disk.png"}){
            childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        planet: file(relativePath: {eq:"blue-disk.png"}){
            childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
    }
    `)

    const index = props.index

    if (props.isDesktop) {
      if (index === "sense" || index === "life") {
        return(
          <div className={itemStyles.card}>
              <div className={itemStyles.cardText}>
                  <h1 className={itemStyles.cardTitle}>{props.title}</h1>
                  {
                    props.ja.split('\n').map((line, i) => 
                    <p className={itemStyles.cardDesc} key={i}>
                              {line}
                          </p>)
                  }
              </div>
              <div className={itemStyles.cardImage}>
                  <Img 
                  fluid={data[index].childImageSharp.fluid} 
                  className={itemStyles.image}/>
              </div>

          </div>
        )
      }
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
                  props.ja.split('\n').map((line, i) => 
                  <p className={itemStyles.cardDesc} key={i}>
                            {line}
                        </p>)
                }
            </div>
        </div>
      )
    }
    else {
      // mobile
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
                  props.ja.split('\n').map((line, i) => 
                  <p className={itemStyles.cardDesc} key={i}>
                            {line}
                        </p>)
                }
            </div>
        </div>
      )
    }

}



export default withSizes(mapSizesToProps)(Item);