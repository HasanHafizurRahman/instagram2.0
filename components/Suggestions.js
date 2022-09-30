import { useEffect, useState } from "react"
import {faker} from "@faker-js/faker"

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      userId: faker.datatype.uuid(),
    }));
    setSuggestions(suggestions);
  },[])
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3>Suggestions for you</h3>
        <button>See All</button>
      </div>
    </div>
  )
}

export default Suggestions