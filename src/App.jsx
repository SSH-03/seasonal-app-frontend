import "./App.css";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

function App() {
  return (
    <>
      <div className="text-center danger ">
        <h1 className="text-2xl text-green-500 underline">Seasonal Products Application</h1>
        <div className="flex flex-col items-center justify-center h-40">
          <h4 className="text-yellow-300 ">Munagapati Midhun Naga Sai - CSE</h4>
          <h4 className="text-yellow-300 bg-red-700">Harsha Sree</h4>
        </div>
        <Button disabled>
          <Loader2 className="animate-spin" />
          Started Building on 27-04-2025
        </Button>
      </div>
    </>
  );
}

export default App;
