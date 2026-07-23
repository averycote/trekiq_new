import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import ScrollToTop from '@/components/ScrollToTop';
// Add page imports here
import Home from './pages/Home';
import WhyVerify from './pages/WhyVerify';
import Markets from './pages/Markets';
import Partners from './pages/Partners';
import FAQ from './pages/FAQ';
import BookDemo from './pages/BookDemo';
import SampleAudit from './pages/SampleAudit';
import Tourism from './pages/markets/Tourism';
import Mice from './pages/markets/Mice';
import Churches from './pages/markets/Churches';
import IndependentHotels from './pages/markets/IndependentHotels';
import HealthAdjacent from './pages/markets/HealthAdjacent';

const AuthenticatedApp = () => {
  const { isLoadingPublicSettings } = useAuth();

  // Show loading spinner while checking app public settings
  if (isLoadingPublicSettings) {
    return (
      <div className="fixed inset-0 flex items-center justify-center" role="status" aria-live="polite">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" aria-hidden="true"></div>
        <span className="sr-only">Loading Trek iQ</span>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-verify" element={<WhyVerify />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/sample-audit" element={<SampleAudit />} />
        <Route path="/markets/tourism" element={<Tourism />} />
        <Route path="/markets/mice" element={<Mice />} />
        <Route path="/markets/churches" element={<Churches />} />
        <Route path="/markets/independent-hotels" element={<IndependentHotels />} />
        <Route path="/markets/health-adjacent" element={<HealthAdjacent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
