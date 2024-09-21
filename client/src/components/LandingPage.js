import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom"; // Updated for React Router v6
import Header from "./Header";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          userType: "user",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (values.userType === "seller") {
              navigate("/seller-dashboard");
            } else {
              navigate("/user-dashboard");
            }
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col border-2 m-2 p-2 items-start justify-center rounded-lg bg-slate-300"
          >
            <span>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                className="m-2 p-1 rounded-lg border-2 hover:border-yellow-400"
              />
            </span>
            <span>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                className="m-2 p-1 rounded-lg border-2 hover:border-yellow-400"
              />
            </span>
            <span>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="m-2 p-1 rounded-lg border-2 hover:border-yellow-400"
              />
              {errors.email && touched.email && (
                <p className="text-red-600 font-mono">{errors.email}</p>
              )}
            </span>
            <span>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumber}
                className="m-2 p-1 rounded-lg border-2 hover:border-yellow-400"
              />
            </span>
            <span>
              <label>User Type</label>
              <select
                name="userType"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userType}
                className="m-2 p-1 rounded-lg border-2 hover:border-yellow-400"
              >
                <option value="seller">Seller</option>
                <option value="user">User</option>
              </select>
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white font-semibold bg-yellow-400 m-2 p-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default LandingPage;
