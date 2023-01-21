import { useNavigate } from "react-router-dom";
import SignupHeader from "../SignUp/SignUpHeader";

const CheckEmailVerifyCode = () => {
  const navigate = useNavigate();
  const els = (sel: any, par: any) => (par || document).querySelectorAll(sel);

  els(".pin", "").forEach((elGroup: any) => {
    const elsInput = [...elGroup.children];
    console.log(elsInput);
    const len = elsInput.length;

    const handlePaste = (ev: any) => {
      const clip = ev.clipboardData.getData("text"); // Get clipboard data
      const pin = clip.replace(/\s/g, ""); // Sanitize string
      const ch = [...pin]; // Create array of chars
      elsInput.forEach((el, i) => (el.value = ch[i] ?? "")); // Populate inputs
      elsInput[pin.length - 1].focus(); // Focus input
    };

    const handleInput = (ev: any) => {
      const elInp = ev.currentTarget;
      const i = elsInput.indexOf(elInp);
      if (elInp.value && (i + 1) % len) elsInput[i + 1].focus(); // focus next
    };

    const handleKeyDn = (ev: any) => {
      const elInp = ev.currentTarget;
      const i = elsInput.indexOf(elInp);
      if (!elInp.value && ev.key === "Backspace" && i) elsInput[i - 1].focus(); // Focus previous
    };

    // Add the same events to every input in group:
    elsInput.forEach((elInp) => {
      elInp.addEventListener("paste", handlePaste); // Handle pasting
      elInp.addEventListener("input", handleInput); // Handle typing
      elInp.addEventListener("keydown", handleKeyDn); // Handle deleting
    });
  });

  return (
    <>
      <div>
        <SignupHeader />
      </div>
      <div className="flex justify-center items-center flex-col mt-40 ">
        <div className="w-[576px]">
          <div className="flex mb-16 flex-col items-center">
            <span className="text-2xl ">
              Enter the confirmation code sent to
            </span>
            <span className="text-2xl">johndoe@gmai font-boldl.com</span>
          </div>

          <div className="flex justify-center items-center flex-col m">
            <code>123329</code>

            <br />
            <form>
              <div className="pin">
                <input
                  type="text"
                  name="pass[]"
                  maxLength={1}
                  autoComplete="off"
                  required
                  pattern="\d{1}"
                  autoFocus
                  className="w-10 h-12 mr-3 p-2 pb-2 pl-3 font-bold text-2xl border  rounded-md border-[#D0E9A7]"
                />
                <input
                  type="text"
                  name="pass[]"
                  maxLength={1}
                  autoComplete="off"
                  required
                  pattern="\d{1}"
                  className="w-10 h-12 mr-3 p-2 pb-2 pl-3 font-bold text-2xl border  rounded-md border-[#D0E9A7]"
                />
                <input
                  type="text"
                  name="pass[]"
                  maxLength={1}
                  autoComplete="off"
                  required
                  pattern="\d{1}"
                  className="w-10 h-12 mr-3 p-2 pb-2 pl-3 font-bold text-2xl border  rounded-md border-[#D0E9A7]"
                />
                <input
                  type="text"
                  name="pass[]"
                  maxLength={1}
                  autoComplete="off"
                  required
                  pattern="\d{1}"
                  className="w-10 h-12 p-2 pb-2 pl-3 m-3 font-bold text-2xl border  rounded-md border-[#D0E9A7]"
                />
                <input
                  type="text"
                  name="pass[]"
                  maxLength={1}
                  autoComplete="off"
                  required
                  pattern="\d{1}"
                  className="w-10 h-12 p-2 pb-2 pl-3 m-3 font-bold text-2xl border  rounded-md border-[#D0E9A7]"
                />
                <input
                  type="text"
                  name="pass[]"
                  maxLength={1}
                  autoComplete="off"
                  required
                  pattern="\d{1}"
                  className="w-10 h-12 p-2 pb-2 pl-3  font-bold text-2xl border  rounded-md border-[#D0E9A7]"
                />
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    className={`flex justify-center w-[320px]  items-center ${"bg-black"} rounded-lg pt-2 pb-2 mt-8 text-white cursor-pointer disabled:text-[#FFFFFF] disabled:bg-[#CCCCCC]`}
                    onClick={() => {
                      navigate("/signup/check-name");
                    }}
                  >
                    <span>Next</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckEmailVerifyCode;
