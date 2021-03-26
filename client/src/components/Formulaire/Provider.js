import React ,{useState , createContext} from 'react'
import { Children } from 'react';



export const Participants =  createContext();

export default function Provider({children}) {

const [participants, setParticipants] = useState({nom:"",email:"",tel:"",profession:"",
participants:
[
    {nom:"",email:"",tel:"",profession:""},
{nom:"",email:"",tel:"",profession:""},
{nom:"",email:"",tel:"",profession:""},
{nom:"",email:"",tel:"",profession:""}
],
accord:false
})

    return (
        <Participants.Provider value={{participants,setParticipants}}>
            {children}
        </Participants.Provider>
    )
}
