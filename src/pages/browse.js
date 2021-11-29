import React from "react";
import { useContent } from "../hooks/useContent";
import { selectionFilter } from "../utils/selectionFilter";
import { BrowserContainer } from "../containers";

export function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({ series, films });

  return <BrowserContainer slides={slides} />;
}
