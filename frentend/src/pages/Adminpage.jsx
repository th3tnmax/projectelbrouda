import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../components/Admin';
import Edituser from './Edituser';
import Adduser from './Adduser';
import Deleteuser from './Deleteuser';
import ShowUsers from './ShowUsers';

const Adminpage = () => {
  return (
    <Routes>
      <Route path='/' element={<Admin />} />
      <Route path='/users/create' element={<Adduser />} />
      <Route path='/users/details/:id' element={<ShowUsers />} />
      <Route path='/users/edit/:id' element={<Edituser />} />
      <Route path='/users/delete/:id' element={<Deleteuser />} />
    </Routes>
  )
}

export default Adminpage