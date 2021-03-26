import React, { useState ,useContext,useEffect } from 'react'
import FormInput from '../../UI/Input'
import { Participants } from '../Provider'
function Etape1() {


    const [nameValue, setNameValue] = useState('')
    const [mailValue, setMailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [professionValue, setProfessionValue] = useState('')

    const {participants ,setParticipants} = useContext(Participants)

function NameChange(e) {
    setNameValue(e.target.value)
    participants.nom = e.target.value ; 
    setParticipants(participants) ; 
}
function EmailChange(e) {
    setMailValue(e.target.value)
    participants.email = e.target.value ; 
    setParticipants(participants) ; 
}

function TelChange(e) {
    setPhoneValue(e.target.value)
    participants.tel = e.target.value ; 
    setParticipants(participants) ; 
}
function ProfessionChange(e) {
    setProfessionValue(e.target.value)
    participants.profession = e.target.value ; 
    setParticipants(participants) ; 
}

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <FormInput
                        tag={'input'}
                        placeholder='Nom et Prénom*'
                        type={'text'}
                        onChange={NameChange}
                        value={nameValue===''?participants.nom: nameValue}
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        tag={'input'}
                        placeholder='Email*'
                        type={'text'}
                        onChange={EmailChange}
                        value={mailValue===''?participants.email: mailValue}
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        tag={'input'}
                        placeholder='Tel*'
                        type={'text'}
                        onChange={TelChange}
                        value={phoneValue===''?participants.tel: phoneValue}
                    />
                </div>

                <div className="col-md-6">
                    <FormInput
                        tag={'input'}
                        placeholder='Profession*'
                        type={'text'}
                        onChange={ProfessionChange}
                        value={professionValue===''?participants.profession: professionValue}
                    />
                </div>
            </div>
        </div>
    )
}

export default Etape1
