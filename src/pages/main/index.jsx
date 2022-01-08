import React from "react";
import "./style.less";
import bgpic from "./image/bg1.png";
import {fetchUrl} from "../../util/fetchUrl";
import api from "../../util/api";
import { projectId } from "../../util/fetchUrl";
import { poolId } from "../../util/fetchUrl";
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName:"",
            experienceTotal:0
        }
    }
    componentDidMount(){

        fetchUrl.get(api.getPersonalInfo+"?poolId="+poolId,(res)=>{
           this.setState({
               userName:res.fullName,
               experienceTotal:res.experienceTotal
           })
        });
    }
    render(){
        const {userName,experienceTotal} = this.state;
        return (<div className="home">
            <img src={bgpic}></img>
            <div className="userName">{userName}</div>
        </div>)
    }
}
