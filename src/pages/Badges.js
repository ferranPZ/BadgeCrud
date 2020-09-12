import React from 'react'

import './styles/Badges.css'
import logo from '../images/escudo.svg'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgesList from '../components/BadgesList'
import {Link} from 'react-router-dom'
import api from '../api'



class Badges extends React.Component {

   
    constructor(props){
        super(props)
        this.state = {
            data: undefined,
            error:null,
            loading:true
          };
        
        console.log("1. Constructor");
    }
    componentDidUpdate(prevProps,prevState){
        console.log("5. componentDidUpdate");
        console.log({
            prevProps: prevProps,
            prevState: prevState
        });
        console.log({
            props: this.props,
            state : this.state,
        });
    }
    componentWillUnmount(){
        console.log("6. componentWillUnmount");
        clearInterval(this.fetchInterval)
        clearTimeout(this.timeId)
    }

    componentDidMount(){
        this.fetchData();

        let fetchInterval = setTimeout(() => {
            this.fetchData();
        }, 5000);
    }




    fetchData = async()=>{
        this.setState({
            error:null,
            loading:true
        })

        try {
            const data = await api.badges.list()
            this.setState({
                error:null,
                loading:false,
                data:data
            })
        } catch (error) {
            this.setState({
                error:true,
                loading:false
            })
        }
    }

    render(){
        if (this.state.loading === true && !this.state.data) {
            return(
               <PageLoading />
            )
        }
        if (this.state.error) {
            return(
            <PageError error={this.state.error} />
            )
        }


        return(
            <React.Fragment>
          
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={logo} alt=""/>

                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                        New Badge
                        </ Link>
                    </div>
                </div>

                <div className="Badges__container">
                    <BadgesList badges={this.state.data} />
                </div>
            </React.Fragment>
        )
    }
}

export default Badges