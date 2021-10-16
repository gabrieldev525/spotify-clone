// React
import React from 'react'

// Project
import MenuSide from '../../components/MenuSide'

export default function Home() {
  const api = [
    {id: 1, name: 'Forró'},
    {id: 2, name: 'Froid'},
    {id: 3, name: 'Tierry'},
    {id: 4, name: 'forro'},
    {id: 5, name: 'forro'},
    {id: 6, name: 'forro'},
    {id: 7, name: 'forro'},
    {id: 8, name: 'forro'},
    {id: 9, name: 'forro'},
    {id: 10, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd'},
  ]

  return (
    <div style={{ display:  'flex', height: '100%' }}>
      <MenuSide data={api} />
      <h1>Home</h1>
    </div>
  )
}