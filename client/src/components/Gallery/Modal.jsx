import React, { useEffect, useRef, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";

const Modal = ({ item, onClose }) => {
  const contentRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    // Save last focused element to restore on close
    lastFocusedRef.current = document.activeElement;

    const focusableSelector = [
      "a[href]",
      "area[href]",
      'input:not([disabled]):not([type="hidden"])',
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "iframe",
      "object",
      "embed",
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
    ].join(",");

    const moveFocusIn = () => {
      const root = contentRef.current;
      if (!root) return;
      const focusables = Array.from(root.querySelectorAll(focusableSelector));
      if (focusables.length > 0) {
        focusables[0].focus();
      } else {
        root.setAttribute("tabindex", "-1");
        root.focus();
      }
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose?.();
        return;
      }
      if (e.key === "Tab") {
        const root = contentRef.current;
        if (!root) return;
        const focusables = Array.from(
          root.querySelectorAll(focusableSelector)
        ).filter(
          (el) => el.offsetParent !== null || el === document.activeElement
        );
        if (focusables.length === 0) {
          e.preventDefault();
          root.focus();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    // Delay to ensure element is in DOM post-animate mount
    const focusTimer = setTimeout(moveFocusIn, 0);
    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown, true);
      // Restore focus back to the triggering element
      const prev = lastFocusedRef.current;
      if (prev && typeof prev.focus === "function") {
        prev.focus();
      }
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="modal-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden="true"
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            ref={contentRef}
          >
            <button
              className="modal-close-button"
              onClick={onClose}
              aria-label="Close modal"
              title="Close"
            >
              &times;
            </button>
            <div className="modal-image-container">
              <img src={item.image} alt={item.text} className="modal-image" />
            </div>
            <div className="modal-text-content">
              <h2 id={titleId} className="modal-title">
                {item.text}
              </h2>
              <p id={descId} className="modal-description">
                {item.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
