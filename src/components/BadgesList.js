import React from 'react';
import {Link} from 'react-router-dom'

import './styles/BadgesList.css';



class BadgesListItem extends React.Component {
  render() {
    return(

      
      <div className="BadgesListItem">
      <div className="BadgesListItem__avatar">
        <img src={this.props.badge.avatarUrl} alt="Avatar"/>
      </div>

      <div>
        <strong>
          {this.props.badge.firstName} {this.props.badge.lastName}
        </strong>
        <br />@{this.props.badge.twitter}
        <br />
        {this.props.badge.jobTitle}
      </div>
  

      

    </div>
    )
  }

}
function useSearchBadges(badges) {
  
  const [search,setSearch] = React.useState("");
  const [filteredBadges,setFilteredBadges] = React.useState(badges);

  React.useMemo(()=>{
    console.log("ejecuto");
    const results = badges.filter((badge)=>{ if(`${badge.firstName} ${badge.lastName}`.toLowerCase().includes(search.toLowerCase())) return true })

    setFilteredBadges(results)

  },[badges, search])

  return{search, setSearch, filteredBadges}
}

function BadgesList(props){
  const badges = props.badges

  const {search, setSearch, filteredBadges} = useSearchBadges(badges) 



  if (filteredBadges === undefined || filteredBadges.length === 0) {
    return(
      
      <div>
         <div className="form-group">
          <label htmlFor="filter"> Filter Badges</label>
          {search} {search}
          <input type="text" name="filter" className="form-control"
            value={search}
            onChange={(e)=>{
              setSearch(e.target.value)
            }}
          />
        </div>



        <h3>
          No badges were found
        </h3>
      </div>
      
      )
  }


  return (
    <div className="BadgesList">

      <div className="form-group">
        <label htmlFor="filter"> Filter Badges</label>
        <input type="text" name="filter" className="form-control"
          value={search}
          onChange={(e)=>{
            setSearch(e.target.value)
          }}
        />
      </div>
    

      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
   
              return (
                <li key={badge.id}>
                  <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                    <BadgesListItem badge={badge}/>
                  </Link>                  

                
                </li>
              );
            

        })}
      </ul>
    </div>
  );

  
}

export default BadgesList;