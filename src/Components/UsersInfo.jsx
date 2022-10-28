import React from 'react'
import "../Styles/UsersInfo.css"

export default function UsersInfo({info, loading}) {
  if(loading){
    return <h2 className="loading">Please wait a few seconds...</h2>
  }

  return (
    <div>
        {info.map((info) => {
          return <div key={info.cell} className="user-info">
            <h3>Profile</h3>
            <div className="user-details">
            <div className="about">
              <h4>About User</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae explicabo eos fuga? Voluptas, tempore amet possimus aperiam suscipit numquam iusto mollitia unde temporibus perspiciatis. Quas numquam nemo ipsam sunt expedita quod sit autem cupiditate reprehenderit praesentium maxime similique rem assumenda ut harum corporis aut, delectus at ab error! Ex pariatur consequuntur cumque. Fugit nobis rem magnam alias voluptatem vitae modi quaerat quia. Odit eum aspernatur molestiae, voluptate necessitatibus eaque repudiandae eligendi rerum delectus voluptates asperiores dignissimos saepe, illum dolorum? Sapiente rem, veniam libero porro debitis itaque magni cumque autem eligendi consectetur blanditiis nam laudantium minima quas voluptatum a beatae dolorem sed explicabo. Provident deserunt voluptas enim dolore voluptate alias?</p>
            </div>
            <img src={info.picture.large} alt="#"/>
            <div className="details">
              <h4>User Details</h4>
              <div>
                <h5>Name: 
                  <div>
                    {info.name.title}. {info.name.last} {info.name.first}
                  </div>
                </h5>
              </div>

              <div>
                <h5>Email:
                  <div>
                  {info.email}
                  </div>
                </h5>
              </div>

              <div>
                <h5>Age:
                  <div>
                  {info.dob.age}
                  </div>
                </h5>
              </div>

              <div>
                <h5>Location:
                  <div>
                  No {info.location.street.number}, {info.location.street.name}, {info.location.state}, {info.location.country}.
                  </div>
                </h5>
              </div>

              <div>
                <h5>Phone No:
                  <div>
                  {info.phone}
                  </div>
                </h5>
              </div>
            </div>
            </div>
          </div>
        })}
    </div>
  )
}