import React from 'react'
import { Button, Block } from 'components';
import { Input, Form, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Block>
            <Form name="normal_login" initialValues={{ remember: true }} onFinish={onFinish}>
                <div className="auth__top">
                    <h1>Войти в аккаунт</h1>
                    <h3>Пожалуйста, войдите в свой аккаунт</h3>
                </div>
                <div className="auth__mid">
                    <h3><Link to="/im">Забыли логин или пароль?</Link></h3>

                    <Form.Item name="username" rules={[
                        {
                            required: true,
                            message: 'Введите логин',
                        },
                    ]}>
                        <Input className="auth__input" placeholder="Логин" prefix={<UserOutlined />}></Input>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Введите пароль',
                            },
                        ]}
                    >
                        <Input className="auth__input" placeholder="Пароль" prefix={<LockOutlined />} type="password" autoComplete="on"></Input>
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked"  noStyle>
                            <Checkbox className="auth__remember">Запомнить меня</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button className="auth__button" type="primary" size="large" htmlType="submit">Войти в аккаунт</Button>
                    </Form.Item>
                </div>
                <div className="auth__bottom">
                    <h3><Link to="/register">Зарегистрироваться</Link></h3>
                </div>
            </Form>
        </Block>
    )
}

export default LoginForm