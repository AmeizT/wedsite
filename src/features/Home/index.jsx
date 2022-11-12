import React from 'react'
import Lander from './Lander'
import Invitation from './Invitation'
import Proposal from '../../components/Proposal'


export default function Home({ stories }){    
    return (
        <React.Fragment>
            <Lander stories={stories} />
            <Invitation />
        </React.Fragment>
    )
}

