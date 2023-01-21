import { HeaderButton } from "../../../components/buttons";
import { MainLogo, IconClose } from "../../../assets/icons";

const SignupHeader = () => {
  return (
    <div className="mt-11 ml-10 mr-10 ml-10">
      <div className="flex justify-between">
        <MainLogo />
        <div className="flex items-center">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full  ">
            <img
              className="inline-block h-12 w-12 rounded-full ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />

            <span
              className="absolute w-4 h-4"
              style={{
                top: -4,
                right: -4,
                backgroundColor: "#82AA47",
                border: "2px solid #FFFFFF",
                borderRadius: "50%",
              }}
            ></span>
          </div>
          <div className="flex flex-col ml-2">
            <span
              className="text-sm font-semibold"
              style={{ color: "#312F2F" }}
            >
              Hannah
            </span>
            <span className="text-xs mt-1" style={{ color: "#9C9C9C" }}>
              Your personal guide
            </span>
          </div>
        </div>
        <HeaderButton>
          <IconClose></IconClose>
        </HeaderButton>
      </div>
    </div>
  );
};

export default SignupHeader;
