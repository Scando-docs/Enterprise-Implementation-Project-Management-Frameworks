(function () {
    const common = {
        "Home": "الرئيسية",
        "Change Management": "إدارة التغيير",
        "Issue Management": "إدارة المشكلات",
        "Risk Management": "إدارة المخاطر",
        "Main navigation": "التنقل الرئيسي",
        "Copied!": "تم النسخ",
        "Copy Template": "نسخ النموذج"
    };

    const translations = {
        home: {
            "Project Governance Frameworks": "طرق الحوكمة المشروع",
            "covering Change Management, Issue Management, and Risk Management—ensuring controlled scope adjustments, structured issue resolution, and proactive risk monitoring throughout the project lifecycle.": "تغطي إدارة التغيير وإدارة المشكلات وإدارة المخاطر—لضمان تعديلات النطاق المُحكمة وحل المشكلات بشكل منظم ومراقبة المخاطر بشكل استباقي طوال دورة حياة المشروع.",
            "Standardized workflow for handling scope changes, impact assessments, approvals, schedule updates, and budget control.": "سير عمل موحّد لمعالجة تغييرات النطاق، وتقييم الأثر، والحصول على الموافقات، وتحديث الجداول الزمنية، وضبط الميزانية.",
            "Open Framework": "استعرض الإطار",
            "SLA-based issue triage, escalation process, lifecycle structure, and operational response matrix for critical project blockers.": "آلية لفرز المشكلات وفق اتفاقيات مستوى الخدمة، ومسار واضح للتصعيد والمعالجة، ومصفوفة استجابة للعوائق الحرجة في المشروع.",
            "Risk identification, probability-impact scoring, response planning, and lifecycle monitoring to protect time, cost, and delivery quality.": "منهجية لتحديد المخاطر وتقييم احتمالية وقوعها وأثرها، والتخطيط للاستجابة لها ومتابعتها لحماية الوقت والتكلفة وجودة التنفيذ.",
            "Proactive Risk Management": "إدارة المخاطر الاستباقية",
            "Open Framework": "استعرض الإطار"
        },
        change: {
            "Change Management Framework": "إطار إدارة التغيير",
            "Controlling Scope, Schedule, and Budget | Standard Implementation Methodology": "ضبط النطاق والجدول الزمني والميزانية | منهجية موحدة للتنفيذ",
            "1. Introduction & Scope Control": "١. مقدمة وضبط النطاق",
            "During any enterprise software implementation, deviations from the initially approved scope (Blueprint/Requirements) are inevitable. However,": "في مشاريع تنفيذ الأنظمة المؤسسية، قد تظهر متطلبات تختلف عن النطاق المعتمد في المخطط أو وثيقة المتطلبات. لكن",
            "uncontrolled changes (Scope Creep) are a primary cause of project failure, delays, and budget overruns.": "التغييرات غير المنضبطة، أو ما يُعرف بتوسع النطاق، من أبرز أسباب تعثر المشاريع وتأخرها وتجاوز ميزانياتها.",
            "This framework defines a strict, standardized process for how changes are requested, assessed by the technical team, priced, and formally approved.": "يوضح هذا الإطار آلية موحدة لطلب التغييرات، وتقييمها من الفريق الفني، وتقدير تكلفتها، واعتمادها رسميًا.",
            "No changes will be implemented in the system without an approved Change Request (CR) flowing through this exact procedure.": "لا يُنفّذ أي تغيير في النظام قبل اعتماد طلب تغيير (CR) واستكمال الخطوات المحددة هنا.",
            "2. Change Execution Workflow & SLAs": "٢. آلية تنفيذ التغيير واتفاقيات مستوى الخدمة",
            "To ensure swift but controlled decision-making, all changes must strictly adhere to the following procedural workflow:": "لضمان سرعة اتخاذ القرار مع الحفاظ على الضوابط، يجب اتباع الخطوات التالية عند التعامل مع أي تغيير:",
            "Submission of Change Request (Originator)": "تقديم طلب التغيير (مقدم الطلب)",
            "The Client or Project Stakeholder identifies a new requirement and submits a formal Change Request using the standard email template (provided below) to the Project Manager and Technical Team.": "يحدد العميل أو أحد المعنيين بالمشروع المتطلب الجديد، ثم يرسل طلب تغيير رسميًا إلى مدير المشروع والفريق الفني باستخدام النموذج أدناه.",
            "Impact Assessment (Technical Team)": "تقييم الأثر (الفريق الفني)",
            "SLA: 5 Working Days": "المدة المستهدفة: ٥ أيام عمل",
            "The Technical Team receives the request and analyzes the technical feasibility, system architecture impact, required effort, and budget implications. They document this in an Impact Assessment and determine the cost.": "يدرس الفريق الفني إمكانية تنفيذ الطلب وأثره على بنية النظام والجهد المطلوب والميزانية، ثم يوثّق النتائج والتكلفة في تقييم للأثر.",
            "Submission for Approval (To Client PM / Sponsor)": "رفع الطلب للاعتماد (مدير مشروع العميل أو الراعي)",
            "The Technical Team sends the completed Impact Assessment, including the revised budget and schedule implications, to the Client Project Manager and/or Project Sponsor for review.": "يرسل الفريق الفني تقييم الأثر، متضمنًا التعديلات المتوقعة على الميزانية والجدول الزمني، إلى مدير مشروع العميل و/أو راعي المشروع للمراجعة.",
            "Approval and Acceptance (Client PM / Sponsor)": "المراجعة والاعتماد (مدير مشروع العميل أو الراعي)",
            "The Client PM or Sponsor reviews the budget and schedule impact. If accepted, they must": "يراجع مدير المشروع أو الراعي أثر التغيير على الميزانية والجدول الزمني. وعند الموافقة، يجب",
            "reply to the Technical Team's impact assessment email": "الرد رسميًا على رسالة تقييم الأثر المرسلة من الفريق الفني",
            "with a formal written acceptance/approval.": "لتوثيق القبول والاعتماد كتابةً.",
            "Charter & Plan Update (Implementation Project Manager)": "تحديث ميثاق المشروع وخطته (مدير مشروع التنفيذ)",
            "Once the approval email is confirmed, it is forwarded to the Implementation Project Manager. The Project Manager formally updates the Project Charter, the Master Project Plan, and the Budget to baseline the new scope.": "بعد تأكيد الاعتماد، يُحال الطلب إلى مدير مشروع التنفيذ لتحديث ميثاق المشروع والخطة الرئيسية والميزانية، وتوثيق النطاق الجديد كخط أساس.",
            "Execution & Validation": "التنفيذ والتحقق",
            "The Technical Team executes the change in the system. The new feature/change is then validated by the client during standard User Acceptance Testing (UAT).": "ينفذ الفريق الفني التغيير في النظام، ثم يتحقق العميل من النتيجة خلال اختبار قبول المستخدم (UAT).",
            "3. Change Request (CR) Email Form": "٣. نموذج البريد الإلكتروني لطلب التغيير",
            "To initiate step 1 of the workflow, please copy the template below, fill in the bracketed information, and email it to the Technical Team and Project Manager.": "لبدء الخطوة الأولى، انسخ النموذج أدناه، وأكمل البيانات بين الأقواس، ثم أرسله إلى الفريق الفني ومدير المشروع.",
            "Copy Template": "نسخ النموذج",
            "Copied!": "تم النسخ"
        },
        issue: {
            "Issue Management Framework": "إطار إدارة المشكلات",
            "Systematic Issue Resolution | Standard Implementation Methodology": "معالجة منهجية للمشكلات | منهجية موحدة للتنفيذ",
            "1. Overview & Objectives": "١. نظرة عامة وأهداف الإطار",
            "While risks are potential future events,": "المخاطر أحداث محتملة قد تقع مستقبلًا، أما",
            "issues are realities currently impacting the project": "المشكلات فهي أمور قائمة تؤثر في المشروع بالفعل",
            ". This framework establishes clear Service Level Agreements (SLAs), strict escalation paths, and categorized routing to ensure the implementation team and client stakeholders resolve roadblocks rapidly—especially during critical phases like Data Migration and UAT—without threatening the project timeline.": ". يحدد هذا الإطار اتفاقيات واضحة لمستوى الخدمة (SLAs)، ومسارات تصعيد محددة، وآلية لتصنيف المشكلات وتوجيهها؛ بما يساعد فريق التنفيذ وممثلي العميل على إزالة العوائق بسرعة، خصوصًا خلال ترحيل البيانات واختبار قبول المستخدم (UAT)، دون تعريض الجدول الزمني للخطر.",
            "2. Issue Classification & Service Level Agreements (SLAs)": "٢. تصنيف المشكلات واتفاقيات مستوى الخدمة",
            "To ensure alignment between Client Process Owners and the Implementation Team, issues must be categorized and prioritized upon submission.": "لضمان التنسيق بين مسؤولي إجراءات العمل لدى العميل وفريق التنفيذ، يجب تصنيف كل مشكلة وتحديد أولويتها عند تسجيلها.",
            "Priority": "الأولوية",
            "Definition (System Context)": "الوصف (ضمن سياق النظام)",
            "Target Response": "الاستجابة المستهدفة",
            "Target Resolution": "المعالجة المستهدفة",
            "Critical": "حرجة",
            "System down (Go-Live phase), complete halt of UAT, or major financial data corruption. Prevents core project progress.": "توقف النظام خلال الإطلاق، أو تعطل اختبار قبول المستخدم بالكامل، أو تلف جوهري في البيانات المالية؛ بما يوقف تقدم العمل الأساسي.",
            "4 Hours": "٤ ساعات",
            "24 Hours (Requires RCA)": "٢٤ ساعة (مع تحليل السبب الجذري)",
            "High": "عالية",
            "Major module (e.g., Procurement) workflow broken, severely impacting critical deliverables. No workaround exists.": "تعطل سير العمل في وحدة رئيسية، مثل المشتريات، بما يؤثر بشدة في المخرجات المهمة دون وجود حل بديل.",
            "8 Hours": "٨ ساعات",
            "3 Working Days": "٣ أيام عمل",
            "Medium": "متوسطة",
            "Sub-component defect, minor report formatting issue, or manageable data mapping error. Workaround available.": "خلل في مكوّن فرعي، أو مشكلة بسيطة في تنسيق تقرير، أو خطأ محدود في مواءمة البيانات مع توفر حل بديل.",
            "24 Hours": "٢٤ ساعة",
            "10 Working Days": "١٠ أيام عمل",
            "Low": "منخفضة",
            "Cosmetic UI issues, non-critical translation updates, or future enhancement requests.": "ملاحظات شكلية على واجهة المستخدم، أو تحديثات ترجمة غير حرجة، أو طلبات تحسين مستقبلية.",
            "48 Hours": "٤٨ ساعة",
            "Best Effort (Next Sprint)": "حسب الإمكانية (في الدورة التالية)",
            "3. The Issue Lifecycle Workflow": "٣. دورة معالجة المشكلة",
            "Identification & Logging (Status: Received)": "تحديد المشكلة وتسجيلها (الحالة: مستلمة)",
            "Any project team member (e.g., Client Key Users) identifies an issue and logs it in the centralized Project Issue Tracker. Must include: Category (Technical, Functional, Data), Steps to Reproduce, and tentative Priority.": "يسجل أي عضو في فريق المشروع، مثل المستخدمين الرئيسيين لدى العميل، المشكلة في سجل المشكلات المركزي. ويجب أن يتضمن البلاغ: الفئة (تقنية أو وظيفية أو بيانات)، وخطوات إعادة ظهور المشكلة، والأولوية المبدئية.",
            "Triage & Assignment (Status: Open)": "فرز المشكلة وإسنادها (الحالة: مفتوحة)",
            "The Project Management Team reviews the issue within the Response Target, validates the priority, and assigns an Issue Owner (e.g., Lead Functional Consultant, Client IT Lead).": "يراجع فريق إدارة المشروع المشكلة ضمن مدة الاستجابة المستهدفة، ويتأكد من أولويتها، ثم يعيّن مسؤولًا عن معالجتها، مثل الاستشاري الوظيفي الرئيسي أو مسؤول تقنية المعلومات لدى العميل.",
            "Analysis & Remediation (Status: In Progress)": "التحليل والمعالجة (الحالة: قيد التنفيذ)",
            "The Issue Owner implements a fix. If the fix requires modifying the overall scope or budget, the issue pauses here and formally triggers the": "ينفذ المسؤول عن المشكلة الحل المناسب. وإذا تطلب الحل تعديل نطاق المشروع أو ميزانيته، تتوقف المعالجة هنا ويُفعّل رسميًا",
            "Change Management Process": "إجراء إدارة التغيير",
            "Validation (Status: Waiting Approval)": "التحقق (الحالة: بانتظار الاعتماد)",
            "The originator or relevant Client Process Owner tests the resolution in the Staging/UAT environment to ensure it meets business requirements.": "يختبر مقدم البلاغ أو مسؤول إجراءات العمل لدى العميل الحل في بيئة الاختبار أو UAT للتأكد من تلبيته لمتطلبات العمل.",
            "Closure (Status: Resolved)": "الإغلاق (الحالة: تم الحل)",
            "Formal approval is recorded. For Critical issues, a brief Root Cause Analysis (RCA) is appended to the log to prevent recurrence.": "يُوثق الاعتماد الرسمي للحل. وبالنسبة إلى المشكلات الحرجة، يُضاف ملخص لتحليل السبب الجذري (RCA) إلى السجل للحد من تكرارها.",
            "4. Escalation Matrix": "٤. مصفوفة التصعيد",
            "If SLA targets are breached, the following automated escalation path applies:": "إذا تجاوزت المعالجة المدة المحددة في اتفاقية مستوى الخدمة، يُتبع مسار التصعيد التالي:",
            "1 Day Overdue:": "تأخير يوم واحد:",
            "Alert to designated Issue Owner and Project Managers.": "إشعار المسؤول المعيّن عن المشكلة ومديري المشروع.",
            "3 Days Overdue:": "تأخير ٣ أيام:",
            "Escalated to Joint PM Team & relevant Client Process Owners.": "تصعيد إلى فريقَي إدارة المشروع ومسؤولي إجراءات العمل المعنيين لدى العميل.",
            "5 Days Overdue:": "تأخير ٥ أيام:",
            "Escalated to Implementation Vendor Operational Leadership.": "تصعيد إلى الإدارة التشغيلية لدى مورّد التنفيذ.",
            "10+ Days Overdue:": "تأخير ١٠ أيام أو أكثر:",
            "Escalated to the Steering Committee / Project Sponsors for executive intervention.": "تصعيد إلى اللجنة التوجيهية أو رعاة المشروع لاتخاذ قرار على مستوى الإدارة.",
            "5. Roles & Responsibilities": "٥. الأدوار والمسؤوليات",
            "Originator (Key Users):": "مقدم البلاغ (المستخدمون الرئيسيون):",
            "Clearly document the issue with evidence (screenshots, expected vs actual results).": "يوثق المشكلة بوضوح ويرفق ما يثبتها، مثل لقطات الشاشة والنتيجة المتوقعة والفعلية.",
            "Project Managers:": "مديرو المشروع:",
            "Triage, assign, and monitor issue health. Run weekly issue review meetings.": "يفرزون المشكلات ويسندونها ويتابعون حالتها، ويديرون اجتماعات المراجعة الأسبوعية.",
            "Issue Owner:": "المسؤول عن المشكلة:",
            "Resolve within SLA, provide daily updates on High/Critical issues.": "يعالج المشكلة ضمن المدة المحددة، ويقدم تحديثات يومية بشأن المشكلات العالية والحرجة.",
            "Steering Committee:": "اللجنة التوجيهية:",
            "Unblock resources or make executive decisions for escalated issues.": "توفر الموارد اللازمة أو تتخذ القرارات الإدارية بشأن المشكلات المصعّدة.",
            "6. Real-World Implementation Scenarios": "٦. أمثلة واقعية من مشاريع التنفيذ",
            "Scenario A: Data Migration Mismatch": "الحالة أ: عدم تطابق البيانات بعد الترحيل",
            "Issue:": "المشكلة:",
            "During the data migration phase, opening balances provided by the Client Finance team do not map correctly to the new Chart of Accounts.": "أثناء ترحيل البيانات، لا تتوافق الأرصدة الافتتاحية التي قدمها الفريق المالي لدى العميل مع دليل الحسابات الجديد.",
            "Action:": "الإجراء:",
            "Logged as": "سُجلت المشكلة بأولوية",
            "High Priority": "عالية",
            "(Functional/Data). Assigned jointly to the Client Finance Lead and the Lead Consultant to resolve mapping logic within 3 days to prevent UAT delays.": "(وظيفية/بيانات)، وأُسندت إلى المسؤول المالي لدى العميل والاستشاري الرئيسي لمعالجة مواءمة البيانات خلال ٣ أيام وتفادي تأخر UAT.",
            "Scenario B: Key User Unavailable for UAT": "الحالة ب: تعذر مشاركة المستخدم الرئيسي في UAT",
            "The primary Procurement Key User is on unexpected leave during the critical UAT week.": "تعذر على المستخدم الرئيسي للمشتريات الحضور خلال أسبوع UAT الحاسم بسبب إجازة طارئة.",
            "(Resource). Escalated immediately to the Client Project Sponsor to assign a proxy user to prevent schedule slippage.": "(موارد)، وصُعّدت فورًا إلى راعي المشروع لدى العميل لتعيين بديل وتفادي تأخر الجدول الزمني."
        },
        risk: {
            "Risk Management Framework": "إطار إدارة المخاطر",
            "Proactive Identification and Mitigation | Standard Implementation Methodology": "تحديد المخاطر ومعالجتها استباقيًا | منهجية موحدة للتنفيذ",
            "1. Philosophy & Objective": "١. المنهجية والهدف",
            "This framework enforces a": "يعتمد هذا الإطار نهجًا",
            "proactive, continuous monitoring approach": "استباقيًا قائمًا على المتابعة المستمرة",
            ". A risk is an uncertain event that, if it occurs, has a positive or negative effect on project objectives. By actively managing the Risk Register throughout the entire project lifecycle, the Implementation Partner and the Client will minimize surprises and protect the budget, schedule, and quality.": ". والمخاطرة حدث غير مؤكد قد يؤثر إيجابًا أو سلبًا في أهداف المشروع عند وقوعه. ومن خلال تحديث سجل المخاطر ومراجعته طوال دورة حياة المشروع، يستطيع شريك التنفيذ والعميل الحد من المفاجآت وحماية الميزانية والجدول الزمني والجودة.",
            "2. The Continuous Risk Lifecycle": "٢. دورة إدارة المخاطر المستمرة",
            "Identify": "التحديد",
            "Assess & Rank": "التقييم والترتيب",
            "Action Plan (Respond)": "خطة الاستجابة",
            "Monitor & Control": "المتابعة والضبط",
            "This cycle is repeated on a regular cadence (e.g., bi-weekly) during Project Status Meetings.": "تُكرر هذه الدورة بانتظام، مثل كل أسبوعين، خلال اجتماعات متابعة حالة المشروع.",
            "3. Risk Assessment Matrix (Probability × Impact)": "٣. مصفوفة تقييم المخاطر (الاحتمالية × الأثر)",
            "All identified risks are scored based on likelihood and potential impact on operations or timeline. Exposure = Probability × Impact.": "تُقيّم المخاطر بحسب احتمال وقوعها وأثرها المحتمل على سير العمل أو الجدول الزمني. مستوى التعرض = الاحتمالية × الأثر.",
            "Probability": "الاحتمالية",
            "Impact on Project (Scope, Time, Cost)": "الأثر على المشروع (النطاق والوقت والتكلفة)",
            "Minor (1)": "محدود (١)",
            "Moderate (2)": "متوسط (٢)",
            "Severe (3)": "جسيم (٣)",
            "High (3)": "مرتفع (٣)",
            "> 75% chance": "احتمال يتجاوز ٧٥٪",
            "Medium (2)": "متوسط (٢)",
            "25% - 75% chance": "احتمال من ٢٥٪ إلى ٧٥٪",
            "Low (1)": "منخفض (١)",
            "< 25% chance": "احتمال أقل من ٢٥٪",
            "Medium (3)": "متوسط (٣)",
            "High (6)": "مرتفع (٦)",
            "Critical (9)": "حرج (٩)",
            "Low (2)": "منخفض (٢)",
            "Medium (4)": "متوسط (٤)",
            "Low (1)": "منخفض (١)",
            "4. Risk Response Strategies": "٤. استراتيجيات الاستجابة للمخاطر",
            "🛑 Avoid": "🛑 التجنب",
            "Change the project plan to eliminate the threat entirely.": "عدّل خطة المشروع لإزالة التهديد بالكامل.",
            "Ex: Removing a highly complex, non-critical legacy system integration from the initial deployment scope.": "مثال: استبعاد تكامل مع نظام قديم شديد التعقيد وغير حرج من نطاق الإطلاق الأول.",
            "🛡️ Mitigate": "🛡️ التخفيف",
            "Reduce the probability or impact of the risk.": "اتخذ إجراءات تقلل احتمال وقوع الخطر أو تحد من أثره.",
            "Ex: Conducting extra, targeted training sessions to mitigate the risk of low user adoption.": "مثال: تنظيم جلسات تدريب إضافية ومركزة للحد من ضعف إقبال المستخدمين على النظام.",
            "🔄 Transfer": "🔄 النقل",
            "Shift the impact and ownership to a third party.": "انقل مسؤولية التعامل مع الخطر وأثره إلى طرف ثالث.",
            "Ex: Relying on the software publisher's cloud SLA for server uptime rather than managing hosting internally.": "مثال: الاعتماد على اتفاقية مستوى الخدمة السحابية لمورّد النظام لضمان توفر الخوادم بدلًا من إدارتها داخليًا.",
            "✅ Accept": "✅ القبول",
            "Acknowledge the risk but take no proactive action, establishing a": "اقبل احتمال وقوع الخطر دون إجراء استباقي، مع وضع",
            "Fallback Plan": "خطة بديلة",
            "if it occurs. Used primarily for Low Exposure risks.": "للتعامل معه إذا وقع. ويُستخدم هذا الخيار غالبًا للمخاطر منخفضة التعرض.",
            "5. Real-World Implementation Risk Scenarios": "٥. أمثلة واقعية لمخاطر التنفيذ",
            "Risk Description": "وصف الخطر",
            "Exposure": "مستوى التعرض",
            "Mitigation Strategy (Owner)": "استراتيجية المعالجة (المسؤول)",
            "Client Master Data is severely corrupted or incomplete": "تلف بيانات العميل الرئيسية بدرجة كبيرة أو عدم اكتمالها",
            "during the extraction phase prior to migration.": "خلال مرحلة استخراج البيانات وقبل ترحيلها.",
            "Mitigate:": "التخفيف:",
            "Initiate data cleansing workshops immediately during the planning phase, weeks before migration formally starts. (Owner: Client Data Stewards)": "ابدأ ورش تنظيف البيانات في مرحلة التخطيط، قبل أسابيع من بدء الترحيل. (المسؤول: أمناء بيانات العميل)",
            "Resistance to Change:": "مقاومة التغيير:",
            "Staff refuse to move away from legacy Excel workflows and resist system adoption.": "يرفض الموظفون التخلي عن إجراءات العمل القديمة المعتمدة على Excel ويترددون في استخدام النظام.",
            "Strong championing by department heads; early system demos to build buy-in and demonstrate efficiency gains. (Owner: Client Project Sponsor)": "يدعم رؤساء الأقسام التغيير بفاعلية، وتُعرض مزايا النظام مبكرًا لتعزيز تقبل المستخدمين وإبراز مكاسب الكفاءة. (المسؤول: راعي المشروع لدى العميل)",
            "Scope Creep:": "توسع النطاق:",
            "Constant requests for custom modules or deviations from the approved Blueprint document.": "تكرار طلبات الوحدات المخصصة أو الخروج عن وثيقة المخطط المعتمدة.",
            "Avoid:": "التجنب:",
            "Strictly enforce the Change Management process. Require Steering Committee budget sign-off for any non-standard features. (Owner: Project Manager)": "التزم بإجراءات إدارة التغيير، واشترط موافقة اللجنة التوجيهية على الميزانية قبل اعتماد أي ميزة غير قياسية. (المسؤول: مدير المشروع)"
        }
    };

    const pageTitles = {
        home: { en: "Project Governance Frameworks", ar: "أطر حوكمة المشاريع" },
        change: { en: "Change Management Framework | Implementation Methodology", ar: "إطار إدارة التغيير | منهجية التنفيذ" },
        issue: { en: "Issue Management Framework | Implementation Methodology", ar: "إطار إدارة المشكلات | منهجية التنفيذ" },
        risk: { en: "Risk Management Framework | Implementation Methodology", ar: "إطار إدارة المخاطر | منهجية التنفيذ" }
    };

    const emailTemplateArabic = `الموضوع: طلب تغيير في المشروع - [عنوان مختصر للتغيير]

السادة/ الفريق الفني وإدارة المشروع،

نرجو مراجعة طلب التغيير التالي وتقييم أثره:

١. وصف التغيير:
[اشرح المتطلب الجديد أو التعديل المطلوب على النطاق الحالي بالتفصيل. مثال: إضافة مسار موافقات متعدد المستويات لأوامر الشراء التي تتجاوز قيمتها ٥٠٬٠٠٠ دولار.]

٢. المبرر التجاري:
[لماذا لا تكفي الوظائف القياسية أو النطاق المتفق عليه؟ وما القيمة أو العائد المتوقع من هذا التغيير؟]

٣. البدائل التي دُرست:
[هل توجد معالجة يدوية في حال عدم الموافقة؟ مثال: يمكن متابعة ذلك في Excel، لكن هذا يزيد مخاطر التدقيق.]

٤. درجة الاستعجال والمرحلة المطلوبة:
[متى نحتاج إلى هذا التغيير؟ مثال: يجب تنفيذه قبل اعتماد اختبار قبول المستخدم (UAT).]

يرجى تزويدنا بتقييم الأثر، بما يشمل أثره على الميزانية والجدول الزمني، خلال مدة اتفاقية مستوى الخدمة البالغة ٥ أيام عمل.

مع خالص التحية،

[الاسم والمسمى الوظيفي]
[جهة العميل]`;

    function normalize(value) {
        return value.replace(/\s+/g, " ").trim();
    }

    function applyLanguage(language) {
        const page = document.body.dataset.page;
        const dictionary = { ...common, ...translations[page] };
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;

        while ((node = walker.nextNode())) {
            if (node.parentElement.closest(".site-nav, script, style, #email-template")) continue;
            if (node.__englishText === undefined) node.__englishText = node.nodeValue;
            const original = node.__englishText;
            const key = normalize(original);
            if (!key || !dictionary[key]) continue;
            const leading = original.match(/^\s*/)[0];
            const trailing = original.match(/\s*$/)[0];
            node.nodeValue = language === "ar" ? `${leading}${dictionary[key]}${trailing}` : original;
        }

        document.documentElement.lang = language;
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
        document.title = pageTitles[page][language];
        document.querySelectorAll(".nav-links a").forEach((link) => {
            link.textContent = link.dataset[language];
            link.lang = language;
        });
        document.querySelector(".site-nav").setAttribute("aria-label", language === "ar" ? "التنقل الرئيسي" : "Main navigation");
        document.querySelector(".language-switch").setAttribute("aria-label", language === "ar" ? "اللغة" : "Language");
        document.querySelectorAll(".language-switch button").forEach((button) => {
            button.setAttribute("aria-pressed", String(button.dataset.language === language));
        });

        const emailTemplate = document.getElementById("email-template");
        if (emailTemplate) {
            if (!emailTemplate.dataset.englishText) emailTemplate.dataset.englishText = emailTemplate.textContent;
            emailTemplate.textContent = language === "ar" ? emailTemplateArabic : emailTemplate.dataset.englishText;
        }

        window.currentLanguage = language;
        try {
            localStorage.setItem("scando-language", language);
        } catch (error) {
            // Language selection still works for this page when storage is unavailable.
        }
    }

    document.querySelectorAll(".language-switch button").forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.language));
    });

    let savedLanguage = "en";
    try {
        savedLanguage = localStorage.getItem("scando-language") || "en";
    } catch (error) {
        savedLanguage = "en";
    }
    applyLanguage(savedLanguage === "ar" ? "ar" : "en");
    window.applyLanguage = applyLanguage;
})();