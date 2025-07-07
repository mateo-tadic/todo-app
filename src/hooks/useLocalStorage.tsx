import { useState } from "react";

function usePersistentState<T>(
  storageKey: string,
  defaultValue: T
): [T, (newValue: T) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const updateValue = (newValue: T) => {
    setValue(newValue);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(newValue));
    } catch {
      alert(
        "Failed to save data to local storage. Your changes may not be persisted."
      );
    }
  };

  return [value, updateValue];
}

export default usePersistentState;
