import { useState } from "react"
import { TransitionToFunction } from "./types"

export function useMyTransition(initialSelected: string) {
  const [selected, setValue] = useState(initialSelected)
  const [amTransitioning, setTransitioning] = useState(false)
  const transitionTo: TransitionToFunction = (newVal: string) => {
    setTransitioning(true)
    setValue(newVal)
  }
  const stopTransition = () => setTransitioning(false);
  return { selected, transitionTo, amTransitioning, stopTransition }
}