import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  let nav = useNavigate();
  const ref = useRef();
  const [click, setClick] = useState(false);

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("SendUser");
    nav("/");
  }

  useEffect(() => {
    // إضافة مستمع حدث النقر إلى document
    document.addEventListener("click", handleClickOutside);

    return () => {
      // إزالة مستمع حدث النقر عند إزالة المكون
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    // تحقق مما إذا كانت النقرة خارج المحتوى أو على أي عنصر آخر غير المحتوى
    if (ref.current && !ref.current.contains(e.target) && e.target.className !== "content" && e.target.className !== "fa-solid fa-bars") {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  function openDropDown(e) {
    e.preventDefault();
    if (!click || e.target.className === "fa-solid fa-bars") {
      setClick(!click);
    }
  }

  return (
    <>
      <div className="container">
        <div className="d-flex" style={{ height: "55px" }}>
          <div>
            <h1 className="title">AlHallak</h1>
          </div>

          <div className={click ? "drop-down click" : "drop-down"}>
            <i
              onClick={openDropDown}
              ref={ref}
              className=" fa-solid fa-bars"
            ></i>
            <div className="holder">
              <Link to={"/"} className="register-nav">
                Home
              </Link>
              <Link to={"/about"} className="register-nav">
                About
              </Link>
              <Link to={"/contactUs"} className="register-nav">
                Contact Us
              </Link>
              <Link to={"/our-products"} className="register-nav">
                Our Products
              </Link>
              {!localStorage.getItem("SendUser") ? (
                <>
                  <Link to={"/register"} className="register-nav">
                    Register
                  </Link>
                  <Link to={"/login"} className="register-nav">
                    Log in
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/dashboard"} className="register-nav">
                    Dashboard
                  </Link>
                  <Link onClick={logout} className="register-nav">
                    Logout
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="links">
            {/* <div className="flex-1"> */}
            <Link to={"/"} className="register-nav">
              Home
            </Link>
            <Link to={"/about"} className="register-nav">
              About
            </Link>
            <Link to={"/contactUs"} className="register-nav">
              Contact Us
            </Link>
            <Link to={"/our-products"} className="register-nav">
              Our Products
            </Link>
            {/* </div> */}
            {!localStorage.getItem("SendUser") ? (
              <>
                <Link to={"/register"} className="register-nav">
                  Register
                </Link>
                <Link to={"/login"} className="register-nav">
                  Log in
                </Link>
              </>
            ) : (
              <>
                <Link to={"/dashboard"} className="register-nav">
                  Dashboard
                </Link>
                <Link onClick={logout} className="register-nav">
                  Logout
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
