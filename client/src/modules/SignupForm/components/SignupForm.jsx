import { Button, Block } from 'components';
import { Link } from 'react-router-dom'
import { Form, Input } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';

const SignupForm = () => {
    const success = true

    const onFinish = (values) => {
        console.log('Received values of form: ', values)
    }

    return (
        <Block>
            <Form name="register" onFinish={onFinish} scrollToFirstError>
                <div className="auth__top">
                    <h1>Регистрация</h1>
                    <h3>Зарегистрируйтесь, чтобы общаться</h3>
                </div>
                {success ?
                    <div className="auth__wrapper">
                        <div className="auth__mid">
                            <Form.Item name="email" rules={[{ type: 'email', message: 'Введите существующий email' }, { required: true, message: 'Пожалуйста, введите свой email' }]}>
                                <Input className="auth__input" placeholder="Почта" prefix={<MailOutlined />} autoComplete="on" />
                            </Form.Item>

                            <Form.Item name="nickname" tooltip="Как бы вы хотели, чтобы вас называли?" rules={[
                                {
                                    required: true,
                                    message: 'Введите отображаемое имя',
                                    whitespace: true,
                                },
                            ]}>
                                <Input className="auth__input" placeholder="Ваше имя" prefix={<UserOutlined />} autoComplete="on"></Input>
                            </Form.Item>

                            <Form.Item name="password" rules={[{ required: true, message: 'Введите пароль', },]} hasFeedback>
                                <Input className="auth__input" placeholder="Придумайте пароль" prefix={<LockOutlined />} type="password" autoComplete="on"></Input>
                            </Form.Item>

                            <Form.Item name="confirm" dependencies={['password']} hasFeedback
                                rules={[{
                                    required: true,
                                    message: 'Подтвердите пароль',
                                }, ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(new Error('Введенные пароли не совпадают'));
                                    },
                                }),
                                ]}>
                                <Input className="auth__input" placeholder="Повторите пароль" prefix={<LockOutlined />} type="password" autoComplete="on"></Input>
                            </Form.Item>

                            <Form.Item>
                                <Button className="auth__button" type="primary" htmlType="submit" size="large">Зарегистрироваться</Button>
                            </Form.Item>
                        </div>
                        <div className="auth__bottom">
                            <h3><Link to="/login">Войти в аккаунт</Link></h3>
                        </div>
                    </div>
                    :
                    <div className="auth__result">
                        <p><InfoCircleTwoTone style={{ fontSize: '60px' }} /></p>
                        <h3>Подтвердите свой аккаунт</h3>
                        <h4>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</h4>
                        <h3><Link to="/login">Вернуться к входу</Link></h3>
                    </div>
                }
            </Form>
        </Block>
    )
}

export default SignupForm