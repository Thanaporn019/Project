import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import DateBox from 'devextreme-react/date-box';
import { IoAddOutline } from "react-icons/io5";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AspNetData from 'devextreme-aspnet-data-nojquery';
import Select from 'react-select'
import _ from "lodash";

let projectList = []
let data = [{
    projectId: null,
    typeId: null,
    workDate: null,
    workDetail: null,
    workUrl: null,
    workManhour: null,
    workTimeIn: null,
    workTimeOut: null,
}]
class ActionsWork extends React.Component {
    constructor(props) {
        console.log("ActionsWork -> constructor -> props", props)
        super(props);
        this.state = {
            data: [{
                projectId: null,
                typeId: null,
                workDate: null,
                workDetail: null,
                workUrl: null,
                workManhour: null,
                workTimeIn: null,
                workTimeOut: null,
            }],
            projectList: [],
            jobtypeList: []
        };
    }

    componentDidMount() {
        
        console.log("ActionsWork -> componentDidMount -> s", this.state.data)
        this.getProjectList()
        this.getJobtypeList()
    }

    getProjectList() {
            this.projectList = [{
                label: '001',
            },
            {
                label: '002',
            }]
        this.setState({
            projectList: [{
                projectId: '001',
                projectName: 'test1'
            },
            {
                projectId: '002',
                projectName: 'test2'
            }]
        })
    }

    getJobtypeList() {
        this.setState({
            jobtypeList: [{
                typeId: '001',
                typeName: 'test1'
            },
            {
                typeId: '002',
                typeName: 'test2'
            }]
        })
        console.log("Work -> getJobtypeList -> this.state.jobtypeList", this.state.jobtypeList)
    }

    handleProjectChange = (value , i) => {
    console.log("ActionsWork -> handleProjectChange -> i", i)
    console.log("ActionsWork -> handleProjectChange -> value", value)

        // let temp = _.cloneDeep(this.state.filter)
        // temp.projectId = value
        // this.setState({
        //     filter: {
        //         dateFrom: temp.dateFrom,
        //         dateTo: temp.dateTo,
        //         typeId: temp.typeId,
        //         projectId: value
        //     }
        // });
    }
    handleTypeChange = (event) => {

        let temp = _.cloneDeep(this.state.filter)
        temp.typeId = event.target.value
        this.setState({
            filter: {
                dateFrom: temp.dateFrom,
                dateTo: temp.dateTo,
                typeId: temp.typeId,
                projectId: temp.projectId
            }
        });
    }

    render() {

        return (<>

            <div className="App">
                <div id="boxType" className="container-box-content">
                    <div className="row wrap-container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item" aria-current="page"><a>Work</a></li>
                                <li class="breadcrumb-item" active aria-current="page"><a>Create</a></li>
                            </ol>
                        </nav>
                        <div className="wrap-content">
                            <div className="box-action">
                                <div className="box-title-search">
                                    <p className="font-size-search">Create Work</p>

                                </div>
                                <div className="box-content">
                                    <div className="box-action-date">
                                        <div className="row form-group">
                                            <div className="col-4" style={{ textAlign: 'right' }}><label for="ddlDate">Date : <span style={{ color: 'red' }}>*</span></label></div>
                                            <div className="col-5" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                                <DateBox
                                                    value={null}
                                                    type="date" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="hr-action"></hr>
                                    <div style={{ textAlign: 'right' }}>
                                        <p><span style={{ color: 'red' }}>*</span> Items marked with an asterisk are required</p>
                                    </div>

                                    {this.state.data.map((data, i) => {
                                    console.log("ActionsWork -> render -> data", data)
                                        console.log("ActionsWork -> render -> i", i);
                                        return (
                                            <>
                                            <div className="box-action-content">
                                            <div className="row form-group">
                                                <div className="col-4" style={{ textAlign: 'right' }}><label for="ddlProjectName">Project Name</label></div>
                                                <Select className=" col-7"
                                                    options={this.projectList}
                                                    value={data.projectId}
                                                    onChange={value => { this.handleProjectChange(value, i) }}
                                                    defaultValue={{ label: "-- Please selete project --", value: null }}
                                                />
                                                {/* <select class="form-control col-7" id="ddlProjectName" value={data.projectId} onChange={(e) => { this.handleProjectChange(e, i) }}>
                                                    {
                                                        this.state.projectList.map(r => {
                                                            console.log(r, r.projectId == data.projectId)
                                                            return <option value={r.projectId} selected={r.projectId == data.projectId}>{r.projectName}</option>

                                                        })
                                                    }
                                                </select> */}
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-4" style={{ textAlign: 'right' }}><label for="ddlJobType">Job Type</label></div>
                                                <select class="form-control col-7" id="ddlJobType" value={data.typeId} onChange={(e) => { this.handleTypeChange(e, i) }}>
                                                    {
                                                        this.state.jobtypeList.map(r => {
                                                            console.log("Work -> render -> r", r)
                                                            return <option value={r.typeId} selected={r.typeId == data.typeId}>{r.typeName}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>

                                            </>
                                        )
                                        
                                    })}


                                    <div className="row form-group">
                                        <div className="col-12" style={{ textAlign: 'center' }}>
                                            <button type="button" class="btn btn-secondary" style={{ marginRight: 20 }} onClick={this.handleReset}>RESET</button>
                                            <button type="button" class="btn btn-primary">SEARCH</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
        );

    }
}

export default ActionsWork;
