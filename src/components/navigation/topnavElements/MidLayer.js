import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

// import Kopotakkho from '../../static/Kopotakkho.png'
import Kopotakkho from '../../static/KE_white.svg'
import CartBtn from './CartBtn'
import LogInBtn from './LogInBtn'
import WishListBtn from './WishlistBtn'

function MidLayer() {
    const user = 'user'
    return (
        <MidSec>
            <Logo>
                <img src={Kopotakkho} alt="" />
            </Logo>
            <SearchSec>
                <input type="text" />
                <SearchIcon>
                    <i className="fa fa-search"></i>
                </SearchIcon>
            </SearchSec>
            <UserSec>
                <LogInBtn />
                {user==='user' && (<WishListBtn />)}
                <CartBtn />

            </UserSec>
        </MidSec>
    )
}

export default MidLayer

const MidSec = styled.div`
    height: 100px;
    background-color: #00a99d;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
`

const Logo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    img {
        margin-left: 75px;
        height: 70px;
    }
`

const SearchSec = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 15%;
    input {
        height: 40px;
        width: 90%;
        border: none;
        border-radius: 10px;
    }
`

const SearchIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #cccccc;
    height: 40px;
    color: black;
    border-radius: 10px;
    margin-left: -20px;
    i {
        font-size: 26px;
        padding: 5px 7px;
    }
`

const UserSec = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    
    @media (min-width: 1336px) and (max-width: 1500px) {
        a {
            font-size: 12px;
        }
    }
`