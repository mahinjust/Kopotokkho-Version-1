import React, { useState } from 'react';
import styled from 'styled-components';
import { CCard } from '@coreui/react';
import { CCardBody } from '@coreui/react';
import { FavoriteBorderOutlined } from "@material-ui/icons";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Add, Remove } from "@material-ui/icons";
import { category } from "../data";
import Products from '../components/Products';
import MobileSmallBigPicture from '../components/MobileSmallBigPicture';
import LinkHeader from '../components/templates/LinkHeader';

const Container = styled.div``;
const ProductContainer = styled.div`
margin: 6%;
`;
const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
`;
const KopotokkhoProducts = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;
const SmallKopotokkhoProducts = styled.div``;
const MainProductDescription = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 300px) {
  }
  @media (min-width: 301px) and (max-width: 450px) {
  }
  @media (min-width: 451px) and (max-width: 600px) {
  }
  @media (min-width: 601px) and (max-width: 800px) { 
  }
`;
const List = styled.div`
    margin-left: 25%;
    padding: 0;
    text-align: left;
    font-weight: bold;
    cursor: pointer;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.div`
    width: 20%;
    @media (max-width: 300px) {
      width: 60%;
      font-size: 10px;
    }
    @media (min-width: 301px) and (max-width: 450px) {
      width: 60%;
      font-size: 10px;
    }
    @media (min-width: 451px) and (max-width: 600px) {
      width: 60%;
      font-size: 10px;
    }
    @media (min-width: 601px) and (max-width: 800px) {
      width: 60%;
      font-size: 10px;
    }
`;
const ProductAmountContainer = styled.div`
    display:flex;
    align-items: center;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    border: 1px solid black;
    width: 20px;
    text-align: center;
    @media (max-width: 300px) {
        font-size: 11px;
    }
    @media (min-width: 301px) and (max-width: 450px) {
        font-size: 12px;
    }
    @media (min-width: 451px) and (max-width: 600px) {
        font-size: 12px;
    }
    @media (min-width: 601px) and (max-width: 800px) {
        font-size: 15px;
    }
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    @media (max-width: 300px) {
        font-size: 15px;
    }
    @media (min-width: 301px) and (max-width: 450px) {
        font-size: 12px;
    }
    @media (min-width: 451px) and (max-width: 600px) {
        font-size: 13px;
    }
    @media (min-width: 601px) and (max-width: 800px) {
        font-size: 15px;
    }
`;
const Cart = styled.div`
    display: flex;
    font-size: 15px;
    flex-wrap: wrap;
    font-weight: bold;
    @media (max-width: 300px) {
        font-size: 12px;
    }
    @media (min-width: 301px) and (max-width: 450px) {
        font-size: 12px;
    }
    @media (min-width: 451px) and (max-width: 600px) {
        font-size: 13px;
    }
    @media (min-width: 601px) and (max-width: 800px) {
        font-size: 15px;
    }
