import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function NewSingleRowItem({header, moreContents, content, perInstance}) {

    const categoryCounter = content.length;
    const displayCat = parseInt(perInstance)
    const actualSpan = categoryCounter/displayCat;
    const maxInstance = Math.ceil(actualSpan);
   
    const chunks = (a, size) =>
    Array.from(
        new Array(Math.ceil(a.length / size)),
        (_, i) => a.slice(i * size, i * size + size)
    );

    const subArrays = chunks(content, displayCat)

    const [instance, setInstance] = useState(0);
    const [current, setCurrent] = useState(0);
    const [leftActive, setLeftActive] = useState('#e9f5f9');
    const [rightActive, setRightActive] = useState('gray');

    let displacement = 90;
    
    useEffect(() => {
        setCurrent(instance * displacement)
        instance === 0 ? setLeftActive('#e9f5e9') : setLeftActive('gray')
        instance === -(maxInstance - 1) ? setRightActive('#e9f5e9') : setRightActive('gray')
    }, [instance, displacement, rightActive, leftActive, maxInstance])

    const styling = {
        gridTemplateColumns: `repeat(${maxInstance}, 100%)`,
        transform: `translateX(${current}%)`
    }

    const perSection = {
        gridTemplateColumns: `repeat(${displayCat}, 1fr)`,
    }

    return (
        <SingleRow>
            <SectionTitle>
                <h6>{header}</h6>
                <a href={moreContents} alt=''>View All</a>
            </SectionTitle>
            <SectionBody>
                <LeftArrow style={{color: leftActive}} onClick={() => {
                        instance < 0 ? setInstance(instance + 1) : setInstance(0);
                    }
                }>
                    <i className="fas fa-chevron-left"></i>
                </LeftArrow>
                <ContentHolder>
                    <ContentContainer style={styling}>
                        {subArrays.map((cont, index) => (
                            <PerSection key={index} style={perSection}>
                                {cont.map((el, ind) => (
                                    <a href={el.link} key={ind}>
                                        <ContentTiles>
                                            <ThumbnailSec>
                                                <img src={el.thumb} alt=''></img>
                                            </ThumbnailSec>
                                            <Texts>
                                                <Title>{el.name}</Title>
                                                <p>{el.category}</p>
                                                <p>{el.soldBy}</p>
                                                <p>৳{el.price}</p>
                                            </Texts>
                                        </ContentTiles>
                                    </a>
                                ))}
                            </PerSection>
                        ))}
                    </ContentContainer>
                </ContentHolder>
                <RightArrow style={{color: rightActive}} onClick={() => {
                        instance > -(maxInstance-1) ? setInstance(instance - 1) : setInstance(-(maxInstance-1))
                    }
                }>
                    <i className="fas fa-chevron-right"></i>
                </RightArrow>
            </SectionBody>
        </SingleRow>
    );
}

export default NewSingleRowItem;

const SingleRow = styled.div`
    display: flex;
    flex-direction: column;
`

const SectionTitle = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0px 30px;
    border-bottom: 5px solid rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
    
    h6 {
        border-bottom: 5px solid #00a99d;
        position: absolute;
        bottom: -5px;
        @media (max-width: 2570px) {
            font-size: 1.5rem
        }
        @media (min-width: 701px) and (max-width: 1500px) {
            font-size: 1.1rem
        }
        @media (min-width: 550px) and (max-width: 700px) {
            font-size: 1.0rem
        }
        @media (min-width: 400px) and (max-width: 549px) {
            font-size: 0.9rem
        }
        @media (max-width: 399px) {
            font-size: 0.7rem
        }
    }

    a {
        position: absolute;
        text-decoration: none;
        bottom: 5px;
        right: 0;
        @media (max-width: 2570px) {
            font-size: 1.5rem
        }
        @media (min-width: 701px) and (max-width: 1500px) {
            font-size: 1.1rem
        }
        @media (min-width: 550px) and (max-width: 700px) {
            font-size: 1.0rem
        }
        @media (min-width: 400px) and (max-width: 549px) {
            font-size: 0.8rem
        }
        @media (max-width: 399px) {
            font-size: 0.6rem
        }
    }
`

const SectionBody = styled.div`
    display: grid;
    grid-template-columns: 4% 90.5% 4%;
    margin: 50px 0px;
    height: 100%;
    a{
        text-decoration: none;
    }
    @media (min-width: 550px) and (max-width: 700px) {
        margin: 30px 0px;
    }
    @media (min-width: 400px) and (max-width: 549px) {
        margin: 30px 0px;
    }
    @media (max-width: 399px) {
        margin: 30px 0px;
    }
`

const LeftArrow = styled.div`
    font-size: 50px;
    padding: 10px;
    text-align: left;
    cursor: pointer;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background-color: #fff;
    @media (min-width: 550px) and (max-width: 700px) {
        font-size: 30px;
        padding: 5px;
    }
    @media (min-width: 400px) and (max-width: 549px) {
        font-size: 30px;
        padding: 5px;
    }
    @media (max-width: 399px) {
        font-size: 30px;
        padding: 5px;
    }
    i {
        margin-left: 10px;
        width: 100%;
    }
`
const RightArrow = styled.div`
    font-size: 50px;
    text-align: right;
    padding: 10px;
    cursor: pointer;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background-color: #fff;
    @media (min-width: 550px) and (max-width: 700px) {
        font-size: 30px;
        padding: 5px;
    }
    @media (min-width: 400px) and (max-width: 549px) {
        font-size: 30px;
        padding: 5px;
    }
    @media (max-width: 399px) {
        font-size: 30px;
        padding: 5px;
    }
    i {
        margin-right: 10px;
        width: 100%;
    }
`
const ContentHolder = styled.div`
    width: 100%;
    overflow-x: hidden;
`
const ContentContainer = styled.div`
    display: grid;
    transition: 0.6s ease-in;
`
const PerSection = styled.div`
    display: grid;
`
const ContentTiles = styled.div`
    display: grid;
    grid-template-rows: 70% 30%;
    text-align: center;
    align-items: left;
    color: black;
    margin: 0px 20px;
    width: 100%;
    cursor: pointer;
    @media (min-width: 550px) and (max-width: 700px) {
        grid-template-rows: 70% 30%;
        margin: 0px 20px;
    }
    @media (min-width: 400px) and (max-width: 549px) {
        grid-template-rows: 60% 40%;
        margin: 0px 20px;
    }
    @media (max-width: 399px) {
        grid-template-rows: 70% 30%;
        margin: 0px 20px;
    }
`
const ThumbnailSec = styled.div`
    position: relative;
    text-align: left;
    object-fit: contain;
    margin: 10px;
    img {
        max-width: 100%;
        max-height: 100%;
        box-shadow: 0px 2px 8px #000000;
    }
`
const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    line-height: 5%;
    @media (max-width: 2570px) {
        line-height: 5%;
        margin: 25px 0px 10px 10px;
        font-size: 20px;
    }
    @media (min-width: 1501px) and (max-width: 1800px) {
        line-height: 5%;
        margin: 15px 0px 10px 10px;
        font-size: 17px;
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
    }

`
const Title = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-top: 15px;
    @media (max-width: 2570px) {
        margin-bottom: 15px;
        font-size: 20px;
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
    }
`