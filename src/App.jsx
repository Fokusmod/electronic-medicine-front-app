import Header from "./components/Header/Header.jsx";
import { useState } from "react";

export default function App() {
  /*   const [tab, setTab] = useState("effect"); */
  return (
    <>
      <Header />
      {/* <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab == "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab == "feedback" && (
          <>
            <FeedbackSection />
          </>
        )}

        {tab == "effect" && <EffectSection />}
      </main> */}
    </>
  );
}
