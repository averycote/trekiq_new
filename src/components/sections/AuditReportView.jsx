import React, { useState } from 'react';
import { AlertCircle, AlertTriangle, Info, ChevronDown, ChevronUp, FileText, Lightbulb, Edit } from 'lucide-react';

const issues = [
{
  id: 1,
  location: 'Main Entrance',
  type: 'Entry Ramp',
  priority: 'HIGH',
  currentState: '1:10 gradient (5.7 degrees)',
  requiredStandard: '1:12 gradient (4.8 degrees)',
  issue: 'Ramp gradient exceeds maximum allowed slope',
  regulation: 'Nova Scotia Building Code Section 3.8.3.3',
  action: 'Rebuild ramp to meet 1:12 gradient ratio. This may require extending the ramp length to reduce the slope angle.'
},
{
  id: 2,
  location: 'Main Washroom',
  type: 'Accessible Stall',
  priority: 'HIGH',
  currentState: 'No accessible stall present',
  requiredStandard: 'Minimum 1 accessible stall required',
  issue: 'Washroom does not include an accessible stall meeting AODA standards',
  regulation: 'AODA Integrated Accessibility Standards, Section 80.3',
  action: 'Install a compliant accessible washroom stall with grab bars, turning radius of at least 1500mm, and lever-style hardware.'
},
{
  id: 3,
  location: 'Dining Area',
  type: 'Aisle Width',
  priority: 'HIGH',
  currentState: '700mm clear width',
  requiredStandard: '900mm minimum clear width',
  issue: 'Aisle widths between tables are insufficient for wheelchair navigation',
  regulation: 'Nova Scotia Building Code Section 3.8.2.1',
  action: 'Rearrange furniture to achieve minimum 900mm clear aisle width throughout the dining area.'
},
{
  id: 4,
  location: 'Front Counter',
  type: 'Service Counter Height',
  priority: 'MEDIUM',
  currentState: '1050mm counter height',
  requiredStandard: 'Accessible section at max 865mm',
  issue: 'No lowered section of counter available for wheelchair users',
  regulation: 'CSA B651-12 Section 8.3',
  action: 'Install a lowered counter section (min 760mm wide) at 865mm height to provide accessible service point.'
},
{
  id: 5,
  location: 'Entrance Signage',
  type: 'Tactile Signage',
  priority: 'MEDIUM',
  currentState: 'Print-only signage',
  requiredStandard: 'Braille and raised tactile lettering required',
  issue: 'Room identification and directional signage lacks tactile elements',
  regulation: 'AODA Accessibility Standards for Customer Service, Section 6',
  action: 'Replace or supplement existing signage with tactile signage including Grade 2 Braille and raised characters.'
},
{
  id: 6,
  location: 'Parking Area',
  type: 'Accessible Parking',
  priority: 'LOW',
  currentState: '0 accessible spaces',
  requiredStandard: '1 accessible space per 25 standard spaces',
  issue: 'No designated accessible parking spaces in the lot',
  regulation: 'Nova Scotia Traffic Safety Act, Accessible Parking Regulations',
  action: 'Designate and mark at least 1 accessible parking space closest to the accessible entrance with proper signage.'
},
{
  id: 7,
  location: 'Main Entrance',
  type: 'Door Hardware',
  priority: 'LOW',
  currentState: 'Round knob hardware',
  requiredStandard: 'Lever-style or automatic door hardware',
  issue: 'Door hardware requires tight grasping and twisting, not operable with closed fist',
  regulation: 'Nova Scotia Building Code Section 3.8.3.5',
  action: 'Replace round knob hardware with lever-style hardware on all accessible route doors.'
}];


const priorityConfig = {
  HIGH: { color: 'bg-red-100 text-red-700 border border-red-200', icon: AlertCircle, iconColor: 'text-red-500 bg-red-50' },
  MEDIUM: { color: 'bg-amber-100 text-amber-700 border border-amber-200', icon: AlertTriangle, iconColor: 'text-amber-500 bg-amber-50' },
  LOW: { color: 'bg-blue-100 text-blue-700 border border-blue-200', icon: Info, iconColor: 'text-blue-500 bg-blue-50' }
};

