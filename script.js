
// Current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Database of content
const quotes = [
    {
        english: "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.",
        urdu: "ایمان، نظم و ضبط، اور فرض کے لیے بے لوث لگن کے ساتھ، آپ کوئی بھی قابل قدر چیز حاصل کر سکتے ہیں۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "Pakistan not only means freedom and independence but the Muslim ideology which has to be preserved.",
        urdu: "پاکستان کا مطلب نہ صرف آزادی ہے بلکہ مسلم نظریہ بھی ہے جسے محفوظ رکھنا ہے۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "We are now all Pakistanis and as Pakistanis we must feel, behave and act.",
        urdu: "ہم سب پاکستانی ہیں اور ہمیں پاکستانی بن کر سوچنا، برتاؤ کرنا اور عمل کرنا ہے۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "There is no power on Earth that can undo Pakistan.",
        urdu: "دنیا کی کوئی طاقت پاکستان کو ختم نہیں کر سکتی۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "Think 100 times before you take a decision, but once that decision is taken, stand by it as one man.",
        urdu: "فیصلہ لینے سے پہلے سو بار سوچو، لیکن جب فیصلہ کر لو تو اس پر ڈٹ جاؤ۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "Expect the best, prepare for the worst.",
        urdu: "بہترین کی امید رکھو، بدترین کے لیے تیار رہو۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "You are free to go to your temples, mosques, or any other places of worship in Pakistan.",
        urdu: "آپ آزاد ہیں کہ پاکستان میں اپنے مندروں، مسجدوں یا کسی بھی عبادت گاہ میں جا سکتے ہیں۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "No nation can rise to the height of glory unless your women are side by side with you.",
        urdu: "کوئی قوم اس وقت تک عظمت کی بلندیوں کو نہیں پہنچ سکتی جب تک کہ اس کی عورتیں مردوں کے ساتھ نہ ہوں۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "I do not believe in taking the right decision, I take a decision and make it right.",
        urdu: "میں صحیح فیصلہ لینے پر یقین نہیں رکھتا، میں فیصلہ کرتا ہوں اور اسے صحیح بناتا ہوں۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "My message to you all is of hope, courage, and confidence.",
        urdu: "میرا پیغام آپ سب کے لیے امید، حوصلے اور اعتماد کا ہے۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "Work, work and work and we are bound to success.",
        urdu: "کام، کام اور صرف کام — اور ہمیں کامیابی ضرور ملے گی۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "Failure is a word unknown to me.",
        urdu: "ناکامی میرے لیے ایک انجان لفظ ہے۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "Unity, faith, discipline.",
        urdu: "اتحاد، ایمان، قربانی۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "A nation can win no greater honor than to sacrifice for the integrity of its country.",
        urdu: "ایک قوم کے لیے سب سے بڑا اعزاز اپنے ملک کی سالمیت کے لیے قربانی دینا ہے۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "India is not a nation, nor a country. It is a subcontinent of nationalities.",
        urdu: "ہندوستان نہ تو ایک قوم ہے نہ ایک ملک، بلکہ مختلف قومیتوں کا مجموعہ ہے۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "We should have a State in which we could live and breathe as free men.",
        urdu: "ہمیں ایک ایسی ریاست چاہیے تھی جہاں ہم آزاد انسانوں کی طرح جی سکیں۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "Democracy is in the blood of Muslims, who look upon complete equality of mankind.",
        urdu: "جمہوریت مسلمانوں کے خون میں ہے، جو انسانوں کی مکمل برابری پر یقین رکھتے ہیں۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "Islam expects every Muslim to do his duty and if necessary, to die in the cause of truth and justice.",
        urdu: "اسلام ہر مسلمان سے اس کے فرض کی ادائیگی کی توقع رکھتا ہے، اور اگر ضرورت پڑے تو سچ اور انصاف کے لیے مرنے کی بھی۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "No settlement with the majority is possible as no Hindu leader speaking with any authority shows any concern or genuine desire for it.",
        urdu: "اکثریت کے ساتھ کوئی سمجھوتہ ممکن نہیں کیونکہ کوئی ہندو لیڈر سنجیدگی سے دلچسپی ظاہر نہیں کرتا۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "We are starting in the days where there is no discrimination, no distinction between one community and another.",
        urdu: "ہم ان دنوں کی ابتدا کر رہے ہیں جہاں کسی قوم اور دوسرے میں کوئی تفریق نہیں ہو گی۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "Come forward as servants of Islam, organise the people economically, socially, educationally and politically.",
        urdu: "اسلام کے خادم بن کر آگے بڑھو، عوام کو اقتصادی، سماجی، تعلیمی اور سیاسی لحاظ سے منظم کرو۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "We must work our destiny in our own way and present to the world an economic system based on true Islamic concept.",
        urdu: "ہمیں اپنی تقدیر اپنے طریقے سے بنانی ہے اور دنیا کو ایک اسلامی اصولوں پر مبنی معاشی نظام پیش کرنا ہے۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "Do not forget our motto: Unity, Faith and Discipline.",
        urdu: "ہمارا نعرہ مت بولو: اتحاد، ایمان اور قربانی۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "You have to stand guard over the development and maintenance of Islamic democracy, Islamic social justice and the equality of manhood in your own native soil.",
        urdu: "آپ کو اسلامی جمہوریت، اسلامی سماجی انصاف اور انسانوں کی برابری کی نگرانی کرنی ہے۔",
        source: "Quaid-e-Azam"
    },
    {
        english: "The story of Pakistan, its struggle and its achievement, is the very story of great human ideals.",
        urdu: "پاکستان کی جدوجہد اور کامیابی کی کہانی عظیم انسانی اقدار کی کہانی ہے۔",
        source: "Quaid-e-Azam"
    }
];

