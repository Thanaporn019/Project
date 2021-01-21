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

import { Card, Select } from "antd";
const Option = Select.Option;

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

let projectList = [];
let typeList = [];
let timeHours = [];
let timeMin = [];

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
        this.setDdlTime()
    }

    getProjectList() {
        let resData = [{
            projectId: '001',
            projectName: 'test1'
        },
        {
            projectId: '002',
            projectName: 'test2'
        }]
        for (let i = 0; i < resData.length; i++) {
            this.projectList.push(<Option key={resData[i].projectId}>{resData[i].projectName}</Option>);
        }

        // this.projectList = [{
        //     label: '001',
        // },
        // {
        //     label: '002',
        // }]
        // this.setState({
        //     projectList: [{
        //         projectId: '001',
        //         projectName: 'test1'
        //     },
        //     {
        //         projectId: '002',
        //         projectName: 'test2'
        //     }]
        // })
    }

    getJobtypeList() {
        // this.setState({
        //     jobtypeList: [{
        //         typeId: '001',
        //         typeName: 'test1'
        //     },
        //     {
        //         typeId: '002',
        //         typeName: 'test2'
        //     }]
        // })
        console.log("Work -> getJobtypeList -> this.state.jobtypeList", this.state.jobtypeList)

        let resData = [{
            typeId: '001',
            typeName: 'test1'
        },
        {
            typeId: '002',
            typeName: 'test2'
        }]
        for (let i = 0; i < resData.length; i++) {
            this.typeList.push(<Option key={resData[i].typeId}>{resData[i].typeName}</Option>);
        }
    }

    handleProjectChange = (value, i) => {
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

    setDdlTime() {
        let maxMin = 60;
        let maxHours = 24;

        for (let i = 0; i < maxHours; i++) {
            const element = array[i];
            this.timeHours.push()
        }

        // timeHours
        // timeMin
    }

    // TODO :: Select

    // handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // }

    // handleBlur = () => {
    //     console.log('blur');
    // }

    // handleFocus = () => {
    //     console.log('focus');
    // }

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

                                                        {/* <Select
                                                            showSearch
                                                            style={{ width: 200 }}
                                                            placeholder="Please selete project"
                                                            optionFilterProp="children"
                                                            onChange={handleChange}
                                                            onFocus={handleFocus}
                                                            onBlur={handleBlur}
                                                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                                        value={data.projectId}
                                                            >
                                                           {this.projectList}
                                                        </Select> */}
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

                                                            {/* <Select
                                                            showSearch
                                                            style={{ width: 200 }}
                                                            placeholder="Please selete Type"
                                                            optionFilterProp="children"
                                                            onChange={handleChange}
                                                            onFocus={handleFocus}
                                                            onBlur={handleBlur}
                                                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                                        value={data.typeId}
                                                            >
                                                           {this.typeList}
                                                        </Select> */}
                                                        </select>
                                                    </div>

                                                    {/* WorkIn */}
                                                    <div className="row form-group">
                                                        <div className="col-4" style={{ textAlign: 'right' }}><label for="ddlJobType">Job Type</label></div>

                                                        {/* <Select
                                                            showSearch
                                                            style={{ width: 200 }}
                                                            placeholder="Please selete Type"
                                                            optionFilterProp="children"
                                                            onChange={handleChange}
                                                            onFocus={handleFocus}
                                                            onBlur={handleBlur}
                                                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                                        value={data.typeId}
                                                            >
                                                           {this.typeList}
                                                        </Select> */}
                                                    </div>

                                                    {/* WorkOut */}
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
