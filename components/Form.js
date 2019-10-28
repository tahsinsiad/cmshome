import React from "react";
import { Form, Button, Input } from "antd";

const { TextArea } = Input;

const ContactForm = (props) => {

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    const { getFieldDecorator } = props.form;
    return (
        <div>
            <Form onSubmit={handleSubmit} className="form">
                <h1 style={{ fontSize: "40px", fontWeight: "900", textAlign: "center" }}>Contact Us</h1>
                <Form.Item>
                    {
                        getFieldDecorator("name", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your Name!"

                                }
                            ]
                        })(<Input placeholder="Name" />)
                    }

                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ],
                    })(<Input placeholder="E-mail" />)}
                </Form.Item>

                <Form.Item>
                    {
                        getFieldDecorator("message", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please leave us a message!"

                                }
                            ]
                        })(<TextArea placeholder="Message" rows={8} />)
                    }

                </Form.Item>
                <Form.Item style={{ textAlign: "center" }} >
                    <Button size="large" type="primary" htmlType="submit">
                        SEND
            </Button>
                </Form.Item>
            </Form >
            <style jsx global>
                {
                    `.form input{
                        height: 60px;
                    }
                    .form button{
                        width: 10vw;
                    }
                    `
                }
            </style>
        </div>
    )
}
const WrappedContactForm = Form.create({ name: 'contactform' })(ContactForm);
export default WrappedContactForm;
