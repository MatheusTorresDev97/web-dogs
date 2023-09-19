import React from 'react'
import Feed from '../../Feed'
import Head from '../../../components/Helper/Head'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const {user} = useParams()

  return (
    <section className='container mainSection'>
      <Head title={user}/>
        <h1 className='title'>{user}</h1>
        <Feed user={user}/>
    </section>
  )
}

export default UserProfile