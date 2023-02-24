import React from "react";
import { ProvideNotion } from "./services/notion";
import { Calm } from "./pages/Calm";

export function App() {
  return (
    <ProvideNotion>
      <Calm path="/"/>
    </ProvideNotion>
  );
}