function ScoreDial({ score }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - score / 100 * circumference;
  return (
    <div className="relative w-36 h-36">
      <svg width="144" height="144" className="-rotate-90" aria-hidden="true">
        <circle cx="72" cy="72" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="11" />
        <circle cx="72" cy="72" r={radius} fill="none" stroke="#2D8CCF" strokeWidth="11"
        strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.8s' }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-gray-900">87</span>
        <span className="text-xs text-gray-500">/ 100</span>
      </div>
    </div>);

}

function IssueCard({ issue }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = priorityConfig[issue.priority];
  const Icon = cfg.icon;

  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors">
        
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${cfg.iconColor}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-gray-900">{issue.location}</span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-sm text-gray-500">{issue.type}</span>
          </div>
          <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">{issue.issue}</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className={`px-2.5 py-0.5 text-xs font-bold rounded-md ${cfg.color}`}>{issue.priority}</span>
          <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 transition-colors">
            <Edit className="w-3.5 h-3.5" />
          </button>
          {expanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      </button>

      {expanded &&
      <div className="border-t border-border px-5 pb-5 pt-4 space-y-4 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Current State</p>
              <p className="text-sm font-semibold text-red-600">{issue.currentState}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Required Standard</p>
              <p className="text-sm font-semibold text-green-600">{issue.requiredStandard}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Issue Identified</p>
            <p className="text-sm text-gray-700">{issue.issue}</p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700">Regulation Reference</span>
            </div>
            <p className="text-sm text-blue-600 font-medium">{issue.regulation}</p>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-semibold text-amber-700">Recommended Action</span>
            </div>
            <p className="text-sm text-amber-800">{issue.action}</p>
          </div>
        </div>
      }
    </div>);

}

export default function AuditReportView() {
  const high = issues.filter((i) => i.priority === 'HIGH').length;
  const medium = issues.filter((i) => i.priority === 'MEDIUM').length;
  const low = issues.filter((i) => i.priority === 'LOW').length;

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Sidebar + Content layout */}
      <div className="flex">
        {/* Fake sidebar */}
        <div className="hidden md:flex flex-col w-48 bg-gray-900 text-white p-4 min-h-[600px]">
          <div className="flex items-center gap-2 mb-8">
            <span className="font-bold text-lg">Trek IQ</span>
            <span className="text-secondary text-xs">▶</span>
          </div>
          {['Dashboard', 'Venues', 'Audits', 'Staff', 'Incidents'].map((item, i) =>
          <div key={item} className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-1 text-sm cursor-pointer ${i === 2 ? 'bg-secondary text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
              {item}
            </div>
          )}
          <div className="mt-auto space-y-1">
            {['Settings', 'Profile', 'Logout'].map((item) =>
            <div key={item} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white cursor-pointer">
                <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                {item}
              </div>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 bg-gray-50">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-gray-400 text-sm">←</span>
            <h1 className="text-2xl font-bold text-gray-900">Audit Report</h1>
          </div>
          <p className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
            <span className="text-gray-400">🏢</span> Main Street Restaurant
          </p>

          {/* Score card */}
          <div className="bg-white rounded-xl border border-border p-6 mb-6 flex flex-col sm:flex-row items-center gap-6">
            <ScoreDial score={72} />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Accessibility Compliance Score</h2>
              <p className="text-gray-500 text-sm mb-3">Fair compliance. Multiple improvements required to meet Nova Scotia accessibility standards.</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 inline-block" />{high} High Priority</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />{medium} Medium Priority</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />{low} Low Priority</span>
              </div>
            </div>
          </div>

          {/* Issues */}
          <h2 className="text-lg font-bold text-gray-900 mb-4">Compliance Issues Found ({issues.length})</h2>
          <div className="space-y-3">
            {issues.map((issue) =>
            <IssueCard key={issue.id} issue={issue} />
            )}
          </div>
        </div>
      </div>
    </div>);

}