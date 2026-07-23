import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AuditReportView from '../components/sections/AuditReportView';
import PublicProfileView from '../components/sections/PublicProfileView';
import { ClipboardList, Globe, ArrowRight } from 'lucide-react';

export default function SampleAudit() {
  const [activeView, setActiveView] = useState('audit');

  const handleViewKeyDown = (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;

    event.preventDefault();
    const nextView = activeView === 'audit' ? 'profile' : 'audit';
    setActiveView(nextView);
    document.getElementById(`${nextView}-view-tab`)?.focus();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content" tabIndex={-1}>

      {/* Header */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-teal-50 to-background">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-teal-100 text-teal-700 rounded-full mb-4 uppercase tracking-wider">
            Live Demo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">See an Accessibility Profile</h1>
          <p className="text-lg text-muted-foreground mb-10">From documentation to public accessibility profile. See how Trek iQ helps organizations communicate accessibility clearly.

          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white border border-border rounded-xl p-1.5 shadow-sm gap-1" role="tablist" aria-label="Sample accessibility views" onKeyDown={handleViewKeyDown}>
            <button
              id="audit-view-tab"
              type="button"
              role="tab"
              aria-selected={activeView === 'audit'}
              aria-controls="audit-view-panel"
              tabIndex={activeView === 'audit' ? 0 : -1}
              onClick={() => setActiveView('audit')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeView === 'audit' ?
              'bg-primary text-primary-foreground shadow' :
              'text-muted-foreground hover:text-foreground'}`
              }>
              
              <ClipboardList className="w-4 h-4" aria-hidden="true" />
              Audit Report
            </button>
            <button
              id="profile-view-tab"
              type="button"
              role="tab"
              aria-selected={activeView === 'profile'}
              aria-controls="profile-view-panel"
              tabIndex={activeView === 'profile' ? 0 : -1}
              onClick={() => setActiveView('profile')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeView === 'profile' ?
              'bg-accent text-accent-foreground shadow' :
              'text-muted-foreground hover:text-foreground'}`
              }>
              
              <Globe className="w-4 h-4" aria-hidden="true" />
              Public Profile
            </button>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-3 mt-6 text-sm text-muted-foreground">
            <span className={`flex items-center gap-1.5 transition-all ${activeView === 'audit' ? 'text-primary font-semibold' : ''}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeView === 'audit' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>1</span>
              Accessibility documentation captured
            </span>
            <ArrowRight className="w-4 h-4 text-muted" aria-hidden="true" />
            <span className={`flex items-center gap-1.5 transition-all ${activeView === 'profile' ? 'text-accent font-semibold' : ''}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeView === 'profile' ? 'bg-accent text-accent-foreground' : 'bg-muted'}`}>2</span>
              Public profile published
            </span>
          </div>
        </div>
      </section>

      {/* View Container */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {activeView === 'audit' ?
          <div id="audit-view-panel" role="tabpanel" aria-labelledby="audit-view-tab" className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800 flex items-center gap-3">
                <ClipboardList className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span><strong>This is the internal view</strong>. What your team sees when managing accessibility documentation for your venue.</span>
              </div>
              <AuditReportView />
            </div> :

          <div id="profile-view-panel" role="tabpanel" aria-labelledby="profile-view-tab" className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="mb-6 p-4 bg-teal-50 border border-teal-200 rounded-lg text-sm text-teal-800 flex items-center gap-3">
                <Globe className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span><strong>This is the public profile</strong>. What visitors see when they want to understand what to expect before they arrive.</span>
              </div>
              <PublicProfileView />
            </div>
          }
        </div>
      </section>

      </main>

      <Footer />
    </div>);

}
