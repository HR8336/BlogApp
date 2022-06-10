import React from "react";
import { useLoadingContext } from "react-router-loading";
const ContactUs = () => {
  const loadingContext = useLoadingContext();
  loadingContext.done();
  return <div>This is a Contact Page</div>;
};

export default ContactUs;
