import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import './login.css';
import usersData from '../../json/users.json'; 

const Login = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        const { username, password } = values;
        const user = usersData.find(user => user.username === username && user.password === password);
        if (user) {
            console.log('Inicio de sesión exitoso');       
            message.success('Inicio de sesión exitoso')
        } else {
            console.log('Credenciales incorrectas');
            message.error('Credenciales incorrectas')
        }
        setLoading(false);
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <h1>Iniciar sesión</h1>
                <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    className="login-form"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Por favor ingresa tu usuario' }]}
                    >
                        <Input placeholder="Usuario" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
                    >
                        <Input.Password placeholder="Contraseña" />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Recordarme</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="/">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Iniciar sesión
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;