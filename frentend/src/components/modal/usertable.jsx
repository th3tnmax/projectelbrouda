import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Usertable = ({ user }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>name</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            lastname
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            email
          </th>
          <th className='border border-slate-600 rounded-md'>tel</th>
        </tr>
      </thead>
      <tbody>
        {user.map((user, index) => (
          <tr key={user._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {user.name}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {user.lastname}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {user.email}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/users/details/${user._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/users/edit/${user._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/users/delete/${user._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Usertable