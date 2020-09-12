import React from "react";
import header from '../images/escudo.svg'


import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js"
import PageLoading from "../components/PageLoading.js"



import api from '../api'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component {
  state = {
    form:{
      firstName:'',
      lastName:'',
      email:'',
      jobTitle:'',
      twitter:'',
      
    },
  loading:false,
  error:null


  };

  handleChange = e =>{
    
    this.setState({
      form : {
        ...this.state.form,
        [e.target.name] : e.target.value,
      }
    }
    )
  }

  handleSubmit= async(e) =>{
    e.preventDefault();
    this.setState({ loading:true, error:null});
    console.log(this.state.form)

    try {
      await api.badges.create(this.state.form)
      this.setState({ loading:false, error:null});

      this.props.history.push('/badges')

    } catch (error) {
      this.setState({ loading:false, error: error});
    }
  }

  render() {
    if (this.state.loading) {
      return(
        <PageLoading />
      )
    }

    return(
    <div className="BadgeNew">
      <div className="BadgeNew__hero"> 
        <div className="BadgeNew__hero-image">
        <img className="img-fluid" src={header} alt="Logo"/>

        </div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge 
              firstName={this.state.form.firstName || 'FIRST_NAME'}
              lastName={this.state.form.lastName || 'LAST_NAME'} 
              jobTitle={this.state.form.jobTitle || 'JOB'} 
              twitter={this.state.form.twitter || 'EMAIL'} 
              confName="chileConf"
              avatar= {"https://api.adorable.io/avatars/285/abott@" + this.state.form.twitter + " .png"}
              email={this.state.email}
              />
          </div>
          <div className="col-6">
          <h1>New Attendant</h1>
            <BadgeForm error={this.state.error} onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form}/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default BadgeNew;