const shayari = [
    {
        urdu: "سر زمین پاک پہ ہوتے ہیں جنت کے دروازے\nیہ وطن ہمارا ہے، یہاں کی ہوا میں ہے ایمان کی خوشبو",
        english: "The gates of paradise open on the land of Pakistan\nThis is our homeland, the air here carries the fragrance of faith"
    },
    {
        urdu: "لہرائے گا ہر جگہ پرچم ستارہ و ہلال\nہم سے ہے پاکستان، پاکستان ہم سے ہے",
        english: "Everywhere will wave the flag of the star and crescent\nPakistan is from us, and we are from Pakistan"
    },
    {
        urdu: "سر زمین پاک پہ ہوتے ہیں جنت کے دروازے\nیہ وطن ہمارا ہے، یہاں کی ہوا میں ہے ایمان کی خوشبو",
        english: "The gates of paradise open on the land of Pakistan\nThis is our homeland, the air here carries the fragrance of faith"

    },
    {
        urdu: "لہرائے گا ہر جگہ پرچم ستارہ و ہلال\nہم سے ہے پاکستان، پاکستان ہم سے ہے",
        english: "Everywhere will wave the flag of the star and crescent\nPakistan is from us, and we are from Pakistan"
    },
    {
        urdu: "یہ وطن تمہارا ہے، تم ہو پاسباں اس کے\nیہ چمن تمہارا ہے، تم ہو نغمہ خواں اس کے",
        english: "This homeland is yours, you are its guardian\nThis garden is yours, you are its songbird"
    },
    {
        urdu: "شہید کی جو موت ہے وہ قوم کی حیات ہے\nیہ وطن کی مٹی بڑی قیمتی ہے",
        english: "The death of a martyr is the life of a nation\nThe soil of this homeland is precious"
    },
    {
        urdu: "تیرا پاکستان ہے یہ میرا پاکستان ہے\nاس پر قربان میرا ایمان ہے",
        english: "This Pakistan is yours, this Pakistan is mine\nMy faith is ready to sacrifice for it"
    },
    {
        urdu: "پاک دھرتی کی خوشبو، بہاروں کی بات ہے\nیہ وہ خواب ہے جو اقبال کی ذات ہے",
        english: "The fragrance of pure land, the essence of spring\nThis is the dream that belonged to Iqbal"
    },
    {
        urdu: "پرچم کے رنگوں میں چھپی ہے قربانی کی کہانی\nیہی ہے پاکستان کی پہچان",
        english: "In the colors of the flag lies the story of sacrifice\nThis is the identity of Pakistan"
    },
    {
        urdu: "ہم ہیں پاکستان کے محافظ، جان بھی قربان کریں گے\nاس دھرتی پر کبھی آنچ نہ آنے دیں گے",
        english: "We are Pakistan's protectors, we will sacrifice our lives\nWe will never let harm come to this land"
    },
    {
        urdu: "یہ سبز ہلالی پرچم ہے ہماری جان سے پیارا\nہمیں اس سے ہے پیار بے شمارا",
        english: "This green crescent flag is dearer than life\nWe love it beyond measure"
    },
    {
        urdu: "پاکستان کی مٹی ہمیں جان سے عزیز ہے\nیہی ہماری پہچان، یہی ہمارا فخر ہے",
        english: "Pakistan's soil is dearer to us than life\nThis is our identity, this is our pride"
    },
    {
        urdu: "آؤ مل کر یہ عہد کریں ہم\nپاکستان کو عظیم بنائیں ہم",
        english: "Come, let us take this oath together\nWe will make Pakistan great"
    },
    {
        urdu: "یقین، اتحاد اور قربانی کا ہے نام پاکستان\nیہی ہے کامیابی کی جان",
        english: "Faith, unity, and sacrifice is the name of Pakistan\nThis is the essence of success"
    },
    {
        urdu: "یقین محکم، عمل پیہم، محبت فاتح عالم\nیہی ہے اصل پاکستان کا پرچم",
        english: "Strong faith, constant struggle, love conquers the world\nThis is the true flag of Pakistan"
    },
    {
        urdu: "یہ سبز پرچم ہمیں بچپن سے ہے پیارا\nیہی ہماری شان اور سہارا",
        english: "This green flag has been dear to us since childhood\nIt is our honor and our support"
    },
    {
        urdu: "پاکستان ہمارا گھر ہے، ہم اس کے رہنے والے\nہم سے ہے اس کی رونق بڑھنے والے",
        english: "Pakistan is our home, we are its residents\nWe are the ones who make it flourish"
    },
    {
        urdu: "اس دھرتی کے ذرے ذرے میں ہے قربانی کی خوشبو\nیہی ہے ہماری محبت کا آغاز",
        english: "In every grain of this land is the fragrance of sacrifice\nThis is the beginning of our love"
    },
    {
        urdu: "ہماری منزل پاکستان کی ترقی ہے\nہماری محنت ہی اس کی جھلک ہے",
        english: "Our destination is Pakistan's progress\nOur hard work is its reflection"
    },
    {
        urdu: "سبز پرچم کا وقار قائم رکھنا ہے\nاس کے لیے ہر قربانی دینا ہے",
        english: "We must maintain the dignity of the green flag\nWe must make every sacrifice for it"
    },
    {
        urdu: "اس وطن کے لیے ہم سب ایک ہیں\nمحبت کے رشتے میں جڑے ہیں",
        english: "We are all united for this homeland\nBound in the ties of love"
    },
    {
        urdu: "پاکستان کی فضاؤں میں خوشبو ایمان کی ہے\nیہ دھرتی جنت کا ایک نشان ہے",
        english: "In Pakistan's air is the fragrance of faith\nThis land is a sign of paradise"
    },
    {
        urdu: "ہماری پہچان ہے سبز ہلالی پرچم\nیہی ہے فخر ہمارا، یہی ہے کرم",
        english: "Our identity is the green crescent flag\nIt is our pride, it is our blessing"
    },
    {
        urdu: "آزادی کا یہ تحفہ ہمیں قربانیوں سے ملا\nیہی ہمارا سرمایہ، یہی ہمارا حوصلہ",
        english: "We received this gift of freedom through sacrifices\nThis is our asset, this is our courage"
    },
    {
        urdu: "ہم ہیں ایک، ہمارا مقصد ایک ہے\nپاکستان کی ترقی ہمارا عشق ہے",
        english: "We are one, our goal is one\nPakistan's progress is our love"
    },
    {
        urdu: "ہماری دعا ہے پاکستان کی حفاظت\nیہی ہے ہماری سب سے بڑی عبادت",
        english: "Our prayer is for Pakistan's protection\nThis is our greatest act of worship"
    },
    {
        urdu: "پاکستان کی مٹی میں ہے شہیدوں کا خون\nیہی ہے ہماری جان، یہی ہمارا سکون",
        english: "In Pakistan's soil is the blood of martyrs\nIt is our life, it is our peace"
    }
];

