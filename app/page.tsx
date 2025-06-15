"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { useLanguage } from "./context/LanguageContext";

const SplineModel = dynamic(() => import('./components/SplineModel'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
    </div>
  ),
});

const ThemeToggle = dynamic(() => import("./components/ThemeToggle"), {
  ssr: false,
});

const LanguageSwitcher = dynamic(() => import("./components/LanguageSwitcher"), {
  ssr: false,
});

const LandingPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-display font-bold text-teal-600 dark:text-teal-400">LokSwasthya</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium">
                {t('nav.home')}
              </Link>
              <Link href="/voice-assistant" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium">
                {t('nav.voiceAssistant')}
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium">
                {t('nav.aboutUs')}
              </Link>
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6"
          >
              {t('hero.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              {t('hero.subtitle')}
            </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/voice-assistant"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors"
              >
                {t('hero.tryButton')}
              </Link>
            </motion.div>
            </div>
            </div>
      </section>

      {/* 3D Model Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[600px] w-full">
            <SplineModel />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-teal-600 dark:bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            {t('accessibility.callToAction.title')}
          </h2>
          <p className="text-xl mb-8">
            {t('accessibility.callToAction.description')}
          </p>
          <a 
            href="tel:09513886363"
            className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50 dark:bg-gray-800 dark:text-teal-400 dark:hover:bg-gray-700 transition-colors shadow-lg"
          >
            <i className="fas fa-phone-alt mr-3"></i>
            {t('accessibility.callToAction.callNow')} 09513886363
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">{t('features.title')}</h2>

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-14 column-gap-15">
            <div>
              <FeatureCard 
                title={t('features.symptomCheck.title')}
                description={t('features.symptomCheck.description')}
                icon="🎤"
              />
            </div>
            <div>
              <FeatureCard 
                title={t('features.homeCareAdvice.title')}
                description={t('features.homeCareAdvice.description')}
                icon="🏠"
              />
            </div>
            <div>
              <FeatureCard 
                title={t('features.healthEducation.title')}
                description={t('features.healthEducation.description')}
                icon="📚"
              />
            </div>
            <div>
              <FeatureCard
                title={t('features.mentalHealthSupport.title')}
                description={t('features.mentalHealthSupport.description')}
                icon="🧠"
              />
            </div>

          </div>
        </div>
      </section>

    

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-display font-bold text-teal-600 dark:text-teal-400 mb-4">LokSwasthya</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('about.description')}
              </p>
              <p className="text-gray-500 dark:text-gray-400">{t('footer.copyright')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    {t('footer.home')}
                  </Link>
                </li>
                <li>
                  <Link href="/voice-assistant" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    {t('footer.voiceAssistant')}
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    {t('footer.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    {t('footer.contactUs')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('footer.contactInfo')}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><strong>{t('footer.email')}</strong> {t('footer.emailAddress')}</li>
                <li><strong>{t('footer.phone')}</strong> {t('footer.phoneNumber')}</li>
                <li><strong>{t('footer.address')}</strong> {t('footer.fullAddress')}</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">{t('footer.followUs')}</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 md:mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
          <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-shadow duration-300 relative flex flex-col justify-between"
      style={{
        minHeight: '280px',
        minWidth: '420px',
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>

      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-5 overflow-hidden">{description}</p>
    </motion.div>

  );
};

export default LandingPage;
