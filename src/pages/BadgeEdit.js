import React from "react";
import header from '../images/badge-header.svg'

import '../components/styles/BadgeEdit.css'
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js"
import PageLoading from "../components/PageLoading.js"
import api from '../api'

class BadgeEdit extends React.Component {
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

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async()=>{
    this.setState({loading:true, error:null})
    try {
      const user = await api.badges.read(this.props.match.params.badgesId)
      console.log(user);
      this.setState({
        loading:false, 
        error:null,
        form : user 
      })



    } catch (error) {
      this.setState({loading:false, error:error})
    }
  }

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
      await api.badges.update(this.props.match.params.badgesId, this.state.form);
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
    <div className="BadgeEdit">
      
      <div className="BadgeEdit__hero"> 
        <img className="img-fluid" src={header} alt="Logo"/>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-6">
        

            <Badge 
              firstName={this.state.form.firstName || 'FIRST_NAME'}
              lastName={this.state.form.lastName || 'LAST_NAME'} 
              jobTitle={this.state.form.jobTitle || 'JOB'} 
              twitter={this.state.form.twitter || 'EMAIL'} 
              confName="platziConf"
              avatar= {"https://api.adorable.io/avatars/285/abott@" + this.state.form.twitter + " .png"}
              email={this.state.email}
              />
          </div>
          <div className="col-6">
          <h1>Edit Attendant</h1>
            <BadgeForm error={this.state.error} onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form}/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default BadgeEdit;
