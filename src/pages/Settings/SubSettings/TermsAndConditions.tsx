import React from "react";
import { NavLink } from "react-router-dom";
import { IconArrowLeft } from "../../../assets/icons";

const TermsAndConditions = () => {
  return (
    <div className="page-content-wrapper ">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-10">
          <div className="flex items-center">
            <NavLink to="/settings" className="flex mb-11 mr-5">
              <IconArrowLeft></IconArrowLeft>
            </NavLink>
            <div className="flex">
              <h2 className="font-bold text-2xl mb-11 items-center">
                Terms and Conditions
              </h2>
            </div>
          </div>
        </div>
        <div
          className="col-span-10 pl-8 pt-8 pb-8 pr-8 "
          style={{ backgroundColor: "#F5F5F5", borderRadius: 20 }}
        >
          <div className="flex flex-col">
            <span
              className="flex font-base text-base mb-4"
              style={{ color: "#312F2F" }}
            >
              These Terms and Conditions constitute a legally binding agreement
              made between you, whether personally or on behalf of an entity
              (“you”) and [business entity name] (“we,” “us” or “our”),
              concerning your access to and use of the Finwello application as
              well as any other media form, media channel, mobile website or
              mobile application related, linked, or otherwise connected thereto
              (collectively, the “Application”).
            </span>
            <span
              className="flex font-base text-base mb-4"
              style={{ color: "#312F2F" }}
            >
              You agree that by accessing the Application, you have read,
              understood, and agree to be bound by all of these Terms and
              Conditions. If you do not agree with all of these Terms and
              Conditions, then you are expressly prohibited from using the
              Application and you must discontinue use immediately.
            </span>
            <span
              className="flex font-base text-base mb-4"
              style={{ color: "#312F2F" }}
            >
              Supplemental terms and conditions or documents that may be posted
              on the Site from time to time are hereby expressly incorporated
              herein by reference. We reserve the right, in our sole discretion,
              to make changes or modifications to these Terms and Conditions at
              any time and for any reason.
            </span>
            <span
              className="flex font-base text-base mb-4"
              style={{ color: "#312F2F" }}
            >
              You agree that by accessing the Application, you have read,
              understood, and agree to be bound by all of these Terms and
              Conditions. If you do not agree with all of these Terms and
              Conditions, then you are expressly prohibited from using the
              Application and you must discontinue use immediately.
            </span>
            <span
              className="flex font-base text-base mb-4"
              style={{ color: "#312F2F" }}
            >
              Supplemental terms and conditions or documents that may be posted
              on the Site from time to time are hereby expressly incorporated
              herein by reference. We reserve the right, in our sole discretion,
              to make changes or modifications to these Terms and Conditions at
              any time and for any reason.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
