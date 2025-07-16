'use client';

export default function DataAnalysisProjects() {
  const projects = [
    {
      title: "Call Center Agent's Performance",
      image: '/images/Call Center Agents Performance.png',
      description:
        'تعرض هذه اللوحة أداء وكلاء مركز الاتصال من خلال عدد المكالمات، متوسط سرعة الرد، وعدد الوكلاء. يتم تحليل المكالمات حسب ما إذا كانت مُجابة أو محلولة، مع مقارنة زمن الاستجابة لكل وكيل. كما تُظهر التغير الشهري في عدد المكالمات عبر الشهور (يناير إلى مارس)، مما يساهم في تتبع الأداء الزمني ومجالات التحسين لكل وكيل.',
    },
    {
      title: 'Weather Status in the Fulg States',
      image: '/images/hospital information system.png',
      description:
        'نظام معلومات مستشفى تم تطويره كواجهة أمامية تعرض لوحة تحكم مخصصة لإدارة معلومات المرضى، المواعيد، الموظفين، والخدمات الطبية بشكل مرئي ومرتب.',
    },
    {
      title: 'Profit & Sales Insight',
      image: '/images/Profit&sales Insight Dashboard.png',
      description:
        'تُبرز هذه اللوحة الربحية لكل منتج داخل كل مدينة، مع تمثيل بياني شامل يوضح توزيع الأرباح ونسبتها في كل مدينة. كما توضح الكميات المباعة لكل منتج عبر مخطط خطي. يمكن فلترة البيانات حسب نوع المنتج أو المدينة أو الفترة الزمنية، مما يساعد في تحديد الأسواق الأعلى ربحية والمنتجات الأعلى مبيعًا.',
    },
    {
      title: 'Revenue Analysis by Manager and Product Category',
      image: '/images/Revenue Analysis by Manager and Product Category.png',
      description:
        'تعرض هذه اللوحة الإيرادات التي حققها كل مدير عبر فئات المنتجات المختلفة مثل البرغر والمشروبات والبطاطس. يُظهر الجدول القيم الرقمية التفصيلية، بينما يوضح المخطط البياني مقارنة مرئية بين أداء المديرين، مما يساعد على تقييم أداء الأفراد في إدارة المبيعات وتحقيق الإيرادات.',
    },
    {
      title: 'تحليل عينة 1500 متبرع عبر إحسان',
      image: '/images/Sample donation of ehsan.png',
      description:
        'تم تحليل بيانات 1500 متبرع على منصة إحسان لتحديد الأنماط السلوكية والتوزيع الجغرافي، مما يساعد في تحسين استراتيجيات الحملات التسويقية وجذب المتبرعين.',
    },
  ];

  return (
    <section
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto text-right"
  id="MyWorks"
>
  <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-200">
    <figure>
      <img
        src="/images/Call Center Agents Performance.png"
        alt="Call Center Agents Performance"
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
      />
    </figure>
    <div className="card-body">
      <h2 className="text-lg text-left font-semibold text-lg mb-2">Call Center Agents Performance</h2>
      <p className="text-sm leading-relaxed whitespace-pre-line">
        تعرض هذه اللوحة أداء وكلاء مركز الاتصال من خلال عدد المكالمات، متوسط سرعة الرد، وعدد الوكلاء. يتم تحليل المكالمات حسب ما إذا كانت مُجابة أو محلولة، مع مقارنة زمن الاستجابة لكل وكيل. كما تُظهر التغير الشهري في عدد المكالمات عبر الشهور (يناير إلى مارس)، مما يساهم في تتبع الأداء الزمني ومجالات التحسين لكل وكيل.
      </p>
    </div>
  </div>

  <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-200">
    <figure>
      <img
        src="/images/Profit&sales Insight Dashboard.png"
        alt="Profit & Sales Insight"
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
      />
    </figure>
    <div className="card-body">
      <h2 className="text-lg text-left font-semibold text-lg mb-2">Profit & Sales Insight</h2>
      <p className="text-sm leading-relaxed whitespace-pre-line">
        تُبرز هذه اللوحة الربحية لكل منتج داخل كل مدينة، مع تمثيل بياني شامل يوضح توزيع الأرباح ونسبتها في كل مدينة. كما توضح الكميات المباعة لكل منتج عبر مخطط خطي. يمكن فلترة البيانات حسب نوع المنتج أو المدينة أو الفترة الزمنية، مما يساعد في تحديد الأسواق الأعلى ربحية والمنتجات الأعلى مبيعًا.
      </p>
    </div>
  </div>

  <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-200">
    <figure>
      <img
        src="/images/Revenue Analysis by Manager and Product Category.png"
        alt="Revenue Analysis by Manager and Product Category"
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
      />
    </figure>
    <div className="card-body">
      <h2 className="text-lg text-left font-semibold text-lg mb-2">Revenue Analysis by Manager and Product Category</h2>
      <p className="text-sm leading-relaxed whitespace-pre-line">
        تعرض هذه اللوحة الإيرادات التي حققها كل مدير عبر فئات المنتجات المختلفة مثل البرغر والمشروبات والبطاطس. يُظهر الجدول القيم الرقمية التفصيلية، بينما يوضح المخطط البياني مقارنة مرئية بين أداء المديرين، مما يساعد على تقييم أداء الأفراد في إدارة المبيعات وتحقيق الإيرادات.
      </p>
    </div>
  </div>

  <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-200">
    <figure>
      <img
        src="/images/Sample donation of ehsan.png"
        alt="تحليل عينة 1500 متبرع عبر إحسان"
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-lg">تحليل عينة 1500 متبرع عبر إحسان</h2>
      <p className="text-sm leading-relaxed whitespace-pre-line">
        تم تحليل بيانات 1500 متبرع على منصة إحسان لتحديد الأنماط السلوكية والتوزيع الجغرافي، مما يساعد في تحسين استراتيجيات الحملات التسويقية وجذب المتبرعين.
      </p>
    </div>
  </div>

  <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-200">
    <figure>
      <div className="carousel carousel-center rounded-box w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg">
        <div className="carousel-item">
          <img src="../images/gdgAnalysis1.png" alt="DataAnalysis" />
        </div>
        <div className="carousel-item">
          <img src="../images/gdgAnalysis2.png" alt="DataAnalysis" />
        </div>
        <div className="carousel-item">
          <img src="../images/gdgAnalysis3.png" alt="DataAnalysis" />
        </div>
        <div className="carousel-item">
          <img src="../images/gdgAnalysis4.png" alt="DataAnalysis" />
        </div>
        <div className="carousel-item">
          <img src="../images/gdgAnalysis5.png" alt="DataAnalysis" />
        </div>
        <div className="carousel-item">
          <img src="../images/gdgAnalysis6.png" alt="DataAnalysis" />
        </div>
      </div>
    </figure>
    <div className="card-body">
      <h2 className="text-lg text-left font-semibold text-lg mb-2">Weather Status in the Gulf States</h2>
      <p className="text-sm leading-relaxed whitespace-pre-line">
        تم تحليل حالة الطقس في مناطق دول الخليج وتحليل عن طريق مقاييس درجة الحرارة والرطوبة والندى والرياح.
      </p>
    </div>
  </div>
</section>

  );
}
