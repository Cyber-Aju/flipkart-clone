import "./containers.css";
import grocery from "../../assets/grocery.png"
import mobile from "../../assets/mobile.png"
import fashion from "../../assets/fashion.png"
import electronics from "../../assets/electronics.png"
import home from "../../assets/home.png"
import appliance from "../../assets/appliance.png"
import travel from "../../assets/travel.png"
import toy from "../../assets/toys.png"
import twowheeler from "../../assets/twowheeler.png"


const Container = () => {
    return (
        <section class="container">
        <div class="row">
            <div class="col">
                <ul className="links">
                    <li><a href="#top" ><img src={grocery} alt="Grocery" /></a></li>
                    <li><a href="#top" id="title" >Grocery</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href="#top" ><img src={mobile} alt="Mobiles" /></a></li>
                    <li><a href="#top" id="title" >Mobiles</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href="#top" ><img src={fashion} alt="Fashion"/></a></li>
                    <li><a href="#top" id="title" >Fashion</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href="#top"><img src={electronics} alt="Electronincs"/></a></li>
                    <li><a href="#top" id="title">Electronics</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href="#top"><img src={home} alt="furniture" /></a></li>
                    <li><a href="#top" id="title">Home & Furniture</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href="#top"><img src={appliance} alt="appliance" /></a></li>
                    <li><a href="#top" id="title">Appliances</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href="#top"><img src={travel} alt = "travel" /></a></li>
                    <li><a href="#top" id="title">Travel</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href="#top"><img src={toy} alt ="toyss" /></a></li>
                    <li><a href="#top" id="title">Beauty, Toys & More</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href="#top"><img src={twowheeler} alt="twowheeler" /></a></li>
                    <li><a href="#top" id="title">Two Wheelers</a></li>
                </ul>
            </div>
        </div>
    </section>
    )};

export default Container; 