import React from 'react'
import './styles/BadgeDetails.css'
import api from '../api'


import PageLoading from '../components/PageLoading'
import BadgeDetails from '../components/BadgeDetails'



class BadgeDetailsContainer extends React.Component{
    state = {
        data : undefined,
        loading: true,
        error: null,
        isOpen:false
    }

    componentDidMount(){
        this.fetchData()
    }

    handleOnDeleteBadge=async()=>{
        this.setState({loading:true, error:null})
        try {
            await api.badges.remove(this.props.match.params.badgesId)
            this.setState({loading:true, error:null})
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }
    
    handleOnClose=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    fetchData = async()=>{
        this.setState({loading:true, error:null})
        try {
            let data = await api.badges.read(this.props.match.params.badgesId) 
            this.setState({data:data})
            this.setState({loading:false, error:null})
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }

    render(){



        if (this.state.loading === true) {
            return(
                <PageLoading/>
            )
        }


        const badge = this.state.data;
        return (
            <BadgeDetails badge={badge} isOpen={this.state.isOpen} onClose={this.handleOnClose} onDeleteBadge={this.handleOnDeleteBadge}/>
          );
    }
}

export default BadgeDetailsContainer;