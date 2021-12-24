import React, { useState } from "react";
import './style.css';

const Contact = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.firstname} ${data.lastname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
    );
  };

  return (
    <>
      {/* <div className="my-5">
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      <section>
    <div className="container">
        <div className="contactinfo">
            <div>
                <h2>Contact Us</h2>
                <ul className="info">
                    <li>
                        <span><i class="fas fa-map-marker-alt" style={{height : "30px" , width : "30px" }}></i></span>&emsp;
                        <span>Shop no 23<br />
                        Cannaught Place,Delhi<br />
                        110006</span>
                    </li>
                    <li>
                        <span><i class="far fa-envelope" style={{height : "30px" , width : "30px" }}></i></span>&emsp;
                        <span>foodorder@gmail.com</span>
                    </li>
                    <li>
                        <span><i class="fas fa-phone-volume" style={{height : "30px" , width : "30px" }}></i></span>&emsp;
                        <span>9763584261</span>
                    </li>

                </ul><br /><br /><br />
                <ul className="sci">
                    <li><a href="#"><i class="fab fa-facebook-f" style={{height : "30px" , width : "30px" }}></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter" style={{height : "30px" , width : "30px"}}></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram" style={{height : "30px" , width : "30px"}}></i></a></li>
                    <li><a href="#"><i class="fab fa-pinterest-p" style={{height : "30px" , width : "30px"}}></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin" style={{height : "30px" , width : "30px"}}></i></a></li>

                </ul>
            </div>
        </div>
        <div className="contactForm">
            <h2>Send a message</h2>
            <div className="formBox">
            {/* <form onSubmit={formSubmit}> */}
                <div className="inputBox w50">
                    <input type="text" name="" 
                  required />
                    <span>First Name</span>
                </div>
                <div className="inputBox w50">
                    <input type="text" name="" 
                  required />
                    <span>Last Name</span>
                </div>
                <div className="inputBox w50">
                    <input type="email" name="" 
                   required />
                    <span>Email Address</span>
                </div>
                <div className="inputBox w50">
                    <input type="text" name="" 
                   required />
                    <span>Mobile Number</span>
                </div>
                <div className="inputBox w100">
                    <textarea name="" 
                   required></textarea>
                    <span>Write your message here...</span>
                </div>
                <div className="inputBox w100">
                    <input type="submit" value="Send" />
                     
                </div>
                {/* </form> */}
            </div>
        </div>
    </div>
    </section>
    </>
  );
};

export default Contact;