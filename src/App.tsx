import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users, 
  Award,
  ArrowRight,
  DollarSign,
  BarChart3,
  Lock,
  FileText,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      text: "Grâce à ce diagnostic, j'ai enfin compris pourquoi ma trésorerie fluctuait constamment. Maintenant, j'ai une vision claire et un plan précis pour mon entreprise.",
      name: "Alexandre M.",
      title: "Consultant Marketing",
      initials: "AM"
    },
    {
      text: "Je ne savais pas par où commencer. Cet outil m'a donné exactement les étapes dont j'avais besoin pour sécuriser mes finances et envisager l'avenir sereinement.",
      name: "Stéphanie L.",
      title: "Coach en développement personnel",
      initials: "SL"
    },
    {
      text: "Le rapport m'a ouvert les yeux sur des opportunités d'optimisation fiscale que j'ignorais complètement. J'ai économisé des milliers de dollars dès la première année.",
      name: "Marc-André T.",
      title: "Développeur web freelance",
      initials: "MT"
    },
    {
      text: "Enfin un outil qui parle notre langue d'entrepreneur ! Les recommandations sont concrètes et applicables immédiatement.",
      name: "Julie R.",
      title: "Propriétaire d'agence créative",
      initials: "JR"
    },
    {
      text: "J'ai pu identifier mes points faibles en gestion financière et mettre en place des systèmes qui ont stabilisé ma croissance.",
      name: "François D.",
      title: "Consultant en stratégie",
      initials: "FD"
    },
    {
      text: "Ce diagnostic m'a fait réaliser l'importance d'une planification financière structurée. Mon entreprise est maintenant sur des bases solides.",
      name: "Catherine B.",
      title: "Formatrice professionnelle",
      initials: "CB"
    }
  ];

  const faqItems = [
    {
      question: "Pourquoi devrais-je utiliser ce diagnostic ?",
      answer: "Ce diagnostic vous donne une vue d'ensemble instantanée de votre santé financière et identifie précisément les domaines à améliorer pour optimiser votre croissance et stabiliser votre trésorerie."
    },
    {
      question: "Qu'arrive-t-il après que j'aie complété le diagnostic ?",
      answer: "Vous recevrez immédiatement votre rapport personnalisé par courriel avec des recommandations spécifiques. Vous aurez également la possibilité de planifier une consultation gratuite pour approfondir les résultats."
    },
    {
      question: "À qui s'adresse exactement cet outil ?",
      answer: "Cet outil est conçu spécifiquement pour les entrepreneurs et travailleurs autonomes au Québec qui veulent améliorer leur gestion financière et prendre des décisions éclairées pour leur croissance."
    },
    {
      question: "Combien de temps prend le diagnostic ?",
      answer: "Le questionnaire ne prend que 5 à 7 minutes à compléter. Vous recevez votre rapport personnalisé immédiatement après avoir terminé."
    },
    {
      question: "Mes informations sont-elles sécurisées ?",
      answer: "Absolument. Toutes vos informations sont cryptées et sécurisées. Nous ne partageons jamais vos données avec des tiers et vous pouvez demander leur suppression à tout moment."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0f4347] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>FinanceProQC</span>
            </div>
            <button className="bg-[#0f4347] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0a2d30] transition-colors">
              Diagnostic Gratuit
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Obtenez une image claire de la{' '}
                  <span className="text-[#0f4347]">
                    santé financière
                  </span>{' '}
                  de votre entreprise en{' '}
                  <span className="text-orange-500">5 minutes chrono !</span>
                </h1>
                
                <p className="text-2xl text-gray-600 leading-relaxed font-medium">
                  Vous êtes entrepreneur ou travailleur autonome au Québec et vous souhaitez reprendre le contrôle de vos finances? Ce diagnostic gratuit vous révèle instantanément vos points forts, vos risques et vos meilleures opportunités financières.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#0f4347] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0a2d30] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>👉 Évaluez votre santé financière gratuitement</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>5 minutes seulement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>100% gratuit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span>Confidentiel</span>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="relative">
                {/* 8.5x11 Paper Proportions (aspect ratio 1:1.294) */}
                <div className="bg-white rounded-lg shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300" style={{aspectRatio: '8.5/11', maxWidth: '320px', margin: '0 auto'}}>
                  <div className="space-y-4 h-full flex flex-col">
                    <div className="text-center border-b pb-3">
                      <h3 className="text-sm font-bold text-gray-800 mb-2">Rapport de Santé Financière</h3>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-xs font-medium text-gray-500">Score Global</span>
                        <span className="text-2xl font-black text-[#0f4347]">87/100</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-gradient-to-r from-[#0f4347] to-orange-500 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 flex-1">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-gray-700">Gestion de la trésorerie</div>
                          <div className="text-xs font-medium text-gray-500 mt-1">Recommandations:</div>
                          <div className="text-xs text-gray-400 blur-sm leading-tight">
                            Optimisez vos délais de paiement<br/>
                            Mettez en place une réserve<br/>
                            Automatisez vos suivis
                          </div>
                        </div>
                        <div className="text-lg font-bold text-orange-600">72</div>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-gray-700">Budget & Planification</div>
                          <div className="text-xs font-medium text-gray-500 mt-1">Recommandations:</div>
                          <div className="text-xs text-gray-400 blur-sm leading-tight">
                            Excellent travail, continuez<br/>
                            Ajustez vos prévisions<br/>
                            Planifiez vos investissements
                          </div>
                        </div>
                        <div className="text-lg font-bold text-[#0f4347]">95</div>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-gray-700">Fiscalité & rémunération</div>
                          <div className="text-xs font-medium text-gray-500 mt-1">Recommandations:</div>
                          <div className="text-xs text-gray-400 blur-sm leading-tight">
                            Optimisez votre structure<br/>
                            Planifiez vos cotisations<br/>
                            Consultez un fiscaliste
                          </div>
                        </div>
                        <div className="text-lg font-bold text-orange-600">83</div>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-gray-700">Systèmes & visibilité</div>
                          <div className="text-xs font-medium text-gray-500 mt-1">Recommandations:</div>
                          <div className="text-xs text-gray-400 blur-sm leading-tight">
                            Très bon système en place<br/>
                            Automatisez davantage<br/>
                            Tableaux de bord avancés
                          </div>
                        </div>
                        <div className="text-lg font-bold text-[#0f4347]">91</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Pourquoi utiliser ce diagnostic ?
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              Découvrez comment notre évaluation peut transformer votre approche financière
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0f4347]/5 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#0f4347] rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ✅ Comprenez vos finances en quelques clics
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Évaluez votre gestion du cash-flow, votre stratégie d'investissement et vos processus budgétaires en toute simplicité.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ✅ Identifiez immédiatement vos points à améliorer
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Recevez un diagnostic rapide pour cibler précisément les aspects à renforcer dès aujourd'hui.
              </p>
            </div>

            <div className="bg-[#0f4347]/5 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#0f4347] rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ✅ Prenez des décisions stratégiques éclairées
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Obtenez des recommandations pratiques et personnalisées pour diminuer les fluctuations de trésorerie et soutenir une croissance durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Automated Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Ce que disent nos clients
            </h2>
            <p className="text-2xl text-gray-600 font-medium">
              Des entrepreneurs qui ont transformé leur gestion financière
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow min-h-[200px] flex items-center">
              <div className="flex items-start space-x-4 w-full">
                <div className="text-4xl">💬</div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#0f4347] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonials[currentTestimonial].initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-gray-500">{testimonials[currentTestimonial].title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[#0f4347]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Fonctionnement du diagnostic
            </h2>
            <p className="text-2xl text-gray-600 font-medium">
              3 étapes simples pour transformer votre gestion financière
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#0f4347] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    1️⃣ Évaluez votre situation actuelle
                  </h3>
                </div>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Complétez un questionnaire simple et interactif (5-7 minutes seulement).
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-[#0f4347]/5 rounded-2xl p-8">
                  <FileText className="w-16 h-16 text-[#0f4347] mx-auto" />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    2️⃣ Obtenez votre rapport personnalisé
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 text-xl leading-relaxed">
                    Découvrez instantanément votre score global de santé financière avec des résultats détaillés sur chaque aspect essentiel :
                  </p>
                  <ul className="space-y-2 text-gray-600 text-lg">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#0f4347]" />
                      <span>Flux de trésorerie & Stabilité</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#0f4347]" />
                      <span>Budget, Tarification & Rentabilité</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#0f4347]" />
                      <span>Taxes & Conformité (Québec)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#0f4347]" />
                      <span>Systèmes Financiers & Visibilité</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#0f4347]" />
                      <span>Croissance & Finance stratégique</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-orange-50 rounded-2xl p-8">
                  <BarChart3 className="w-16 h-16 text-orange-600 mx-auto" />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#0f4347] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    3️⃣ Passez immédiatement à l'action
                  </h3>
                </div>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Recevez des recommandations pratiques adaptées à vos réponses, pour prendre immédiatement les bonnes décisions.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-[#0f4347]/5 rounded-2xl p-8">
                  <TrendingUp className="w-16 h-16 text-[#0f4347] mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <div className="relative">
                  <div className="w-64 h-64 bg-[#0f4347]/10 rounded-2xl mx-auto flex items-center justify-center">
                    <Users className="w-32 h-32 text-[#0f4347]" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#0f4347] rounded-full flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 space-y-6">
                <div>
                  <h2 className="text-4xl font-black text-gray-900 mb-4">
                    👨‍💼 Votre expert en finances entrepreneuriales : John Smith, CFA
                  </h2>
                  <p className="text-2xl text-gray-600 mb-6 font-medium">
                    Expert reconnu en gestion financière stratégique pour PME au Québec.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-[#0f4347]" />
                    <span className="text-gray-700 text-lg">Partenaire de CPA pour des stratégies complètes et optimales</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                    <span className="text-gray-700 text-lg">Plus de 10 ans d'expérience en accompagnement stratégique auprès d'entreprises en ligne et de travailleurs autonomes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#0f4347]/5 rounded-3xl p-12">
            <div className="w-20 h-20 bg-[#0f4347] rounded-full flex items-center justify-center mx-auto mb-8">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6">
              🔒 100 % Gratuit et confidentiel
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed font-medium">
              "Vos informations sont sécurisées, et votre rapport personnalisé est livré directement à votre boîte courriel."
            </p>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-20 bg-[#0f4347]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-8">
            Prêt à reprendre le contrôle de vos finances ?
          </h2>
          <button className="bg-white text-[#0f4347] px-12 py-4 rounded-xl font-bold text-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-3 mx-auto">
            <span>👉 Oui, je veux mon rapport personnalisé</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* FAQ Section - Functional Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Ne laissez plus vos finances au hasard
          </h2>
          <p className="text-2xl text-gray-300 mb-10 font-medium">
            Rejoignez des centaines d'entrepreneurs qui ont transformé leur gestion financière
          </p>
          <button className="bg-orange-600 text-white px-12 py-4 rounded-xl font-bold text-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-3 mx-auto">
            <span>👉 Je m'inscris à l'évaluation gratuite maintenant</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-[#0f4347] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">FinanceProQC</span>
            </div>
            <div className="text-gray-400">
              © 2024 FinanceProQC. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;