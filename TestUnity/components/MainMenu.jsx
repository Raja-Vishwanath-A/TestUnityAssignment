import MainMenuData from '../data.js'

export default function MainMenu (props){
     return (
            <div key= {props.id} className="main-element">
                <img className= "ele-logo" src={props.img.src} alt={props.img.alt} />
                <span className="main-menu-span">{props.title}</span>
                <button className="ele-dropdown"><img src="../images/arrow-down.png" alt="arrow" /></button>
            </div>
     )
}