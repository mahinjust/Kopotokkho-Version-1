import React, { useState } from 'react';
import styled from 'styled-components';
import { CCard } from '@coreui/react';
import { CCardBody } from '@coreui/react';
import { FavoriteBorderOutlined } from "@material-ui/icons";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Add, Remove } from "@material-ui/icons";
import WebProducts from '../components/WebProducts';
import WebSmallBigPicture from '../components/WebSmallBigPicture';
import LinkHeader from '../components/templates/LinkHeader';

const Container = styled.div``;
const ProductContainer = styled.div`
    margin: 5%;
`;
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const KopotokkhoProducts = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 99vw;
    @media (min-width: 1451px) and (max-width: 2562px) { 
        grid-template-columns: 50% 50%;
}
`;
const SmallKopotokkhoProducts = styled.div`
height: 50vh;
display: flex;
@media (max-width: 1025px) {
    height: 50vh;     
}
@media (min-width: 1026px) and (max-width: 1450px) { 
    height: 90vh;
}
@media (min-width: 1451px) and (max-width: 2562px) { 
    height: 91vh;
}
`;
const MainProductDescription = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: column;
    @media (max-width: 1025px) {
        margin: 12%;
        margin-top: 0%;      
}
    @media (min-width: 1026px) and (max-width: 1450px) { 
        margin-top: 0%;      
        margin: 9%;
}
    @media (min-width: 1451px) and (max-width: 2562px) { 
        margin-top: 0%;      
        margin: 10%;
}
`;
const ProductAmountContainer = styled.div`
    display:flex;
    align-items: center;
    text-align: center;
`;
const ProductAmount = styled.div`
    font-size: 20px;
    border: 1px solid black;
    width: 20px;
    text-align: center;
    @media (max-width: 1025px) {
        width: 35px;
        font-size: 25px;
    }
    @media (min-width: 1026px) and (max-width: 1450px) { 
        width: 36px;
        font-size: 25px;
    }
    @media (min-width: 1451px) and (max-width: 2562px) { 
        width: 37px;
        font-size: 30px;
    }
`;
const ProductPrice = styled.div`
    font-size: 20px;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    @media (max-width: 1025px) {
        font-size: 20px;
    }
    @media (min-width: 1026px) and (max-width: 1450px) { 
        font-size: 25px;
    }
    @media (min-width: 1451px) and (max-width: 2562px) { 
        font-size: 35px;
    }
`;
const Cart = styled.div`
    display: flex;
    font-size: 15px;
    flex-wrap: wrap;
    font-weight: bold;
    @media (max-width: 1025px) {
    }
    @media (min-width: 1026px) and (max-width: 1450px) { 
    }
    @media (min-width: 1451px) and (max-width: 2562px) { 
        font-size: 20px;
    }
`;
const Button1 = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: #566885;
    color: white;
    cursor: pointer;
    width: 75%;  
    @media (max-width: 1025px) {
    }
    @media (min-width: 1026px) and (max-width: 1450px) { 
    }
`;
const Button2 = styled.button`
    border: none;
    padding: 10px 20px;
    margin-top: 1%;
    background-color: #0d1726;
    color: white;
    cursor: pointer;
    width: 75%; 
    @media (max-width: 1025px) {
    }
    @media (min-width: 1026px) and (max-width: 1450px) { 
    }
`;
const MenuItem1 = styled.div`
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    @media (min-width: 1026px) and (max-width: 1450px) { 
        font-size: 14px;
    }
    @media (min-width: 1451px) and (max-width: 2562px) { 
        font-size: 20px;
    }
`;
const MenuItem2 = styled.div`
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    @media (min-width: 1026px) and (max-width: 1450px) { 
        font-size: 14px;
    }
    @media (min-width: 1451px) and (max-width: 2562px) { 
        font-size: 20px;
    }
`;
const ProductName = styled.span`
    font-size: 25px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    @media (max-width: 1025px) {
        font-size: 18px;
    }
    @media (min-width: 1026px) and (max-width: 1450px) { 
        font-size: 25px;
    }
    @media (min-width: 1451px) and (max-width: 2562px) { 
        font-size: 30px;
    }
`;
const ProductVendor = styled.span`
    font-size: 20px;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    @media (max-width: 1025px) {
        font-size: 16px;
    }
    @media (min-width: 1026px) and (max-width: 1450px) { 
        font-size: 20px;
    }
    @media (min-width: 1451px) and (max-width: 2562px) { 
        font-size: 25px;
    }
`;
const LongDescription = styled.span`
    font-size: 20px;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    @media (max-width: 1025px) {
        font-size: 15px;
        }
    @media (min-width: 1026px) and (max-width: 1450px) { 
        font-size: 20px;
        }
    @media (min-width: 1451px) and (max-width: 2562px) { 
        font-size: 22px;
    }
`;

function ProductCart() {
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
            <WebSmallBigPicture/>
          </SmallKopotokkhoProducts>
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
        </KopotokkhoProducts>       
        </CCardBody>
        </CCard>
    ))}         
        <ProductContainer>
            <WebProducts/>
        </ProductContainer>
  </Container>;
}

export default ProductCart;
