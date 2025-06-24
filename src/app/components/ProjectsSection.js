'use client';
import { useState } from 'react';

export default function ProjectsSection() {
  const [activeType, setActiveType] = useState('all');

  const projects = [
    {
      title: 'Hospital Information System',
      image: '/images/hospital information system.png',
      url: 'https://rahaf0gh.github.io/HospitalInformationSystem-2024/',
      description: 'نظام معلومات مستشفى تم تطويره كواجهة أمامية تعرض لوحة تحكم مخصصة لإدارة معلومات المرضى، المواعيد، الموظفين، والخدمات الطبية بشكل مرئي ومرتب.',
      type: 'ui',
      technologies: ['JavaScript','Tailwind CSS','HTML'],
    },
    {
      title: 'Creative Journeys Company',
      image: '../images/Creative journey.png',
      url: 'https://rahaf0gh.github.io/CreativeJoureysCompany-2024/',
      description: 'موقع تعريفي لشركة إبداعية أو سياحية يعرض رؤيتها وخدماتها بأسلوب حيوي وجذاب. يحتوي على أقسام متكاملة مثل نبذة عن الشركة، الخدمات، فريق العمل، وآراء العملاء، مع تصميم بصري أنيق يعكس روح المغامرة والإبداع.',
      type: 'ui',
      technologies: ['Tailwind CSS','HTML'],
    },
    {
      title: 'Ecolife Candles',
      image: '/images/ecolife candles.png',
      url: 'https://rahaf0gh.github.io/EcolifeCandles/',
      description: 'موقع يعرض منتجات شموع صديقة للبيئة بتصميم بسيط وهادئ يعكس طابع الاستدامة. يحتوي على أقسام تعريفية، عرض للمنتجات، آراء العملاء، وصفحة للتواصل، مما يعزز تجربة المستخدم ويبرز هوية العلامة التجارية.',
      type: 'ui',
      technologies: ['JavaScript','CSS','HTML'],
    },
    {
      title: 'JM Land',
      image: '../images/Jm Land.png',
      url: 'https://rahaf0gh.github.io/JM-Land-2024/',
      description: 'موقع تعريفي لمشروع عقاري يعرض نبذة عن الشركة، خدماتها، أبرز المشاريع، وآراء العملاء. يتميز بتصميم عصري وألوان متناسقة تعزز من حضور العلامة التجارية وتمنح الزائر تجربة تصفح سهلة وجذابة.',
      type: 'ui',
      technologies: [ 'CSS','HTML'],
    },
    {
      title: 'Wex',
      image: '../images/Wex.png',
      url: 'https://rahaf0gh.github.io/Wex-2024/',
      description: 'موقع يقدم خدمات رقمية أو تقنية بأسلوب احترافي ومنظم، يحتوي على أقسام متنوعة مثل نبذة عن الفريق، الخدمات، آراء العملاء، وصفحة تواصل. يتميز بتصميم عصري يعزز الثقة ويُظهر الهوية المهنية بشكل واضح.',
      type: 'ui',
      technologies: ['CSS','HTML'],
    },
    {
      title: 'Find Job',
      image: '../images/Find Job.png',
      url: 'https://rahaf0gh.github.io/FindJob-2024/',
      description: 'موقع تعريفي يهدف إلى تسهيل عملية البحث عن الوظائف من خلال تقديم معلومات جذابة عن المنصة، مزايا الاستخدام، آراء المستخدمين، ونموذج تواصل. يتميز بتصميم عملي يركز على الوضوح وسهولة التصفح ويعزز من ثقة الزائر في الخدمة.',
      type: 'ui',
      technologies: ['CSS','HTML'],
    },
    // ---
    {
      title: 'PrayersTime',
      image: '../images/PrayersTime.png',
      url: 'https://rahaf0gh.github.io/PrayersTime-2023/',
      description: 'تطبيق يعرض أوقات الصلاة لعدة مناطق في السعودية باستخدام واجهة بسيطة وسهلة الاستخدام.',
      type: 'other',
      technologies: ['JSON ','JavaScript','CSS', 'HTML'],
    },
    {
      title: 'Weather',
      image: '../images/Weather.png',
      url: 'https://rahaf0gh.github.io/Weather/',
      description: 'تطبيق طقس يعرض حالة الجو في الوقت الفعلي باستخدام API خارجي لعرض بيانات الطقس حسب المدينة.',
      type: 'other',
      technologies: ['OpenWeatherMap API','JavaScript','CSS','HTML'],
    },
    {
      title: 'To Do-List',
      image: '../images/To-Do List.png',
      url: 'https://rahaf0gh.github.io/ToDo-List/',
      description: 'تطبيق لإدارة المهام يتيح للمستخدم إضافة وحذف وتحديث المهام اليومية.',
      type: 'other',
      technologies: ['LocalStorage','JavaScript','CSS','HTML'],
    },
    {
      title: 'XO-Game',
      image: '../images/XO Game.png',
      url: 'https://rahaf0gh.github.io/XO-Game/',
      description: 'لعبة XO كلاسيكية يمكن لعبها بين لاعبين باستخدام لوحة شبكية 3x3.',
      type: 'other',
      technologies: ['JavaScript','CSS','HTML'],
    },
    {
      title: 'Claculator',
      image: '../images/Calculator.png',
      url: 'https://rahaf0gh.github.io/Claculator/',
      description: 'آلة حاسبة بسيطة تقوم بالعمليات الحسابية الأساسية باستخدام واجهة تفاعلية.',
      type: 'other',
      technologies: ['JavaScript','CSS','HTML'],
    },
    // ---
    {
      title: 'Indicators',
      image: '../images/Indicators.png',
      url: 'https://next-js-indicator2025.vercel.app/',
      description: 'لوحة مؤشرات تفاعلية تعرض اهم مصادر المنشآت التجارية في المملكة في جداول ورسوم بيانية ، كما تمكن من رفع ملفات خارجية',
      type: 'full',
      technologies: ['Tailwind CSS','React','NextJs'],
    },
  ];

  return (
    <section className="mb-10 text-right" id="MyWorks">
      <div className="flex justify-center gap-3 my-6">
        <button  onClick={() => setActiveType('ui')} className="btn projects-type-btn">واجهات أمامية</button>
        <button onClick={() => setActiveType('full')} className="btn projects-type-btn">أنظمة متكاملة</button>
        <button onClick={() => setActiveType('other')} className="btn projects-type-btn">تطبيقات أخرى</button>
        {/* <button onClick={() => setActiveType('all')} className="btn projects-type-btn">الكل</button> */}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.filter(p => activeType === 'all' || p.type === activeType).length === 0 ? (
          <p className="text-center text-xl font-semibold text-white mt-10">
            انتظروا الإبداع قريبًا ✨
          </p>
        ) : (projects
          .filter(p => activeType === 'all' || p.type === activeType)
          .map((project, index) => (
            <div key={index} className="card w-80 h-[500px] shadow-sm flex flex-col justify-between">
              <figure>
                <img src={project.image} alt={project.title} />
              </figure>
              <div className="card-body">
                <h2 className="text-left font-semibold text-lg mb-2">{project.title}</h2>
                <p>{project.description}</p>

                <div className="technologies py-2">
                  <p>التقنيات المستخدمة:</p>
                  <div className="flex justify-end gap-2 mt-2 flex-wrap">
                    {project.technologies.map((tech, i) => (
                      <button key={i} className="btn btn-technology btn-sm" disabled>{tech}</button>
                    ))}
                  </div>
                </div>

                <div className="card-actions justify-center mt-4">
                  <a className="btn btn-gradiant" href={project.url} target="_blank">زيارة الصفحة</a>
                </div>
              </div>
            </div>
          ))
        )
        }
      </div>
    </section>
  );
}
