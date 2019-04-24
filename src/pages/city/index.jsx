import React from 'react'
import {Card, Button, Table, Form, Select, Modal, message} from 'antd'
import axios from './../../axios/index'
import utils from './../../utils/utils'
const FormItem = Form.Item
const Option = Select.Option
export default class City extends React.Component{

    render() {
        return (
            <div>
                <Card>
                    <FilterForm/>       
                </Card>
            </div>
        )
    }
}

class FilterForm extends React.Component{

    

    render(){
        const { getFieldDecorator} = this.props.form
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{width:100}}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津</Option>
                                <Option value="3">深圳</Option>

                            </Select>      
                        )
                    }
                </FormItem>
                <FormItem label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select
                                style={{width:120}}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">指定停车点</Option>
                                <Option value="2">禁停区模式</Option>                         
                            </Select>      
                        )
                    }
                </FormItem>
                <FormItem label="营运模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{width:80}}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>                         
                            </Select>      
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                style={{width:100}}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>                         
                            </Select>      
                        )
                    }
                </FormItem>
                <FormItem l>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        );
    }
}
FilterForm = Form.create({})(FilterForm);

