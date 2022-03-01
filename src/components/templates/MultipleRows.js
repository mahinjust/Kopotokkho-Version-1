import React from 'react'
import styled from 'styled-components'

function MultipleRows({data, perRow}) {
  return (
    <ContentTiles style={{gridTemplateColumns: `repeat(${perRow}, 1fr)`}}>
        {data.map((item, index) =>(
            <div key={index}>
            <ThumbnailSec>
                <img src={item.thumb} alt=''></img>
            </ThumbnailSec>
            <Texts>
            <Title>{item.name}</Title>
            <p>{item.category}</p>
            <p>{item.soldBy}</p>
            <p>৳{item.price}</p>
            </Texts>
            </div>
            ))} 
    </ContentTiles>
  )
}

export default MultipleRows

const ContentTiles = styled.div`
display: grid;
text-align: center;
align-items: left;
color: black;
width: 100%;
cursor: pointer;
@media (min-width: 550px) and (max-width: 700px) {
}
@media (min-width: 400px) and (max-width: 549px) {
}
@media (max-width: 399px) {
}`

const ThumbnailSec = styled.div`
position: relative;
text-align: left;
object-fit: contain;
margin: 10px;
img {
    max-width: 100%;
    max-height: 100%;
    box-shadow: 0px 2px 8px #000000;
}`
const Texts = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: left;
line-height: 5%;
@media (max-width: 2570px) {
    line-height: 10%;
    margin: 25px 0px 10px 10px;
    font-size: 22px;
}
@media (min-width: 1501px) and (max-width: 1800px) {
    line-height: 5%;
    margin: 15px 0px 10px 10px;
    font-size: 12px;
} 
@media (min-width: 1361px) and (max-width: 1500px) {
    line-height: 5%;
    margin: 15px 0px 10px 10px;
    font-size: 12px;
}   
@media (min-width: 768px) and (max-width: 1360px){
    margin: 0px 0px 10px 10px;
    font-size: 12px;
}
@media (min-width: 550px) and (max-width: 700px) {
    margin: 0px 0px 10px 10px;
    font-size: 12px;
}
@media (min-width: 400px) and (max-width: 549px) {
    margin: 0px 0px 10px 10px;
    font-size: 10px;
}
@media (max-width: 399px) {
    margin: 0px 0px 10px 10px;
    font-size: 8.5px;
}`
const Title = styled.div`
font-weight: bold;
font-size: 20px;
margin-top: 15px;
@media (max-width: 2570px) {
    margin-bottom: 15px;
    font-size: 23px;
}
@media (min-width: 1361px) and (max-width: 1700px) {
    margin-bottom: 15px;
    font-size: 16px;
}
@media (min-width: 780px) and (max-width: 1360px){
    font-size: 13px;
    margin-bottom: 15px;
}
@media (min-width: 550px) and (max-width: 770px) {
    margin-bottom: 15px;
    font-size: 11px;
}
@media (min-width: 400px) and (max-width: 549px) {
    margin-bottom: 15px;
    font-size: 10px;
}
@media (max-width: 399px) {
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 7.5px;
}
@media (max-width: 299px) {
    margin-top: 2px;
    margin-bottom: 15px;
    font-size: 7px;
}`