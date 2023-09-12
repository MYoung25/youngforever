"use client";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

type Path = {
  name: string;
  path: string;
  options?: Path[];
};

type Props = {
  menuItems: Path[];
};

export const NavigationSidebar = (props: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  /**
   * Close modal when user clicks outside of it
   */
  useEffect(() => {
    if (modalRef) {
      modalRef.current?.on("close", () => {
        setIsOpen(false);
      });
    }
  }, [modalRef]);

  /**
   * Add overflow-hidden to body when modal is open
   */
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  function openDialog() {
    setIsOpen(true);
    modalRef.current?.showModal();
  }

  if (!isLoaded) return <></>;

  return (
    <>
      <button className="sm:block md:hidden" onClick={openDialog}>
        <svg height={40} width={40} className="mr-4">
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              className="fill-gold w-full h-1"
              x="0"
              y={`${i * 33}%`}
              rx={3}
            />
          ))}
        </svg>
      </button>

      {createPortal(
        <>
          {/* {modalRef.current?.open && (
            <div className="h-screen w-screen fixed top-0 left-0 z-50" />
          )} */}
          <dialog
            ref={modalRef}
            className="backdrop:backdrop-blur-sm backdrop:overscroll-contain open:bg-red w-60 fixed py-5 top-0 right-0 z-40 rounded-md border-4 border-gold border-double"
            onClick={() => modalRef.current?.close()}
            onClose={() => setIsOpen(false)}
          >
            <div>
              <ul className="flex-col justify-evenly gap-4 md:flex flex-1 text-center text-gold">
                {props.menuItems.map((item) => (
                  <li key={item.path} className="my-3">
                    <Link
                      href={item.path}
                      className="font-debonair text-gold text-3xl hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </dialog>
        </>,
        document.body
      )}
    </>
  );
};
