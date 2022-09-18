import styles from "./LoginForm.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { validationSchema } from "../validationSchema";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  let navigate = useNavigate();
  const onSubmit = (value, { resetForm }) => {
    alert("Login successful");
    // navigate to overview page
    navigate("/overview");
    // clear input
    resetForm({ value: "" });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <strong>Login</strong>
            <p>Kindly enter your details to login</p>
            <div className={styles.email}>
              <TextField
                error={formik.touched.email && formik.errors.email}
                id="email"
                label="Email Address"
                variant="outlined"
                value={formik.values.email || ""}
                onChange={formik.handleChange}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
                size="small"
              />
            </div>
            <div className={styles.password}>
              <TextField
                error={formik.touched.password && formik.errors.password}
                id="password"
                label="Password"
                variant="outlined"
                value={formik.values.password || ""}
                onChange={formik.handleChange}
                helperText={formik.touched.password && formik.errors.password}
                fullWidth
                size="small"
              />
            </div>
            <div className={styles.button}>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                fullWidth
                size="small"
                style={{ background: "#0A74DC" }}
              >
                Login
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
