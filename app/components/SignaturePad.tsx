"use client";

import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function SignaturePad() {
  const signaturePadRef = useRef<SignatureCanvas>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleBegin = () => {
    setIsEmpty(false);
  };

  const handleClear = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
      setIsEmpty(true);
    }
  };

  const handleSave = () => {
    if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
      const dataURL = signaturePadRef.current.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "signature.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <div className="relative w-full">
        <SignatureCanvas
          ref={signaturePadRef}
          canvasProps={{
            width: 600,
            height: 200,
            className:
              "border-2 border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 cursor-crosshair w-full max-w-full",
          }}
          penColor="#000000"
          backgroundColor="transparent"
          onBegin={handleBegin}
          minWidth={2}
          maxWidth={3}
          dotSize={2}
        />
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleClear}
          className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={handleSave}
          disabled={isEmpty}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Download
        </button>
      </div>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Draw your signature above
      </p>
    </div>
  );
}

