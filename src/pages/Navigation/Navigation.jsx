<<<<<<< HEAD

import Link from 'next/link'
import style from './Nav.module.scss'

const Navigation = () => {
  return (
    <>
       <div className={style.navbar}>
       <Link href='/'><img className={style.tittle} src='/images/Azad Sign LOGO.png' alt='image' width={0} height={0}/></Link>
          <div className={style.links}>  
            <Link href='https://www.linkedin.com/in/mdazad2' target='blank'><img src='/images/linkedin.png' width={30}  height={0}alt='image'/></Link>
            <Link href='https://www.instagram.com/mr_md_azad/' target='blank'><img src='/images/instagram.png' width={40} height={0} alt='image'/></Link>
          </div>
       </div>
    </>
  )
}

=======

import Link from 'next/link'
import style from './Nav.module.scss'

const Navigation = () => {
  return (
    <>
       <div className={style.navbar}>
       <Link href='/'><img className={style.tittle} src='/images/Azad Sign LOGO.png' alt='image' width={0} height={0}/></Link>
          <div className={style.links}>  
            <Link href='https://www.linkedin.com/in/mdazad2' target='blank'><img src='/images/linkedin.png' width={30}  height={0}alt='image'/></Link>
            <Link href='https://www.instagram.com/mr_md_azad/' target='blank'><img src='/images/instagram.png' width={40} height={0} alt='image'/></Link>
          </div>
       </div>
    </>
  )
}

>>>>>>> 449c1b6a3a9dd21d001e21a5b0c90f23e6255f35
export default Navigation