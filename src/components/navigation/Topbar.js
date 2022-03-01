import React from 'react'
import styled from 'styled-components'
import UpperLayer from './topnavElements/UpperLayer';
import MidLayer from './topnavElements/MidLayer';
import LowerLayer from './topnavElements/LowerLayer';

function Topbar() {
    return (
        <TopBar>
            <UpperLayer />
            <MidLayer />
            <LowerLayer />
        </TopBar>
    )
}

export default Topbar

const TopBar = styled.div`
    text-transform: uppercase;
    font-weight: bold;
`