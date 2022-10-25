import React from "react";
import { Button, Form, Input } from "antd";
// import Button from "@/components/General/Button/Button";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx("wrapper")}>
      <Form
        name="basic"
        layout="vertical"
        onFinish={{}}
        onFinishFailed={{}}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
          // value={loginForm.email}
          // onChange={(e) =>
          //   setLoginForm({ ...loginForm, email: e.target.value })
          // }
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
          // value={loginForm.password}
          // onChange={(e) =>
          //   setLoginForm({ ...loginForm, password: e.target.value })
          // }
          />
        </Form.Item>
        <Form.Item>
          <Link to={{}}>Forgot password?</Link>
        </Form.Item>
        <Form.Item>
          <Button style={{width: '100%'}} type="primary" size="large">Sign in</Button>
        </Form.Item>

        <Form.Item>
          <span>
            Don’t have an account?
            <Link to={{}}> Register</Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
