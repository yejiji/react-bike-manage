import React from 'react'
import { Card, Button, Table, Form, Input, Checkbox,Select,Radio, Icon, message, Modal, DatePicker } from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils'
import ETable from '../../components/ETable/index'
import BaseForm from '../../components/BaseForm'
// import Moment from 'moment'
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
export default class User extends React.Component{

    params = {
        page: 1
    }

    formList = [
        {
            type:'INPUT',
            label:'用户名',
            field:'user_name',
            placeholder:'请输入名称',
            width:100,  
        },
        {
            type:'INPUT',
            label:'手机号',
            field:'user_mobile',
            placeholder:'请输入手机号',
            width:80,  
        },
        {
            type:'DATE',
            label:'请选择入职时间',
            field:'user_date',
            placeholder:'请输入日期'
        },

    ]
    
    handleFilter =(params)=> {
        this.params = params
        this.requestList();
    }
    requestList =()=> {
        axios.requestList(this,'/table/list1',this.params)
    }
    render(){
        return(
            <div>
                <Card>
                    <BaseForm
                        formList={this.formList} 
                        filterSubmit={this.handleFilter}
                    />
                </Card>
                <Card>
                    
                </Card>
            </div>
        )
    }

}