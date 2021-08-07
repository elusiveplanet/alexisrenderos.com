import Head from 'next/head'
import Image from 'next/image'

export const Home = (): JSX.Element => (
  <div className="container">
  <Head>
  <meta charset="utf-8"/>
  <title>Alexis J. Renderos</title>
  <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
  <meta content="width=device-width, initial-scale=1" name="viewport"/>

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://renderos.tech" />
  <meta property="og:title" content="Alexis J. Renderos" />
  <meta property="og:description" content="Intensely curious, passionate, tenacious, and experienced manager and software engineer."/>
  <meta property="og:image" content="https://renderos.tech/assets/you011-min.JPG" />

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:domain" value="renderos.tech"/>
  <meta name="twitter:title" value="Alexis J. Renderos"/>
  <meta name="twitter:description" value="Intensely curious, passionate, tenacious, and experienced manager and software engineer."/>
  <meta name="twitter:image" content="https://renderos.tech/assets/you011-min.JPG"/>
  <meta name="twitter:url" value="https://renderos.tech"/>

  <meta content="Alexis J. Renderos" name="description"/>
  <meta content="Alexis J. Renderos" name="author"/>
</Head>
<body>
//   <!--
//
//  ▄▄▄       ██▓    ▓█████ ▒██   ██▒ ██▓  ██████     ██▀███  ▓█████  ███▄    █ ▓█████▄ ▓█████  ██▀███   ▒█████    ██████
// ▒████▄    ▓██▒    ▓█   ▀ ▒▒ █ █ ▒░▓██▒▒██    ▒    ▓██ ▒ ██▒▓█   ▀  ██ ▀█   █ ▒██▀ ██▌▓█   ▀ ▓██ ▒ ██▒▒██▒  ██▒▒██    ▒
// ▒██  ▀█▄  ▒██░    ▒███   ░░  █   ░▒██▒░ ▓██▄      ▓██ ░▄█ ▒▒███   ▓██  ▀█ ██▒░██   █▌▒███   ▓██ ░▄█ ▒▒██░  ██▒░ ▓██▄
// ░██▄▄▄▄██ ▒██░    ▒▓█  ▄  ░ █ █ ▒ ░██░  ▒   ██▒   ▒██▀▀█▄  ▒▓█  ▄ ▓██▒  ▐▌██▒░▓█▄   ▌▒▓█  ▄ ▒██▀▀█▄  ▒██   ██░  ▒   ██▒
//  ▓█   ▓██▒░██████▒░▒████▒▒██▒ ▒██▒░██░▒██████▒▒   ░██▓ ▒██▒░▒████▒▒██░   ▓██░░▒████▓ ░▒████▒░██▓ ▒██▒░ ████▓▒░▒██████▒▒
//  ▒▒   ▓▒█░░ ▒░▓  ░░░ ▒░ ░▒▒ ░ ░▓ ░░▓  ▒ ▒▓▒ ▒ ░   ░ ▒▓ ░▒▓░░░ ▒░ ░░ ▒░   ▒ ▒  ▒▒▓  ▒ ░░ ▒░ ░░ ▒▓ ░▒▓░░ ▒░▒░▒░ ▒ ▒▓▒ ▒ ░
//   ▒   ▒▒ ░░ ░ ▒  ░ ░ ░  ░░░   ░▒ ░ ▒ ░░ ░▒  ░ ░     ░▒ ░ ▒░ ░ ░  ░░ ░░   ░ ▒░ ░ ▒  ▒  ░ ░  ░  ░▒ ░ ▒░  ░ ▒ ▒░ ░ ░▒  ░ ░
//   ░   ▒     ░ ░      ░    ░    ░   ▒ ░░  ░  ░       ░░   ░    ░      ░   ░ ░  ░ ░  ░    ░     ░░   ░ ░ ░ ░ ▒  ░  ░  ░
//       ░  ░    ░  ░   ░  ░ ░    ░   ░        ░        ░        ░  ░         ░    ░       ░  ░   ░         ░ ░        ░
//
//
//   -->

  // <!--HEADER -->
  <div class="header">
    <div class="for-sticky">
    </div>
    <div class="menu-wrap">
      <nav class="menu">
        <div class="menu-list">
          <a data-scroll="" href="#about">
            <span>About</span>
          </a>
          <a data-scroll="" href="#experience">
            <span>Experience</span>
        </a>
          <a data-scroll="" href="#education">
            <span>Education</span>
          </a>
          <a data-scroll="" href="#projects">
            <span>Projects</span>
          </a>
          <a data-scroll="" href="#resume">
            <span>Resume</span>
          </a>
          <a data-scroll="" href="#aboutme">
            <span>About Me</span>
          </a>
          <a data-scroll="" href="#contact">
            <span>Contact</span>
          </a>
          <a data-scroll="" href="#links">
            <span>Links</span>
          </a>
        </div>
      </nav>
      <button class="close-button" id="close-button">Close Menu</button>
    </div>
    <button class="menu-button" id="open-button">
      <span></span>
      <span></span>
      <span></span>
    </button><!--/.for-sticky-->
  </div>
  // <!--/.HEADER END-->

  // <!--CONTENT WRAP-->
  <div class="content-wrap">
    // <!--CONTENT-->
    <div class="content">

      // <!--ABOUT-->
      <section id="about">
        <div class="col-md-6 col-sm-12 col-xs-12 no-pad">
          <div class="bg-about"></div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 no-pad">
          <div class="wrap-about">
            <table class="w-content">
              <tr>
                <td class="title">I am:</td>
                <td class="break">:</td>
                <td>Alexis J. Renderos</td>
              </tr>
              <tr>
                <td class="title">Phone</td>
                <td class="break">:</td>
                <td>847.873.3420</td>
              </tr>
              <tr>
                <td class="title">Personal Email</td>
                <td class="break">:</td>
                <td>renderosalexis17@gmail.com</td>
              </tr>
              <tr>
                <td class="title">Work Email - 88.5 KURE</td>
                <td class="break">:</td>
                <td>agm@kure885.org</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
      // <!--/.ABOUT END-->
      // <!--EMPLOYMENT-->
      <section class="grey-bg" id="experience">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h3 class="title-small">
                <span>Experience</span>
              </h3>
            </div>
            <div class="col-md-9 content-right">
              <div class="row">
                <ul class="listing-item">
                  <li>
                    <div class="col-md-6 col-sm-6">
                      <div class="wrap-card">
                        <div class="card">
                          <h2 class="job">
                            Software Engineering Intern
                          </h2>
                          <p class="year">
                            January 2021 - Present
                          </p>
                          <p class="company">
                            Dreambound
                          </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="col-md-6 col-sm-6">
                      <div class="wrap-card">
                        <div class="card">
                          <h2 class="job">
                            Software Engineering Intern
                          </h2>
                          <p class="year">
                            May 2020 - August 2020
                          </p>
                          <p class="company">
                            Slack Technologies
                          </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="col-md-6 col-sm-6">
                      <div class="wrap-card">
                        <div class="card">
                          <h2 class="job">
                            Software Engineering Intern
                          </h2>
                          <p class="year">
                            May 2019 - May 2020
                          </p>
                          <p class="company">
                            Collins Aerospace/Raytheon Technologies
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="col-md-6 col-sm-6">
                      <div class="wrap-card">
                        <div class="card">
                          <h2 class="job">
                            Assistant General Manager / Chief Operator
                          </h2>
                          <p class="year">
                            September 2018 - Present
                          </p>
                          <p class="company">
                            88.5 KURE Ames Alternative
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="col-md-6 col-sm-6">
                      <div class="wrap-card">
                        <div class="card">
                          <h2 class="job">
                            Systems Support Specialist
                          </h2>
                          <p class="year">
                            February 2019 - May 2019
                          </p>
                          <p class="company">
                            Iowa State University Biology IT
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="col-md-6 col-sm-6">
                      <div class="wrap-card">
                        <div class="card">
                          <h2 class="job">
                            Makerspace Technologist
                          </h2>
                          <p class="year">
                            August 2016 - August 2018
                          </p>
                          <p class="company">
                            Ela Area Public Library
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="col-md-6 col-sm-6">
                      <div class="wrap-card">
                        <div class="card">
                          <h2 class="job">
                            Robotics Engineering Intern
                          </h2>
                          <p class="year">
                            June 2016 - July 2016
                          </p>
                          <p class="company">
                            Engis Corporation
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      // <!--/.EMPLOYMENT END-->

      // <!--EDUCATION-->
      <section class="grey-bg" id="education">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h3 class="title-small">
                <span>Education</span>
              </h3>
            </div>
            <div class="col-md-9 content-right">
              <div class="row">
                <ul class="listing-item">
                  <li>
                    <div class="col-md-6 col-sm-6">
                      <div class="wrap-card">
                        <div class="card">
                          <h2 class="job">
                            Iowa State University
                          </h2>
                          <p class="year">
                            Undergraduate Student
                          </p>
                          <p class="major">
                            August 2018 - May 2022
                          </p>
                          <p class="company">
                            Major: Computer Engineering
                          </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="col-md-6 col-sm-6">
                      <div class="wrap-card">
                        <div class="card">
                          <h2 class="job">
                            Lake Zurich High School
                          </h2>
                          <p class="year">
                            Alumni
                          </p>
                          <p class="major">
                            August 2014 - May 2018
                          </p>
                          <p class="company">
                            Major: High School?
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      // <!--/.EDUCATION END-->

      // <!--PROJECTS-->
      <section class="grey-bg" id="projects">
        <div id="content-desktop">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="title-small-center text-center">
                  <span>Projects</span>
                </h3>
                // <!--GRID BLOG-->
                <div class="grid">
                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-3" class="img-rounded text-center" src="assets/lifedrinkerPoster.jpg">
                      <a href="#">
                        <h3 class="title">
                          Lifedrinker
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2019</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-3" class="img-rounded text-center" src="assets/ClarkHighResSquare.jpg">
                      <a href="#">
                        <h3 class="title">
                          Clark
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2017-Present</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog2" class="img-rounded text-center" src="assets/blog-1.jpg">
                      <a href="#">
                        <h3 class="title">
                          Personal Website
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2017-Present</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-3" class="img-rounded text-center" src="assets/SevenWordsLogo.png">
                      <a href="#">
                        <h3 class="title">
                          7Words
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2019-Present</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-3" class="img-rounded text-center" src="assets/gazpacho.jpg">
                      <a href="#">
                        <h3 class="title">
                          Gazpacho
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2019</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-3" class="img-rounded text-center" src="assets/endeavor.png">
                      <a href="#">
                        <h3 class="title">
                          Endeavor, aka Smokey 11
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2018</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-3" class="img-rounded text-center" src="assets/ArgentRoboticsLogo.png">
                      <a href="#">
                        <h3 class="title">
                          Argent Robotics
                        </h3>
                        </a>
                        <p class="subtitle fancy">
                          <span>2015-Present</span>
                        </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog2" class="img-rounded text-center" src="assets/blog-4.jpg">
                      <a href="#">
                        <h3 class="title">
                          Smokey 9.5
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2015-2018</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-3" class="img-rounded text-center" src="assets/ortReportLogo.png">
                      <a href="#">
                        <h3 class="title">
                          ORTrepORT
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2018</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-3" class="img-rounded text-center" src="assets/blog-1.jpg">
                      <a href="#">
                        <h3 class="title">
                          Denki
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2017-2018</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                     <img alt="blog-4" class="img-rounded text-center" src="assets/hero.jpg">
                      <a href="#">
                        <h3 class="title">
                          Heathkit HERO-01
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                         <span>2015-Present</span>
                       </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-3" class="img-rounded text-center" src="assets/megametro.jpg">
                      <a href="#">
                        <h3 class="title">
                          MetroMegaMatrix
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2018</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-3" class="img-rounded text-center" src="assets/legoRobotics.JPG">
                      <a href="#">
                        <h3 class="title">
                          "Operation: Wolfnova"
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2017-2018</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog5" class="img-rounded text-center" src="assets/underglowTho.JPG">
                      <a href="#">
                        <h3 class="title">
                          #ThatUnderglowTho!
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2016-2018</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-3" class="img-rounded text-center" src="assets/nunca.png">
                      <a href="#">
                        <h3 class="title">
                          Nunca
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2017-Present</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog6" class="img-rounded text-center" src="assets/rostock.jpg">
                      <a href="#">
                        <h3 class="title">
                          Rostock MAX v2 Assembly
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2016</span>
                      </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                     <img alt="blog-4" class="img-rounded text-center" src="assets/bomber.PNG">
                      <a href="#">
                        <h3 class="title">
                          My first Video Game
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                         <span>2012</span>
                       </p>
                    </div>
                  </div>

                  <div class="grid-item">
                    <div class="wrap-article">
                      <img alt="blog-1" class="img-rounded text-center" src="assets/myFirstRobot.png">
                      <a href="./projectDocs/myFirst.html">
                        <h3 class="title">
                          My first Robot
                        </h3>
                      </a>
                      <p class="subtitle fancy">
                        <span>2014</span>
                      </p>
                    </div>
                  </div>
                </div>
                // <!--/.GRID BLOG END-->
              </div>
            </div>
          </div>
        </div>
        <div id="content-mobile">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="title-small-center text-center">
                  <span>Projects</span>
                </h3>
                <div class="row">
                  <div class="col-md-6 col-md-offset-3">
                    <p class="content-details text-center">
                      This content is best viewed in a desktop browser
                      <br>
                      <a href="./projects.html">If you're like me and want to see it anyway, tap here.</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      // <!--/.PROJECTS END-->
      // <!--CONTACT-->
      <section class="grey-bg" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h3 class="title-small">
                <span>Contact</span>
              </h3>
              <p class="content-detail">
                Drop me a line!
              </p>
            </div>

            <div class="col-md-9 content-right">
              <form method="POST" action="https://formspree.io/renderosalexis17@gmail.com">
                <div class="group">
                  <input required="" type="email" name="email" placeholder="Your email"><span class="highlight"></span><span class="bar"></span><label></label>
                </div>
                <div class="group">
                  <textarea required="" name="message" placeholder=""></textarea><span class="highlight"></span><span class="bar"></span><label>Message</label>
                </div>
                <input id="sendMessage" name="sendMessage" type="submit" value="Send Message"></input>
              </form>
            </div>
          </div>
        </div>
      </section>
      // <!--/.CONTACT END-->

      // <!--FOOTER-->
      <section id="links">
        <footer>
          <div class="footer-top">
            <ul class="socials">
              <li class="github">
                <a href="https://github.com/renderos17" data-hover="GitHub">GitHub</a>
              </li>
              <li class="linkedin">
                <a href="https://www.linkedin.com/in/renderos17" data-hover="LinkedIn">LinkedIn</a>
              </li>
              <li class="youtube">
                <a href="https://www.youtube.com/channel/UClGj4m6P_ObIyefQAh5Epaw" data-hover="Youtube">Youtube</a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
      // <!--/.FOOTER-END-->
    // <!--/.CONTENT END-->
    </div>
  // <!--/.CONTENT-WRAP END-->
  </div>
</body>
  </div>
)

export default Home
