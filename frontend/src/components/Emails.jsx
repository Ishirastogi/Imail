import React, { useEffect } from 'react'
import Email from './Email'
import useGetAllEmails from '../hooks/useGetAllEmails,js'
import { useSelector } from 'react-redux';

const Emails = () => {
  useGetAllEmails();
  const {emails, searchText} = useSelector(store=>store.app);
  const[filterEmail,setFilterEmail]=useState(emails);

  useEffect(()=>{
    const filteredEmail= emails.filter((email)=>{
      return email.subject.toLoweCase().includes(searchText.toLoweCase()) || email.to.toLoweCase().includes(searchText.toLoweCase()) || email.message.toLoweCase().includes(searchText.toLoweCase());
      setFilterEmail(filteredEmail);
    })
  },[searchText, emails]);
  return (
    <div>
      {
        filterEmail && filterEmail?.map((email)=> <Email key={email._id} email={email}/>)
      }
     
    </div>
  )
}

export default Emails
