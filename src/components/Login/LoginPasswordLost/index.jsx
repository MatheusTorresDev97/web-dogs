import React from "react";
import Input from "../../FormComponents/Input";
import Button from "../../FormComponents/Button";
import useFetch from "../../../hooks/useFetch";
import useForm from "../../../hooks/useForm";
import { PASSWORD_LOST } from "../../../api";
import Error from '../../Helper/Error';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const { url, options } = PASSWORD_LOST({
      login: login.value,
      url: window.location.href.replace('perdeu', 'resetar'),
    });
    const { json } = await request(url, options);
    console.log(json);
  };

  return (
    <section className='animeLeft'>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
