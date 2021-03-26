import { FormControlLabel, Tooltip } from '@material-ui/core';
import React, { useState ,useContext } from 'react';
import FormInput from '../../UI/Input';
import { Participants } from '../Provider'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
function Etape5() {
    const history = useHistory()
    const path= "http://www.localhost:3001/register"
    const [accord, setAccord] = useState(false)
    const {participants ,setParticipants} = useContext(Participants)

  
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [sent, setSent] = useState(false)
    const [msg, setMsg] = useState(false)




    function AccordChange(e) {
        setAccord(e.target.checked)
        participants.accord=e.target.checked
        setParticipants(participants)
        console.log(e.target.checked)
    }
    function Subm() {
        axios.post(path,participants)
            .then(res => {
                setLoading(false);
                setSent(res.data.sent)
                setError(res.data.error)
                setMsg(res.data.msg)
                setTimeout(() => setError(false), 3000)
                setTimeout(()=>history.push('/'),1000)
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                setMsg(true)
                setTimeout(() => setError(false), 3000)
            });
    }

    return (
        <div className="contact-form-wrap">
              <Alert show={error} variant={'danger'}>
                {msg ? "Vous êtes déjè inscrit" : "Une erreur s'est produite lors de votre inscription veuillez vous inscrire une nouvelle fois"}
            </Alert>
            <Modal
                size="md"
                show={sent}
                onHide={() => setSent(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm" >
                        Félicitations !
          </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <i style={{ fontSize: '100px', color: '#2EA3DD' }} className="fa fa-check"></i>
                    <h5>Vous venez de finaliser votre inscription à la 15ème édition du forum annuel de l'ENSI</h5>
                    
                </Modal.Body>
            </Modal>
            <div className="col-md-12" style={{ marginLeft: '15px', paddingBottom: "20px" }}>
                <FormControlLabel
                    control={<input onChange={AccordChange}  checked={participants.accord} style={{ padding: '15px' }} type='checkbox' name='accord' className="checkbox" />}
                    label={<label style={{ fontSize: "13px", marginTop: '8px', paddingLeft: '15px', color: "#8e8e8e" }}>J'accepte de partager mes informations avec les entreprises présentes au forum annuel de l'ENSI</label>}
                    icon={<span />}
                />
            </div>
            <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center' }}>
                <FormInput
                    tag={'button'}
                    classes={'btn-outline'}
                    onClick={Subm}
                    loading={loading}
                />
            </div>
        </div>
    )
}

export default Etape5
