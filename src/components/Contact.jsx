import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="c-left flexColStart">
          <span className="orangeText ">Our contacts</span>
          <span className="primaryText">Easy to contcat us</span>
          <br />
          <span className="secondaryText">
            Bringing nature charm to your spaces, because a beautiful
            environment nurtures a beautiful life. <br />
            <br />
            Transforming homes and businesses with greenery, creating spaces
            that inspire and refresh
          </span>

          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColStart mode">
                <div className="com">
                  <div className="flexCenter icon">
                    <MdCall size={25}></MdCall>
                  </div>

                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>1234567890</span>
                  </div>
                </div>

                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexColStart mode">
                <div className="com">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                  </div>

                  <div className="flexColStart detail">
                    <span>Chat</span>
                    <span>1234567890</span>
                  </div>
                </div>

                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            <div className="flexStart row">
              <div className="flexColStart mode">
                <div className="com">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}></BsFillChatDotsFill>
                  </div>

                  <div className="flexColStart detail">
                    <span>video Call</span>
                    <span>1234567890</span>
                  </div>
                </div>

                <div className="flexCenter button">video Call Now</div>
              </div>

              <div className="flexColStart mode">
                <div className="com">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenterText
                      size={25}
                    ></HiChatBubbleBottomCenterText>
                  </div>

                  <div className="flexColStart detail">
                    <span>Message</span>
                    <span>1234567890</span>
                  </div>
                </div>

                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right">
          <img src="./contact_photo.jpeg" alt="contact_photo.jpeg" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
