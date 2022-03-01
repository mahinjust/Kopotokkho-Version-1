import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

function UpperLayer() {
    const extraLinks = [
        {text: 'Welcome to our store!', link: '#', icon: ''},
        {text: 'FAQ', link: '#', icon: 'far fa-clone'},
        {text: 'Contact Us', link: '#', icon: 'far fa-envelope'}
    ]
    return (
        <UpperSec>
            <ExtraLinks>
                {extraLinks.map((extraLink, index) => (
                    <ExtLinkTile key={index}>
                        <a href={extraLink.link}>
                            <p><span><i className={extraLink.icon}></i></span>{extraLink.text}</p>
                        </a>
                    </ExtLinkTile>  
                ))}
            </ExtraLinks>
        </UpperSec>
    )
}

export default UpperLayer

const UpperSec = styled.div`
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    background-color: #03756a;
    height: 40px;
`

const ExtraLinks = styled.div`
    top: 0;
    width: 45%;
    height: 100%;
    display: flex;
`

const ExtLinkTile = styled.div`
    display: flex;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    a{
        padding: 5px 15px;
        align-self: flex-end;
    }
    p{
        font-size: 12px;
        color: white;
    }
    i{
        margin: 0px 5px;
    }
`