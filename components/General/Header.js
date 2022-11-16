import s from "../../styles/General/Header.module.css"
import Logo from '../../public/Logo.png'
import Image from "next/image"
import { Beau_Rivage } from '@next/font/google'
import { IoIosArrowDown } from 'react-icons/io'
const inter = Beau_Rivage({ weight: '400'})
const iconStyle = { color: "#933466", height: "20px" }
const Header = () => {
  return (
    <> 
        <div className={s.semicircle}>
          <Image className={s.logo} src={Logo} alt='Logo' width={85} height={137}/>
          <div className={s.namecontainer}>
           <h2 className={inter.className}>Wise Woman</h2>
           <h3 className={inter.className}>Birth Services</h3>
          </div>
        </div>
        <div className={s.subcontainer}>
          <h2 id={s.home_btn}>
            <btn>Home</btn>
          </h2>
          <h2 id={s.about_btn}>
            <btn>About</btn>
          </h2>
          <div id={s.spacer}></div>
          <div id={s.spacer}></div>
          <div id={s.spacer}></div>
          <h2 id={s.services_btn}>
            <btn>Services<IoIosArrowDown style={iconStyle}/></btn>
            </h2>
          <h2 id={s.contact_btn}>
            <btn>Contact</btn>
          </h2>
        </div> 
    </>
  )
}

export default Header