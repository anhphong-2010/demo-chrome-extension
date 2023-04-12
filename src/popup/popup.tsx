import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const test = (
  <div>
    <h1 className="text-4xl bg-green-500">Hello world</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius at, ab
      dolorum iusto sequi enim adipisci debitis voluptates eum architecto eaque
      reiciendis atque delectus similique perspiciatis, nam excepturi. Maiores,
      ex.
    </p>
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