const quizQuestions = [
    {
        question: "When did Pakistan gain independence?",
        options: ["14th August 1947", "15th August 1947", "23rd March 1940", "14th August 1948"],
        answer: 0
    },
    {
        question: "Who was the founder of Pakistan?",
        options: ["Allama Iqbal", "Sir Syed Ahmed Khan", "Liaquat Ali Khan", "Muhammad Ali Jinnah"],
        answer: 3
    },
    {
        question: "What was the name of the movement that led to the creation of Pakistan?",
        options: ["Quit India Movement", "Pakistan Movement", "Khilafat Movement", "Tehreek-e-Taliban"],
        answer: 1
    },
    {
        question: "When was the Pakistan Resolution passed?",
        options: ["14th August 1947", "23rd March 1940", "11th September 1948", "28th February 1928"],
        answer: 1
    },
    {
        question: "Who presented the Pakistan Resolution?",
        options: ["Liaquat Ali Khan", "Maulana Shaukat Ali", "Maulvi Fazl-ul-Haq", "Zulfikar Ali Bhutto"],
        answer: 2
    },
    {
        question: "Where was the Pakistan Resolution passed?",
        options: ["Karachi", "Islamabad", "Lahore", "Delhi"],
        answer: 2
    },
    {
        question: "What does the Minar-e-Pakistan commemorate?",
        options: ["The first constitution", "Jinnah's birth", "Pakistan Resolution", "Kashmir solidarity"],
        answer: 2
    },
    {
        question: "Who gave the title 'Quaid-e-Azam' to Muhammad Ali Jinnah?",
        options: ["Allama Iqbal", "Mahatma Gandhi", "Maulana Shaukat Ali", "Liaquat Ali Khan"],
        answer: 0
    },
    {
        question: "What was the main demand of the Pakistan Movement?",
        options: ["British withdrawal", "Khilafat revival", "Separate Muslim state", "Hindu-Muslim unity"],
        answer: 2
    },
    {
        question: "Who was the first Prime Minister of Pakistan?",
        options: ["Muhammad Ali Jinnah", "Liaquat Ali Khan", "Ayub Khan", "Zulfikar Ali Bhutto"],
        answer: 1
    },
    {
        question: "What is celebrated on 14th August?",
        options: ["Defense Day", "Pakistan Independence Day", "Iqbal Day", "Republic Day"],
        answer: 1
    },
    {
        question: "Who was the last Viceroy of British India?",
        options: ["Lord Wavell", "Lord Linlithgow", "Lord Mountbatten", "Lord Curzon"],
        answer: 2
    },
    {
        question: "Which city was the first capital of Pakistan?",
        options: ["Lahore", "Rawalpindi", "Islamabad", "Karachi"],
        answer: 3
    },
    {
        question: "What was the name of the plan that led to the partition of India?",
        options: ["August Offer", "Cabinet Mission", "Mountbatten Plan", "Nehru Report"],
        answer: 2
    },
    {
        question: "What was the two-nation theory?",
        options: ["Unity of India", "Muslims and Hindus are one", "Separate nation for Muslims", "British rule continuation"],
        answer: 2
    },
    {
        question: "Who coined the idea of a separate Muslim state before Jinnah?",
        options: ["Allama Iqbal", "Sir Syed Ahmed Khan", "Liaquat Ali Khan", "Maulana Maududi"],
        answer: 0
    },
    {
        question: "Which newspaper promoted Muslim League ideology?",
        options: ["Dawn", "Times of India", "The Hindu", "Express Tribune"],
        answer: 0
    },
    {
        question: "What is the national language of Pakistan?",
        options: ["English", "Punjabi", "Urdu", "Sindhi"],
        answer: 2
    },
    {
        question: "Who was the first President of Pakistan?",
        options: ["Iskander Mirza", "Ayub Khan", "Liaquat Ali Khan", "Zulfikar Bhutto"],
        answer: 0
    },
    {
        question: "Who hoists the national flag on Independence Day?",
        options: ["President", "Prime Minister", "Governor", "Chief Justice"],
        answer: 1
    },
    {
        question: "What color is most prominent in the Pakistani flag?",
        options: ["White", "Green", "Red", "Blue"],
        answer: 1
    },
    {
        question: "What does the white part of Pakistan's flag represent?",
        options: ["Peace", "Minorities", "Muslims", "Unity"],
        answer: 1
    },
    {
        question: "Which leader said, 'Muslims are a nation by every right'?",
        options: ["Nehru", "Allama Iqbal", "Jinnah", "Liaquat Ali Khan"],
        answer: 1
    },
    {
        question: "What is the name of the day India was partitioned?",
        options: ["15th August 1947", "26th January 1950", "14th August 1947", "3rd June 1947"],
        answer: 0
    },
    {
        question: "What slogan is associated with Pakistan's creation?",
        options: ["Swaraj is my birthright", "Jai Hind", "Pakistan Zindabad", "Inquilab Zindabad"],
        answer: 2
    }
];

