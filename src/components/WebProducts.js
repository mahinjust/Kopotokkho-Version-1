import React from 'react'
import styled from 'styled-components';
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
import F11 from '../images/f11.jpg'
import F12 from '../images/f12.jpg'
import NewSingleRowItem  from './templates/NewSingleRowItem';

const ProductPage = styled.div`
  margin: 5%;
`
const RelatedProducts = styled.div``
const RecentProducts = styled.div``

function WebProducts() {
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
        { name: 'Solitine SOL1351-1GE', category: 'ONU', soldBy: 'Kopotakkho Electronics', price: 1500, thumb: F10, link: '#' },
        { name: 'REDMI 30W Home Theater', category: 'TV Bar Speaker', soldBy: 'Kopotakkho Electronics', price: 48000, thumb: F11, link: '#' },
        { name: 'MI Desktop Monitor 23.8" Full HD', category: 'Monitor', soldBy: 'Kopotakkho Electronics', price: 1200, thumb: F12, link: '#' },
    ]  
  return (
    <ProductPage>
    <RelatedProducts>
        <NewSingleRowItem header={'Related Products'} moreContents={'www.google.com'} content={products} perInstance={3}/>
    </RelatedProducts>
    <br/>
    <RecentProducts>
        <NewSingleRowItem header={'Recent Products'} moreContents={'www.google.com'} content={products} perInstance={3}/>
    </RecentProducts>
    </ProductPage>
  )
}

export default WebProducts