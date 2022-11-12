import React from 'react'
import { Meta } from '../../src/@fastor'
import PhotoBooth from "../../src/features/PhotoBooth"

export default function Photos(){
    return (
        <React.Fragment>
            <Meta title="Photos" />
            <PhotoBooth />
        </React.Fragment>
    )
}