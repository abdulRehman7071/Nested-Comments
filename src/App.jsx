import { useState } from "react";
import Comment from "./components/Comment";
import data from "../lib/comments";

function App() {
  const [comments, setComments] = useState(data);

  return (
    <div className="w-screen min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {comments.map((item) => (
          <Comment key={item.id} comment={item} setComments={setComments} />
        ))}
      </div>
    </div>
  );
}

export default App;
