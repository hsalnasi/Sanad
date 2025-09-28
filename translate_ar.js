// Simple English to Arabic translations for the landing page
const translations = {
  'Sanad — A voice-first assistant that makes life simpler for the elderly': 'سند — رفيقك الصوتي الذي يسهّل حياة كبارنا بكل ود واهتمام',
  'Talk naturally in Arabic. Sanad listens, understands, and helps with reminders, payments, and calling trusted contacts — no complicated menus or small buttons.': 'تحدث مع سند باللهجة السعودية بكل أريحية، فهو يسمعك ويفهمك ويهتم بتذكيرك بمواعيدك وسداد فواتيرك والتواصل مع أحبابك — بدون تعقيد أو صعوبة.',
  'See demo': 'شاهد التجربة',
  'How it works': 'طريقة العمل',
  'Key features': 'مزايا سند',
  'Features': 'المزايا',
  'Demo': 'تجربة حية',
  'Join Waitlist': 'انضم للقائمة',
  'Arabic (Saudi) speech recognition': 'يتعرف على لهجتنا السعودية بدقة',
  'Natural TTS voices': 'أصوات طبيعية قريبة من القلب',
  'Voice-first UI for simplicity': 'واجهة صوتية سهلة وواضحة',
  'Lightweight, offline-first UX options': 'تجربة خفيفة وتعمل بدون إنترنت',
  'For hackathon/demo: use the Speech Studio playground or our lightweight demo app. Full deployment requires a Pay-As-You-Go Azure subscription.': 'للتجربة: استخدم Speech Studio أو تطبيقنا البسيط. النسخة الكاملة تتطلب اشتراك Azure.',
  'How it works — simple 3-step flow': 'كيف يعمل سند — بثلاث خطوات بسيطة',
  '1. Speak': '١. تكلّم',
  'User talks naturally in Arabic — no menus or typing.': 'تحدث مع سند بلغتك وبكل بساطة — لا قوائم ولا كتابة.',
  '2. Sanad listens': '٢. سند يسمعك',
  'Speech-to-text converts voice to text and extracts intent.': 'سند يحوّل صوتك لنص ويفهم طلبك.',
  '3. Respond': '٣. يرد عليك',
  'Sanad replies with a natural Arabic voice and performs actions.': 'سند يجاوبك بصوت دافئ وينفذ طلبك فورًا.',
  'Voice-first UX': 'واجهة صوتية أولاً',
  'Large text, simple confirmations, and voice prompts to avoid confusion.': 'خط واضح، تأكيدات سهلة، وإرشادات صوتية تريح بالك.',
  'Reminders & daily help': 'تذكيرات ومساعدة يومية',
  'Medication, appointments, and bill reminders with simple voice confirmations.': 'ينبّهك بمواعيد أدويتك وفواتيرك بكل لطف وسهولة.',
  'Trusted contacts': 'أرقامك الموثوقة',
  'Call or message family/caregivers with a single voice command.': 'اتصل أو أرسل رسالة لأهلك أو من تثق بهم بكلمة واحدة.',
  'Privacy-first': 'خصوصيتك أولاً',
  'Local caching, minimal telemetry, and explicit permission prompts.': 'بياناتك بأمان، وخصوصيتك محفوظة دائماً.',
  'Demo': 'تجربة حية',
  'Record a short voice clip and show how Sanad transcribes and replies. For the live demo, use a recorded phone clip or the Speech Studio playground.': 'سجّل مقطع صوتي قصير وشاهد كيف يرد عليك سند. للتجربة الحية، استخدم مقطع هاتف أو Speech Studio.',
  'Play sample flow': 'جرّب المثال',
  '(Replace the audio below with your recorded prototype.)': '(استبدل الصوت أدناه بتسجيلك الخاص.)',
  'Share a short video': 'شارك فيديو قصير',
  'Record a 30–60s screen or phone video showing: user speaking → Studio transcript → TTS reply.': 'سجّل فيديو شاشة أو جوال (٣٠–٦٠ ثانية) يوضح: المستخدم يتحدث → النص يظهر → الرد الصوتي.',
  'Upload demo video': 'ارفع فيديو التجربة',
  'Join the hackathon demo': 'شاركنا في تجربة المسابقة',
  'Sign up and we’ll send a demo link and the prototype APK (if available).': 'سجّل وسنرسل لك رابط التجربة وملف التطبيق إذا توفر.',
  'Join waitlist': 'انضم للقائمة',
  'We won’t spam — just hackathon updates and demo link.': 'لا رسائل مزعجة — فقط جديد المسابقة ورابط التجربة.',
  'Built for the Hackathon • Sanad — Voice-first accessibility • Replace this template with your content': 'صُمم خصيصًا للمسابقة • سند — وصول صوتي للجميع • استبدل هذا القالب بمحتواك'
};

function translatePageToArabic() {
  // Change direction and language
  document.documentElement.lang = 'ar';
  document.body.dir = 'rtl';

  // Translate all text nodes
  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const trimmed = node.textContent.trim();
      if (translations[trimmed]) {
        node.textContent = translations[trimmed];
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let child of node.childNodes) {
        translateNode(child);
      }
    }
  }
  translateNode(document.body);
}

// Add language switch button
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.createElement('button');
  btn.textContent = 'العربية';
  btn.className = 'ml-4 px-3 py-2 rounded-md border bg-white text-slate-700 hover:bg-slate-100';
  btn.onclick = translatePageToArabic;
  // Insert into header
  const header = document.querySelector('header .flex.items-center.justify-between');
  if (header) {
    header.appendChild(btn);
  }
});
