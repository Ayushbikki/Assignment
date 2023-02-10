import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios'
import Table from '../view/Table';
import Card from '../view/Card';

function Data() {
    const [user,setUser]  =useState([]);
    const [filterUser,setFilterUser]=useState([])
    const [search,setSearch] =useState('');
    const[pvalue,setPvalue]= useState('')
    const[togg,setTogg]= useState(true)
    const getData = async()=>{
       const res=  await axios.get('https://coralmango.com/api/react-test')
      // console.log('here',res)
       setUser(res.data)
       setFilterUser(res.data)
    }
    useEffect(()=>{
        getData();
       

    },[])
    const handleSearch =(e)=>{
        const getSearch= e.target.value;
        //console.log('this',getSearch)
        setSearch(getSearch)
        if(getSearch.length>0){
            const searchData= user.filter((item)=>item.name.toLowerCase().includes(getSearch))
            setPvalue('You are  viewing filtered value')
            setUser(searchData)
        }
        else{
            setUser(filterUser)
            setPvalue('')
        }

    }
    const toggle =()=>{
        setTogg(!togg)
        console.log(togg)
    }
   
  return (
    <>
         <div>Data</div>
   <input type='text'  name="name"
        style={{ width: "30%", height: "25px" }}
        placeholder='search...'
            value={search}
        onChange={handleSearch}  />
        <h3>{pvalue}</h3>
       <button className='btn-btn-success m-2' onClick={toggle}>Toggle view</button>
        {togg?(<Table data={user} />) :(<Card user={user} />)}
    </>
   
  )
}

export default Data