import React from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Create() {
  const checkingyup = Yup.object({
    name: Yup.string()
      .min(5, "Name must be 5 Letter")
      .required("Name must be fill"),
    email: Yup.string()
      .email("Invalid Email")
      .required("Email Must be required"),
  });

  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <ArrowLeft
          className="relative bottom-5 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <Formik
          initialValues={{ name: "", email: "" }}
          validationSchema={checkingyup}
          onSubmit={(values) => {
            dispatch(
              addUser({
                id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
                name: values.name,
                email: values.email,
              })
            );
            navigate("/");
          }}
        >
          {() => (
            <Form>
              <h1>Add New User</h1>

              <div>
                <label>Name:</label>
                <Field name="name" type="text" className="form-control" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div>
                <label>Email:</label>
                <Field name="email" type="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <button type="submit" className="btn btn-info mt-3">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Create;
