// components/ImagePopup.tsx
"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

export default function ImagePopup({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="rounded-md object-cover"
        />
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-50 inset-0"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-60"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white p-2 rounded shadow-xl max-w-full max-h-full overflow-auto">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={800}
              className="object-contain max-h-[90vh] w-auto h-auto"
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
