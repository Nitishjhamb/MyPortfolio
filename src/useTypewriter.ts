// hooks/useTypewriter.ts
import { useState, useEffect, useMemo } from "react";

export function useTypewriter(
  texts: string | string[],
  options: {
    loop?: boolean;
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenTexts?: number;
    onTypingComplete?: () => void;
  } = {}
) {
  const {
    loop = false,
    typingSpeed = 150,
    deletingSpeed = 50,
    delayBetweenTexts = 1500,
    onTypingComplete,
  } = options;

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Wrap textsArray in useMemo to prevent unnecessary recalculations
  const textsArray = useMemo(
    () => (Array.isArray(texts) ? texts : [texts]),
    [texts]
  );

  const currentText = textsArray[currentTextIndex];

  useEffect(() => {
    // Skip if we're not looping and have completed all texts
    if (!loop && currentTextIndex >= textsArray.length) {
      return;
    }

    let timer: number;

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentText.length) {
        timer = window.setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Typing complete
        if (!loop && currentTextIndex === textsArray.length - 1) {
          // If not looping and this is the last text, call completion callback
          onTypingComplete?.();
        } else if (loop && textsArray.length > 1) {
          // If looping with multiple texts, start deleting after delay
          timer = window.setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenTexts);
        }
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timer = window.setTimeout(() => {
          setDisplayedText(
            displayedText.substring(0, displayedText.length - 1)
          );
        }, deletingSpeed);
      } else {
        // Deleting complete, move to next text
        setIsDeleting(false);
        const nextIndex = (currentTextIndex + 1) % textsArray.length;
        setCurrentTextIndex(nextIndex);

        // If we've completed one full cycle in loop mode, call completion callback
        if (!loop && nextIndex === 0) {
          onTypingComplete?.();
        }
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    currentTextIndex,
    currentText,
    textsArray,
    loop,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
    onTypingComplete,
  ]);

  return displayedText;
}
