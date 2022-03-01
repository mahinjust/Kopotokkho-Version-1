import React, {useState} from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

function WishlistBtn() {
    let x = 'none';
    const [state, setState] = useState(x)

    const wishlistContents = [
        {title: 'Invidunt nonumy kasd et aliquyam sanctus, dolore rebum duo dolore.', link: '#'},
        {title: 'Invidunt nonumy kasd et aliquyam sanctus, dolore rebum duo dolore.', link: '#'},
        {title: 'Invidunt nonumy kasd et aliquyam sanctus, dolore rebum duo dolore.', link: '#'},
        {title: 'Invidunt nonumy kasd et aliquyam sanctus, dolore rebum duo dolore.', link: '#'},
        {title: 'Invidunt nonumy kasd et aliquyam sanctus, dolore rebum duo dolore.', link: '#'},
        {title: 'Invidunt nonumy kasd et aliquyam sanctus, dolore rebum duo dolore.', link: '#'},
        {title: 'Invidunt nonumy kasd et aliquyam sanctus, dolore rebum duo dolore.', link: '#'},
        {title: 'Invidunt nonumy kasd et aliquyam sanctus, dolore rebum duo dolore.', link: '#'}
    ]
    
    return (
        <WishList>
            <WishlistIcon>
                <i className="far fa-heart" onClick={() => {
                    if(state==='none') x='flex';
                    if(state==='flex') x='none';
                    setState(x)
                    console.log(x);
                    console.log(state);
                }}></i>
                <div></div>
            </WishlistIcon>
            <WishlistItem style={{display: state}}>
                {wishlistContents.map((wishlistItem, index) => (
                    <a href={wishlistItem.link} key={index}>{wishlistItem.title}</a> 
                ))}
            </WishlistItem>
        </WishList>
    )
}

export default WishlistBtn

const WishList = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    margin: 20px;
`

const WishlistIcon = styled.div`
    padding: 0px 10px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    i {
        font-size: 28px;
    };
    div {
        height: 15px;
        width: 15px;
        border-radius: 10px;
        background-color: red;
        position: absolute;
        top: -5px;
        right: 0px;
    }
`

const WishlistItem = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 350px;
    top: 35px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 8px #000000;
    z-index: 999;
    a {
        color: black;
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    @media (min-width: 1336px) and (max-width: 1500px) {
        width: 250px;
        a {
            padding: 10px;
            font-size: 12px;
        }
    }
`