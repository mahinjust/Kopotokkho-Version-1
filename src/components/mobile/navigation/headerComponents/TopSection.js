import React, {useState} from 'react';
import styled from 'styled-components';
import Kopotakkho from '../../../static/KE_white.svg'
import CartBtn from '../../../navigation/topnavElements/CartBtn'
import LogInBtn from '../../../navigation/topnavElements/LogInBtn'
import WishListBtn from '../../../navigation/topnavElements/WishlistBtn'

function TopSection() {
    let user = 'user';

    const navLinks = [
        {title: 'Home', link: '/home', icon: 'fa-solid fa-house'},
        {title: 'Shop', link: '/shop', icon: 'fas fa-shopping-cart'},
        {title: 'Pre Order', link: '/preorder', icon: 'fas fa-credit-card'},
        {title: 'Find Us', link: '/findus', icon: 'fab fa-periscope'},
        {title: 'Store List', link: '/storelist', icon: 'fas fa-clipboard-list'},
        {title: 'Vendor Sign up', link: '/vendorsignup', icon: 'fa-solid fa-store'},
        {title: 'About Us', link: '/aboutus', icon: 'fa-solid fa-circle-question'},
        {title: 'Contact Us', link: '/contactus', icon: 'fas fa-address-book'}
    ]

    const [visible, setVisible] = useState(100);

  return (
    <MobileTopSection>
        <Logo>
            <Menu>
                <i className="fa fa-bars" onClick={() => {
                    visible === 100 ?
                    setVisible(0) :
                    setVisible(100)
                    }}>
                </i>
                <MenuDiv style={{transform: `translateX(-${visible}%)`}} onClick={() => setVisible(100)}>
                    <WorkingPortion>
                        <ClosingDiv  onClick={() => setVisible(100)}>
                            <i className="fas fa-times"></i>
                        </ClosingDiv>
                        {navLinks.map((item, index) =>(
                            <Nav key={index}>
                                <a href={item.link}>
                                    <i className={item.icon}></i>
                                    <p>{item.title}</p>
                                </a>
                            </Nav>
                        ))}
                    </WorkingPortion>
                </MenuDiv>
            </Menu>
            <img src={Kopotakkho} alt="" />
        </Logo>
        <UserSec>
                <LogInBtn />
                {user==='user' && (<WishListBtn />)}
                <CartBtn />
        </UserSec>
    </MobileTopSection>
  );
}

export default TopSection;

const MobileTopSection = styled.div`
    width: 100%;
    background-color: #00A99D;
    display: grid;
    grid-template-columns: 50% 50%;
    
    @media (min-width: 400px) and (max-width: 549px) {
        grid-template-columns: 40% 60%;
    }
    @media (max-width: 399px) {
        grid-template-columns: 40% 60%;
    }
`

const Logo = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin-left: 50px;
        height: 50%;
        @media (min-width: 550px) and (max-width: 700px) {
            margin-left: 20px;
        }
        @media (min-width: 400px) and (max-width: 549px) {
            margin-left: 15px;
        }
        @media (max-width: 399px) {
            margin-left: 5px;
        }
    }
`

const Menu = styled.div`
    color: white;
    font-size: 2.7rem;
    padding: 10px;
    i{
        @media (min-width: 550px) and (max-width: 700px) {
            font-size: 2.3rem;
            padding: 5px;
        }
        @media (min-width: 400px) and (max-width: 549px) {
            font-size: 1.8rem;
            padding: 5px;
        }
        @media (max-width: 399px) {
            font-size: 1.5rem;
            padding: 0px;
        }
    }
`

const MenuDiv = styled.div`
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    height: 100vh;
    left: 0;
    z-index: 45;
    transition: all 0.4s ease-in;
    color: black;
`

const WorkingPortion = styled.div`
    width: 60vw;
    position: fixed;
    background-color: white;
    height: 100vh;
    padding-top: 25px;
    left: 0;
    z-index: 46;
    color: black;
`

const ClosingDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    z-index: 99;
    padding: 10px;
    @media (min-width: 550px) and (max-width: 700px) {
        font-size: 1.2rem;
    }
    @media (min-width: 400px) and (max-width: 549px) {
        font-size: 1rem;
    }
    @media (max-width: 399px) {
        margin: 2px;
        font-size: 0.9rem;
    }
    i{
        @media (min-width: 550px) and (max-width: 700px) {
            font-size: 1.2rem;
        }
        @media (min-width: 400px) and (max-width: 549px) {
            font-size: 1rem;
        }
        @media (max-width: 399px) {
            font-size: 0.9rem;
        }
    }
`

const Nav = styled.div`
    margin: 20px 0px;
    padding: 20px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    
    @media (min-width: 550px) and (max-width: 700px) {
        margin: 10px 0px;
        padding: 10px 0px;
    }
    @media (min-width: 400px) and (max-width: 549px) {
        margin: 7px 0px;
        padding: 7px 0px;
    }
    @media (max-width: 399px) {
        margin: 5px 0px;
        padding: 5px 0px;
    }
    a{
        text-decoration: none;
        color: black;
        font-size: 1.65rem;
        width: 100%;
        display: grid;
        grid-template-columns: 20% 80%;
        text-align: center;
        @media (min-width: 550px) and (max-width: 700px) {
            font-size: 1.2rem;
        }
        @media (min-width: 400px) and (max-width: 549px) {
            font-size: 1rem;
        }
        @media (max-width: 399px) {
            font-size: 0.9rem;
        }
        i{ 
            @media (min-width: 550px) and (max-width: 700px) {
                font-size: 1.2rem;
            }
            @media (min-width: 400px) and (max-width: 549px) {
                font-size: 1rem;
            }
            @media (max-width: 399px) {
                font-size: 0.9rem;
            }
        }
        p{
            text-align: left;
        }
    }
`

const UserSec = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    color: white;
    @media (min-width: 550px) and (max-width: 700px) {
        font-size: 0.9rem;
    }
    @media (min-width: 400px) and (max-width: 549px) {
        font-size: 0.6rem;
    }
    @media (max-width: 399px) {
        font-size: 0.6rem;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        right: 0;
    }
    i{
        @media (min-width: 400px) and (max-width: 549px) {
            font-size: 1.3rem;
        }
        @media (max-width: 399px) {
            font-size: 1.1rem;
        }
    }
`
