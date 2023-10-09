import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/icons/favicon.png";
import call from "../assets/icons/call.png";
import mail from "../assets/icons/mail.png";
import search from "../assets/icons/search.png";
import searchIcon from "../assets/icons/search-icon.png";

export default function Header() {
  const router = useRouter();
  let services = ["/VAT", "/IncomeTax", "/CustomExcise"];
  let forms = ["/VatForms", "/IncomeForms", "/CustomsForms"];
  let media = ["/news", "/gallery", "/videos", "/NewsDetails"];

  // const [isAboutOpen, setAboutOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isFormsOpen, setFormsOpen] = useState(false);
  const [isMediaOpen, setMediaOpen] = useState(false);
  // const [isContactOpen, setContactOpen] = useState(false);

  const [isOpen, setSearchOpen] = useState(false);
  function toggleSearch() {
    setSearchOpen(!isOpen);
  }

  const [windowScroll, setwindowScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      const threshold = 0;
      setwindowScroll(
        yOffset > threshold && yOffset - 70 > threshold ? "hidden" : "block"
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="w-full bg-white">
        <div className="flex justify-between px-10">
          <div className="pt-[6px]">
            <Link href={"/"}>
              <Image src={logo} alt="ERS" width={120} />
            </Link>
          </div>
          <div className="flex flex-col justify-between pt-1">
            <Link href={"/Error"}>
              <div className="flex text-mainColor float-right gap-10 font-normal items-center justify-end">
                <div>
                  <Image src={mail} alt="mail" className="mr-2 inline" />
                  <span>info@ers.org.sz</span>
                </div>
                <div>
                  <Image src={call} alt="call" className="mr-2 inline" />
                  <span>(+268) 2406 4050</span>
                </div>
              </div>
            </Link>

            <div className="flex space-x-4 items-center">
              <ul className="flex flex-row border-black/40 space-x-5">
                <li className="relative">
                  <div className="items-center">
                    <button
                    // className=""
                    // onMouseOver={() => {
                    //   setAboutOpen(!isAboutOpen);
                    // }}
                    // onMouseLeave={() => {
                    //   setAboutOpen(false);
                    // }}
                    >
                      <Link href={"/about"}>
                        <h3
                          className={`block pb-4 text-lg leading-5 font-medium hover:text-mainColor mr-3 ${
                            router.asPath === "/about"
                              ? "text-[#2F3192]"
                              : "text-black/80"
                          }`}
                        >
                          About Us
                          {/* <span style={{ float: "right" }}>
                          <RiArrowDropDownLine size={25} />
                        </span> */}
                        </h3>
                      </Link>
                    </button>
                    {/* <div
                      className={`absolute z-10 font-normal ${
                        isAboutOpen ? "block" : "hidden"
                      }`}
                    >
                    </div> */}
                  </div>
                </li>
                <li className="relative main">
                  <div className="items-center">
                    <button
                      onMouseOver={() => {
                        setServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        setServicesOpen(false);
                      }}
                    >
                      <h3
                        className={`block pb-4 text-lg leading-5 font-medium hover:text-mainColor ${
                          services.includes(router.asPath)
                            ? "text-[#2F3192]"
                            : "text-black/80"
                        }`}
                      >
                        Services
                        <span style={{ float: "right" }} className="arrow">
                          <RiArrowDropDownLine size={25} />
                        </span>
                      </h3>
                    </button>
                    <div
                      className={`absolute z-10 font-normal ${
                        isServicesOpen ? "block" : "hidden"
                      }`}
                    >
                      <ul
                        className={`text-sm font-sans text-white ${windowScroll}`}
                        onMouseOver={() => {
                          setServicesOpen(true);
                        }}
                        onMouseLeave={() => {
                          setServicesOpen(false);
                        }}
                      >
                        <div
                          className={`fixed left-10 right-10 font-normal w-[94%] bg-mainColor flex ${
                            isServicesOpen ? "block" : "hidden"
                          }`}
                        >
                          <div className="bg-subColor pt-5 w-[650px]">
                            <h1 className="text-xl font-bold text-yellowish leading-8 px-6 mb-3">
                              What{"'"}s New
                            </h1>
                            <p className="px-8 text-sm leading-6 font-bold">
                              UNMASK TAX CORRUPTION:
                            </p>
                            <p className="px-8 text-sm leading-6 font-normal mb-3">
                              {" "}
                              The ERS is calling all taxpayers to <br /> “unmask
                              tax corruption” by <br /> reporting such cases via
                              our TOLL <br /> FREE line..
                            </p>{" "}
                            <p className="px-8 text-sm leading-6 font-bold cursor-pointer">
                              ...Read More
                            </p>
                            <hr className="border-white/30 my-5" />
                            <p className="px-8 text-sm leading-6 font-bold cursor-pointer">
                              Click here to see VAT Schedule <br /> Spreadsheet{" "}
                            </p>
                            <hr className="border-white/30 my-5" />
                            <p className="px-8 text-sm leading-6 font-bold cursor-pointer">
                              Q1 ERS Merchandise Trade Report <br /> 07.11.22
                            </p>
                            <hr className="border-white/30 mt-5 mb-16" />
                          </div>

                          <div className="pt-5 px-12 grid grid-cols-3 gap-32 my-1">
                            <div className="flex flex-col">
                              <div>
                                <h1 className="text-xl font-bold leading-8 mb-3">
                                  VAT
                                </h1>
                                <Link href={"/VAT"}>
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish line ">
                                    Eswatini VAT
                                  </p>
                                  <br />
                                  <p className="text-sm leading-6 font-normal my-1 cursor-pointer hover:text-yellowish line">
                                    Registration
                                  </p>
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish line">
                                    Exempt Supplies of Goods & <br /> Services
                                  </p>
                                  <p className="text-sm leading-6 font-normal my-1 cursor-pointer hover:text-yellowish line">
                                    Reverse Charge Concept
                                  </p>
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish line">
                                    Zero Rated goods + Services
                                  </p>
                                </Link>
                              </div>
                              <div>
                                <h1 className="text-xl font-bold leading-8 mt-12 mb-3">
                                  Legal and Policy
                                </h1>
                                <p className="text-sm leading-6 font-normal cursor-pointer  hover:text-yellowish line">
                                  Tax Legislations
                                </p>
                                <br />
                                <p className="text-sm leading-6 font-normal my-1 cursor-pointer hover:text-yellowish line">
                                  Double Taxation Agreements
                                </p>
                                <br />
                                <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish line">
                                  VAT Regulations
                                </p>
                                <br />
                                <p className="text-sm leading-6 font-normal mt-1 cursor-pointer hover:text-yellowish line">
                                  Practice Notes and Guidelines
                                </p>
                              </div>
                            </div>
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3 ">
                                Income Tax
                              </h1>
                              <Link href={"/IncomeTax"}>
                                <p className="text-sm font-normal cursor-pointer  hover:text-yellowish line">
                                  Eswatini Income Tax
                                </p>
                                <br />
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish line">
                                  Rates and Thresholds
                                </p>
                                <br />
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  Withholding Taxes
                                </p>
                                <br />
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish line">
                                  Taxation of Benefits
                                </p>
                                <br />
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  Income Tax Returns
                                </p>
                                <br />
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish line">
                                  Retirement and Redundancy
                                </p>
                                <br />
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  Self Assessment
                                </p>
                                <br />
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish line">
                                  PAYE - Quick Guide
                                </p>
                                <br />
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  Part Time Employees
                                </p>
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish line">
                                  Guide on the Appointment of a <br /> Public
                                  Officer
                                </p>
                              </Link>
                            </div>
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                Customs & Excise
                              </h1>
                              <Link href={"/CustomExcise"}>
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  Eswatini Customs
                                </p>
                                <br />
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish line">
                                  General Import & Export Rules
                                </p>
                                <br />
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  Customs Tariff
                                </p>
                                <br />
                                <p className="text-sm  font-normal my-2 cursor-pointer hover:text-yellowish line">
                                  Customs Procedure Codes
                                </p>
                                <br />
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  Bonded Warehouses/Rebate Store
                                </p>
                                <br />
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish line">
                                  Free Trade and Preferential <br /> Agreements
                                </p>
                                <br />
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  Excise
                                </p>
                                <br />
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish line">
                                  Customs Worksheet
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative main">
                  <div className="items-center">
                    <button
                      onMouseOver={() => {
                        setFormsOpen(!isFormsOpen);
                      }}
                      onMouseLeave={() => {
                        setFormsOpen(false);
                      }}
                    >
                      <h3
                        className={`block pb-4 text-lg leading-5 font-medium hover:text-mainColor ${
                          forms.includes(router.asPath)
                            ? "text-[#2F3192]"
                            : "text-black/80"
                        }`}
                      >
                        Forms
                        <span style={{ float: "right" }} className="arrow">
                          <RiArrowDropDownLine size={25} />
                        </span>
                      </h3>
                    </button>
                    <div
                      className={`absolute z-10 font-normal ${
                        isFormsOpen ? "block" : "hidden"
                      }`}
                    >
                      <ul
                        className={`text-sm font-sans text-white ${windowScroll}`}
                        onMouseOver={() => {
                          setFormsOpen(true);
                        }}
                        onMouseLeave={() => {
                          setFormsOpen(false);
                        }}
                      >
                        <div
                          className={`fixed left-10 right-10 font-normal w-[94%] bg-mainColor flex ${
                            isFormsOpen ? "block" : "hidden"
                          }`}
                        >
                          <div className="bg-subColor pt-5 w-auto ">
                            <h1 className="text-xl font-bold text-yellowish leading-8 px-6 mb-3">
                              What{"'"}s New
                            </h1>
                            <p className="px-8 text-sm leading-6 font-bold">
                              UNMASK TAX CORRUPTION:
                            </p>
                            <p className="px-8 text-sm leading-6 font-normal mb-3">
                              {" "}
                              The ERS is calling all taxpayers to <br /> “unmask
                              tax corruption” by <br /> reporting such cases via
                              our TOLL <br /> FREE line..
                            </p>{" "}
                            <p className="px-8 text-sm leading-6 font-bold cursor-pointer">
                              ...Read More
                            </p>
                            <hr className="border-white/30 my-5" />
                            <p className="px-8 text-sm leading-6 font-bold cursor-pointer">
                              Click here to see VAT Schedule <br /> Spreadsheet{" "}
                            </p>
                            <hr className="border-white/30 my-5" />
                            <p className="px-8 text-sm leading-6 font-bold cursor-pointer">
                              Q1 ERS Merchandise Trade Report <br /> 07.11.22
                            </p>
                            <hr className="border-white/30 mt-5 mb-16" />
                          </div>

                          <div className="pt-5 px-14 grid grid-cols-3 gap-16 my-1">
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                VAT Forms
                              </h1>
                              <Link href={"/VatForms"}>
                                <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish line">
                                  VAT Refunds for Diplomats, <br /> Diplomatic
                                  and Consular <br /> Missions & International{" "}
                                  <br /> Organizations Printable
                                </p>
                                <br />
                                <p className="text-sm leading-6 font-normal my-3 cursor-pointer hover:text-yellowish line">
                                  VAT Refunds for Diplomats, <br /> Diplomatic
                                  and Consular <br /> Missions & International{" "}
                                  <br /> Organizations
                                </p>
                                <br />
                                <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish line">
                                  VAT Return Printable
                                </p>
                                <p className="text-sm leading-6 font-bold mt-3 cursor-pointer ">
                                  ...View All VAT Forms
                                </p>
                              </Link>
                            </div>
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                Income Tax Forms
                              </h1>
                              <Link href={"/IncomeForms"}>
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  Notice of Objection <br /> Form Printable
                                </p>
                                <br />
                                <p className="text-sm font-normal my-3 cursor-pointer hover:text-yellowish line">
                                  TIN Registration Form Company
                                </p>
                                <br />
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  Taxpayer Profile Maintenance <br /> Form
                                  Individuals
                                </p>
                                <p className="text-sm font-bold mt-3 cursor-pointer  ">
                                  ...View All Income TAX Forms
                                </p>
                              </Link>
                            </div>
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3 ">
                                Customs & Excise Forms
                              </h1>
                              <Link href={"/CustomsForms"}>
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  CE 73 Application For Special <br />{" "}
                                  Attendance
                                </p>
                                <br />
                                <p className="text-sm font-normal my-3 cursor-pointer hover:text-yellowish line">
                                  CE 101 Declaration on Transfer of <br />{" "}
                                  Residence
                                </p>
                                <br />
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  CE66 Application For Refund
                                </p>
                                <p className="text-sm font-bold mt-3 cursor-pointer  ">
                                  ...View All Customs and Excise Forms
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative main">
                  <div className="items-center">
                    <button
                      onMouseOver={() => {
                        setMediaOpen(true);
                      }}
                      onMouseLeave={() => {
                        setMediaOpen(false);
                      }}
                    >
                      <h3
                        className={`block pb-4 text-lg leading-5 font-medium hover:text-mainColor ${
                          media.includes(router.asPath)
                            ? "text-[#2F3192]"
                            : "text-black/80"
                        }`}
                      >
                        Media{" "}
                        <span style={{ float: "right" }} className="arrow">
                          <RiArrowDropDownLine size={25} />
                        </span>
                      </h3>
                    </button>
                    <div
                      className={`absolute z-10 font-normal w-24 bg-mainColor ${
                        isMediaOpen ? "block" : "hidden"
                      }`}
                    >
                      <ul
                        className={`text-sm font-sans text-white ${windowScroll}`}
                        onMouseOver={() => {
                          setMediaOpen(true);
                        }}
                        onMouseLeave={() => {
                          setMediaOpen(false);
                        }}
                      >
                        <div
                          className={`fixed left-10 right-10 font-normal w-[94%] bg-mainColor flex ${
                            isMediaOpen ? "block" : "hidden"
                          }`}
                        >
                          <div className="bg-subColor pt-5 w-[515px] ">
                            <h1 className="text-xl font-bold text-yellowish leading-8 px-6 mb-3">
                              What{"'"}s New
                            </h1>
                            <p className="px-8 text-sm leading-6 font-bold">
                              UNMASK TAX CORRUPTION:
                            </p>
                            <p className="px-8 text-sm leading-6 font-normal mb-3">
                              {" "}
                              The ERS is calling all taxpayers to <br /> “unmask
                              tax corruption” by <br /> reporting such cases via
                              our TOLL <br /> FREE line..
                            </p>{" "}
                            <p className="px-8 text-sm leading-6 font-bold cursor-pointer">
                              ...Read More
                            </p>
                            <hr className="border-white/30 my-5" />
                            <p className="px-8 text-sm leading-6 font-bold cursor-pointer">
                              Click here to see VAT Schedule <br /> Spreadsheet{" "}
                            </p>
                            <hr className="border-white/30 my-5" />
                            <p className="px-8 text-sm leading-6 font-bold cursor-pointer">
                              Q1 ERS Merchandise Trade Report <br /> 07.11.22
                            </p>
                            <hr className="border-white/30 mt-5 mb-16" />
                          </div>

                          <div className="pt-5 px-14 grid grid-cols-3 gap-48 my-1 justify-center">
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                News
                              </h1>
                              <Link href={"/news"}>
                                <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish line">
                                  Authorised Economic <br />
                                  Operator Accreditation
                                </p>
                                <p className="text-sm leading-6 font-normal my-3  cursor-pointer hover:text-yellowish line">
                                  ERS Donates To <br />
                                  Ekululameni Center
                                </p>
                                <p className="text-sm leading-6 font-normal cursor-pointer  hover:text-yellowish line">
                                  Pay your Tax on Time
                                </p>
                              </Link>
                            </div>
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                Gallery
                              </h1>
                              <Link href={"/gallery"}>
                                <p className="text-sm font-normal cursor-pointer  hover:text-yellowish line">
                                  Income Tax Mobile <br /> Clinic
                                </p>

                                <p className="text-sm font-normal mt-3 cursor-pointer hover:text-yellowish line">
                                  PM Submits Income Tax <br /> Returns
                                </p>
                                <p className="text-sm  mt-3 cursor-pointer  hover:text-yellowish line">
                                  Lomahasha Border <br /> Hours Extension
                                </p>
                              </Link>
                            </div>
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                Videos
                              </h1>
                              <Link href={"/videos"}>
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish line">
                                  ERS Public <br />
                                  Meeting in Ezulmini
                                </p>
                                <br />
                                <p className="text-sm font-normal my-3 cursor-pointer hover:text-yellowish line">
                                  Pay your Tax <br />
                                  in Three Steps
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="items-center">
                    <button
                    // onMouseOver={() => {
                    //   setContactOpen(true);
                    // }}
                    // onMouseLeave={() => {
                    //   setContactOpen(false);
                    // }}
                    >
                      <Link href={"/Contact"}>
                        <h3
                          className={`block pb-4 text-lg leading-5 font-medium hover:text-mainColor ${
                            router.asPath === "/Contact"
                              ? "text-[#2F3192]"
                              : "text-black/80"
                          }`}
                        >
                          Contact Us
                          {/* <span style={{ float: "right" }}>
                            <RiArrowDropDownLine size={25} />
                          </span> */}
                        </h3>
                      </Link>
                    </button>
                    {/* <div
                      className={`absolute z-10 font-normal ${
                        isContactOpen ? "block" : "hidden"
                      }`}
                    >
                      <ul
                        className="text-sm font-sans text-white pt-2"
                        onMouseOver={() => {
                          setContactOpen(true);
                        }}
                        onMouseLeave={() => {
                          setContactOpen(false);
                        }}
                      >
                        <div
                          className={`absolute z-10 font-normal w-24 bg-mainColor ${
                            isContactOpen ? "block" : "hidden"
                          }`}
                        ></div>
                      </ul>
                    </div> */}
                  </div>
                </li>
              </ul>
              <div className="border-r-2 border-[#999999] h-5 mb-4"></div>

              <div className={`${isOpen ? "search-container-open" : ""}`}>
                <button
                  className="flex gap-3 items-center search-toggle mb-4"
                  onClick={toggleSearch}
                >
                  <div>
                    <Image src={search} alt="search" height={17} width={17} />
                  </div>
                  <h3
                    className={`text-lg leading-5 font-semibold hover:text-mainColor ${
                      isOpen ? "text-[#2F3192]" : "text-black/80"
                    }`}
                  >
                    Search
                  </h3>
                </button>
                <div className="search-input px-5 py-3">
                  <h1 className="inline-block text-lg font-semibold text-white">
                    SEARCH
                  </h1>
                  <input
                    type="text"
                    placeholder="Keyword..."
                    className="py-[10px] px-4 w-[350px] focus:outline-none text-base font-normal ml-5 mr-3"
                  ></input>
                  <button className="p-2">
                    <Image
                      src={searchIcon}
                      alt="search"
                      height={17}
                      width={17}
                      className="inline-block"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
