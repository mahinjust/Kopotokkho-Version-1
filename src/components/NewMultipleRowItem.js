import React from 'react'
import styled from 'styled-components'
import F1 from '../images/f1.jpg'
import F2 from '../images/f2.jpg'
import F3 from '../images/f3.jpg'
import F4 from '../images/f4.jpg'
import F5 from '../images/f5.jpg'
import F6 from '../images/f6.jpg'
import F7 from '../images/f7.jpg'
import F8 from '../images/f8.jpg'
import F9 from '../images/f9.jpg'
import F10 from '../images/f10.jpg'

const ContentTiles = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
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
    line-height: 5%;
    margin: 25px 0px 10px 10px;
    font-size: 24px;
}
@media (min-width: 1361px) and (max-width: 1500px) {
    line-height: 5%;
    margin: 15px 0px 10px 10px;
    font-size: 14px;
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
    font-size: 25px;
}
@media (min-width: 1361px) and (max-width: 1700px) {
    margin-bottom: 15px;
    font-size: 16px;
}
@media (min-width: 780px) and (max-width: 1360px){
    font-size: 15px;
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

function NewMultipleRowItem() {

    const products = [
        { name: 'C-DATA FD1104S-B0', category: 'OLT', soldBy: 'Kopotakkho Electronics', price: 48000, thumb: F1, link: '#' },
        { name: 'C-DATA FD511G-E-Z320', category: 'ONU', soldBy: 'Kopotakkho Electronics', price: 1200, thumb: F2, link: '#' },
        { name: 'D-Link DIR-650IN', category: 'Router', soldBy: 'Kopotakkho Electronics', price: 1800, thumb: F3, link: '#' },
        { name: 'CISCO N906', category: 'SFP', soldBy: 'Kopotakkho Electronics', price: 4200, thumb: F4, link: '#' },
        { name: 'PPX FC/LC 3mm/5mtr', category: 'Fiber Optic Cable', soldBy: 'Kopotakkho Electronics', price: 350, thumb: F5, link: '#' },
        { name: 'TP-Link Archer C6 AC1200', category: 'Router', soldBy: 'Kopotakkho Electronics', price: 3600, thumb: F6, link: '#' },
        { name: 'EXFO FiberBasix 50', category: 'OTDR', soldBy: 'Kopotakkho Electronics', price: 63000, thumb: F7, link: '#' },
        { name: 'Haylou LS05', category: 'Smartwatch', soldBy: 'Kopotakkho Electronics', price: 2500, thumb: F8, link: '#' },
        { name: 'Tenda AC8 AC1200', category: 'Router', soldBy: 'Kopotakkho Electronics', price: 3200, thumb: F9, link: '#' },
        { name: 'Solitine SOL1351-1GE', category: 'ONU', soldBy: 'Kopotakkho Electronics', price: 1500, thumb: F10, link: '#' }
    ] 
  return (
        <ContentTiles>
            {products.map((item, index) =>(
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

export default NewMultipleRowItem