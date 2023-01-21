import SignupHeader from "../SignUp/SignUpHeader";

const CheckEmailVerifyCode = () => {
  return (
    <>
      <div>
        <SignupHeader />
      </div>
      <div className="flex justify-center items-center flex-col mt-40 ">
        <div className="w-[576px]">
          <div className="flex mb-16">
            <span className="text-2xl ">
              Great! Please provide your email and we will send you a
              confirmation code.
            </span>
          </div>

          <div className="flex justify-center items-center flex-col m">
            <div className="w-[320px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckEmailVerifyCode;
