import React, {useState} from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'


function LogInBtn() {
    const user='superAdmin'
    let x = 'none';
    const [state, setState] = useState(x)

    return (
        <LogIn>
            <StaticSec  onClick={() => {
                    if(state==='none') x='flex';
                    if(state==='flex') x='none';
                    setState(x)
                    console.log(x);
                    console.log(state);
                }}>
                <UserImg>
                    <i className="far fa-user"></i>
                </UserImg>
                <UserText>
                    <p>Hello!</p>
                    <p><b>Sign In</b></p>
                </UserText>
            </StaticSec>
            <RetractingSec  style={{display: state}}>
                <a href='#'>My Profile</a>
                {user==='admin' || user==='superAdmin' || user==='moderator' ? (<a href='#'>Dashboard</a>) : (<a href='#'>My Cart</a>)}
                {user==='admin' || user==='superAdmin' || user==='moderator' ? (<a href='#'>Inventory</a>) : (<a href='#'>Orders</a>)}
                <a href='#'>Log Out</a>
            </RetractingSec>
        </LogIn>
    )
}

export default LogInBtn

const LogIn = styled.div`
    display: flex;
    position: relative;
    padding: 0px 10px;
    justify-content: center;
`

const StaticSec = styled.div`
    display: flex;
    cursor: pointer;
`

const UserImg = styled.div`
    display: flex;
    i {
        font-size: 28px;
        margin: 5px;
    }
`

const UserText = styled.div`
    
`

const RetractingSec = styled.div`
    position: absolute;
    top: 40px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 8px #000000;
    a {
        color: black;
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`