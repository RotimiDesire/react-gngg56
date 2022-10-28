import React from 'react'

export default function Paginate({nPages, currentPage, setCurrentPage}) {

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

  const nextPage = () => {
    if(currentPage !== nPages) 
        setCurrentPage(currentPage + 1)
}
const prevPage = () => {
    if(currentPage !== 1) 
        setCurrentPage(currentPage - 1)
}

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#" onclick={prevPage}>Prev</a>
          </li>

          {pageNumbers.map((number) => {
            return <li>
              <a href="#" onClick={() => setCurrentPage(number)}>{number}</a>
            </li>
          })}

<li>
            <a href="#" onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}





// className={`page-item ${currentPage == number ? 'active' : ''}`}