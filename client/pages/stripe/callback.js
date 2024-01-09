import { useContext, useEffect } from "react";
import axios from "axios";

const Spinner = () => (
  <div className="spinner-border text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const StripeCallback = () => {
  const { state: { user } } = useContext(Context);

  useEffect(() => {
    if (user) {
      axios.post("/api/get-account-status").then((res) => {
        dispatchEvent({
            type: "LOGIN",
            payload: res.data,
        });
        window.localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/instructor";
      });
    }
  }, [user]);

  return <Spinner />;
};

export default StripeCallback;
