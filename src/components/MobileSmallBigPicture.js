import React, { useState } from 'react'
import styled from 'styled-components';
import F1 from '../images/f1.jpg'
import F2 from '../images/f2.jpg'
import F3 from '../images/f3.jpg'
import F4 from '../images/f4.jpg'
import F5 from '../images/f5.jpg'
import F6 from '../images/f6.jpg'
import F7 from '../images/f7.jpg'

function MobileSmallBigPicture() {
    const productpic = [
        { thumb: F1},
        { thumb: F2},
        { thumb: F3},
        { thumb: F4},
        { thumb: F5},
        { thumb: F6},
        { thumb: F7},
    ]

    const [imgLink, setImgLink] = useState(productpic[0].thumb)
  return (
      <WebSmallBigPic>
          <Thumbnails>
              {productpic.map((el, index) => (
                  <ImageContainer key={index}>
                      <img src={el.thumb} onClick={(e) => {
                          setImgLink(e.currentTarget.src)
                      }} alt='' />
                  </ImageContainer>
              ))}
          </Thumbnails>
          <MainImage>
              <img src={imgLink} alt='' />
          </MainImage>
      </WebSmallBigPic>
  )
}

export default MobileSmallBigPicture

const WebSmallBigPic = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
`
const Thumbnails = styled.div`
    object-fit: contain;
    width: 100%;
    img{
        width: 150%;
    }
`
const MainImage = styled.div`
    object-fit: cover;
    margin-left: 10%;
    img{
        width: 220%;
    }
`
const ImageContainer = styled.div`
    margin-bottom: 15%;
`