const historyFacts = {
    creation: "Pakistan was created on 14 August 1947 as a sovereign nation for Muslims of British India, following the Pakistan Movement led by Muhammad Ali Jinnah and the All-India Muslim League.",
    firstDay: "On 14 August 1947, Quaid-e-Azam Muhammad Ali Jinnah became the first Governor-General of Pakistan. The country consisted of two wings—West Pakistan (current Pakistan) and East Pakistan (now Bangladesh).",
    struggles: "The journey to independence involved the efforts of many leaders including Allama Iqbal who first proposed the idea of a separate Muslim state, and millions of Muslims who migrated to Pakistan during partition.",
    significance: "14 August marks the day when Pakistan achieved independence from British rule after nearly 200 years, according to the Islamic calendar this occurred on 27 Ramadhan 1366, a sacred night in Islam.",
    firstFlag: "Pakistan’s first national flag was hoisted on 14 August 1947 at the Governor-General House in Karachi.",
    firstPM: "Liaquat Ali Khan was the first Prime Minister of Pakistan, serving from 1947 until his assassination in 1951.",
    languageDecision: "Urdu was declared the national language of Pakistan in 1948, though Bengali was also an official language until 1971.",
    firstCapital: "Karachi was the first capital city of Pakistan before the capital was moved to Islamabad in 1967.",
    firstOlympics: "Pakistan participated in its first Olympic Games in 1948, just one year after independence.",
    nuclearStatus: "Pakistan became the first Muslim-majority country to develop nuclear weapons in 1998.",
    nationalAnthem: "Pakistan’s national anthem, ‘Qaumi Tarana’, was officially adopted in 1954 and composed by Hafeez Jullundhri."
};
function showRandomHistoryFact() {
    let factKeys = Object.keys(historyFacts);
    let randomKey = factKeys[Math.floor(Math.random() * factKeys.length)];
    addBotMessage(historyFacts[randomKey]);
}





