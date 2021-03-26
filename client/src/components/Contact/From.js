import { FormControlLabel, Tooltip } from '@material-ui/core';
import React, { useState } from 'react';
import FormInput from "../../components/UI/Input";
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const From = () => {
    const path = "http://www.localhost:3001/register"

    const [nameValue, setNameValue] = useState('')
    const [mailValue, setMailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [professionValue, setProfessionValue] = useState('')
    const [nameValue2, setNameValue2] = useState('')
    const [mailValue2, setMailValue2] = useState('')
    const [professionValue2, setProfessionValue2] = useState('')
    const [nameValue3, setNameValue3] = useState('')
    const [mailValue3, setMailValue3] = useState('')
    const [professionValue3, setProfessionValue3] = useState('')
    const [nameValue4, setNameValue4] = useState('')
    const [mailValue4, setMailValue4] = useState('')
    const [professionValue4, setProfessionValue4] = useState('')
    const [nameValue5, setNameValue5] = useState('')
    const [mailValue5, setMailValue5] = useState('')
    const [professionValue5, setProfessionValue5] = useState('')
    const [accordValue, setAccordValue] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [sent, setSent] = useState(false)
    const [msg, setMsg] = useState(false)

    const handeleName = (event) => setNameValue(event.target.value)
    const handeleMail = (event) => setMailValue(event.target.value)
    const handelePhone = (event) => setPhoneValue(event.target.value)
    const handeleProfession = (event) => setProfessionValue(event.target.value)

    const handeleName2 = (event) => setNameValue2(event.target.value)
    const handeleMail2 = (event) => setMailValue2(event.target.value)
    const handeleProfession2 = (event) => setProfessionValue2(event.target.value)

    const handeleName3 = (event) => setNameValue3(event.target.value)
    const handeleMail3 = (event) => setMailValue3(event.target.value)
    const handeleProfession3 = (event) => setProfessionValue3(event.target.value)

    const handeleName4 = (event) => setNameValue4(event.target.value)
    const handeleMail4 = (event) => setMailValue4(event.target.value)
    const handeleProfession4 = (event) => setProfessionValue4(event.target.value)

    const handeleName5 = (event) => setNameValue5(event.target.value)
    const handeleMail5 = (event) => setMailValue5(event.target.value)
    const handeleProfession5 = (event) => setProfessionValue5(event.target.value)

    const handeleAccord = (event) => setAccordValue(event.target.checked)

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

      let fd ={
          nom:nameValue,
          email:mailValue,
          tel:phoneValue,
          profession:professionValue,
          participants:[
              {
                  nom:nameValue2,
                  email:mailValue2,
                  profession:professionValue2
              },
              {
                nom:nameValue3,
                email:mailValue3,
                profession:professionValue3
            },
            {
                nom:nameValue4,
                email:mailValue4,
                profession:professionValue4
            },
            {
                nom:nameValue5,
                email:mailValue5,
                profession:professionValue5
            },
            

          ],
          accord:accordValue
      }

        console.log(fd)


        axios.post(path,fd)
            .then(res => {
                setLoading(false);
                setSent(res.data.sent)
                setError(res.data.error)
                setMsg(res.data.msg)
                setTimeout(() => setError(false), 3000)
            })
            .catch(() => {
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
            <form id="contact-form" onSubmit={(event) => handleSubmit(event)} encType="multipart/form-data">
                <div className="row">
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'nom'}
                            participant={'participant1'}
                            placeholder={'Nom et Prénom *'}
                            required={true}
                            onChange={(event) => handeleName(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            name={'addresse_email'}
                            placeholder={'Addresse email *'}
                            required={true}
                            onChange={(event) => handeleMail(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'num_telephone'}
                            placeholder={'Numéro de téléphone *'}
                            required={true}
                            onChange={(event) => handelePhone(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'professionValue'}
                            placeholder={'Profession *'}
                            required={true}
                            onChange={(event) => handeleProfession(event)}
                        />
                        
                    </div>
                    <h3>Participant 2</h3>
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'nom'}
                            placeholder={'Nom et Prénom *'}
                            required={true}
                            onChange={(event) => handeleName2(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            name={'addresse_email'}
                            placeholder={'Addresse email *'}
                            required={true}
                            onChange={(event) => handeleMail2(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'professionValue'}
                            placeholder={'Profession *'}
                            required={true}
                            onChange={(event) => handeleProfession2(event)}
                        />
                         
                    </div> 
                    <h3>Participant 3</h3>
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'nom'}
                            placeholder={'Nom et Prénom *'}
                            required={true}
                            onChange={(event) => handeleName3(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            name={'addresse_email'}
                            placeholder={'Addresse email *'}
                            required={true}
                            onChange={(event) => handeleMail3(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'professionValue'}
                            placeholder={'Profession *'}
                            required={true}
                            onChange={(event) => handeleProfession3(event)}
                        />
                        
                        
                    </div>
                    <p>Participant 4</p>
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'nom'}
                            placeholder={'Nom et Prénom '}
                            onChange={(event) => handeleName4(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            name={'addresse_email'}
                            placeholder={'Addresse email '}
                            onChange={(event) => handeleMail4(event)}
                        />
                    </div>
                    
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'professionValue'}
                            placeholder={'Profession '}
                            onChange={(event) => handeleProfession4(event)}
                        />
                        
                    </div>  
                    <h3>Participant 5</h3>
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'nom'}
                            placeholder={'Nom et Prénom '}
                            onChange={(event) => handeleName5(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            name={'addresse_email'}
                            placeholder={'Addresse email '}
                            onChange={(event) => handeleMail5(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'professionValue'}
                            placeholder={'Profession '}
                            onChange={(event) => handeleProfession5(event)}
                        />
                    </div> 
                    <div className="col-md-12" style={{ marginLeft: '15px', paddingBottom: "20px" }}>
                        <FormControlLabel
                            control={<input onChange={(event) => handeleAccord(event)} style={{ padding: '15px' }} type='checkbox' name='accord' className="checkbox" />}
                            label={<label style={{ fontSize: "13px", marginTop: '8px', paddingLeft: '15px', color: "#8e8e8e" }}>J'accepte de partager mes informations avec les entreprises présentes au forum annuel de l'ENSI</label>}
                            icon={<span />}
                        />
                    </div>

                    <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center' }}>

                        <FormInput
                            tag={'button'}
                            classes={'btn-outline'}
                            loading={loading}


                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default From;
