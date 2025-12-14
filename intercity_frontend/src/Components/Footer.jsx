export default function Footer() {
	return (
		<div className="row">
			{/* <div className="bg-dark bg-opacity-80 text-light">
        <div className="fluid-container upper-footer">
          <div className="row pt-3 px-auto">
            <div className="col-md-3 mx-auto">
              <h6 className="footer-heading">ABOUT US</h6>
              <p className="mt-4">
                <span className="text-warning">
                  Intercity Express Trains (IET){" "}
                </span>
                is a new company building its customer base providing best
                facilities to its passengers.
              </p>
              <p className="mt-2 pt-3">
                <img width={"50"} src={logo} alt="logo" />
              </p>
            </div>
            <div className="col-md-3 mx-auto">
              <h6 className="footer-heading mb-4">MENU</h6>
              <ul className="ps-0 list-unstyled">
                <li className="mb-1">
                  <a className="nav-link">Home</a>
                </li>
                <li className="mb-1">
                  <a className="nav-link">About</a>
                </li>
                <li className="mb-1">
                  <a className="nav-link">Our Services</a>
                </li>
                <li className="mb-1">
                  <a className="nav-link">Our Products</a>
                </li>
                <li className="mb-1">
                  <a className="nav-link">Careers</a>
                </li>
                <li className="mb-1">
                  <a className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mx-auto">
              <h6 className="footer-heading mb-4">CONTACT US</h6>
              <strong className="text-warning">
                <p className="mb-0">INTERCITY EXPRESS TRAINS</p>
                <p>TICKETING SYSTEM</p>
              </strong>
              <p className="mb-1">Bandra</p>
              <p className="mb-1">Mumbai, Maharshtra, INDIA</p>
              <p className="mb-1">Phone: +91 7244455881</p>
              <p>
                e-mail:{" "}
                <a href="mailto:sales@process.ae?cc=info@process.ae">
                  sales@iet.com
                </a>
              </p>
            </div>
            <div className="col-md-3 ms-auto my-auto">
              <img width={"110"} src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div> */}
			<div className="fixed-bottom bg-light-subtle p-2">
				<div className="text-center">
					© COPYRIGHT {new Date().getFullYear()} "INTERCITY EXPRESS TRAINS" BY{" "}
					<span className="text-warning">DBMS PROJECT GROUP-13</span> ALL RIGHTS
					RESERVED.
				</div>
			</div>
		</div>
	);
}
