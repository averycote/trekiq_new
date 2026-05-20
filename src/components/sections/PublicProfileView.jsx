import React, { useState } from 'react';
import { ShieldCheck, Clock, Accessibility, Volume2, Eye, Ear, Brain, MapPin, Bus, Car, Phone, Wifi, AlertCircle, CheckCircle2 } from 'lucide-react';

const categories = [
{ id: 'mobility', icon: Accessibility, label: 'Mobility', score: 91, color: 'bg-teal-500', description: 'Excellent wheelchair access throughout. Elevator serves all 4 floors. Extra-wide passageways on Floor 1.' },
{ id: 'sensory', icon: Volume2, label: 'Sensory', score: 84, color: 'bg-teal-500', description: 'Quiet zones available. Reduced background music in main gallery. Sensory kits available at reception.' },
{ id: 'vision', icon: Eye, label: 'Vision', score: 82, color: 'bg-teal-500', description: 'High-contrast signage throughout. Audio guides available. Large-print materials on request at front desk.' },
{ id: 'hearing', icon: Ear, label: 'Hearing', score: 79, color: 'bg-amber-500', description: 'Hearing loops installed in auditorium and main lobby. Visual fire alarm system. ASL interpretation available with advance notice.' },
{ id: 'cognitive', icon: Brain, label: 'Cognitive', score: 88, color: 'bg-teal-500', description: 'Clear wayfinding throughout. Social stories available online. Staff trained in cognitive accessibility support.' }];


const tabs = ['Overview', 'Live Status', 'Floors', 'Getting Here', 'Policies'];

function ScoreDial({ score }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - score / 100 * circumference;
  return (
    <div className="relative w-36 h-36">
      <svg width="144" height="144" className="-rotate-90" aria-hidden="true">
        <circle cx="72" cy="72" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="11" />
        <circle cx="72" cy="72" r={radius} fill="none" stroke="#14b8a6" strokeWidth="11"
        strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.8s' }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-gray-900">{score}</span>
        <span className="text-xs text-gray-500">/ 100</span>
      </div>
    </div>);

}

function OverviewTab() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Accessibility Scorecard</h2>
        <p className="text-gray-500 mt-1">Comprehensive accessibility assessment across all categories</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center py-8 gap-3">
          <ScoreDial score={87} />
          <p className="text-sm text-gray-500">Overall Score</p>
          <p className="text-xs text-gray-400 text-center max-w-[180px]">Based on 5 categories across 4 floors</p>
        </div>
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 space-y-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Category Breakdown</p>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="space-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">{cat.label}</span>
                    <span className="text-sm font-bold">{cat.score}%</span>
                  </div>
                </div>
                <div className="ml-11">
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${cat.color}`} style={{ width: `${cat.score}%`, transition: 'width 0.8s' }} />
                  </div>
                  <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">{cat.description}</p>
                </div>
              </div>);

          })}
        </div>
      </div>
    </div>);

}

function LiveStatusTab() {
  const features = [
  { label: 'Accessible Entrance', status: true },
  { label: 'Elevator Operational', status: true },
  { label: 'Accessible Washrooms', status: true },
  { label: 'Hearing Loop Active', status: true },
  { label: 'Quiet Room Available', status: false },
  { label: 'ASL Staff On-Site', status: false }];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Live Status</h2>
      <p className="text-gray-500 mb-6">Real-time accessibility feature availability — updated by venue staff</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((f) =>
        <div key={f.label} className={`flex items-center gap-3 p-4 rounded-xl border ${f.status ? 'bg-teal-50 border-teal-200' : 'bg-gray-50 border-gray-200'}`}>
            {f.status ?
          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" /> :
          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />}
            <span className={`text-sm font-medium ${f.status ? 'text-teal-900' : 'text-gray-500'}`}>{f.label}</span>
            <span className={`ml-auto text-xs font-semibold ${f.status ? 'text-teal-600' : 'text-gray-400'}`}>
              {f.status ? 'Available' : 'Unavailable'}
            </span>
          </div>
        )}
      </div>
    </div>);

}

function GettingHereTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Getting Here</h2>
      <p className="text-gray-500 mb-6">Accessible routes and transportation options</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
        { icon: Car, title: 'Accessible Parking', desc: '3 designated spaces on Lower Water Street, adjacent to accessible entrance. No charge for accessible permit holders.' },
        { icon: Bus, title: 'Transit', desc: 'Routes 1, 7, and 14 stop within 50m. Low-floor buses on all three routes. Alert-a-ride service available.' },
        { icon: MapPin, title: 'Accessible Entrance', desc: 'Main entrance on Lower Water Street is fully accessible. Automatic doors, level threshold, no steps.' }].
        map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>);

        })}
      </div>
    </div>);

}

function PoliciesTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Accessibility Policies</h2>
      <p className="text-gray-500 mb-6">How this venue supports visitors with disabilities</p>
      <div className="space-y-4">
        {[
        { title: 'Service Animals', body: 'Service animals are welcome throughout all areas of the venue. Water bowls are available at reception upon request.' },
        { title: 'Support Persons', body: 'Support persons accompanying a visitor with a disability are admitted free of charge. Please inform staff at the entrance.' },
        { title: 'Assistive Devices', body: 'Wheelchairs, mobility scooters, and other personal assistive devices are welcome. Manual wheelchairs available to borrow at reception.' },
        { title: 'Communication', body: 'Staff are trained in accessible communication. Large-print materials, audio guides, and ASL interpretation available with 24-hour advance notice.' }].
        map((p) =>
        <div key={p.title} className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1.5">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.body}</p>
          </div>
        )}
      </div>
    </div>);

}

export default function PublicProfileView() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-50 to-white px-6 pt-8 pb-6 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white border border-teal-200 text-teal-700 text-xs font-semibold rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified by Trek.iQ
              </span>
              <span className="text-gray-400 text-sm">Since January 2025</span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-1">Main Street Resta</h1>
            <p className="text-gray-500 text-sm">1215 Lower Water Street</p>
            <p className="text-gray-500 text-sm mb-3">Halifax, Nova Scotia B3J 3Y6</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Last updated 103d ago</span>
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              <span className="text-green-600 font-medium">Live</span>
            </div>
          </div>
          <div className="flex flex-col items-center flex-shrink-0">
            <ScoreDial score={87} />
            <p className="text-xs text-gray-500 mt-2 font-medium">Overall Accessibility Score</p>
          </div>
        </div>

        {/* Category badges */}
        <div className="flex flex-wrap gap-2 mt-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <span key={cat.id} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                <Icon className="w-3.5 h-3.5 text-teal-600" />
                {cat.label} <strong className="text-gray-900">{cat.score}</strong>
              </span>);

          })}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 px-6">
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
            activeTab === tab ?
            'border-teal-600 text-teal-700' :
            'border-transparent text-gray-500 hover:text-gray-700'}`
            }>
            
              {tab}
            </button>
          )}
        </div>
      </div>

      {/* Tab content */}
      <div className="p-6 bg-gray-50">
        {activeTab === 'Overview' && <OverviewTab />}
        {activeTab === 'Live Status' && <LiveStatusTab />}
        {activeTab === 'Getting Here' && <GettingHereTab />}
        {activeTab === 'Policies' && <PoliciesTab />}
        {activeTab === 'Floors' &&
        <div className="text-center py-16 text-gray-400">
            <p className="text-lg font-semibold mb-2">Floor Plans</p>
            <p className="text-sm">Interactive floor maps with accessibility feature overlays</p>
          </div>
        }
      </div>
    </div>);

}