// Chat state
let quizActive = false;
let currentQuizQuestion = 0;
let quizScore = 0;
let voiceRecognitionActive = false;
let recognition;

// Initialize voice recognition
function initVoiceRecognition() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!window.SpeechRecognition) {
        addBotMessage("Sorry, your browser doesn't support voice recognition. Please try Chrome or Edge.");
        return false;
    }

    recognition = new window.SpeechRecognition();
    recognition.interimResults = false;
    recognition.lang = 'en-PK';

    recognition.onstart = function () {
        document.getElementById('voiceBtn').classList.add('listening');
        addBotMessage("I'm listening... Please speak now.");
    };

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('userInput').value = transcript;
        sendMessage(transcript);
    };

    recognition.onerror = function (event) {
        console.error('Speech recognition error', event.error);
        addBotMessage("Sorry, I didn't catch that. Please try again.");
        stopVoiceRecognition();
    };

    recognition.onend = function () {
        stopVoiceRecognition();
    };

    return true;
}
// Function to show creator info


// Toggle voice recognition
function toggleVoiceRecognition() {
    if (voiceRecognitionActive) {
        stopVoiceRecognition();
    } else {
        if (initVoiceRecognition()) {
            recognition.start();
            voiceRecognitionActive = true;
        }
    }
}

