import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Input from '../../FormComponents/Input'
import Button from '../../FormComponents/Button'
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../UserContext';
import Error from '../../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../../FormComponents/Button'

const LoginForm = () => {

  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }
  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onClick={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        <Error error={error && 'Dados incorretos'} />
      </form>
      <Link className={styles.perdeu} to='/login/perdeu'>Perdeu a Senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={stylesBtn.buttonCriar} to="/login/criar">Cadastro</Link>
      </div>
    </section>
  )
};

export default LoginForm
