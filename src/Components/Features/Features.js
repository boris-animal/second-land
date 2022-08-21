import "../../index.css"
import "./About.scss"
import cloud_left from "../../Images/clouds-left.png"
import cloud_right from "../../Images/clouds-right.png"
import overview_b from "../../Images/overview_b.png"
import files_b from "../../Images/files_b.png"
import meeting_chat_b from "../../Images/meeting_chat_b.png"
import save_events_b from "../../Images/save_events_b.png"


function About() {
    return(
        <main className="container about">
            <div className="about__bg-left"><img src={cloud_left} alt="cloud" /></div>
            <div className="about__bg-right"><img src={cloud_right} alt="cloud" /></div>
            <div className="about__main about-main">
                <h1 className="about-main__title">About us</h1>
                <h2 className="about-main__title-name">Read about our app</h2>
                <div className="about-main__items about-main-items">
                    <div className="about-main-items__item about-main-items-item">
                        <img className="about-main-items-item__button" src={overview_b} alt="Overview button" />
                        <p className="about-main-items-item__title">Overview</p>
                        <p className="about-main-items-item__main">
                            Brute laoreet efficiendi id
                            his, ea illum nonumes
                            luptatum pro.
                        </p>
                    </div>
                    <div className="about-main-items__item about-main-items-item">
                        <img className="about-main-items-item__button" src={files_b} alt="Files button" />
                        <p className="about-main-items-item__title">Files</p>
                        <p className="about-main-items-item__main">
                            No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.
                        </p>
                    </div>
                    <div className="about-main-items__item about-main-items-item">
                        <img className="about-main-items-item__button" src={meeting_chat_b} alt="Meeting chat button" />
                        <p className="about-main-items-item__title">Meeting chat</p>
                        <p className="about-main-items-item__main">
                            Vim ne tacimates neglegentur. Erat diceret omittam at est.
                        </p>
                    </div>
                    <div className="about-main-items__item about-main-items-item">
                        <img className="about-main-items-item__button" src={save_events_b} alt="Save events button" />
                        <p className="about-main-items-item__title">Save events</p>
                        <p className="about-main-items-item__main">
                            Nisl idque mel ea, nominati voluptatum.
                        </p>
                    </div>
                </div>
                <div className="about-main__buttons about-main-buttons">
                    <div className="about-main-buttons__button-left">Read more</div>
                    <div className="about-main-buttons__or">or</div>
                    <div className="about-main-buttons__button-right">Get started</div>
                </div>
            </div>
        </main>
    )
}

export default About;