import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OpeningLetter from "@/components/valentine/OpeningLetter";
import WhyYou from "@/components/valentine/WhyYou";
import HowYouMakeMe from "@/components/valentine/HowYouMakeMe";
import GentlemanPromise from "@/components/valentine/GentlemanPromise";
import TheQuestion from "@/components/valentine/TheQuestion";
import AfterYes from "@/components/valentine/AfterYes";

const tabs = [
  { id: 0, label: "Start" },
  { id: 1, label: "Why You" },
  { id: 2, label: "How I Feel" },
  { id: 3, label: "My Promise" },
  { id: 4, label: "A Question" },
  { id: 5, label: "♡" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showTabs, setShowTabs] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleStart = () => {
    setShowTabs(true);
    setActiveTab(1);
  };

  const handleYes = () => {
    setAnswered(true);
    setActiveTab(5);
  };

  const renderTab = () => {
    switch (activeTab) {
      case 0: return <OpeningLetter onNext={handleStart} />;
      case 1: return <WhyYou />;
      case 2: return <HowYouMakeMe />;
      case 3: return <GentlemanPromise />;
      case 4: return <TheQuestion onYes={handleYes} />;
      case 5: return <AfterYes />;
      default: return <OpeningLetter onNext={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Tab navigation - hidden on opening */}
      <AnimatePresence>
        {showTabs && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-4"
          >
            <div className="glass-strong rounded-full px-3 py-2 flex items-center gap-1 flex-wrap justify-center">
              {tabs.slice(1, answered ? 6 : 5).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={
                    activeTab === tab.id
                      ? "tab-pill-active"
                      : "tab-pill-inactive"
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Tab content with gentle fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {renderTab()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
