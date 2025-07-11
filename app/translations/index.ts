export type Language = 'en' | 'hi';

export type TranslationContent = string | { [key: string]: TranslationContent };

export type TranslationKeys = {
  nav: {
    home: string;
    voiceAssistant: string;
    aboutUs: string;
    backToHome: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tryButton: string;
  };
  features: {
    title: string;
    voiceInteraction: TranslationContent; 
    instantAnswers: TranslationContent;
    availability: TranslationContent;
    symptomCheck: TranslationContent;
    homeCareAdvice: TranslationContent;
    healthEducation: TranslationContent;
    mentalHealthSupport: TranslationContent;
  };
  about: TranslationContent;
  footer: TranslationContent;
  voiceAssistant: TranslationContent & { 
    title: string;
    subtitle: string;
    startButton: string;
    disconnectButton: string;
    connecting: string;
    listening: string;
    processing: string;
    speaking: string;
    error: string;
    noAgent: string;
    inputPlaceholder: string; 
    inputAriaLabel: string; 
  };
  accessibility: TranslationContent;
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      home: 'Home',
      voiceAssistant: 'Voice Assistant',
      aboutUs: 'About Us',
      backToHome: 'Back to Home',
    },
    hero: {
      title: 'Your AI Health Assistant',
      subtitle: 'Get instant answers to your health questions, powered by advanced AI technology.',
      tryButton: 'Try Voice Assistant',
    },
    features: {
      title: 'Key Features',
      voiceInteraction: {
        title: 'Voice Interaction',
        description: 'Speak naturally with our AI assistant in multiple languages.',
      },
      instantAnswers: {
        title: 'Instant Answers',
        description: 'Get immediate responses to your health-related questions.',
      },
      availability: {
        title: '24/7 Availability',
        description: 'Access health information anytime, anywhere.',
      },
      symptomCheck: {
        title: 'Symptom Check',
        description: 'Users describe their symptoms in their local language by speaking or typing. AI analyzes the input, asks relevant follow-up questions, and categorizes the case into three levels: acute (like, pain in the chest), immediate (immediate doctor\'s need), or mild (self-manageable). This feature is both voice-first and location-specific, making it similar to commercial bots but tailored for rural usage.',
      },
      homeCareAdvice: {
        title: 'Home Care Advice',
        description: 'For mild cases, the app suggests over-the-counter (OTC) medications and instructions. For example, it may suggest paracetamol, hydration, and rest for a headache. Advice is provided in simple text and audio in the user\'s language. This ensures accessibility for low-literacy users and supports self-care without immediate medical assistance.',
      },
      healthEducation: {
        title: 'Health Education',
        description: 'The app provides offline audio/video modules on key health topics such as hygiene, nutrition, maternal health, vaccination, and prevention of old age diseases. These are designed with local language descriptions, images, and simple explanations. Additionally, it sends periodic SMS reminders for vaccination, medicine, or follow-up care, supports continuous learning, and facilitates behavioral change.',
      },
      mentalHealthSupport: {
        title: 'Mental Health Support',
        description: 'Users can express their feelings through voice or text journaling. AI provides tips to counterbalance, breathing exercises, and mental health support based on the input. Regular "mood check-in" small stress and anxiety screening tools are used. Based on the user\'s condition, it may suggest mindfulness meditation or book a consultation session through voice appointment, ensuring priority for emotional care.',
      },
    },
    about: {
      title: 'About LokSwasthya',
      description: 'LokSwasthya is an AI-powered health assistant designed to provide accessible healthcare information to everyone. Our mission is to make healthcare information more accessible and understandable through advanced technology.',
      missionTitle: 'Our Mission',
      missionDescription: 'Our mission is to empower individuals with accessible, reliable, and personalized health information, fostering a healthier and more informed community.',
      visionTitle: 'Our Vision',
      visionDescription: 'To be the leading AI health platform that transforms how people manage their well-being, making quality health guidance universally available.',
      teamTitle: 'Our Team',
      teamDescription: 'We are a dedicated team of healthcare professionals, AI specialists, and developers committed to leveraging technology for public health.',
    },
    footer: {
      copyright: '© 2024 LokSwasthya. All rights reserved.',
      quickLinks: 'Quick Links',
      home: 'Home',
      voiceAssistant: 'Voice Assistant',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      contactInfo: 'Contact Info',
      email: 'Email:',
      phone: 'Phone:',
      address: 'Address:',
      emailAddress: 'info@lokswasthya.com',
      phoneNumber: '09513886363',
      fullAddress: '123 Healthway, Wellness City, India',
      followUs: 'Follow Us',
    },
    voiceAssistant: {
      title: 'Start Your Health Journey',
      subtitle: 'Connect with our AI health assistant to receive personalized guidance and support.',
      startButton: 'Start a Conversation',
      disconnectButton: 'Disconnect',
      connecting: 'Connecting...',
      listening: 'Listening...',
      processing: 'Processing...',
      speaking: 'Speaking...',
      error: 'Error occurred. Please try again.',
      noAgent: 'No agent available at the moment. Please try again later.',
      inputPlaceholder: 'Enter your message...',
      inputAriaLabel: 'Enter your message',
    },
    accessibility: {
      language: 'Language',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      callToAction: {
        title: 'Need Immediate Assistance?',
        description: 'Call our health agent directly for quick support.',
        callNow: 'Call Now',
      },
    },
  },
  hi: {
    nav: {
      home: 'होम',
      voiceAssistant: 'वॉइस असिस्टेंट',
      aboutUs: 'हमारे बारे में',
      backToHome: 'होम पर वापस जाएं',
    },
    hero: {
      title: 'आपका AI स्वास्थ्य सहायक',
      subtitle: 'उन्नत AI तकनीक द्वारा संचालित, अपने स्वास्थ्य प्रश्नों के तुरंत उत्तर प्राप्त करें।',
      tryButton: 'वॉइस असिस्टेंट आज़माएं',
    },
    features: {
      title: 'मुख्य विशेषताएं',
      voiceInteraction: {
        title: 'वॉइस इंटरैक्शन',
        description: 'हमारे AI सहायक के साथ कई भाषाओं में स्वाभाविक रूप से बात करें।',
      },
      instantAnswers: {
        title: 'तुरंत उत्तर',
        description: 'अपने स्वास्थ्य संबंधित प्रश्नों के तुरंत उत्तर प्राप्त करें।',
      },
      availability: {
        title: '24/7 उपलब्धता',
        description: 'किसी भी समय, कहीं से भी स्वास्थ्य जानकारी प्राप्त करें।',
      },
      symptomCheck: {
        title: 'लक्षण जांच',
        description: 'उपयोगकर्ता अपने लक्षणों को अपनी स्थानीय भाषा में बोलकर या टाइप करके वर्णन करते हैं। AI इनपुट का विश्लेषण करता है, प्रासंगिक अनुवर्ती प्रश्न पूछता है, और मामले को तीन स्तरों में वर्गीकृत करता है: आपातकालीन (जैसे, छाती में दर्द), तत्काल (जल्द ही डॉक्टर की आवश्यकता), या हल्का (स्व-प्रबंधनीय)। यह सुविधा वॉइस-फर्स्ट और स्थानीयकृत है, जो इसे वाणिज्यिक बॉट्स के समान बनाती है लेकिन ग्रामीण उपयोग के लिए अनुकूलित है।',
      },
      homeCareAdvice: {
        title: 'घरेलू देखभाल सलाह',
        description: 'हल्के मामलों के लिए, ऐप घरेलू उपचार और ओवर-द-काउंटर (OTC) दवाओं की सिफारिश करता है, खुराक निर्देशों के साथ। उदाहरण के लिए, बुखार के लिए यह पैरासिटामोल, हाइड्रेशन और आराम का सुझाव दे सकता है। सलाह उपयोगकर्ता की भाषा में सरल पाठ और ऑडियो में दी जाती है। यह कम साक्षरता वाले उपयोगकर्ताओं के लिए पहुंच सुनिश्चित करता है और तत्काल नैदानिक सहायता की आवश्यकता के बिना सुरक्षित स्व-देखभाल का समर्थन करता है।',
      },
      healthEducation: {
        title: 'स्वास्थ्य शिक्षा',
        description: 'ऐप स्वच्छता, पोषण, मातृत्व देखभाल, टीकाकरण और पुरानी बीमारी की रोकथाम जैसे प्रमुख स्वास्थ्य विषयों पर ऑफलाइन ऑडियो/वीडियो मॉड्यूल प्रदान करता है। इन्हें स्थानीय भाषा के वर्णन, चित्रों और सरल व्याख्याओं के साथ डिज़ाइन किया गया है। इसके अतिरिक्त, यह टीकाकरण, दवा या अनुवर्ती देखभाल के लिए आवधिक एसएमएस रिमाइंडर भेजता है, निरंतर सीखने और व्यवहार परिवर्तन का समर्थन करता है।',
      },
      mentalHealthSupport: {
        title: 'मानसिक स्वास्थ्य सहायता',
        description: 'उपयोगकर्ता वॉइस या टेक्स्ट जर्नलिंग के माध्यम से भावनाओं को व्यक्त कर सकते हैं। AI इनपुट के आधार पर मुकाबला करने के टिप्स, श्वास व्यायाम और मानसिक स्वास्थ्य सहायता प्रदान करता है। नियमित "मूड चेक-इन" छोटे तनाव और चिंता स्क्रीनिंग टूल का उपयोग करते हैं। उपयोगकर्ता की स्थिति के आधार पर, यह माइंडफुलनेस रूटीन का सुझाव दे सकता है या वॉइस अपॉइंटमेंट के माध्यम से परामर्श सत्र बुक करने की पेशकश कर सकता है, यह सुनिश्चित करता है कि भावनात्मक देखभाल को भी प्राथमिकता दी जाए।',
      },
    },
    about: {
      title: 'लोकस्वास्थ्य के बारे',
      description: 'लोकस्वास्थ्य एक AI-संचालित स्वास्थ्य सहायक है जो सभी को सुलभ स्वास्थ्य देखभाल जानकारी प्रदान करने के लिए डिज़ाइन किया गया है। हमारा मिशन उन्नत तकनीक के माध्यम से स्वास्थ्य जानकारी को अधिक सुलभ और समझने योग्य बनाना है।',
      missionTitle: 'हमारा मिशन',
      missionDescription: 'हमारा मिशन सुलभ, विश्वसनीय और व्यक्तिगत स्वास्थ्य जानकारी के साथ व्यक्तियों को सशक्त बनाना है, जिससे एक स्वस्थ और अधिक सूचित समुदाय का विकास हो।',
      visionTitle: 'हमारा दृष्टिकोण',
      visionDescription: 'लोगों के स्वास्थ्य प्रबंधन के तरीके को बदलने वाला अग्रणी AI स्वास्थ्य मंच बनना, गुणवत्तापूर्ण स्वास्थ्य मार्गदर्शन को सार्वभौमिक रूप से उपलब्ध कराना।',
      teamTitle: 'हमारी टीम',
      teamDescription: 'हम स्वास्थ्य पेशेवरों, AI विशेषज्ञों और डेवलपर्स की एक समर्पित टीम हैं जो सार्वजनिक स्वास्थ्य के लिए प्रौद्योगिकी का लाभ उठाने के लिए प्रतिबद्ध हैं।',
    },
    footer: {
      copyright: '© 2024 लोकस्वास्थ्य। सर्वाधिकार सुरक्षित।',
      quickLinks: 'त्वरित लिंक',
      home: 'होम',
      voiceAssistant: 'वॉइस असिस्टेंट',
      aboutUs: 'हमारे बारे में',
      contactUs: 'संपर्क करें',
      contactInfo: 'संपर्क जानकारी',
      email: 'ईमेल:',
      phone: 'फोन:',
      address: 'पता:',
      emailAddress: 'info@lokswasthya.com',
      phoneNumber: '09513886363',
      fullAddress: '123 हेल्थवे, वेलनेस सिटी, भारत',
      followUs: 'हमें फॉलो करें',
    },
    voiceAssistant: {
      title: 'अपनी स्वास्थ्य यात्रा शुरू करें',
      subtitle: 'व्यक्तिगत मार्गदर्शन और सहायता प्राप्त करने के लिए हमारे AI स्वास्थ्य सहायक से जुड़ें।',
      startButton: 'बातचीत शुरू करें',
      disconnectButton: 'डिस्कनेक्ट करें',
      connecting: 'कनेक्ट हो रहा है...',
      listening: 'सुन रहा है...',
      processing: 'प्रोसेसिंग...',
      speaking: 'बोल रहा है...',
      error: 'त्रुटि हुई। कृपया पुनः प्रयास करें।',
      noAgent: 'वर्तमान में कोई एजेंट उपलब्ध नहीं है। कृपया बाद में पुनः प्रयास करें।',
      inputPlaceholder: 'Enter your message...',
      inputAriaLabel: 'Enter your message',
    },
    accessibility: {
      language: 'भाषा',
      theme: 'थीम',
      light: 'लाइट',
      dark: 'डार्क',
      callToAction: {
        title: 'तत्काल सहायता चाहिए?',
        description: 'त्वरित सहायता के लिए सीधे हमारे स्वास्थ्य एजेंट को कॉल करें।',
        callNow: 'अभी कॉल करें',
      },
    },
  },
}; 