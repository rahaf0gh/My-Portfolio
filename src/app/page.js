import ProjectsSection from './components/ProjectsSection';
import ContactMe from './components/ContactMe';
import DataAnalysisProjects from './components/DataAnalysisProjects';

export default function Home() {
  return (
    <div>
      <div className="navbar bg-white/10 backdrop-blur-md shadow-sm">
        <div className="lg:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className="btn-hover"><a href='#WhoAmI'> <i className="fa-solid fa-user"></i>من أنا</a></li>
              <li className="btn-hover"><a href='#MyWorks'> <i className="fa-solid fa-briefcase"></i>أعمالي</a></li>
              <li className="btn-hover"><a href='#ContactMe'> <i className="fa-solid fa-phone"></i>تواصل معي</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">رهف</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="btn-hover"><a href='#WhoAmI'> <i className="fa-solid fa-user"></i>من أنا </a></li>
            <li className="btn-hover"><a href='#MyWorks'> <i className="fa-solid fa-briefcase"></i>أعمالي</a></li>
            <li className="btn-hover"><a href='#ContactMe'> <i className="fa-solid fa-phone"></i>تواصل معي</a></li>
          </ul>
        </div>
      </div>

      <div className="hero py-16 sm:py-24 px-4 sm:px-8">
        <div className="hero-content" id='WhoAmI'>
          <div className="max-w-2xl text-right">
            <h1 className="text-2xl sm:text-3xl font-bold py-4">أهلاً.. أنا رهف الغامدي.</h1>
            
            <p className="text-sm sm:text-base mb-2">
              خريجة علوم حاسب من جامعة الباحة (2025)، ومطوّرة شغوفة تجمع بين البرمجة، التصميم، وتحليل البيانات.
            </p>
            
            <p className="text-sm sm:text-base mb-2">
              لدي خلفية قوية في تطوير الأنظمة وتصميم الواجهات، وأهوى بناء مواقع متكاملة تبدأ من الفكرة والتصميم، وتتحول إلى تجربة تفاعلية متقنة. وأمتلك مهارات في تحليل البيانات، حل المشكلات، إلى جانب خبرة في التصميم الجرافيكي كمهارة إبداعية داعمة.
            </p>
            
            <p className="text-sm sm:text-base mb-4">
              أطمح إلى التطور المستمر والتميّز، من خلال تنمية مهاراتي واكتساب خبرات قيّمة تمكّنني من تحقيق تأثير حقيقي في مجال التقنية.
              أرحب بك في معرض أعمالي.
            </p>

            <h1 className="text-2xl sm:text-5xl text-center mt-8 sm:mt-20">أصنع واجهات تترك انطباعاً</h1>
          </div>
        </div>
      </div>



      <ProjectsSection />

      <h3 className="text-3xl sm:text-5xl text-center mt-8 mb-4 sm:mt-20">مشاريع تحليل البيانات</h3>
      <DataAnalysisProjects/>

      <div className="contact-me w-full max-w-4xl h-48 mx-auto my-10 flex items-center justify-between px-12 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold m-0">أعمال التصاميم</h1>
        <a href='https://www.behance.net/Ra_designer34' target='_blank' className='btn btn-gradiant w-32'>انقر هنا</a>
      </div>




      <ContactMe />

      

      <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
        <aside>
          <a className="text-2xl">رهف</a>
          <div className="lg:flex flex-row">
            <ul className="menu menu-horizontal px-1">
              <li className="btn-hover"><a href='#WhoAmI'> <i className="fa-solid fa-user"></i>من أنا</a></li>
              <li className="btn-hover"><a href='#MyWorks'> <i className="fa-solid fa-briefcase"></i>أعمالي</a></li>
              <li className="btn-hover"><a href='#ContactMe'> <i className="fa-solid fa-phone"></i>تواصل معي</a></li>
            </ul>
          </div>
          <p> © تم تطوير الموقع بواسطة م. رهف فهد - {new Date().getFullYear()}</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href='https://www.linkedin.com/in/%D8%B1%D9%87%D9%8E%D9%80%D9%81-%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%AF%D9%8A-61bb0b287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>
              <i className="fa-brands fa-linkedin-in text-2xl"></i>
            </a>
            <a href='https://x.com/7g_rahaf?s=21' target='_blank'>
              <i className="fa-brands fa-x-twitter text-2xl"></i>
            </a>
          </div>
        </nav>
      </footer>
    </div>
    
  );
}
