import React from "react";
import {TramFront} from "lucide-react"
import { Link } from "react-router";
import facebook from "./../assets/images/facebook.png"
import instagram from "./../assets/images/instagram.png"
import twitter from "./../assets/images/twitter.png"

const Footer = () => {
  return (
    <footer className="bg-[#73db73] text-green-800 py-8">
      <div className="container mx-auto flex w-[80%] mb-10 space-x-15">

        <div className="flex flex-col items-center w-[30%] my-auto">
            <div className="flex font-bold">
                <TramFront size={40}/>
                <p className="italic text-2xl">TrackGo</p>
            </div>
            <p className="text-green-600 font-semibold max-w-md">
                    TrackGo is official partner of IRCTC to book IRCTC train tickets and Railway train enquiry
            </p>
        </div>

        <div className="flex flex-col mt-4 space-y-2.5">
            <p className="font-bold">Features</p>
          <Link to="#" className="hover:text-gray-400">PNR Status</Link>
          <Link to="#" className="hover:text-gray-400">Train Running Status</Link>
          <Link to="#" className="hover:text-gray-400">Train Schedule</Link>
        </div>

        <div className="flex flex-col mt-4 space-y-2.5">
            <p className="font-bold">About TrackGo</p>
          <Link to="/about" className="hover:text-gray-400">About Page</Link>
          <Link to="#" className="hover:text-gray-400">Contact Us</Link>
        </div>

        <div className="flex flex-col mt-4 space-y-2.5">
            <p className="font-bold">Legal</p>
          <Link to="#" className="hover:text-gray-400">Privacy Policy</Link>
          <Link to="#" className="hover:text-gray-400">Terms of Conditions</Link>
        </div>

        <div className="flex flex-col mt-4 space-y-2.5">
            <p className="font-bold">Follow Us</p>
            <div className="flex flex-row space-x-3">
                <Link to="#"> <img src={instagram} alt="" className="w-8"/></Link>
                <Link to="#"> <img src={facebook} alt="" className="w-8"/></Link>
                <Link to="#"> <img src={twitter} alt="" className="w-8"/></Link>
            </div>
        </div>

      </div>
      <hr></hr>
      <p className="mt-4 text-sm py-auto text-center text-green-600 font-semibold">© 2024 TrackGo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
