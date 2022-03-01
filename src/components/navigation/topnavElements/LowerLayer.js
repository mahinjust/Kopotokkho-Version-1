import React, { useState } from 'react'
import styled from 'styled-components'

function LowerLayer() {
    let x = '-500px';
    const [state, setState] = useState(x);

    const navLinks = [
        {title: 'Home', link: '#'},
        {title: 'Shop', link: '#'},
        {title: 'Pre Order', link: '#'},
        {title: 'Find Us', link: '#'},
        {title: 'Store List', link: '#'},
        {title: 'Vendor Sign up', link: '#'},
        {title: 'About Us', link: '#'},
        {title: 'Contact Us', link: '#'}
    ]

    const productCat = [
        'Router',
        'ONU',
        'Patch Cord',
        'Splitter',
        'Internet Cable',
        'Ethernet Switch',
        'Internet Accessories',
        'Network Switch',
        'Joint Box',
        'Node',
        'Dish Accessories',
        'Monitor',
        'Mobile Accessories',
        'Smart TV',
        'Smart TV Box',
        'Camera',
        'Sound Box',
        'Smart Watch',
        'Others'
    ]



    return (
        <NavLink>
            <CategoryPanel onClick={() => {
                    if(state==='-500px') x='0px';
                    if(state==='0px') x='-500px';
                    setState(x)
                    console.log(x);
                    console.log(state);
                }}>
                <CategoryButton>
                    <p>Shop by Department</p>
                    <i className="fa fa-bars"></i>
                </CategoryButton>
                <CategoryPane style={{ left: state }}>
                    <i className="fas fa-times" onClick={() => {
                        if(state==='500px') x='0px';
                        if(state==='0px') x='500px';
                        setState(x)
                        console.log(x);
                        console.log(state);
                    }}></i>
                    <p><b>Categories</b></p>
                    <Categories>
                        {productCat.map((prod, index) => (
                            <p key={index}>{prod}</p>
                        ))}
                    </Categories>
                </CategoryPane>
            </CategoryPanel>
            <MainNav>
                {navLinks.map((link, index) => (
                    <a href={link.link} key={index}>{link.title}</a>
                ))}
            </MainNav>
        </NavLink>
    )
}

export default LowerLayer

const NavLink = styled.div`
    display: flex;
    width: 100%;
    border: none;
    box-shadow: 0px 2px 8px #000000;
`

const CategoryPanel = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
`

const CategoryButton = styled.div`
    display: flex;
    margin: 10px 30px;
    cursor: pointer;
    width: 100%;
    align-items: center;
    p {
        margin-right: 30px;
        justify-self: flex-start;
    };
    i{
        justify-self: flex-end;
        font-size: 20px;
        margin-left: 20px;
    }

    @media (min-width: 1000px) and (max-width: 1335px) {
        font-size: 12px;
        i{
            margin-left: -20px;
        }
    }
    
    @media (min-width: 1336px) and (max-width: 1500px) {
        font-size: 12px;
        i{
            margin-left: -20px;
        }
    }
`

const CategoryPane = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: -500px;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 2px 0px 8px #000000;
    color: black;
    top: 0;
    transition: 0.5s ease-in;
    z-index: 999;
    i{
        text-align: right;
        font-size: 24px;
        padding: 5px 10px;
    };
    p {
        margin: 10px 100px 0px 30px;
        font-size: 14px;
        font-weight: lighter;
    }
`

const Categories = styled.div`
    
`


const MainNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-right: 15%;
    a{
        color: black;
        margin: 0 20px;
    }
    
    @media (min-width: 1000px) and (max-width: 1335px) {
        font-size: 9px;
        margin-right: 0%;
    }
    @media (min-width: 1336px) and (max-width: 1650px) {
        font-size: 12px;
        margin-right: 5%;
    }
`
