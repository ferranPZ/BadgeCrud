//dependences
import React from 'react'
import { Link } from 'react-router-dom';
import ReactDom from 'react-dom'

//components
import Badge from './Badge';
import Modal from './Modal.js'
import DeleteBadgeModal from './DeleteBadgeModal'

//assets
import confLogo from '../images/platziconf-logo.svg'


//Custom hook
function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0)

  if(count>max){
    setCount(0)
  }
  return [count, setCount];
}


function BadgeDetails(props) {
    const [count, setCount] = useIncreaseCount(4)
    let badge = props.badge
    return(
        
        <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la Conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>

                <div>
                  <button onClick={props.onClose} className="btn btn-danger">Delete</button>
                </div>

                <div>
    <button onClick={ ()=>{ setCount(count+1)} } className="btn btn-primary"> Increase count : {count} </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {ReactDom.createPortal(<DeleteBadgeModal  isOpen={props.isOpen} onClose={props.onClose} onDeleteBadge={props.onDeleteBadge} /> , document.getElementById('modal'))}
      </div>

    )
    
}

export default BadgeDetails;