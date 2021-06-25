import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { URL } from '../../parameters/URL';
import { CommentDiv, TextDisplay } from './styled';
import { ButtonC } from '../main/main';
import LabedditContext from '../../global/LabedditContext';
import { useParams } from 'react-router-dom';

const initialForm = {body: ""}
export function TextArea (props) {
    const {id} = useParams()
    const [form, handleValue, resetForm] = useForm(initialForm)
    const {getPosts, getComments} = useContext(LabedditContext)

    const PostComment = (event) =>{
        event.preventDefault()
        const body = {
            body: form.body
        }
        axios
            .post(`${URL}/posts/${props.id}/comments`,body, {
                headers:{
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) =>{
                resetForm()
                getPosts()
                getComments(id)
            })
            .catch((err) =>{
                alert(err.response.data.message)
            })
    }

    return (
        <form onSubmit={PostComment}>
            <CommentDiv>
                <TextDisplay
                placeholder="insira o seu comentário"
                name="body"
                type="text"
                onChange={handleValue}
                value={form.body}
                ></TextDisplay>
                <ButtonC>Enviar</ButtonC>
            </CommentDiv>
        </form>
    );
  }


export default TextArea; 
