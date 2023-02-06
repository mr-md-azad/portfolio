
import Link from 'next/link'
import style from './Nav.module.scss'

const Navigation = () => {
  return (
    <>
       <div className={style.navbar}>
       <Link href='/'><img className={style.tittle} src='/images/Azad Sign LOGO black.png' alt='image' width={0} height={0}/></Link>
          <div className={style.links}>  
            <Link href='https://www.linkedin.com/in/mdazad2' target='blank'><img src='/images/linkedin.png' width={30}  height={0}alt='image'/></Link>
            <Link href='https://www.instagram.com/mr_md_azad/' target='blank'><img src='/images/instagramBlack.png' width={30} height={0} alt='image'/></Link>
          </div>
       </div>
    </>
  )
}

export default Navigation