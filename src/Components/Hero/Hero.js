import "../../index.css"
import "./Hero.scss"
import chat from "../../Images/Hero-chart.png";
import group from "../../Images/Hero-Group.png";
import stats from "../../Images/Hero-one of stats.png";
import clouds from "../../Images/Hero-clouds.png";
import button from "../../Images/Hero-play button.png";
import bitbucket_logo from "../../Images/bitbucket_logo.png"
import apple_watch_logo from "../../Images/apple_watch_logo.png"
import facebook2_logo from "../../Images/facebook2_logo.png"
import atlassian_logo from "../../Images/atlassian_logo.png"
import audi_logo from "../../Images/audi_logo.png"

function Hero() {
    return(
        <main className="hero">
            <div className="hero__main hero-main">
                <div className="hero-main__background hero-main-background">
                    <img className="hero-main-background__item1" src={chat} alt="hero image"/>
                    <img className="hero-main-background__item2" src={group} alt="hero image"/>
                    <img className="hero-main-background__item3" src={clouds} alt="hero image"/>
                    <img className="hero-main-background__item4" src={stats} alt="hero image"/>
                </div>
                <div className="container hero-main__text hero-main-text">
                    <p className="hero-main-text__title">PLAN YOUR LIFE</p>
                    <p className="hero-main-text__title-name">Increase your productivity</p>
                    <p className="hero-main-text__main">
                        Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu<br />
                        atqui laudem an, insolens gubergren similique est cu. Et vel modus<br />
                        congue vituperata.
                    </p>
                    <div >
                        <img className="hero-main-text__button" src={button} alt="hero button"/>
                    </div>
                </div>
            <div className="container hero__footer hero-footer">
                <img className="hero-footer__item" src={bitbucket_logo} alt="bitbucket logo" />
                <img className="hero-footer__item" src={apple_watch_logo} alt="apple watch logo" />
                <img className="hero-footer__item" src={facebook2_logo} alt="facebook logo" />
                <img className="hero-footer__item" src={atlassian_logo} alt="atlassian logo" />
                <img className="hero-footer__item" src={audi_logo} alt="audi logo" />
            </div>
            </div>
        </main>
    )
}

export default Hero;