import React, { Component } from "react";
// import Navbar & Footer
import Navbar from "../components/Navbar";
import Footer from "../components/FooterBootstrap";
import NavbarLogin from "../components/NavbarLogin";
// import Css
import styles from "../css/Payment.module.css";
import withNavigate from "../helpers/withNavigate";
// import image
import product_1 from "../assets/image/product/img_hazelnut.png";
import product_2 from "../assets/image/product/img_chickenfire.png";
import icon_card from "../assets/image/main/icon_card.png";
import icon_cod from "../assets/image/main/icon_cod.png";
import icon_bank from "../assets/image/main/icon_bank.png";
import title from "../helpers/title";
class Payment extends Component {
   state = {
      userInfo: JSON.parse(localStorage["userInfo"] || "{}"),
   };
   render() {
      title("Payment");
      return (
         <>
            {/* <!-- Start Navbar --> */}
            {this.state.userInfo.token ? <Navbar /> : <NavbarLogin />}
            {/* <!-- End Navbar --> */}
            <main>
               <div
                  className={`container-fluid ${styles["background-payment"]}`}
               >
                  <div className={`container ${styles["title-payment"]}`}>
                     <h3>
                        Checkout your <br></br> item now!
                     </h3>
                     <div className="row d-flex justify-content-between flex-sm-column flex-md-column  flex-lg-row  gap-5">
                        <div
                           className={`${styles["content-left-payment"]} col-md-12 col-sm-12 col-lg-5 bg-white rounded-5`}
                        >
                           <div className={styles["box-left"]}>
                              <p>Order Summary</p>
                              {/* payment 1 */}
                              <div className={styles["payment-content"]}>
                                 <img
                                    src={product_1}
                                    alt="Payment1"
                                    width="100px"
                                    height="100px"
                                 ></img>
                                 <div className={styles["payment-center"]}>
                                    <p>Hazelnut Latte</p>
                                    <p>x1</p>
                                    <p>Reguler</p>
                                 </div>
                                 <div className={styles["payment-idr"]}>
                                    <p>IDR 24.0</p>
                                 </div>
                              </div>
                              {/* payment 2 */}
                              <div className={styles["payment-content"]}>
                                 <img
                                    src={product_2}
                                    alt="Payment2"
                                    width="100px"
                                    height="100px"
                                 ></img>
                                 <div className={styles["payment-center"]}>
                                    <p>Chicken Fire Wings</p>
                                    <p>x2</p>
                                    <p></p>
                                 </div>
                                 <div className={styles["payment-idr"]}>
                                    <p>IDR 24.0</p>
                                 </div>
                              </div>
                              {/* subtotal */}
                              <hr className="mx-5 my-4"></hr>
                              <div className={styles["total-payment"]}>
                                 <div className={styles["total-payment-left"]}>
                                    <p>SUBTOTAL</p>
                                    <p>TAX & FEES</p>
                                    <p>SHIPPING</p>
                                 </div>
                                 <div className={styles["total-payment-right"]}>
                                    <p>IDR: 120.000</p>
                                    <p>IDR: 20.000</p>
                                    <p>IDR: 10.000</p>
                                 </div>
                              </div>
                              <div className={styles["subtotal-payment"]}>
                                 <p>TOTAL</p>
                                 <p>IDR 150.000</p>
                              </div>
                           </div>
                        </div>

                        <div className="col-md-12 col-sm-12 col-lg-5 d-flex flex-column mb-5">
                           <div className="row d-flex flex-column">
                              <div className="col-12">
                                 <div className={styles["address-detail"]}>
                                    <h2>Address</h2>
                                    <p>edit</p>
                                 </div>
                                 <div className={styles["box-address"]}>
                                    <h5>
                                       <b className="me-1">Delivery</b>to
                                       Iskandar Street
                                    </h5>
                                    <p className={styles["address-column"]}>
                                       Km 5 refinery road oppsite republic road,
                                       effurun, Jakarta
                                    </p>
                                    <p>+62 81348287878</p>
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className={styles["payment-method"]}>
                                    <h2>Payment Method</h2>
                                 </div>
                                 <div className={styles["choose-payment"]}>
                                    <div className={styles["radio-payment"]}>
                                       <div
                                          className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}
                                       >
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="flexRadioDefault"
                                             id="flexRadioDefault1"
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="flexRadioDefault1"
                                          ></label>
                                          <div
                                             className={
                                                styles["data-content-payment"]
                                             }
                                          >
                                             <img
                                                src={icon_card}
                                                alt="icon-card"
                                                width="40px"
                                                className="rounded-2 mx-3"
                                             ></img>
                                             <span>Card</span>
                                          </div>
                                       </div>
                                       <div
                                          className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}
                                       >
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="flexRadioDefault"
                                             id="flexRadioDefault1"
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="flexRadioDefault1"
                                          ></label>
                                          <div
                                             className={
                                                styles["data-content-payment"]
                                             }
                                          >
                                             <img
                                                src={icon_bank}
                                                alt="icon-bank"
                                                width="40px"
                                                className="rounded-2 mx-3"
                                             ></img>
                                             <span>Bank</span>
                                          </div>
                                       </div>
                                       <div
                                          className={`form-check d-flex flex-row align-items-center ${styles["styling-data-radio"]}`}
                                       >
                                          <input
                                             className="form-check-input"
                                             type="radio"
                                             name="flexRadioDefault"
                                             id="flexRadioDefault1"
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="flexRadioDefault1"
                                          ></label>
                                          <div
                                             className={
                                                styles["data-content-payment"]
                                             }
                                          >
                                             <img
                                                src={icon_cod}
                                                alt="icon-cod"
                                                width="40px"
                                                className="rounded-2 mx-3"
                                             ></img>
                                             <span>Cash On Delivery</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className={styles["confirm-pay"]}>
                                 <button
                                    onClick={() => {
                                       this.props.navigate("/history");
                                    }}
                                 >
                                    <span>Confirm and Pay</span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </main>
            {/* <!-- Start Navbar --> */}
            <Footer />
            {/* <!-- End Navbar --> */}
         </>
      );
   }
}

export default withNavigate(Payment);