function stopVoiceRecognition() {
    if (recognition) {
        recognition.stop();
    }
    voiceRecognitionActive = false;
    document.getElementById('voiceBtn').classList.remove('listening');
}

// Add message to chat
function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg ${sender === 'user' ? 'user-bubble ml-auto' : 'bot-bubble mr-auto'}`;

    // Check if text contains Urdu for special styling
    const containsUrdu = /[\u0600-\u06FF]/.test(text);
    if (containsUrdu) {
        messageDiv.classList.add('urdu-text');
    }

    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Speak the message if from bot
    if (sender === 'bot') {
        speak(text);
    }
}

function addBotMessage(text) {
    addMessage(text, 'bot');
}

function addUserMessage(text) {
    addMessage(text, 'user');
}

// Text-to-speech function
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-PK'; // English with Pakistani accent if available
        window.speechSynthesis.speak(utterance);
    }
}

// Send message handler
function sendMessage(messageText = null) {
    let message = messageText || document.getElementById('userInput').value.trim();

    if (!message) return;

    addUserMessage(message);
    document.getElementById('userInput').value = '';

    // Process the message
    const lowerMsg = message.toLowerCase();

    if (quizActive) {
        return; // Don't process other commands while quiz is active
    }

    if (lowerMsg.includes('voice') || lowerMsg.includes('speak')) {
        toggleVoiceRecognition();
    }
    else if (lowerMsg.includes('quiz')) {
        startQuiz();
    }
    else if (lowerMsg.includes('quote') || lowerMsg.includes('quaid')) {
        getQuote();
    }
    else if (lowerMsg.includes('shayari') || lowerMsg.includes('poem') || lowerMsg.includes('poetry')) {
        getShayari();
    }
    else if (lowerMsg.includes('history') || lowerMsg.includes('1947') || lowerMsg.includes('independence')) {
        getHistory();
    }
    else if (lowerMsg.includes('creator') || lowerMsg.includes('developer') || lowerMsg.includes('owner')) {
        showCreatorInfo();
    }
    else {
        // Default response
        setTimeout(() => {
            addBotMessage("How can I help you with Pakistan Independence Day? You can ask me about history, get quotes from Quaid-e-Azam, enjoy patriotic shayari, or take our Azaadi quiz!");
        }, 800);
    }
}

// Quiz functions
function startQuiz() {
    quizActive = true;
    quizScore = 0;
    currentQuizQuestion = 0;
    document.getElementById('quizScore').textContent = `Score: ${quizScore}`;
    showQuizQuestion();
    document.getElementById('quizModal').classList.remove('hidden');
    addBotMessage("Starting Azaadi Quiz! Answer the questions on the screen.");
}

function showQuizQuestion() {
    const question = quizQuestions[currentQuizQuestion];
    document.getElementById('quizQuestion').textContent = question.question;

    // ✅ Show question number and remaining
    document.getElementById('quizProgress').textContent =
        `Question ${currentQuizQuestion + 1} / ${quizQuestions.length}`;

    const optionsDiv = document.getElementById('quizOptions');
    optionsDiv.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'w-full text-left px-4 py-2 bg-green-50 hover:bg-green-100 rounded-lg';
        optionBtn.textContent = `${index + 1}. ${option}`;
        optionBtn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(optionBtn);
    });

    document.getElementById('nextQuestionBtn').style.display = 'none';
    document.getElementById('endQuizBtn').style.display = 'block'; // ✅ Show End Quiz button
}

function checkAnswer(selectedIndex) {
    document.querySelectorAll('#quizOptions button').forEach(btn => {
        btn.disabled = true;
    });

    const question = quizQuestions[currentQuizQuestion];
    const isCorrect = selectedIndex === question.answer;

    if (isCorrect) {
        quizScore++;
        document.getElementById('quizScore').textContent = `Score: ${quizScore}`;
        document.querySelectorAll('#quizOptions button')[selectedIndex].className += ' bg-green-100 border-2 border-green-500';
        speak("Correct answer!");
    } else {
        document.querySelectorAll('#quizOptions button')[selectedIndex].className += ' bg-red-100 border-2 border-red-500';
        document.querySelectorAll('#quizOptions button')[question.answer].className += ' bg-green-100 border-2 border-green-500';
        speak("Sorry, that's not correct.");
    }

    document.getElementById('nextQuestionBtn').style.display = 'block';
}

function nextQuestion() {
    currentQuizQuestion++;

    if (currentQuizQuestion < quizQuestions.length) {
        showQuizQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizActive = false;
    document.getElementById('quizModal').classList.add('hidden');

    let message;
    if (quizScore === quizQuestions.length) {
        message = `Perfect score! ${quizScore}/${quizQuestions.length}. Pakistan Zindabad!`;
    } else if (quizScore >= quizQuestions.length / 2) {
        message = `Good job! You scored ${quizScore}/${quizQuestions.length}.`;
    } else {
        message = `You scored ${quizScore}/${quizQuestions.length}. Try again to improve your knowledge!`;
    }

    addBotMessage(message);
    speak(message);
}


// Quote functions
function getQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteMessage =
        `🌟 *Quote of the Moment* 🌟\n\n` +
        `🇵🇰 "${randomQuote.urdu}"\n\n` +
        `📝 "${randomQuote.english}"\n\n` +
        `👤 - ${randomQuote.source}`;
    addBotMessage(quoteMessage);
}
function handleUserMessage(message) {
    let input = message.toLowerCase();

    // Handle 'quote' with variations
    if (input.includes("quote") || input.includes("quotes") || input.includes("qoute") || input.includes("qotes")) {
        getQuote();
    }
    else {
        addBotMessage("How can I help you?");
    }
}


// Shayari functions
function getShayari() {
    const randomShayari = shayari[Math.floor(Math.random() * shayari.length)];
    const shayariMessage = `"${randomShayari.urdu}"\n\n"${randomShayari.english}"`;
    addBotMessage(shayariMessage);
}

// History functions
function getHistory() {
    let response = `Here's some information about Pakistan's Independence:\n\n`;

    const creationPara = historyFacts.creation.split('. ')[0] + '.';
    response += `- ${creationPara}\n\n`;
    response += `- ${historyFacts.firstDay}\n\n`;
    response += `Learn more by asking specific questions.`;

    addBotMessage(response);
}

// Initialize the chat with welcome message
window.onload = function () {
    setTimeout(() => {
        addBotMessage("Pakistan Azaadi Mubarak! Ask me about Independence Day history, quotes from Quaid-e-Azam, patriotic shayari, or take our quiz!");
    }, 1000);

    // Allow pressing Enter to send message
    document.getElementById('userInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Function to show random quote (for other parts of the page)
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    document.getElementById("quote-urdu").innerText = quote.urdu;
    document.getElementById("quote-english").innerText = quote.english;
    document.getElementById("quote-source").innerText = "- " + quote.source;
}

// Auto-correct function
function autoCorrect(input) {
    const corrections = {
        "shyri": "shayari",
        "shyary": "shayari",
        "quize": "quiz",
        "qoute": "quote",
        "quot": "quote",
        "histroy": "history",
        "histori": "history"
    };

    let words = input.split(" ");
    let correctedWords = words.map(word => {
        let lower = word.toLowerCase();
        return corrections[lower] || word;
    });

    return correctedWords.join(" ");
}
function processUserMessage(message) {
    message = autoCorrect(message); // Auto-correct first
    appendMessage("You", message);

    if (message.toLowerCase().includes("shayari")) {
        getShayari();
    } else if (message.toLowerCase().includes("quiz")) {
        startQuiz();
    } else if (message.toLowerCase().includes("quote")) {
        showRandomQuote();
    } else if (message.toLowerCase().includes("history")) {
        showRandomHistoryFact();
    } else {
        addBotMessage("Sorry, I didn't understand that.");
    }
}


// Function to show creator info
function showCreatorInfo() {
    const creatorMessage =
        "👩‍💻 *Creator Info* 👩‍💻\n\n" +
        "Name: **Zainab Abbasi**\n" +
        "Degree: **Bachelor’s in IT (GC University)**\n" +
        "Year: **Third Year, Second Semester**\n" +
        "Project: **AI Course Class**";

    addBotMessage(creatorMessage);
}

// Add click event to button
document.getElementById("creatorBtn").addEventListener("click", showCreatorInfo);
