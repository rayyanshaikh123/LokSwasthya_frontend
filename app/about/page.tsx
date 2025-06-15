"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-display font-bold text-teal-600 dark:text-teal-400">
                LokSwasthya
              </Link>
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
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-8"
            >
              {t('about.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              {t('about.description')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-4">{t('about.missionTitle')}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t('about.missionDescription')}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-4">{t('about.visionTitle')}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t('about.visionDescription')}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-4">{t('about.teamTitle')}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t('about.teamDescription')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 py-12">
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
                  <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
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

export default AboutPage; 