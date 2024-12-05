import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FaLongArrowAltDown } from "react-icons/fa";
import "./Value.css";
import data from "./Accordion"; // Adjust the import to the file path where the updated data is stored

const Value = () => {
  return (
    <section className="v-wrapper flexCenter">
      <div className="paddings v-container">
        <div className="v-left">
          <img src="./rose.jpeg" alt="Plant Care" />
        </div>

        <div className="v-right flexColStart">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">The value we bring to your plants</span>
          <span className="secondaryText">
            We are committed to offering the best care and maintenance services
            for your plants.
            <br />A healthy plant makes a beautiful home.
          </span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="accordion"
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className="accordionitem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionbtn flexCenter">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <FaLongArrowAltDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
