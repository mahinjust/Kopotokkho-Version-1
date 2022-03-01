import React from 'react'
import styled from 'styled-components'
import Kopotakkho from '../static/KE_black.svg'

import Facebook from '../static/Other_Logos/Facebook.svg'
import Instagram from '../static/Other_Logos/Instagram.svg'
import Pinterest from '../static/Other_Logos/Pinterest.svg'
import Tiktok from '../static/Other_Logos/Tiktok.svg'
import Twitter from '../static/Other_Logos/Twitter.svg'
import Whatsapp from '../static/Other_Logos/Whatsapp.svg'
import Youtube from '../static/Other_Logos/Youtube.svg'

import BKash from '../static/Other_Logos/bKash.svg'
import Rocket from '../static/Other_Logos/Rocket.svg'
import Visa from '../static/Other_Logos/Visa.svg'
import Mastercard from '../static/Other_Logos/Mastercard.svg'

function BottomBar() {
    return (
        <FooterSec>
            <BotBar>
                <CompanyInfo>
                    <img src={Kopotakkho} alt="" />
                    <p><i class="fas fa-home"></i>38 M.K. Road, opposite of Jess Tower, Jashore Sadar, Jashore</p>
                    <p><i class="fas fa-phone-alt"></i>0421-63337, 0421-63252</p>
                    <p><i class="far fa-envelope"></i>kopotakkhoenterprise@gmail.com</p>
                </CompanyInfo>
                <Info>
                    <h3>Information</h3>
                    <p>About Us</p>
                    <p>Store Location</p>
                    <p>Contact Us</p>
                    <p>Shipping and Details</p>
                    <p>Latest News</p>
                    <p>Sitemap</p>
                </Info>
                <Services>
                    <h3>Our Service</h3>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Customer Service</p>
                    <p>Delivery Information</p>
                    <p>Payments</p>
                </Services>
                <Accounts>
                    <h3>Account Information</h3>
                    <p>My Account</p>
                    <p>My Cart</p>
                    <p>Checkout</p>
                    <p>My Wishlist</p>
                    <p>Track Order</p>
                </Accounts>
                <Newsletters>
                    <h3>Newsletter</h3>
                    <p>Subscribe to our mailing channel and follow us on social media platforms listed below.</p>
                    <SocialIcons>
                        <img src={Facebook} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Pinterest} alt="" />
                        <img src={Tiktok} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Whatsapp} alt="" />
                        <img src={Youtube} alt="" />
                    </SocialIcons>
                </Newsletters>
            </BotBar>
            <CopyrightSec>
                <p>Kopotakkho Electronics © 2021 By Kopotakkho Electronics All Rights Reserved.</p>
                <PaymentIcons>
                    <img src={BKash} alt="" />
                    <img src={Rocket} alt="" />
                    <img src={Visa} alt="" />
                    <img src={Mastercard} alt="" />
                </PaymentIcons>
            </CopyrightSec>
        </FooterSec>
    )
}

export default BottomBar
const FooterSec = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
`
const BotBar = styled.div`
    width: 100%;
    background-color: #00a99d;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    color: white;
    padding: 30px;
`
const CompanyInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    img {
        height: 80px;
    }
    p {
        margin: 10px 50px;
    }
    i {
        margin-right: 10px;
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    h3 {
        margin: 10px 20px;
    }
    p {
        margin: 10px 20px;
    }
`
const Services = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    h3 {
        margin: 10px 20px;
    }
    p {
        margin: 10px 20px;
    }
`
const Accounts = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
h3 {
    margin: 10px 20px;
}
p {
    margin: 10px 20px;
}
`
const Newsletters = styled.div`
display: flex;
flex-direction: column;
width: 300px;
flex-wrap: wrap;
h3 {
    margin: 10px 20px;
}
p {
    margin: 10px 20px;
}
`
const SocialIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 20px;
    img {
        height: 40px;
        margin: 5px;
    }
`
const CopyrightSec = styled.div`
    padding: 5px;
    display: flex;
    justify-content: space-between;
    background-color: #191c38;
    align-items: center;
    p {
        margin-left: 50px;
        color: white;
    }
`
const PaymentIcons = styled.div`
    display: flex;
    margin-right: 150px;
    img {
        margin: 5px;
        hright: 30px;
    }
`