import Head from 'next/head'
import Projects from './Projects'
import { Inter } from '@next/font/google'
import style from '@/styles/Home.module.css'
import img from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const today = new Date();
  return (
    <>
      <Head>
        <title>Azad&apos;s Portfolio</title>
        <meta name="description" content="Designed and Developed with ❤️ by @mr_md_azad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000"></meta>
        <link href='https://fonts.googleapis.com/css?family=Montserrat&display=optional' />
        <link href='https://fonts.googleapis.com/css?family=Poppins&display=optional' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        {/* 1. hero section  */}
        <div className="hero_section hero">
          <div className="heading">I&apos;m Azad <br />ui designer &<br />web developer.</div>

          <div className="sub_heading"></div>
          <a href='#about'><button className="about_btn ">about me</button></a>
        </div>

        {/* 2. about section  */}
        <div className='about_section' id="about">
          {/* about my self */}
          <div className="about_me about_box1">
            <div className="heading">ABOUT ME</div>
            <div className="description">Let&apos;s know something about me,<br />My name is Md Azad (محمر آذار), {today.getFullYear() - 2002} years old. An UI/UX Designer and Front-End Web Developer. Currently working as a Freelancer.</div>
            <button className="skills_btn"><a href='#skills'>My skills</a></button>
          </div>

          {/* my educations */}
          <div className="about_me about_box1">
            <div className="heading">EDUCATIONS</div>
            <div className="description">
              <p>
                <b>77.6% | CGPA-8.48</b><br />
                Diploma in Computer Science & Engineering <br />
                Government Polytechnic, Chhapra <br />
                Board- SBTE Patna, Bihar
              </p> <br />
              <p>
                <b>76.4%</b><br />
                Intermediate (XIIth), PCM<br />
                Board- BSEB Patna, Bihar
              </p><br />
              <p>
                <b>70.2%</b><br />
                Matric (Xth)<br />
                Board- BSEB Patna, Bihar
              </p>
            </div>
          </div>
          {/* <img className='image_box2' src='images/laptop.jpg' /> */}


        </div>

        {/* 3. skills */}
        <div className='skills_section' id="skills">
          <div className="section_name"><h1 className='heading'>MY SKILLS</h1></div>

          <div className="icons">

            <p>Languages</p>
            <img src='/images/skills/html-5.svg' width={0} height={0} alt='image' />
            <img src='/images/skills/css3.svg' width={0} height={0} alt='image' />
            <img src='/images/skills/javascript.svg' width={0} height={0} alt='image' />
            <img src='/images/skills/c++.svg' width={0} height={0} alt='image' />


            <p>Library/Framework</p>
            <img src='/images/skills/tailwind-css.svg' width={0} a height={0} lt='image' />
            <img src='/images/skills/react.svg' width={0} height={0} alt='image' />

            <p>Tools</p>
            <img src='/images/skills/adobe-xd.svg' width={0} height={0} alt='image' />
            <img src='/images/skills/figma.svg' width={0} height={0} alt='image' />
            <img src='/images/skills/visual-studio-code-2019.svg' width={0} height={0} alt='image' />
            <img className='github_icon' src='/images/skills/github.svg' width={0} height={0} alt='image' />
          </div>

        </div>

        {/* 4. my works */}
        <div className='works_section' id="works">
          <div className="section_name"><h1 className='heading'>MY WORKS</h1></div>
          <Projects />

        </div>



        <p className="footer">Designed and Developed with ❤️ by md azad.</p>
      </main>
    </>
  )
}
