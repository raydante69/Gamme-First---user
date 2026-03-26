import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft,
  ShieldCheck, 
  Smartphone, 
  Settings, 
  LayoutGrid, 
  FileText,
  Users,
  ShoppingCart,
  PlusCircle,
  BookOpen,
  PlayCircle,
  ArrowUpRight,
  ArrowUp,
  ArrowRight
} from 'lucide-react';
import Header from './components/Header';

type Page = 'home' | 'legal' | 'ventes1' | 'ventes2' | 'mobilite';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    setHasNavigated(true);
    setCurrentPage(page);
  };

  const renderHome = () => (
    <div className={`relative max-w-5xl mx-auto px-6 pt-48 z-10 ${!hasNavigated ? 'animate-fade-in' : ''}`}>
      {/* Hero Section */}
      <div className="text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-[900] text-black tracking-tighter leading-[0.85] mb-4 inline-block">
              Gamme First
          </h1>
      </div>

      {/* Grid Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-10">
        {/* Module 1: Éligibilité - Large (6 cols) */}
        <div 
          onClick={() => navigateTo('legal')}
          className="lg:col-span-7 bento-card relative bg-myu-teal rounded-[2rem] p-8 min-h-[280px] flex flex-col justify-between cursor-pointer group overflow-hidden"
        >
          <div className="flex justify-between items-start z-10">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
              <ShieldCheck size={28} strokeWidth={2.5} />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-myu-teal shadow-lg transition-all group-hover:rotate-45">
              <ArrowUpRight size={18} strokeWidth={3} />
            </div>
          </div>
          <div className="z-10 mt-10">
            <h2 className="text-3xl font-bold text-black tracking-tighter mb-2 leading-none">
              Éligibilité et cadre légal
            </h2>
            <p className="text-black/70 font-bold text-[11px] uppercase tracking-widest">Maîtriser les enjeux de la RFE</p>
          </div>
        </div>

        {/* Module 2: Ventes 1 - Small (5 cols) */}
        <div 
          onClick={() => navigateTo('ventes1')}
          className="lg:col-span-5 bento-card relative bg-myu-yellow rounded-[2rem] p-8 min-h-[280px] flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 bg-black/5 rounded-xl flex items-center justify-center text-black">
              <LayoutGrid size={28} strokeWidth={2.5} />
            </div>
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white shadow-lg transition-all group-hover:rotate-45">
              <ArrowUpRight size={18} strokeWidth={3} />
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-black tracking-tighter mb-2 leading-none">
              Gestion des flux de vente
            </h2>
            <p className="text-black/40 font-bold text-[11px] uppercase tracking-widest">Émission de factures & paramétrage</p>
          </div>
        </div>

        {/* Module 3: Ventes 2 (Achats) - Small (5 cols) */}
        <div 
          onClick={() => navigateTo('ventes2')}
          className="lg:col-span-5 bento-card relative bg-myu-purple rounded-[2rem] p-8 min-h-[280px] flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white">
              <ShoppingCart size={28} strokeWidth={2.5} />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#000000] shadow-lg transition-all group-hover:rotate-45">
              <ArrowUpRight size={18} strokeWidth={3} />
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-black tracking-tighter mb-2 leading-none">
              Gestion des flux d'achat
            </h2>
            <p className="text-black/60 font-bold text-[11px] uppercase tracking-widest">Réception factures fournisseurs</p>
          </div>
        </div>

        {/* Module 4: Mobilité - Large (7 cols) */}
        <div 
          onClick={() => navigateTo('mobilite')}
          className="lg:col-span-7 bento-card relative bg-myu-red rounded-[2rem] p-8 min-h-[280px] flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white">
              <Smartphone size={28} strokeWidth={2.5} />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#000000] shadow-lg transition-all group-hover:rotate-45">
              <ArrowUpRight size={18} strokeWidth={3} />
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-black tracking-tighter mb-2 leading-none">
              Mobilité & collaboration
            </h2>
            <p className="text-black/60 font-bold text-[11px] uppercase tracking-widest">Application mobile MyUnisoft</p>
          </div>
        </div>
      </div>

      {/* Encart: Envie d'aller plus loin ? */}
      <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 md:p-12 border border-gray-100 shadow-xl mb-24 space-y-10 animate-fade-in">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter leading-none">Envie d'aller plus loin ?</h2>
          <p className="text-lg md:text-xl text-black/70 font-medium leading-relaxed max-w-3xl">
            Envie d’un pilotage plus complet, d’un compte pro intégré ou d’une gestion d’équipe avancée ? Découvrez nos différentes offres juste en dessous
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-50 bg-white">
          <img 
            src="https://www2.myunisoft.fr/outils/o/theo/Myu-guide-user/Capture%20d'%c3%a9cran%202026-02-02%20112003.png" 
            alt="Comparatif des offres MyUnisoft" 
            className="w-full h-auto block"
          />
        </div>
        <div className="flex justify-center pt-4">
          <p 
            className="inline-flex items-center gap-3 text-myu-teal font-black border-b-2 border-myu-teal/30 pb-1 text-lg text-center"
          >
            Pour plus d'information, renseignez-vous auprès de votre expert-comptable
          </p>
        </div>
      </div>
    </div>
  );

  const renderDetail = (title: string, color: string, content: React.ReactNode) => (
    <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 z-10">
      <button 
        onClick={() => setCurrentPage('home')}
        className="mb-10 flex items-center gap-4 text-[10px] font-[900] uppercase tracking-widest text-gray-400 hover:text-black transition-all group"
      >
        <div className="w-8 h-8 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-gray-50">
          <ArrowLeft size={16} />
        </div>
        Retour au guide principal
      </button>

      <div className="space-y-12">
        <div className="flex items-center gap-5">
           <div className="w-2 h-16 rounded-full" style={{ backgroundColor: color }}></div>
           <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-black leading-none">{title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-10">
           {content}
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-gray-100 flex justify-center">
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-3 text-gray-400 hover:text-black transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <ArrowUp size={20} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Retour en haut</span>
        </button>
      </div>
    </div>
  );

  const MockupItem = ({ title, description }: { title: string, description: string }) => (
    <div className="flex flex-col items-center text-center gap-5 w-full">
      <div className="bg-white rounded-full py-2.5 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center gap-4 border border-gray-50">
        <div className="w-12 h-6.5 bg-[#00D8D8] rounded-full relative p-1 flex items-center">
          <div className="w-4.5 h-4.5 bg-white rounded-full shadow-md ml-auto"></div>
        </div>
        <span className="font-extrabold text-[#002D5B] text-[14px] md:text-[15px] tracking-tight">{title}</span>
      </div>
      <p className="text-[#002D5B]/70 text-[13px] font-medium leading-relaxed max-w-[240px]">
        {description}
      </p>
    </div>
  );

  const getPageContent = () => {
    switch (currentPage) {
      case 'legal':
        return renderDetail("Éligibilité et cadre légal", "#09A7A7", (
          <div className="space-y-10">
            {/* a) */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 border border-gray-100 shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-black tracking-tight">a) Le cadre légal de la réforme de la facturation électronique</h3>
              <p className="text-lg text-black leading-relaxed font-medium">MyUnisoft vous accompagne avec une solution claire et optimisée pour les experts-comptables et leurs clients.</p>
              <p className="text-lg text-black leading-relaxed font-medium">La solution 100 % MyUnisoft est conçue pour vous permettre d’émettre, recevoir et gérer vos factures électroniques et celles de vos clients, en toute conformité.</p>
              
              <div className="flex flex-col gap-4">
                <a href="https://www2.myunisoft.fr/outils/o/theo/Myu-guide-user/Infographie-pourquoi-quand-combien-Entreprise-1125-V1.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-myu-teal font-black border-b-2 border-myu-teal pb-0.5 text-sm w-fit">Je découvre la fiche récapitulative sur la facturation électronique</a>
                <p className="text-lg text-black leading-relaxed font-medium md:whitespace-nowrap">Dans cette vidéo, vous allez identifier les liens entre la PA MyUnisoft et la réforme de la facturation électronique :</p>
                <a href="https://www2.myunisoft.fr/outils/o/theo/Myu-guide-user/PA%20et%20facturation%20%c3%a9lectronique-1080p-260127.mp4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-myu-teal font-black border-b-2 border-myu-teal pb-0.5 text-sm w-fit">Lien vidéo Vyond</a>
                <p className="text-lg text-black leading-relaxed font-medium">Des questions sur la facturation électronique ?</p>
                <a href="https://facture-electronique.help/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-myu-teal font-black border-b-2 border-myu-teal pb-0.5 text-sm w-fit">Consultez notre FAQ</a>
              </div>
              
              <div className="overflow-hidden rounded-[1.5rem] shadow-lg border border-gray-100 bg-black aspect-video mt-6">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                >
                  <source src="https://www2.myunisoft.fr/outils/o/theo/Myu-guide-user/PA%20et%20facturation%20%c3%a9lectronique-1080p-260127.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
              </div>
            </div>

            {/* b) */}
            <div className="bg-myu-lightTeal/20 backdrop-blur-sm rounded-[2.5rem] p-10 border border-myu-lightTeal space-y-6">
              <h3 className="text-2xl font-bold text-black tracking-tight">b) les piliers de la gamme First</h3>
              <p className="text-lg text-black leading-relaxed font-medium">La gamme First est une solution simplifiée pour émettre, recevoir et suivre vos factures de manière sécurisée.</p>
              <p className="text-lg text-black leading-relaxed font-medium">MyU Gestion First se positionne comme une solution d’entrée de gamme stratégique pour permettre aux cabinets de sécuriser la conformité réglementaire tout en proposant une première brique de pilotage d’activité à forte valeur ajoutée.</p>
              
              <div className="flex flex-col gap-6">
                <a href="https://hs-145727114.f.hubspotemail-eu1.net/hubfs/145727114/Fiches%20produit/MyU%20Gestion%20Financi%C3%A8re/Fiche-produit-MyU-Gestion-First.pdf?utm_campaign=253052099-Newsletter%20Marketing%20-%20Clients&utm_medium=email&_hsenc=p2ANqtz--NA3fcrIxApKKegCe7fwUR5CqEX2RRaQLWeZ6BpTEwrvFf5eRM4gbWEly5dB3CgARfiOqEBl92KXhdtMRVqdkX51NJTg&_hsmi=125953707&utm_content=125953707&utm_source=hs_email" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-myu-teal font-black border-b-2 border-myu-teal pb-0.5 text-sm w-fit">Je découvre la fiche produit</a>

                {/* Mockup Infographique HTML/CSS */}
                <div className="relative w-full py-12 px-4 bg-[#F3F9FA] rounded-[3rem] border border-white/50 shadow-inner overflow-hidden flex flex-col items-center">
                  <div className="text-center mb-16 space-y-1">
                    <h4 className="text-[28px] md:text-[42px] font-[500] text-[#002D5B] tracking-tight leading-[1.1]">
                      MyU Gestion First,<br />
                      notre <span className="font-extrabold">nouvelle solution</span>
                    </h4>
                    <div className="relative inline-block mt-2">
                      <h4 className="text-[28px] md:text-[42px] font-[500] text-[#002D5B] tracking-tight leading-[1.1]">
                        de facturation accessible
                      </h4>
                      <div className="absolute -bottom-3 left-0 right-0 h-[5px] bg-[#00D8D8] rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mb-12">
                    <MockupItem 
                      title="Flux Entrants" 
                      description="Réception illimitée des factures électroniques" 
                    />
                    <MockupItem 
                      title="Émission Factur-X" 
                      description="La génération automatique de l'ensemble des factures sous format Factur-X et l'émission de factures (jusqu'à 5)" 
                    />
                    <MockupItem 
                      title="Conformité Intégrée" 
                      description="La Plateforme Agréée MyUnisoft totalement intégrée dans l'outil de gestion commerciale" 
                    />
                  </div>

                  <div className="flex flex-col md:flex-row justify-center gap-12 w-full max-w-4xl">
                    <MockupItem 
                      title="Outil Tout-en-un" 
                      description="Logiciel de gestion commerciale complet (devis, factures, application mobile)" 
                    />
                    <MockupItem 
                      title="Mobilité Incluse" 
                      description="Application mobile incluse, pour le pilotage, la facturation et le partage de documents" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* c) */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 border border-gray-100 shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-black tracking-tight">c) le mandat de délégation</h3>
              <p className="text-lg text-black leading-relaxed font-medium">Pour permettre à votre expert-comptable de sélectionner pour vous votre plateforme agréée, vous devez l’y autoriser en signant un mandat de délégation, que vous recevez par email.</p>
              <p className="text-lg text-black leading-relaxed font-medium">Le mandat de délégation est l'outil central des cabinets pour maîtriser le choix technologique de leurs clients, sécuriser la conformité et transformer la practice comptable au quotidien.</p>
              <a 
                href="https://www2.myunisoft.fr/outils/o/MyUGFi/FormFirst/User/CLI_GFiFirst-User-SignerMandatPA/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 bg-gray-50/50 rounded-[1.5rem] flex items-center gap-4 text-myu-teal font-black text-sm hover:bg-gray-100 transition-all group"
              >
                 <div className="w-10 h-10 bg-myu-teal text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                   <PlayCircle size={24}/>
                 </div>
                 Je découvre comment signer le mandat de délégation (Démo interactive)
              </a>
            </div>
          </div>
        ));
      case 'ventes1':
        return renderDetail("Gestion des flux de vente", "#FFD406", (
          <div className="space-y-10">
            {/* a) */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 border border-gray-100 shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-black tracking-tight">a) Tour du propriétaire de l’interface First</h3>
              <p className="text-lg text-black leading-relaxed font-medium">Dans ce lien, vous découvrez la page d’accueil et les fonctionnalités de la gamme First.</p>
              <p className="text-lg text-black leading-relaxed font-medium">Cliquez sur les différentes interactions pour découvrir les différentes fonctionnalités.</p>
              <div className="flex flex-col gap-4">
                <a href="https://app.sharefable.com/live/demo/dmo-myu-gestion-first-em0wrdy6wlgf86tk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-myu-teal font-black border-b-2 border-myu-teal pb-0.5 text-sm w-fit">🖇️Je découvre la gamme First</a>
                <a href="https://support.myunisoft.fr/gestion-financi%C3%A8re#application" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-myu-teal font-black border-b-2 border-myu-teal pb-0.5 text-sm w-fit">Accéder à la base documentaire</a>
              </div>
            </div>

            {/* b) */}
            <div className="bg-myu-yellow/5 backdrop-blur-sm rounded-[2.5rem] p-10 border border-myu-yellow/20 space-y-6">
              <h3 className="text-2xl font-bold text-black tracking-tight">b) Les atouts et limites de la gamme First</h3>
              <p className="text-lg text-black leading-relaxed font-medium">La gamme First est l’entrée de gamme de l’offre MyU Gestion Financière qui vous permet de démarrer la facturation électronique en toute confiance, à savoir émettre des factures client et recevoir vos factures fournisseurs.</p>
              <p className="text-lg text-black leading-relaxed font-medium">Voyons ensemble les atouts et limites de cette gamme.</p>
              <div className="p-8 bg-white rounded-[1.5rem] flex flex-col items-start gap-4 border border-gray-100 shadow-sm">
                 <div className="flex items-center gap-6 text-black font-bold text-sm">
                    <LayoutGrid size={32} className="text-myu-yellow"/>
                    Insérer infographie à réaliser à partir de cette <a href="https://hs-145727114.f.hubspotemail-eu1.net/hubfs/145727114/Fiches%20produit/MyU%20Gestion%20Financi%C3%A8re/Fiche-produit-MyU-Gestion-First.pdf?utm_campaign=253052099-Newsletter%20Marketing%20-%20Clients&utm_medium=email&_hsenc=p2ANqtz--NA3fcrIxApKKegCe7fwUR5CqEX2RRaQLWeZ6BpTEwrvFf5eRM4gbWEly5dB3CgARfiOqEBl92KXhdtMRVqdkX51NJTg&_hsmi=125953707&utm_content=125953707&utm_source=hs_email" target="_blank" rel="noopener noreferrer" className="text-myu-teal underline">fiche produit</a>
                 </div>
              </div>
            </div>

            {/* c) */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 border border-gray-100 shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-black tracking-tight">c) Le paramétrage de base</h3>
              <p className="text-lg text-black leading-relaxed font-medium">Découvrez le paramétrage et personnalisation de base que vous pouvez mettre en place avant d’utiliser la gamme MyU Gestion First</p>
              <a 
                href="https://www2.myunisoft.fr/outils/o/MyUGFi/FormFirst/User/CLI-GFirst-User-Param%c3%a8tresBase/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 bg-gray-50/50 rounded-[1.5rem] flex items-center gap-4 text-myu-teal font-black text-sm hover:bg-gray-100 transition-all group"
              >
                 <div className="w-10 h-10 bg-myu-teal text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                   <PlayCircle size={24}/>
                 </div>
                 Je découvre le paramétrage de base (Démo interactive)
              </a>
            </div>

            {/* d) */}
            <div className="bg-myu-yellow/5 backdrop-blur-sm rounded-[2.5rem] p-10 border border-myu-yellow/20 space-y-6">
              <h3 className="text-2xl font-bold text-black tracking-tight">d) Créer un client</h3>
              <p className="text-lg text-black leading-relaxed font-medium">Dans cette vidéo, vous allez apprendre à créer un client, étape indispensable avant de pouvoir créer une facture dans MyU Gestion First.</p>
              <a 
                href="https://www2.myunisoft.fr/outils/o/MyUGFi/FormFirst/User/CLI_GFirst-User-CreerClient/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 bg-white rounded-[1.5rem] flex items-center gap-4 text-myu-teal font-black text-sm shadow-sm hover:bg-gray-50 transition-all group"
              >
                 <div className="w-10 h-10 bg-myu-teal text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                   <PlayCircle size={24}/>
                 </div>
                 Je découvre comment créer un client (Démo interactive)
              </a>
            </div>

            {/* e) */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 border border-gray-100 shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-black tracking-tight">e) Créer un produit/article</h3>
              <p className="text-lg text-black leading-relaxed font-medium">Une fois que vous avez créé un client, il est temps de passer à la deuxième étape avant de pouvoir créer une facture : créer un produit.</p>
              <p className="text-lg text-black leading-relaxed font-medium">Dans cette vidéo, vous allez apprendre à créer différents types de produits : bien, service et ajouter une description et modifier un produit.</p>
              <a 
                href="https://www2.myunisoft.fr/outils/o/MyUGFi/FormFirst/User/CLI_GFirst-User_CreerProduit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 bg-gray-50/50 rounded-[1.5rem] flex items-center gap-4 text-myu-teal font-black text-sm hover:bg-gray-100 transition-all group"
              >
                 <div className="w-10 h-10 bg-myu-teal text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                   <PlayCircle size={24}/>
                 </div>
                 Je découvre comment créer un produit (Démo interactive)
              </a>
            </div>

            {/* f) */}
            <div className="bg-myu-yellow/5 backdrop-blur-sm rounded-[2.5rem] p-10 border border-myu-yellow/20 space-y-6">
              <h3 className="text-2xl font-bold text-black tracking-tight">f) Créer une facture</h3>
              <p className="text-lg text-black leading-relaxed font-medium">Maintenant que vous avez appris à créer un client et un produit, vous allez pouvoir désormais créer une facture. Découvrez comment créer une facture dans MyU Gestion First.</p>
              <a 
                href="https://www2.myunisoft.fr/outils/o/MyUGFi/FormFirst/User/CLI_GFirst-User_CreerFacture/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-6 bg-white rounded-[1.5rem] flex items-center gap-4 text-myu-teal font-black text-sm shadow-sm hover:bg-gray-50 transition-all group"
              >
                 <div className="w-10 h-10 bg-myu-teal text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                   <PlayCircle size={24}/>
                 </div>
                 Je découvre comment créer une facture (Démo interactive)
              </a>
            </div>
          </div>
        ));
      case 'ventes2':
        return renderDetail("Gestion des flux d'achat", "#A176FE", (
          <div className="space-y-10">
            <div className="bg-black rounded-[2.5rem] p-12 shadow-xl space-y-8 text-white">
              <div className="space-y-6">
                 <p className="text-xl opacity-90 leading-relaxed font-medium text-gray-200">Dans MyU Gestion First, vous allez pouvoir recevoir vos factures fournisseurs.</p>
                 <p className="text-xl opacity-90 leading-relaxed font-medium text-gray-200">À noter : La réception de facture électronique sera effective à partir de Septembre 2026.</p>
                 <p className="text-xl opacity-90 leading-relaxed font-medium text-gray-200">Le bouton 'Importer une facture' permet de centraliser vos factures non électroniques (email et papier). Le partage à votre expert sera disponible prochainement (courant Q1/Q2).</p>
                 <p className="text-xl opacity-90 leading-relaxed font-medium text-gray-200">Découvrez dans cette vidéo comment réceptionner et consulter vos factures fournisseurs.</p>
              </div>
              <a 
                href="https://www2.myunisoft.fr/outils/o/MyUGFi/FormFirst/User/CLI_GFirst-user_RecepFactFrs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 p-6 bg-[#1A1A1A] rounded-[1.5rem] flex items-center gap-5 text-white font-bold text-sm cursor-pointer border border-white/10 hover:bg-[#252525] transition-colors group"
              >
                 <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayCircle size={20} className="fill-transparent stroke-white stroke-[2]" />
                 </div>
                 <span className="tracking-wide">Je découvre comment réceptionner et consulter mes factures fournisseurs (Démo interactive)</span>
              </a>
            </div>
          </div>
        ));
      case 'mobilite':
        return renderDetail("Mobilité et collaboration cabinet", "#FE3A5E", (
          <div className="space-y-10">
            <div className="bg-myu-red rounded-[2.5rem] p-12 shadow-xl space-y-8 text-white">
              <h3 className="text-3xl font-bold tracking-tighter text-white">Application Mobile MyUnisoft</h3>
              <p className="text-xl opacity-90 leading-relaxed font-medium">La gamme MyU Gestion First est également disponible sur l’application mobile MyUnisoft, disponible sur iOs, Android et responsive sur ordis, tablettes et smartphones.</p>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://app.sharefable.com/live/demo/dmo-myu-gestion-first-em0wrdy6wlgf86tk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-lg font-bold border-b border-white pb-1 hover:opacity-80 transition-opacity w-fit"
                >
                  Découvrez comment fonctionne MyU Gestion First sur mobile
                </a>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                 <a 
                    href="https://apps.apple.com/fr/app/myunisoft/id1406797684" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-black rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg transition-transform hover:scale-105"
                 >
                    App Store (iOS)
                 </a>
                 <a 
                    href="https://play.google.com/store/apps/details?id=com.myunisoft_mobile_v3&hl=fr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white/20 text-white rounded-xl font-bold uppercase tracking-widest text-xs border border-white/20 transition-transform hover:scale-105"
                 >
                    Google Play (Android)
                 </a>
              </div>
            </div>
          </div>
        ));
      default:
        return renderHome();
    }
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-myu-teal selection:text-white bg-gradient-animate">
      {/* Subtle Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-myu-teal/5 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] bg-myu-purple/5 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-myu-yellow/5 rounded-full blur-[90px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <Header onHome={() => setCurrentPage('home')} />
      
      <main className="pb-10 overflow-hidden relative z-10">
        {getPageContent()}
      </main>

      <footer className="bg-white/50 backdrop-blur-sm border-t border-gray-50 py-1.5 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="space-y-0 text-center md:text-left">
               <span className="text-xl font-[900] tracking-tighter text-black">Guide MyU<span className="text-myu-teal">.</span></span>
               <p className="text-gray-400 font-bold text-[8px] uppercase tracking-[0.3em]">© 2026 MyUnisoft — Gamme First</p>
            </div>
            <div className="flex gap-2.5">
               {['09A7A7', 'FFD406', 'A176FE', 'FE3A5E'].map(c => (
                 <div key={c} className="w-5 h-5 rounded-lg flex items-center justify-center border border-gray-100 bg-white/50">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: `#${c}` }}></div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;