`;
const Button1 = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: #566885;
    color: white;
    text-align: center;
    width: 50%; 
    cursor: pointer;
    @media (max-width: 300px) { 
      width: 50%;  
    }
    @media (min-width: 301px) and (max-width: 374px) { 
      width: 50%;  
    }
    @media (min-width: 375px) and (max-width: 424px) {
      width: 50%;  
    }
    @media (min-width: 425px) and (max-width: 800px) { 
    }
`;
const Button2 = styled.button`
    border: none;
    padding: 10px 20px; 
    margin-top: 5px;
    text-align: center;
    background-color: #0d1726;
    color: white;
    cursor: pointer;
    width: 50%; 
    @media (max-width: 300px) {
      width: 50%;  
    }
    @media (min-width: 301px) and (max-width: 374px) {
      width: 50%;  
    }
    @media (min-width: 375px) and (max-width: 424px) { 
      width: 50%;  
    }
    @media (min-width: 425px) and (max-width: 800px) {  
      width: 50%;  
    }
`;
const MenuItem1 = styled.div`
    font-size: 10px;
    cursor: pointer;
    text-align: center;
`;
const MenuItem2 = styled.div`
    font-size: 10px;
    text-align: center;
    cursor: pointer;
`;
const ProductName = styled.span`
    font-size: 30px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    @media (max-width: 300px) {
        font-size: 15px;
    }
    @media (min-width: 301px) and (max-width: 450px) {
        font-size: 15px;
    }
    @media (min-width: 451px) and (max-width: 600px) {
        font-size: 16px;
    }
    @media (min-width: 601px) and (max-width: 800px) {
        font-size: 20px;
    }
`;
const ProductVendor = styled.span`
    font-size: 30px;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    @media (max-width: 300px) {
        font-size: 10px;
    }
    @media (min-width: 301px) and (max-width: 450px) {
        font-size: 10px;
    }
    @media (min-width: 451px) and (max-width: 600px) {
        font-size: 11px;
    }
    @media (min-width: 601px) and (max-width: 800px) {
        font-size: 15px;
    }
`;
const LongDescription = styled.span`
    font-size: 30px;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    @media (max-width: 300px) {
        font-size: 10px;
    }
    @media (min-width: 301px) and (max-width: 450px) {
        font-size: 10px;
    }
    @media (min-width: 451px) and (max-width: 600px) {
        font-size: 11px;
    }
    @media (min-width: 601px) and (max-width: 800px) {
        font-size: 15px;
    }
`;

function MobileProductCart() {
  const [count, setCount] =useState(1)
  function decrementCount() {
   count>0 ? setCount(count - 1) : setCount(0)   
  } 
  function incrementCount() {
  count<=19 ? setCount(count + 1) :  setCount(20)
  }
  return <Container>
      <LinkHeader link={'www.w3schools.com'} text={'INTERNET PRODUCTS'} />
    {[
    { color: 'dark' },].map((item, index) => (
        <CCard
        textColor={item.textColor}
        className={`mb-3 border-top-${item.color} border-top-3`}
        style={{ maxWidth: '180rem' }}
        key={index}
        >
        <CCardBody>
        <KopotokkhoProducts>
            <SmallKopotokkhoProducts>
              <MobileSmallBigPicture/>
            </SmallKopotokkhoProducts>
        </KopotokkhoProducts>
            <MainProductDescription>
                <i className="fas fa-share-alt"></i>
                  <ProductName>
                    <b>C-DATA FD1104S-B0</b> 
                  </ProductName>
                  <ProductVendor>
                    <b>SOLD BY KOPOTOKKHO ELECTRONICS</b>
                  </ProductVendor>
                  <ProductPrice>
                    <b>৳ 48,000</b>
                  </ProductPrice>
                    <LongDescription>
                      lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
                    </LongDescription>
                    <ProductAmountContainer>
                    <Remove onClick={decrementCount}/>
                    <ProductAmount>{count}</ProductAmount>
                    <Add onClick={incrementCount}/>                
                    </ProductAmountContainer>           
                    <Cart> <FavoriteBorderOutlined/> ADD TO WISHLIST</Cart>                 
                    <ButtonContainer>
                        <MenuItem1><Button1><b>ADD TO CART</b></Button1></MenuItem1>
                        <MenuItem2><Button2><b>BUY NOW</b></Button2></MenuItem2>
                    </ButtonContainer>
            </MainProductDescription>
        </CCardBody>
        </CCard>
    ))}
    {[
    { color: 'dark' },].map((item, index) => (
        <CCard
        textColor={item.textColor}
        className={`mb-3 border-top-${item.color} border-top-3`}
        style={{ maxWidth: '180rem' }}
        key={index}>
        <CCardBody> 
            {category.map((item, index) =>(
                <List key={index}>
                    <ListItem>
                        <p>{item.title}{"\n"}</p>
                    </ListItem>
                    <i class="fas fa-chevron-down"></i>  
                </List>
            ))}
        </CCardBody>
        </CCard>
    ))}
    <br/>
    <ProductContainer>
      <Products/>      
    </ProductContainer>
  </Container>;
}

export default MobileProductCart;
