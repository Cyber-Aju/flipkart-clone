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
                    <li><a href=""><img src={grocery} /></a></li>
                    <li><a href="#" id="title">Grocery</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href=""><img src={mobile} /></a></li>
                    <li><a href="#" id="title">Mobiles</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href=""><img src={fashion} /></a></li>
                    <li><a href="#" id="title">Fashion</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href=""><img src={electronics} /></a></li>
                    <li><a href="#" id="title">Electronics</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href=""><img src={home} /></a></li>
                    <li><a href="#" id="title">Home & Furniture</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href=""><img src={appliance} /></a></li>
                    <li><a href="#" id="title">Appliances</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href=""><img src={travel} /></a></li>
                    <li><a href="#" id="title">Travel</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href=""><img src={toy} /></a></li>
                    <li><a href="#" id="title">Beauty, Toys & More</a></li>
                </ul>
            </div>
            <div class="col">
                <ul className="links">
                    <li><a href=""><img src={twowheeler} /></a></li>
                    <li><a href="#" id="title">Two Wheelers</a></li>
                </ul>
            </div>
        </div>
    </section>
    )};

export default Container;