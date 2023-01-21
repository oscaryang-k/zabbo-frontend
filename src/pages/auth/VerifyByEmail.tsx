import { MainLogo } from "../../assets/icons";
import "./SignIn.scss";
import "./SignIn.scss";
const VerifyByEmail = () => {
  return (
    <>
      <div className="fixed mt-11 ml-10">
        <MainLogo />
      </div>
      <div
        className="h-full  "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-80">
          <div className="flex justify-center items-center mt-20 ">
            <span>
              Don’t have an account yet?
              <span style={{ color: "#82AA47" }}>Sign Up</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyByEmail;
