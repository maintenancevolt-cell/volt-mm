export interface ServiceContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  keywords: string[];
  commonIssues: { title: string; description: string }[];
  content: string[];
  faqs: { question: string; answer: string }[];
}

export interface Service {
  id: string;
  slugs: { ar: string; en: string };
  icon: string;
  image?: string;
  brands: { ar: string[]; en: string[] };
  ar: ServiceContent;
  en: ServiceContent;
  relatedIds: string[];
}

export const services: Service[] = [
  {
    id: 'washing-machines',
    slugs: { ar: 'صيانة-غسالات-عمان', en: 'washing-machine-repair-amman' },
    icon: 'Wrench',
    image: '/WhatsApp_Image_2026-03-27_at_2.12.56_PM_(2).webp',
    brands: {
      ar: ['سامسونج', 'بيكو', 'ال جي', 'اريستون', 'بوش', 'سيمنز', 'دايو', 'كاندي', 'ويرلبول'],
      en: ['Samsung', 'Beko', 'LG', 'Ariston', 'Bosch', 'Siemens', 'Daewoo', 'Candy', 'Whirlpool'],
    },
    ar: {
      title: 'صيانة غسالات',
      metaTitle: 'صيانة غسالات في عمان | فني غسالات اتوماتيك - Volt Maintenance',
      metaDescription: 'خدمة صيانة وتصليح جميع أنواع الغسالات الأوتوماتيك في عمان. فنيين متخصصين بإصلاح غسالات سامسونج وبيكو وال جي. قطع غيار أصلية وضمان على الصيانة. اتصل الآن!',
      h1: 'صيانة وتصليح غسالات اتوماتيك في عمان',
      keywords: ['صيانة غسالات عمان', 'تصليح غسالات', 'فني غسالات اتوماتيك', 'صيانة غسالات سامسونج', 'صيانة غسالات بيكو', 'تصليح غسالة ال جي', 'أعطال الغسالة الاتوماتيك', 'قطع غيار غسالات', 'صيانة غسالات منزلية عمان', 'مصلح غسالات عمان'],
      commonIssues: [
        { title: 'الغسالة لا تعمل نهائياً', description: 'فحص كامل للدارة الكهربائية والمفاتيح واللوحة الإلكترونية لتحديد سبب عدم تشغيل الغسالة.' },
        { title: 'تسريب مياه من الغسالة', description: 'كشف وإصلاح تسريبات المياه سواء من الباب أو الخراطيم أو حوض الغسيل الداخلي.' },
        { title: 'الغسالة لا تعصر الملابس', description: 'إصلاح مشاكل دورة العصر بما في ذلك فحص المحرك والسير والأجزاء الميكانيكية.' },
        { title: 'أصوات عالية أثناء التشغيل', description: 'تشخيص وإصلاح الأصوات والاهتزازات غير الطبيعية الناتجة عن تلف الرولمان أو عدم التوازن.' },
        { title: 'الغسالة لا تسحب المياه', description: 'فحص صمام المياه والفلتر وخرطوم التغذية لحل مشكلة عدم دخول المياه إلى الغسالة.' },
        { title: 'مشاكل في اللوحة الإلكترونية', description: 'إصلاح واستبدال لوحات التحكم الإلكترونية وبرمجة الغسالة لاستعادة عملها الطبيعي.' },
      ],
      content: [
        'تقدم شركة فولت للصيانة خدمات صيانة وتصليح شاملة لجميع أنواع الغسالات الأوتوماتيك في عمان والمناطق المحيطة بها. يضم فريقنا فنيين متخصصين ذوي خبرة تزيد عن 10 سنوات في مجال إصلاح الغسالات بمختلف ماركاتها العالمية، بما في ذلك سامسونج وبيكو وال جي واريستون وبوش وسيمنز وغيرها. نحرص على استخدام قطع غيار أصلية ومعتمدة لضمان جودة الإصلاح واستمرارية عمل جهازك بأفضل أداء ممكن.',
        'نتعامل مع جميع أعطال الغسالات سواء كانت أعطالاً كهربائية أو ميكانيكية أو إلكترونية. يقوم الفني بإجراء فحص شامل ودقيق للجهاز لتحديد المشكلة بدقة قبل البدء بأي عملية إصلاح، مما يوفر عليك الوقت والمال. نقوم بإصلاح مشاكل التسريب، وأعطال دورة العصر، ومشاكل اللوحة الإلكترونية، وتبديل الرولمان، وإصلاح المحرك، وجميع الأعطال الأخرى.',
        'نؤمن بأن خدمة الصيانة المتميزة لا تقتصر على الإصلاح فحسب، بل تشمل أيضاً تقديم نصائح للعناية بالجهاز والحفاظ عليه لأطول فترة ممكنة. جميع خدماتنا مشمولة بضمان شامل على الإصلاح وقطع الغيار، مع التزامنا بتقديم أسعار عادلة ومنافسة وخدمة سريعة تصل إلى منزلك في نفس اليوم.',
      ],
      faqs: [
        { question: 'كم تكلفة صيانة الغسالة الأوتوماتيك في عمان؟', answer: 'تختلف تكلفة الصيانة حسب نوع العطل وماركة الغسالة. نقدم خدمة الفحص والتشخيص بأسعار رمزية، ويتم إبلاغك بالتكلفة الكاملة قبل البدء بالإصلاح. أسعارنا منافسة ومناسبة لجميع الميزانيات.' },
        { question: 'هل تستخدمون قطع غيار أصلية للغسالات؟', answer: 'نعم، نحرص دائماً على استخدام قطع غيار أصلية ومعتمدة من الشركات المصنعة لضمان جودة الإصلاح وعمر أطول لجهازك. جميع قطع الغيار مشمولة بضمان.' },
        { question: 'كم يستغرق إصلاح الغسالة عادةً؟', answer: 'معظم أعطال الغسالات يتم إصلاحها في نفس الزيارة خلال ساعة إلى ساعتين. في حالة الحاجة لقطع غيار خاصة، قد يستغرق الأمر يوماً إضافياً لتوفير القطعة المطلوبة.' },
        { question: 'هل تقدمون ضمان على صيانة الغسالات؟', answer: 'نعم، جميع خدمات الصيانة لدينا مشمولة بضمان شامل يغطي العمل المنجز وقطع الغيار المستبدلة. مدة الضمان تعتمد على نوع الإصلاح ويتم إبلاغك بها مسبقاً.' },
      ],
    },
    en: {
      title: 'Washing Machine Repair',
      metaTitle: 'Washing Machine Repair in Amman | Automatic Washer Technician - Volt Maintenance',
      metaDescription: 'Professional washing machine repair service in Amman. Expert technicians for Samsung, Beko, and LG washers. Genuine spare parts and repair warranty. Call now!',
      h1: 'Automatic Washing Machine Repair in Amman',
      keywords: ['washing machine repair amman', 'washer repair jordan', 'automatic washing machine fix', 'samsung washer repair', 'beko washing machine service', 'LG washer repair amman', 'washing machine technician', 'washer spare parts amman'],
      commonIssues: [
        { title: 'Washer Won\'t Turn On', description: 'Complete inspection of electrical circuit, switches, and electronic board to determine the cause.' },
        { title: 'Water Leaking from Washer', description: 'Detection and repair of water leaks from the door, hoses, or internal wash tub.' },
        { title: 'Washer Won\'t Spin', description: 'Repair of spin cycle problems including motor, belt, and mechanical parts inspection.' },
        { title: 'Loud Noises During Operation', description: 'Diagnosis and repair of abnormal sounds and vibrations caused by bearing damage or imbalance.' },
        { title: 'Washer Not Filling with Water', description: 'Inspection of water valve, filter, and supply hose to resolve water intake issues.' },
        { title: 'Electronic Board Problems', description: 'Repair and replacement of electronic control boards and washer reprogramming.' },
      ],
      content: [
        'Volt Maintenance provides comprehensive repair and maintenance services for all types of automatic washing machines in Amman and surrounding areas. Our team includes specialized technicians with over 10 years of experience in repairing washers from various international brands, including Samsung, Beko, LG, Ariston, Bosch, Siemens, and more. We ensure the use of genuine and certified spare parts to guarantee repair quality and optimal appliance performance.',
        'We handle all washing machine faults whether electrical, mechanical, or electronic. Our technician conducts a thorough and precise inspection of the appliance to accurately identify the problem before starting any repair, saving you time and money. We repair leak issues, spin cycle faults, electronic board problems, bearing replacements, motor repairs, and all other malfunctions.',
        'We believe that excellent maintenance service goes beyond just repairs — it also includes advice on caring for your appliance and keeping it running for as long as possible. All our services come with a comprehensive warranty on repairs and spare parts, with our commitment to fair, competitive pricing and same-day home service.',
      ],
      faqs: [
        { question: 'How much does washing machine repair cost in Amman?', answer: 'The cost varies depending on the type of fault and the washer brand. We offer diagnostic services at nominal prices, and you will be informed of the full cost before we begin. Our prices are competitive and suitable for all budgets.' },
        { question: 'Do you use genuine spare parts for washing machines?', answer: 'Yes, we always use genuine spare parts certified by manufacturers to ensure repair quality and a longer lifespan for your appliance. All spare parts come with a warranty.' },
        { question: 'How long does it take to repair a washing machine?', answer: 'Most washing machine faults are repaired during the same visit within one to two hours. If special spare parts are needed, it may take an additional day to procure the required part.' },
        { question: 'Do you provide a warranty on washing machine repairs?', answer: 'Yes, all our maintenance services come with a comprehensive warranty covering the work performed and replaced parts. The warranty period depends on the type of repair and will be communicated to you in advance.' },
      ],
    },
    relatedIds: ['refrigerators', 'dishwashers', 'dryers'],
  },
  {
    id: 'refrigerators',
    slugs: { ar: 'تصليح-ثلاجات-عمان', en: 'refrigerator-repair-amman' },
    icon: 'Thermometer',
    image: '/WhatsApp_Image_2026-03-27_at_2.12.57_PM_(1).webp',
    brands: {
      ar: ['سامسونج', 'بيكو', 'ال جي', 'شارب', 'توشيبا', 'هيتاشي', 'فريجيدير'],
      en: ['Samsung', 'Beko', 'LG', 'Sharp', 'Toshiba', 'Hitachi', 'Frigidaire'],
    },
    ar: {
      title: 'تصليح ثلاجات',
      metaTitle: 'تصليح ثلاجات في عمان | صيانة ثلاجات سامسونج وبيكو - Volt Maintenance',
      metaDescription: 'خدمة تصليح وصيانة جميع أنواع الثلاجات في عمان. فنيين متخصصين بإصلاح ثلاجات سامسونج وبيكو وال جي وشارب. تعبئة غاز وإصلاح كمبروسر. ضمان شامل. اتصل الآن!',
      h1: 'تصليح وصيانة ثلاجات في عمان',
      keywords: ['تصليح ثلاجات عمان', 'صيانة ثلاجات', 'فني ثلاجات عمان', 'تصليح ثلاجة سامسونج', 'صيانة ثلاجات بيكو', 'تعبئة غاز ثلاجة', 'إصلاح كمبروسر ثلاجة', 'أعطال الثلاجة'],
      commonIssues: [
        { title: 'الثلاجة لا تبرد بشكل كافٍ', description: 'فحص دورة التبريد والغاز والكمبروسر ومروحة التبريد لاستعادة درجة الحرارة المطلوبة.' },
        { title: 'تسريب مياه داخل أو خارج الثلاجة', description: 'كشف وإصلاح مصادر التسريب سواء من نظام التصريف أو خط المياه أو صينية التبخر.' },
        { title: 'تراكم الثلج بشكل مفرط', description: 'إصلاح نظام إذابة الثلج التلقائي بما في ذلك السخان والمؤقت وحساس الحرارة.' },
        { title: 'الكمبروسر لا يعمل', description: 'فحص وإصلاح أو استبدال الكمبروسر مع ضمان شامل على القطعة والعمل المنجز.' },
        { title: 'نقص غاز التبريد', description: 'كشف تسريبات الغاز وإصلاحها ثم إعادة تعبئة غاز التبريد بالكمية المطلوبة حسب المواصفات.' },
        { title: 'الثلاجة تصدر أصوات غير طبيعية', description: 'تشخيص الأصوات الصادرة من الكمبروسر أو المروحة أو الأجزاء الميكانيكية وإصلاحها.' },
      ],
      content: [
        'تُعد شركة فولت للصيانة من أبرز مقدمي خدمات تصليح وصيانة الثلاجات في عمان والأردن. نتعامل مع جميع أنواع وماركات الثلاجات العالمية بما في ذلك سامسونج وبيكو وال جي وشارب وتوشيبا وهيتاشي وفريجيدير. فريقنا من الفنيين المتخصصين مؤهل للتعامل مع جميع أنواع الأعطال من أبسطها إلى أكثرها تعقيداً.',
        'نقدم خدمات شاملة تتضمن إصلاح مشاكل التبريد، وتعبئة غاز الفريون، وإصلاح واستبدال الكمبروسر، وإصلاح نظام إذابة الثلج التلقائي، ومعالجة مشاكل التسريب، وإصلاح اللوحات الإلكترونية. يستخدم فنيونا أحدث أجهزة الفحص والتشخيص لتحديد الأعطال بدقة متناهية.',
        'نحن ندرك أهمية الثلاجة في حياتك اليومية وأن أي عطل فيها يؤثر على سلامة طعامك وراحة أسرتك. لذلك نلتزم بتقديم خدمة سريعة تصل إلى منزلك في أقرب وقت ممكن. جميع خدماتنا مشمولة بضمان على الإصلاح وقطع الغيار الأصلية المستخدمة.',
      ],
      faqs: [
        { question: 'ما سبب عدم تبريد الثلاجة بشكل جيد؟', answer: 'أسباب ضعف التبريد متعددة، أهمها: نقص غاز التبريد، تلف الكمبروسر، انسداد فلتر المجفف، أو تعطل مروحة المكثف. يقوم فنيونا بالفحص الشامل لتحديد السبب الدقيق وإصلاحه.' },
        { question: 'كم تكلفة تعبئة غاز الثلاجة؟', answer: 'تعتمد التكلفة على نوع الغاز المستخدم وحجم الثلاجة وما إذا كان هناك تسريب يحتاج للإصلاح أولاً. نقدم أسعاراً منافسة ونبلغك بالتكلفة الكاملة قبل البدء بالعمل.' },
        { question: 'هل يمكن إصلاح كمبروسر الثلاجة أم يجب استبداله؟', answer: 'في كثير من الحالات يمكن إصلاح الكمبروسر. لكن إذا كان التلف كبيراً، قد يكون الاستبدال أفضل اقتصادياً. فنيونا سيقدمون لك النصيحة الأمثل بناءً على حالة جهازك.' },
        { question: 'لماذا تتراكم الثلوج داخل الثلاجة؟', answer: 'تراكم الثلج يدل عادةً على خلل في نظام إذابة الثلج التلقائي (الديفروست)، وقد يكون السبب تلف سخان الإذابة أو مؤقت الإذابة أو حساس الحرارة.' },
      ],
    },
    en: {
      title: 'Refrigerator Repair',
      metaTitle: 'Refrigerator Repair in Amman | Samsung & Beko Fridge Service - Volt Maintenance',
      metaDescription: 'Professional refrigerator repair service in Amman. Expert technicians for Samsung, Beko, LG, and Sharp fridges. Gas refill and compressor repair. Full warranty. Call now!',
      h1: 'Refrigerator Repair & Maintenance in Amman',
      keywords: ['refrigerator repair amman', 'fridge repair jordan', 'samsung fridge repair', 'beko refrigerator service', 'compressor repair amman', 'fridge gas refill', 'refrigerator technician amman'],
      commonIssues: [
        { title: 'Fridge Not Cooling Properly', description: 'Inspection of cooling cycle, gas, compressor, and cooling fan to restore required temperature.' },
        { title: 'Water Leaking Inside or Outside', description: 'Detection and repair of leak sources from drainage system, water line, or evaporation tray.' },
        { title: 'Excessive Ice Buildup', description: 'Repair of auto-defrost system including heater, timer, and temperature sensor.' },
        { title: 'Compressor Not Working', description: 'Inspection, repair, or replacement of compressor with comprehensive warranty on part and labor.' },
        { title: 'Low Refrigerant Gas', description: 'Gas leak detection and repair followed by recharging with the correct amount per specifications.' },
        { title: 'Unusual Noises from Fridge', description: 'Diagnosis of sounds from compressor, fan, or mechanical parts and repair.' },
      ],
      content: [
        'Volt Maintenance is one of the leading refrigerator repair and maintenance service providers in Amman and Jordan. We work with all types and brands of refrigerators including Samsung, Beko, LG, Sharp, Toshiba, Hitachi, and Frigidaire. Our specialized technicians are qualified to handle all types of faults from the simplest to the most complex.',
        'We offer comprehensive services including cooling problem repair, freon gas refill, compressor repair and replacement, auto-defrost system repair, leak treatment, and electronic board repair. Our technicians use the latest diagnostic equipment to accurately identify faults.',
        'We understand the importance of your refrigerator in daily life and that any malfunction affects your food safety and family comfort. That is why we are committed to providing fast service that reaches your home as quickly as possible. All our services come with warranty on repairs and genuine spare parts used.',
      ],
      faqs: [
        { question: 'Why is my refrigerator not cooling properly?', answer: 'There are multiple causes for poor cooling, including: low refrigerant gas, compressor damage, clogged dryer filter, or condenser fan failure. Our technicians perform a thorough inspection to identify and fix the exact cause.' },
        { question: 'How much does fridge gas refill cost?', answer: 'The cost depends on the type of gas used, fridge size, and whether there is a leak that needs repair first. We offer competitive prices and inform you of the full cost before starting work.' },
        { question: 'Can the compressor be repaired or must it be replaced?', answer: 'In many cases the compressor can be repaired. But if the damage is significant, replacement may be more economical. Our technicians will advise you based on your appliance condition.' },
        { question: 'Why does ice build up inside my fridge?', answer: 'Ice buildup usually indicates a malfunction in the auto-defrost system, which could be caused by a defective defrost heater, timer, or temperature sensor.' },
      ],
    },
    relatedIds: ['washing-machines', 'air-conditioners', 'gas-ovens'],
  },
  {
    id: 'air-conditioners',
    slugs: { ar: 'صيانة-مكيفات-عمان', en: 'ac-repair-amman' },
    icon: 'Wind',
    image: '/WhatsApp_Image_2026-03-27_at_2.12.57_PM.webp',
    brands: {
      ar: ['جري', 'سامسونج', 'ال جي', 'بترا', 'كاريير', 'ميديا', 'هاير'],
      en: ['Gree', 'Samsung', 'LG', 'Petra', 'Carrier', 'Midea', 'Haier'],
    },
    ar: {
      title: 'صيانة مكيفات',
      metaTitle: 'صيانة مكيفات في عمان | فني تركيب وتنظيف مكيفات - Volt Maintenance',
      metaDescription: 'خدمة صيانة وتركيب وتنظيف مكيفات في عمان. فنيين متخصصين بصيانة مكيفات جري وسامسونج وال جي. تعبئة غاز وإصلاح أعطال وتنظيف فلاتر. ضمان شامل. اتصل الآن!',
      h1: 'صيانة وتركيب وتنظيف مكيفات في عمان',
      keywords: ['صيانة مكيفات عمان', 'تنظيف مكيفات', 'فني مكيفات عمان', 'تركيب مكيفات', 'صيانة مكيف سبليت', 'تعبئة غاز مكيف', 'إصلاح مكيفات'],
      commonIssues: [
        { title: 'المكيف لا يبرد بشكل كافٍ', description: 'فحص مستوى غاز التبريد والكمبروسر والفلاتر والمبخر لاستعادة كفاءة التبريد.' },
        { title: 'تسريب مياه من الوحدة الداخلية', description: 'تنظيف مجرى التصريف وإصلاح أي انسداد أو كسر في نظام تصريف المياه المكثفة.' },
        { title: 'المكيف يصدر روائح كريهة', description: 'تنظيف عميق وتعقيم للوحدة الداخلية والفلاتر والمبخر للتخلص من البكتيريا والروائح.' },
        { title: 'المكيف لا يعمل نهائياً', description: 'فحص كامل للدارة الكهربائية ولوحة التحكم والكمبروسر لتحديد سبب توقف المكيف.' },
        { title: 'صوت مزعج من المكيف', description: 'تشخيص مصدر الصوت سواء من مروحة الوحدة الداخلية أو الخارجية أو الكمبروسر وإصلاحه.' },
        { title: 'نقص غاز التبريد', description: 'كشف تسريبات غاز الفريون وإصلاحها ثم إعادة شحن المكيف بالكمية المطلوبة.' },
      ],
      content: [
        'شركة فولت للصيانة هي وجهتك الأولى لجميع خدمات صيانة وتركيب وتنظيف المكيفات في عمان. نقدم حلولاً متكاملة لأنظمة التكييف المنزلية بأنواعها كافة، سواء كانت مكيفات سبليت أو شباك أو مركزية. فريقنا من فنيي التبريد والتكييف المعتمدين يمتلك الخبرة والمهارة اللازمة للتعامل مع جميع الماركات العالمية.',
        'تشمل خدماتنا الصيانة الدورية والوقائية التي تحافظ على كفاءة مكيفك وتطيل عمره الافتراضي، بالإضافة إلى إصلاح جميع الأعطال الطارئة. نقوم بتنظيف الفلاتر والمبخر والمكثف، وتعبئة غاز التبريد، وإصلاح تسريبات الغاز، واستبدال الكمبروسر، وتركيب المكيفات الجديدة بشكل احترافي.',
        'مع ارتفاع درجات الحرارة في الأردن، يصبح المكيف من أهم الأجهزة في كل منزل. لذلك نحرص على تقديم خدمة صيانة سريعة وموثوقة تضمن راحتك وراحة عائلتك. ننصح بإجراء صيانة دورية للمكيف مرتين سنوياً على الأقل.',
      ],
      faqs: [
        { question: 'كم مرة يجب تنظيف فلاتر المكيف؟', answer: 'ننصح بتنظيف فلاتر المكيف كل أسبوعين إلى شهر خلال فترة الاستخدام المكثف في الصيف، وكل شهرين في باقي الأوقات.' },
        { question: 'ما تكلفة تعبئة غاز المكيف؟', answer: 'تعتمد التكلفة على نوع الغاز (R22 أو R410A) وحجم المكيف. يتم فحص المكيف أولاً للتأكد من عدم وجود تسريب.' },
        { question: 'هل تقومون بتركيب المكيفات الجديدة؟', answer: 'نعم، نقدم خدمة تركيب احترافية لجميع أنواع المكيفات. يشمل ذلك تحديد المكان الأمثل للتركيب، وتمديد المواسير والأسلاك، وشحن الغاز.' },
        { question: 'لماذا يسرب المكيف مياه من الداخل؟', answer: 'أشهر أسباب تسريب المياه هي انسداد مجرى التصريف بسبب الأتربة أو الطحالب، أو كسر في صينية التجميع.' },
      ],
    },
    en: {
      title: 'AC Repair',
      metaTitle: 'AC Repair in Amman | Air Conditioner Installation & Cleaning - Volt Maintenance',
      metaDescription: 'Professional AC repair, installation, and cleaning in Amman. Expert technicians for Gree, Samsung, and LG units. Gas refill, fault repair, and filter cleaning. Full warranty. Call now!',
      h1: 'Air Conditioner Repair, Installation & Cleaning in Amman',
      keywords: ['ac repair amman', 'air conditioner maintenance', 'ac cleaning amman', 'split ac repair', 'ac gas refill amman', 'ac technician jordan', 'ac installation amman'],
      commonIssues: [
        { title: 'AC Not Cooling Enough', description: 'Inspection of refrigerant level, compressor, filters, and evaporator to restore cooling efficiency.' },
        { title: 'Water Leaking from Indoor Unit', description: 'Cleaning drain line and repairing any blockage or break in the condensate drainage system.' },
        { title: 'Bad Smell from AC', description: 'Deep cleaning and sanitization of indoor unit, filters, and evaporator to eliminate bacteria and odors.' },
        { title: 'AC Won\'t Turn On', description: 'Complete inspection of electrical circuit, control board, and compressor to determine cause.' },
        { title: 'Noisy AC Unit', description: 'Diagnosis of noise source from indoor or outdoor fan or compressor and repair.' },
        { title: 'Low Refrigerant Gas', description: 'Freon gas leak detection and repair followed by recharging with the correct amount.' },
      ],
      content: [
        'Volt Maintenance is your first destination for all AC maintenance, installation, and cleaning services in Amman. We provide complete solutions for all types of home cooling systems, whether split, window, or central air conditioners. Our certified HVAC technicians have the experience and skills to work with all international brands.',
        'Our services include preventive maintenance that maintains your AC efficiency and extends its lifespan, plus emergency fault repair. We clean filters, evaporators, and condensers, refill refrigerant gas, repair gas leaks, replace compressors, and professionally install new units.',
        'With rising temperatures in Jordan, the air conditioner becomes one of the most important appliances in every home. We are committed to providing fast, reliable service to ensure your comfort. We recommend AC maintenance at least twice a year.',
      ],
      faqs: [
        { question: 'How often should AC filters be cleaned?', answer: 'We recommend cleaning AC filters every two weeks to a month during heavy summer use, and every two months at other times.' },
        { question: 'How much does AC gas refill cost?', answer: 'The cost depends on the gas type (R22 or R410A) and AC size. The unit is inspected first to ensure there is no leak.' },
        { question: 'Do you install new air conditioners?', answer: 'Yes, we offer professional installation for all AC types. This includes determining the optimal location, running pipes and wires, and charging gas.' },
        { question: 'Why is my AC leaking water inside?', answer: 'The most common cause is a blocked drain line due to dust or algae, or a crack in the collection tray.' },
      ],
    },
    relatedIds: ['refrigerators', 'electrician', 'washing-machines'],
  },
  {
    id: 'gas-ovens',
    slugs: { ar: 'صيانة-افران-غاز-عمان', en: 'gas-oven-repair-amman' },
    icon: 'Flame',
    image: '/WhatsApp_Image_2026-03-27_at_2.12.56_PM.webp',
    brands: {
      ar: ['اريستون', 'بيكو', 'لوفرا', 'بومبياني', 'تيكنوغاز', 'يونيفرسال'],
      en: ['Ariston', 'Beko', 'Lofra', 'Bompani', 'Tecnogas', 'Universal'],
    },
    ar: {
      title: 'صيانة أفران غاز',
      metaTitle: 'صيانة أفران غاز في عمان | تصليح طباخات وصوبات - Volt Maintenance',
      metaDescription: 'خدمة صيانة وتصليح أفران الغاز والطباخات في عمان. فنيين متخصصين بإصلاح أفران اريستون وبيكو ولوفرا. إصلاح شعلات وأفران وصمامات أمان. ضمان شامل. اتصل الآن!',
      h1: 'صيانة وتصليح أفران وأجهزة الغاز في عمان',
      keywords: ['صيانة أفران غاز عمان', 'تصليح طباخات', 'فني أفران غاز', 'صيانة فرن اريستون', 'تصليح صوبات غاز', 'إصلاح شعلات'],
      commonIssues: [
        { title: 'الشعلات لا تشتعل', description: 'فحص وتنظيف أو استبدال شمعات الإشعال والأسلاك ووحدة الإشعال الكهربائية.' },
        { title: 'تسريب غاز من الفرن', description: 'كشف وإصلاح تسريبات الغاز في الصمامات والوصلات والخراطيم لضمان السلامة.' },
        { title: 'الفرن لا يسخن بالشكل المطلوب', description: 'فحص عنصر التسخين والثرموستات وصمام الغاز لاستعادة درجة الحرارة المطلوبة.' },
        { title: 'صمام الأمان لا يعمل', description: 'إصلاح أو استبدال صمام الأمان (الثرموكابل) الذي يقطع الغاز تلقائياً عند انطفاء اللهب.' },
        { title: 'اللهب غير منتظم أو ضعيف', description: 'تنظيف فتحات الشعلات وضبط خلاط الهواء وفحص ضغط الغاز لتحسين جودة اللهب.' },
        { title: 'باب الفرن لا يغلق بإحكام', description: 'إصلاح أو استبدال مفصلات الباب والحشوة العازلة لضمان إغلاق محكم.' },
      ],
      content: [
        'تقدم شركة فولت للصيانة خدمات متخصصة في صيانة وإصلاح أفران الغاز والطباخات بجميع أنواعها وماركاتها في عمان. نتعامل مع الماركات العالمية الرائدة مثل اريستون وبيكو ولوفرا وبومبياني وتيكنوغاز ويونيفرسال. فنيونا المتخصصون في أجهزة الغاز مدربون على أعلى معايير السلامة.',
        'السلامة هي أولويتنا القصوى عند التعامل مع أجهزة الغاز. لذلك يقوم فنيونا بإجراء فحص شامل للسلامة يتضمن كشف تسريبات الغاز واختبار صمامات الأمان والتأكد من سلامة جميع الوصلات والخراطيم.',
        'نوفر قطع غيار أصلية لجميع ماركات الأفران ونقدم ضماناً على جميع أعمال الصيانة. ننصح عملاءنا بإجراء صيانة دورية لأفران الغاز لضمان كفاءة التشغيل وسلامة الأسرة.',
      ],
      faqs: [
        { question: 'كيف أعرف إذا كان هناك تسريب غاز في الفرن؟', answer: 'أبرز علامات تسريب الغاز هي الرائحة المميزة للغاز، وصوت فحيح قرب الوصلات، واللهب الأصفر بدلاً من الأزرق. في حال الاشتباه بتسريب غاز، أغلق صمام الغاز فوراً واتصل بنا.' },
        { question: 'كم مرة يجب إجراء صيانة دورية لفرن الغاز؟', answer: 'ننصح بإجراء صيانة دورية لفرن الغاز مرة واحدة سنوياً على الأقل. تشمل الصيانة تنظيف الشعلات وفحص صمامات الأمان وكشف التسريبات.' },
        { question: 'ما سبب انطفاء لهب الشعلة بعد تركها؟', answer: 'السبب الأشهر هو تلف صمام الأمان (الثرموكابل) الذي يستشعر وجود اللهب. عند تلفه لا يستطيع استشعار اللهب فيقوم بقطع الغاز.' },
      ],
    },
    en: {
      title: 'Gas Oven Repair',
      metaTitle: 'Gas Oven Repair in Amman | Cooker & Stove Repair - Volt Maintenance',
      metaDescription: 'Professional gas oven and cooker repair in Amman. Expert technicians for Ariston, Beko, and Lofra ovens. Burner repair and safety valve service. Full warranty. Call now!',
      h1: 'Gas Oven & Cooker Repair in Amman',
      keywords: ['gas oven repair amman', 'cooker repair jordan', 'stove repair amman', 'ariston oven repair', 'gas burner repair', 'oven technician amman'],
      commonIssues: [
        { title: 'Burners Won\'t Ignite', description: 'Inspection and cleaning or replacement of ignition plugs, wires, and electric ignition unit.' },
        { title: 'Gas Leaking from Oven', description: 'Detection and repair of gas leaks in valves, connections, and hoses to ensure safety.' },
        { title: 'Oven Not Heating Properly', description: 'Inspection of heating element, thermostat, and gas valve to restore required temperature.' },
        { title: 'Safety Valve Not Working', description: 'Repair or replacement of safety valve (thermocouple) that automatically cuts gas when flame goes out.' },
        { title: 'Weak or Uneven Flame', description: 'Cleaning burner openings and adjusting air mixer and gas pressure to improve flame quality.' },
        { title: 'Oven Door Won\'t Close Properly', description: 'Repair or replacement of door hinges and insulating gasket to ensure tight closure.' },
      ],
      content: [
        'Volt Maintenance provides specialized gas oven and cooker repair services for all types and brands in Amman. We work with leading international brands such as Ariston, Beko, Lofra, Bompani, Tecnogas, and Universal. Our gas appliance technicians are trained to the highest safety standards.',
        'Safety is our top priority when working with gas appliances. Our technicians conduct comprehensive safety inspections including gas leak detection, safety valve testing, and verification of all connections and hoses.',
        'We provide genuine spare parts for all oven brands and offer warranty on all maintenance work. We recommend regular gas oven maintenance to ensure efficient operation and family safety.',
      ],
      faqs: [
        { question: 'How do I know if there is a gas leak in my oven?', answer: 'The main signs of a gas leak are the distinctive gas smell, a hissing sound near connections, and yellow instead of blue flame. If you suspect a gas leak, close the gas valve immediately and call us.' },
        { question: 'How often should gas oven maintenance be done?', answer: 'We recommend gas oven maintenance at least once a year. This includes burner cleaning, safety valve inspection, and leak detection.' },
        { question: 'Why does the burner flame go out after releasing?', answer: 'The most common cause is a faulty safety valve (thermocouple) that senses the flame. When damaged, it cannot detect the flame and cuts the gas supply.' },
      ],
    },
    relatedIds: ['electrician', 'washing-machines', 'refrigerators'],
  },
  {
    id: 'dishwashers',
    slugs: { ar: 'صيانة-جلايات-عمان', en: 'dishwasher-repair-amman' },
    icon: 'UtensilsCrossed',
    image: '/1.webp',
    brands: {
      ar: ['بيكو', 'بوش', 'سيمنز', 'سامسونج', 'ال جي', 'اريستون'],
      en: ['Beko', 'Bosch', 'Siemens', 'Samsung', 'LG', 'Ariston'],
    },
    ar: {
      title: 'صيانة جلايات',
      metaTitle: 'صيانة جلايات أطباق في عمان | تصليح جلايات بيكو - Volt Maintenance',
      metaDescription: 'خدمة صيانة وتصليح جلايات الأطباق في عمان. فنيين متخصصين بإصلاح جلايات بيكو وبوش وسيمنز. إصلاح مشاكل التنظيف والتسريب والتجفيف. ضمان شامل. اتصل الآن!',
      h1: 'صيانة وتصليح جلايات الأطباق في عمان',
      keywords: ['صيانة جلايات عمان', 'تصليح جلاية أطباق', 'فني جلايات عمان', 'صيانة جلاية بيكو', 'تصليح جلاية بوش'],
      commonIssues: [
        { title: 'الجلاية لا تنظف الأطباق جيداً', description: 'فحص أذرع الرش والفلاتر والمضخة ودرجة حرارة المياه لتحسين كفاءة التنظيف.' },
        { title: 'تسريب مياه من الجلاية', description: 'كشف وإصلاح التسريبات من باب الجلاية أو الخراطيم أو المضخة أو الحوض الداخلي.' },
        { title: 'الجلاية لا تصرف المياه', description: 'تنظيف مضخة التصريف والفلتر وفحص خرطوم التصريف لحل مشكلة تجمع المياه.' },
        { title: 'الجلاية لا تجفف الأطباق', description: 'فحص عنصر التسخين ومروحة التجفيف ونظام شطف الأطباق لاستعادة وظيفة التجفيف.' },
        { title: 'رائحة كريهة من الجلاية', description: 'تنظيف شامل للفلاتر والأجزاء الداخلية والتخلص من بقايا الطعام المتراكمة والبكتيريا.' },
        { title: 'الجلاية تصدر أصوات غير عادية', description: 'تشخيص مصدر الضوضاء سواء من المضخة أو المحرك أو أذرع الرش وإصلاحه.' },
      ],
      content: [
        'توفر شركة فولت للصيانة خدمات صيانة وتصليح متخصصة لجلايات الأطباق بجميع أنواعها وماركاتها في عمان. نتعامل مع أشهر الماركات العالمية مثل بيكو وبوش وسيمنز وسامسونج وال جي واريستون.',
        'نقدم حلولاً شاملة لجميع أعطال جلايات الأطباق، من مشاكل التنظيف والتجفيف إلى أعطال التسريب والتصريف واللوحات الإلكترونية. يقوم فنيونا بإجراء فحص تشخيصي شامل لتحديد المشكلة بدقة.',
        'نستخدم قطع غيار أصلية ومعتمدة في جميع عمليات الإصلاح، ونقدم ضماناً شاملاً يغطي العمل المنجز والقطع المستبدلة. خدماتنا تتميز بالسرعة في الاستجابة والدقة في التنفيذ.',
      ],
      faqs: [
        { question: 'لماذا لا تنظف الجلاية الأطباق بشكل جيد؟', answer: 'أشهر الأسباب هي انسداد أذرع الرش، أو تراكم الأوساخ في الفلاتر، أو استخدام كمية غير مناسبة من المنظف، أو مشكلة في تسخين المياه.' },
        { question: 'كم تستغرق صيانة جلاية الأطباق؟', answer: 'معظم الأعطال الشائعة يتم إصلاحها خلال ساعة إلى ساعتين في منزلك. في حال الحاجة لقطع غيار خاصة، قد نحتاج لزيارة إضافية.' },
        { question: 'هل يجب استخدام ملح خاص للجلاية؟', answer: 'نعم، ملح الجلاية المخصص ضروري لتنقية المياه وحماية الجلاية من الترسبات الكلسية. لا يمكن استبداله بملح الطعام العادي.' },
      ],
    },
    en: {
      title: 'Dishwasher Repair',
      metaTitle: 'Dishwasher Repair in Amman | Beko & Bosch Service - Volt Maintenance',
      metaDescription: 'Professional dishwasher repair in Amman. Expert technicians for Beko, Bosch, and Siemens dishwashers. Cleaning, leak, and drying issue repairs. Full warranty. Call now!',
      h1: 'Dishwasher Repair & Maintenance in Amman',
      keywords: ['dishwasher repair amman', 'beko dishwasher service', 'bosch dishwasher repair', 'dishwasher technician amman', 'dishwasher not cleaning'],
      commonIssues: [
        { title: 'Dishwasher Not Cleaning Properly', description: 'Inspection of spray arms, filters, pump, and water temperature to improve cleaning efficiency.' },
        { title: 'Water Leaking from Dishwasher', description: 'Detection and repair of leaks from door, hoses, pump, or internal tub.' },
        { title: 'Dishwasher Not Draining', description: 'Cleaning drain pump and filter and inspecting drain hose to resolve water pooling.' },
        { title: 'Dishes Not Drying', description: 'Inspection of heating element, drying fan, and rinse system to restore drying function.' },
        { title: 'Bad Smell from Dishwasher', description: 'Thorough cleaning of filters and internal parts to remove accumulated food residue and bacteria.' },
        { title: 'Unusual Noises', description: 'Diagnosis of noise source from pump, motor, or spray arms and repair.' },
      ],
      content: [
        'Volt Maintenance provides specialized dishwasher repair services for all types and brands in Amman. We work with the most popular international brands such as Beko, Bosch, Siemens, Samsung, LG, and Ariston.',
        'We offer comprehensive solutions for all dishwasher faults, from cleaning and drying problems to leaks, drainage issues, and electronic board malfunctions. Our technicians perform thorough diagnostic inspections to accurately identify the problem.',
        'We use genuine certified spare parts in all repairs, and provide comprehensive warranty covering labor and replaced parts. Our service is characterized by fast response and precision in execution.',
      ],
      faqs: [
        { question: 'Why is my dishwasher not cleaning dishes properly?', answer: 'The most common causes are clogged spray arms, dirty filters, incorrect detergent amount, or water heating problems.' },
        { question: 'How long does dishwasher repair take?', answer: 'Most common faults are repaired within one to two hours at your home. If special parts are needed, an additional visit may be required.' },
        { question: 'Should I use special salt for my dishwasher?', answer: 'Yes, dedicated dishwasher salt is essential for water softening and protecting the dishwasher from limescale buildup. Regular table salt cannot be substituted.' },
      ],
    },
    relatedIds: ['washing-machines', 'dryers', 'refrigerators'],
  },
  {
    id: 'dryers',
    slugs: { ar: 'صيانة-حمصات-عمان', en: 'dryer-repair-amman' },
    icon: 'Shirt',
    image: '/2.webp',
    brands: {
      ar: ['بيكو', 'سامسونج', 'ال جي', 'بوش', 'سيمنز', 'كاندي'],
      en: ['Beko', 'Samsung', 'LG', 'Bosch', 'Siemens', 'Candy'],
    },
    ar: {
      title: 'صيانة حمصات تنشيف',
      metaTitle: 'صيانة حمصات تنشيف الملابس في عمان | تصليح نشافات - Volt Maintenance',
      metaDescription: 'خدمة صيانة وتصليح حمصات تنشيف الملابس (نشافات) في عمان. فنيين متخصصين بإصلاح نشافات بيكو وسامسونج وبوش. إصلاح مشاكل التجفيف والتسخين. ضمان شامل. اتصل الآن!',
      h1: 'صيانة وتصليح حمصات تنشيف الملابس في عمان',
      keywords: ['صيانة حمصات عمان', 'تصليح نشافات', 'فني حمصات تنشيف', 'صيانة نشافة بيكو', 'تصليح حمصة سامسونج'],
      commonIssues: [
        { title: 'الحمصة لا تسخن', description: 'فحص عنصر التسخين والثرموستات والمقاومة الحرارية لاستعادة وظيفة التجفيف الحراري.' },
        { title: 'الملابس لا تجف بالكامل', description: 'فحص نظام التهوية ومجرى الهواء الساخن والمستشعرات الحرارية لتحسين كفاءة التجفيف.' },
        { title: 'الحمصة تصدر أصوات عالية', description: 'تشخيص مصدر الأصوات سواء من الرولمان أو السير أو الحلة الداخلية وإصلاحه.' },
        { title: 'الحمصة لا تدور', description: 'فحص المحرك والسير وبكرة الشد والأجزاء الميكانيكية لإعادة دوران الحلة.' },
        { title: 'الحمصة تتوقف أثناء التشغيل', description: 'فحص المستشعرات الحرارية ومفتاح الباب واللوحة الإلكترونية لمعرفة سبب التوقف المفاجئ.' },
        { title: 'رائحة حريق أو احتراق', description: 'فحص عاجل لنظام التهوية وعنصر التسخين والسير لمنع أي خطر وإصلاح المشكلة فوراً.' },
      ],
      content: [
        'تقدم شركة فولت للصيانة خدمات متخصصة في صيانة وتصليح حمصات تنشيف الملابس (النشافات) بجميع أنواعها في عمان. نتعامل مع أشهر الماركات العالمية مثل بيكو وسامسونج وال جي وبوش وسيمنز وكاندي.',
        'نتعامل مع جميع أعطال حمصات التنشيف بما في ذلك مشاكل التسخين والدوران والتجفيف والأصوات غير الطبيعية والأعطال الإلكترونية. يستخدم فنيونا أدوات فحص متقدمة لتحديد المشكلة بدقة.',
        'نحرص على تقديم خدمة شاملة تتضمن الفحص والتشخيص والإصلاح والتنظيف، بالإضافة إلى نصائح للحفاظ على الجهاز وإطالة عمره. جميع خدماتنا مشمولة بضمان.',
      ],
      faqs: [
        { question: 'لماذا لا تسخن حمصة التنشيف؟', answer: 'أشهر الأسباب هي تلف عنصر التسخين أو الثرموستات أو المقاومة الحرارية. قد يكون السبب أيضاً مشكلة في التيار الكهربائي.' },
        { question: 'كيف أحافظ على حمصة التنشيف لأطول فترة؟', answer: 'ننصح بتنظيف فلتر الوبر بعد كل استخدام، وعدم تحميل الحمصة فوق طاقتها، والتأكد من سلامة نظام التهوية، وإجراء صيانة دورية سنوية.' },
        { question: 'ما سبب الأصوات العالية من حمصة التنشيف؟', answer: 'الأصوات العالية عادةً تدل على تلف الرولمان أو تآكل سير الدوران أو وجود جسم غريب في الحلة الداخلية.' },
      ],
    },
    en: {
      title: 'Dryer Repair',
      metaTitle: 'Clothes Dryer Repair in Amman | Tumble Dryer Service - Volt Maintenance',
      metaDescription: 'Professional clothes dryer repair in Amman. Expert technicians for Beko, Samsung, and Bosch dryers. Heating and drying problem repairs. Full warranty. Call now!',
      h1: 'Clothes Dryer Repair & Maintenance in Amman',
      keywords: ['dryer repair amman', 'tumble dryer service', 'clothes dryer repair jordan', 'beko dryer repair', 'samsung dryer service amman'],
      commonIssues: [
        { title: 'Dryer Not Heating', description: 'Inspection of heating element, thermostat, and thermal resistor to restore heating function.' },
        { title: 'Clothes Not Fully Drying', description: 'Inspection of ventilation system, hot air duct, and thermal sensors to improve drying efficiency.' },
        { title: 'Loud Noises from Dryer', description: 'Diagnosis of noise source from bearings, belt, or drum and repair.' },
        { title: 'Dryer Drum Not Spinning', description: 'Inspection of motor, belt, tension pulley, and mechanical parts to restore drum rotation.' },
        { title: 'Dryer Stops During Operation', description: 'Inspection of thermal sensors, door switch, and electronic board to determine cause of sudden stop.' },
        { title: 'Burning Smell', description: 'Urgent inspection of ventilation system, heating element, and belt to prevent hazards and fix immediately.' },
      ],
      content: [
        'Volt Maintenance provides specialized clothes dryer repair services for all types in Amman. We work with leading international brands such as Beko, Samsung, LG, Bosch, Siemens, and Candy.',
        'We handle all dryer faults including heating, spinning, drying, unusual noise, and electronic malfunctions. Our technicians use advanced diagnostic tools to accurately identify problems.',
        'We provide comprehensive service including inspection, diagnosis, repair, and cleaning, along with tips for maintaining your appliance. All our services come with warranty.',
      ],
      faqs: [
        { question: 'Why is my dryer not heating?', answer: 'The most common causes are a faulty heating element, thermostat, or thermal resistor. It could also be an electrical supply issue.' },
        { question: 'How do I maintain my dryer for longer life?', answer: 'Clean the lint filter after every use, do not overload, ensure ventilation is clear, and schedule annual maintenance.' },
        { question: 'What causes loud noises in a dryer?', answer: 'Loud noises usually indicate bearing damage, worn drive belt, or a foreign object inside the drum.' },
      ],
    },
    relatedIds: ['washing-machines', 'dishwashers', 'electrician'],
  },
  {
    id: 'electrician',
    slugs: { ar: 'كهربائي-منزلي-عمان', en: 'electrician-amman' },
    icon: 'Zap',
    image: '/3.webp',
    brands: { ar: [], en: [] },
    ar: {
      title: 'كهربائي منزلي',
      metaTitle: 'كهربائي منزلي في عمان | إصلاح أعطال كهربائية - Volt Maintenance',
      metaDescription: 'خدمة كهربائي منزلي متخصص في عمان. إصلاح جميع الأعطال الكهربائية المنزلية، تمديدات كهربائية، تركيب إنارة، فحص وصيانة لوحات التوزيع. فني كهربائي متخصص بضمان شامل.',
      h1: 'كهربائي منزلي متخصص في عمان',
      keywords: ['كهربائي منزلي عمان', 'فني كهربائي عمان', 'إصلاح أعطال كهربائية', 'تمديدات كهربائية', 'كهربائي منازل', 'صيانة كهرباء منزلية'],
      commonIssues: [
        { title: 'انقطاع متكرر للكهرباء', description: 'فحص وإصلاح أسباب انقطاع الكهرباء المتكرر بما في ذلك فحص القواطع ولوحة التوزيع والأسلاك.' },
        { title: 'مشاكل في المقابس والمفاتيح', description: 'إصلاح أو استبدال المقابس والمفاتيح التالفة أو المحترقة مع ضمان معايير السلامة.' },
        { title: 'تحميل زائد على الشبكة الكهربائية', description: 'تقييم الحمل الكهربائي وتوزيعه بشكل صحيح مع إضافة دوائر جديدة عند الحاجة.' },
        { title: 'أعطال لوحة التوزيع', description: 'فحص وصيانة وتحديث لوحات التوزيع الكهربائية وتبديل القواطع التالفة.' },
        { title: 'مشاكل في الإنارة', description: 'تركيب وإصلاح واستبدال أنظمة الإنارة بما في ذلك الثريات والسبوتات وإنارة LED.' },
        { title: 'تمديدات كهربائية جديدة', description: 'تمديد خطوط كهربائية جديدة للأجهزة أو الغرف الإضافية وفق المعايير الفنية والأمان.' },
        { title: 'أسلاك مكشوفة أو تالفة', description: 'فحص واستبدال الأسلاك المتآكلة أو المكشوفة لمنع مخاطر الحرائق والصعق الكهربائي.' },
      ],
      content: [
        'توفر شركة فولت للصيانة خدمات كهربائي منزلي متخصص ومعتمد في عمان وجميع المناطق المحيطة. فريقنا من الفنيين الكهربائيين المؤهلين يقدم حلولاً شاملة لجميع الأعطال والاحتياجات الكهربائية المنزلية. نلتزم بأعلى معايير السلامة والجودة في جميع أعمالنا.',
        'نقدم مجموعة واسعة من الخدمات الكهربائية تشمل إصلاح الأعطال الكهربائية المفاجئة، وصيانة وتحديث لوحات التوزيع، وتمديد خطوط كهربائية جديدة، وتركيب وصيانة أنظمة الإنارة، وتركيب المقابس والمفاتيح، وتركيب السخانات الكهربائية.',
        'نعلم أن الأعطال الكهربائية قد تشكل خطراً على سلامة الأسرة، لذلك نوفر خدمة استجابة سريعة. فريقنا متاح طوال أيام العمل للوصول إلى منزلك وحل المشكلة بأسرع وقت. جميع خدماتنا مشمولة بضمان شامل.',
      ],
      faqs: [
        { question: 'ما أسباب انقطاع الكهرباء المتكرر في المنزل؟', answer: 'أشهر الأسباب هي تحميل زائد على أحد القواطع، أو تلف قاطع كهربائي، أو ماس كهربائي في أحد الأجهزة أو الأسلاك.' },
        { question: 'هل يمكنكم إضافة مقابس كهربائية جديدة؟', answer: 'نعم، نقوم بتركيب مقابس ومفاتيح جديدة في أي مكان في المنزل مع تمديد الأسلاك اللازمة بشكل آمن ومرتب.' },
        { question: 'هل تقدمون خدمة فحص كهرباء شاملة للمنزل؟', answer: 'نعم، نقدم خدمة فحص كهربائي شامل يتضمن فحص لوحة التوزيع والقواطع والأسلاك والمقابس والتأريض.' },
        { question: 'ما هي تكلفة خدمة الكهربائي المنزلي؟', answer: 'تختلف التكلفة حسب نوع العمل وحجمه. نقدم عروض أسعار واضحة قبل البدء بالعمل. أسعارنا تنافسية وتشمل المواد والعمل مع ضمان شامل.' },
      ],
    },
    en: {
      title: 'Home Electrician',
      metaTitle: 'Home Electrician in Amman | Electrical Fault Repair - Volt Maintenance',
      metaDescription: 'Professional home electrician service in Amman. All electrical fault repairs, wiring, lighting installation, distribution board maintenance. Certified electrician with full warranty.',
      h1: 'Professional Home Electrician in Amman',
      keywords: ['electrician amman', 'home electrician jordan', 'electrical repair amman', 'wiring service amman', 'lighting installation', 'electrical faults repair'],
      commonIssues: [
        { title: 'Frequent Power Outages', description: 'Inspection and repair of causes of frequent outages including circuit breakers, distribution board, and wiring.' },
        { title: 'Socket & Switch Problems', description: 'Repair or replacement of damaged or burnt sockets and switches with safety standards compliance.' },
        { title: 'Electrical Overload', description: 'Electrical load assessment and proper distribution with addition of new circuits when needed.' },
        { title: 'Distribution Board Faults', description: 'Inspection, maintenance, and upgrade of electrical distribution boards and replacement of faulty breakers.' },
        { title: 'Lighting Issues', description: 'Installation, repair, and replacement of lighting systems including chandeliers, spotlights, and LED lights.' },
        { title: 'New Wiring Installation', description: 'New electrical wiring for appliances or additional rooms according to technical and safety standards.' },
        { title: 'Exposed or Damaged Wiring', description: 'Inspection and replacement of corroded or exposed wires to prevent fire and electrical shock risks.' },
      ],
      content: [
        'Volt Maintenance provides certified home electrician services in Amman and all surrounding areas. Our team of qualified electrical technicians delivers comprehensive solutions for all electrical faults and home electrical needs. We adhere to the highest safety and quality standards in all our work.',
        'We offer a wide range of electrical services including emergency fault repair, distribution board maintenance and upgrade, new wiring installation, lighting system installation and maintenance, socket and switch installation, and water heater installation.',
        'We understand that electrical faults can pose a risk to family safety, so we provide fast response service. Our team is available throughout working days to reach your home and solve the problem quickly. All our services come with comprehensive warranty.',
      ],
      faqs: [
        { question: 'What causes frequent power outages at home?', answer: 'The most common causes are overload on a circuit breaker, a faulty breaker, or a short circuit in an appliance or wiring.' },
        { question: 'Can you add new electrical sockets?', answer: 'Yes, we install new sockets and switches anywhere in your home with safe and neat wiring extensions.' },
        { question: 'Do you offer comprehensive home electrical inspections?', answer: 'Yes, we provide complete electrical inspections covering the distribution board, breakers, wiring, sockets, and grounding.' },
        { question: 'How much does home electrician service cost?', answer: 'Cost varies by work type and scope. We provide clear quotes before starting. Our prices are competitive and include materials, labor, and warranty.' },
      ],
    },
    relatedIds: ['air-conditioners', 'gas-ovens', 'washing-machines'],
  },
];

export function getServiceBySlug(slug: string): { service: Service; locale: 'ar' | 'en' } | undefined {
  const decoded = decodeURIComponent(slug);
  for (const s of services) {
    if (s.slugs.ar === slug || s.slugs.ar === decoded) return { service: s, locale: 'ar' };
    if (s.slugs.en === slug || s.slugs.en === decoded) return { service: s, locale: 'en' };
  }
  return undefined;
}

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getRelatedServices(ids: string[]): Service[] {
  return ids.map((id) => services.find((s) => s.id === id)).filter(Boolean) as Service[];
}

export function getServiceContent(service: Service, locale: 'ar' | 'en'): ServiceContent {
  return service[locale];
}

export function getServiceSlug(service: Service, locale: 'ar' | 'en'): string {
  return service.slugs[locale];
}

export function getServiceBrands(service: Service, locale: 'ar' | 'en'): string[] {
  return service.brands[locale];
}
