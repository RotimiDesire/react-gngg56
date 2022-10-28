import React, {useState, useEffect} from 'react';
import {UsersInfo, Paginate} from "../Components"

export default function Users() {

  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const[infoPerPage] = useState(5)

  const indexOfLastInfo = currentPage * infoPerPage;
  const indexOfFirstInfo = indexOfLastInfo - infoPerPage;

  const currentInfo = info.slice(indexOfFirstInfo, 
    indexOfLastInfo);

    const nPages = Math.ceil(info.length / infoPerPage)  

  useEffect(() => {
    setLoading(true)
    const fetchInfo = async () => {
      const res = await fetch("https://randomuser.me/api?results=100")
      const data = await res.json()
      setInfo(data.results)
      setLoading(false)
    }

    fetchInfo()
  }, [])

  console.log(info)

  return (
    <div>
      <UsersInfo info={currentInfo} loading={loading}/>
      <Paginate
    nPages = { nPages }
    currentPage = { currentPage } 
    setCurrentPage = { setCurrentPage }
/>
    </div>
  );
}
