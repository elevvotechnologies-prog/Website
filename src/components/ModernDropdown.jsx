import React, { useState, useRef, useEffect } from 'react';

export default function ModernDropdown({ value, onChange, options = [], optionLabel = 'name', placeholder = 'Select...', showClear = true, className = '' }) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const rootRef = useRef(null);

  const items = options.map((opt) => (typeof opt === 'object' ? opt : { name: opt, value: opt }));

  const selectedLabel = (() => {
    const found = items.find((it) => it.value === value);
    return found ? (found[optionLabel] || found.name) : '';
  })();

  useEffect(() => {
    function onDoc(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  useEffect(() => {
    if (!open) setHighlight(-1);
  }, [open]);

  function handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!open) return setOpen(true);
      setHighlight((h) => Math.min(h + 1, items.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!open) return setOpen(true);
      if (highlight >= 0) {
        onChange(items[highlight].value);
        setOpen(false);
      }
    }
    if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className={`modern-dropdown ${className} ${value ? 'has-value' : ''}`}>
      <button
        type="button"
        className="md-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        onKeyDown={handleKeyDown}
      >
        <span className="md-label">{selectedLabel || placeholder}</span>
        {value && showClear ? (
          <button
            type="button"
            className="md-clear"
            aria-label="Clear selection"
            onClick={(e) => {
              e.stopPropagation();
              onChange(null);
              setOpen(false);
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L18 18M6 18L18 6" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        ) : (
          <span className="md-chevron" aria-hidden>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 7L11 1" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        )}
      </button>

      {open && (
        <ul className="md-list" role="listbox">
          {items.map((it, idx) => (
            <li
              key={String(it.value) + idx}
              role="option"
              aria-selected={value === it.value}
              className={`md-item ${highlight === idx ? 'active' : ''} ${value === it.value ? 'selected' : ''}`}
              onMouseEnter={() => setHighlight(idx)}
              onClick={() => {
                onChange(it.value);
                setOpen(false);
              }}
            >
              {it[optionLabel] || it.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
