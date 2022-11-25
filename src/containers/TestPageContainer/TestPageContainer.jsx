import React from 'react'
import { useParams } from 'react-router-dom'
import TestPage from '../../components/TestPage/TestPage'
import data from '../../data/db.json'

const TestPageContainer = () => {

  const {client} = useParams();

  const test = data.filter(object => object.cliente === client)

  return <TestPage test={test}/>
}

export default TestPageContainer