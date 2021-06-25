import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { URL } from '../../parameters/URL';
import { BodyPost, ButtonNewPost, CreateNewPost, FormNewPost, InputTittle } from './styled';
import LabedditContext from '../../global/LabedditContext';

const initialForm = {title:"", body: ""}

export function Dropdown () {

    const [form, handleValue, resetForm] = useForm(initialForm)
    const {getPosts} = useContext(LabedditContext)
    const publish = (event) =>{
        event.preventDefault()
        const body = {
            title: form.title,
            body: form.body
        }
        axios
            .post(`${URL}/posts/`,body, {
                headers:{
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) =>{
                resetForm()
                getPosts()
            })
            .catch((err) =>{
                alert(err.response.data)
            })
    }

    return (
        <FormNewPost onSubmit={publish}>
            <CreateNewPost>
              <InputTittle
                  placeholder="titulo do post"
                  name="title"
                  type="text"
                  onChange={handleValue}
                  value={form.title}
                />

                <BodyPost
                placeholder="texto do seu post"
                name="body"
                type="text"
                onChange={handleValue}
                value={form.body}
                ></BodyPost>
                <ButtonNewPost>Enviar</ButtonNewPost>
            </CreateNewPost>
        </FormNewPost>
    );
  }

export default Dropdown; 
