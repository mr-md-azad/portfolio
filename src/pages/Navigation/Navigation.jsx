import Link from 'next/link'
import { withRouter } from 'next/router'
import style from './Nav.module.scss'

const Navigation = () => {
  return (
    <>
       <div className={style.navbar}>
       <Link href='/'><img className={style.tittle} src='/images/Azad Sign LOGO.png'/></Link>
          <div className={style.links}>  
            <Link href='https://www.linkedin.com/in/mdazad2' target='blank'><img src='images/linkedin.png' width={30}/></Link>
            <Link href='https://www.instagram.com/mr_md_azad/' target='blank'><img src='images/instagram.png' width={40}/></Link>
          </div>
       </div>
    </>
  )
}

export default Navigation