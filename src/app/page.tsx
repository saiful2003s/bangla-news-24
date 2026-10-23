import { Suspense } from "react";
import MostReadSection from "../components/MostReadSection";
import NewsSection from "../components/NewsSection";


export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto p-4">

        <div className="grid grid-cols-3 gap-4">
          {/* news section  */}
          <NewsSection />

          {/* most read section  */}
          <MostReadSection />
        </div>

      </div>
    </Suspense>
  );
}
