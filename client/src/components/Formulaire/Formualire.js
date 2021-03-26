import React, { useState } from 'react'

import MultiStep from 'react-multistep'
import FormInput from '../UI/Input'
import Etape1 from './Etapes/Etape1'
import Etape2 from './Etapes/Etape2'
import Etape3 from './Etapes/Etape3'
import Etape4 from './Etapes/Etape4'
import Etape5 from './Etapes/Etape5'


function Formualire() {

    const steps = [
        { component: <Etape1 /> },
        { component: <Etape2 /> },
        { component: <Etape3 /> },
        { component: <Etape4 /> },
        { component: <Etape5 /> }
    ]
    const prevStyle = {'marginRight':'15px' }
    const nextStyle = {  'border-width': '2px' }

    return (

        <div style={{ textAlign: 'center' }}>
        
            <MultiStep  steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
           
        </div>
    )
}

export default Formualire
