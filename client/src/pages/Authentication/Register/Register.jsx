import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
// import Button from "@/components/General/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  registerRequest,
  userRegisterState$,
} from "src/redux/slice/userRegisterSlice";

const cx = classNames.bind(styles);
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authRegister = useSelector(userRegisterState$);

  const [registerForm, setRegisterForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (authRegister.success) {
      console.log(authRegister.message);
      navigate("/login");
    } else {
      console.log(authRegister.message);
    }
  }, [authRegister]);

  const handleRegister = () => {
    dispatch(registerRequest(registerForm));
  };

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
            value={registerForm.email}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, email: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            value={registerForm.username}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, username: e.target.value })
            }
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
            value={registerForm.password}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, password: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ width: "100%", marginTop: "12px" }}
            type="primary"
            size="large"
            onClick={handleRegister}
          >
            Sign Up
          </Button>
        </Form.Item>

        <Form.Item>
          <Link to="/login"> Already have an account?</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
