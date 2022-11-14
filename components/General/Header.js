import s from "../../styles/General/Header.module.css"
import Logo from '../../public/Logo.png'
import Image from "next/image"
const Header = () => {
  return (
    <>
        <div className={s.semicircle}>
          <Image className={s.logo} src={Logo} alt='Logo' width={85} height={137}/>
        </div>
        <div className={s.subcontainer}>
        </div> 
    </>
  )
}

export default Header