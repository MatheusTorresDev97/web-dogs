import React, { useEffect, useState } from 'react'
import Input from '../../FormComponents/Input'
import Button from "../../FormComponents/Button";
import useFetch from "../../../hooks/useFetch";
import useForm from "../../../hooks/useForm";
import { PASSWORD_RESET } from '../../../api';
import Error from '../../Helper/Error';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const password = useForm()
  const {error, loading, request} = useFetch()
  const navigate = useNavigate()

    useEffect(() => {
      const params = new URLSearchParams(window.location.search)
      const key = params.get('key')
      const login = params.get('login')
      if(key) setKey(key)
      if(login) setLogin(login)
    }, [])

    const handleSubmit = async(evento) => {
      evento.preventDefault()
      if(password.validate()){
      const { url, options } =  PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
    const { response } = await request(url, options)
    if(response.ok) navigate('/login')
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className="title">Resete a Senha</h1>
    <form onSubmit={handleSubmit}>
    <Input label='Nova Senha' type='password' name='password' {...password}/>
    {loading ? <Button disabled>Resetando ....</Button> : <Button>Resetar</Button>}
    </form>
    <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset
