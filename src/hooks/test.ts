"use client";
import { useState, useEffect } from "react";

export function useTestEffect() {
  const [count, setCount] = useState(0);

  console.log("💙 Component rendered");

  useEffect(() => {
    console.log("✨ useEffect ran (empty dependency)");
  }, []);

  useEffect(() => {
    console.log("🌟 useEffect ran because count changed:", count);
  }, [count]);

  const increment = () => setCount(count + 1);

  return { count, increment };
}
