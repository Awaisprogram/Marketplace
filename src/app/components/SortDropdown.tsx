"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiCheck } from "react-icons/fi";

export type SortOption = "popularity" | "featured" | "price-low" | "price-high" | "newest";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popularity", label: "Popularity" },
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
];

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = sortOptions.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center justify-between gap-3 min-w-[170px] px-4 py-2 border rounded-md text-sm bg-white transition-colors duration-200 ${
          open
            ? "border-Color ring-1 ring-Color"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <span className="text-gray-800">{selected?.label}</span>
        <IoIosArrowDown
          className={`text-gray-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        role="listbox"
        className={`absolute right-0 sm:left-0 top-full mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-30 origin-top transition-all duration-200 ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {sortOptions.map((opt) => {
          const isSelected = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={isSelected}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-left transition-colors duration-150 ${
                isSelected
                  ? "bg-gray-50 text-Color font-semibold"
                  : "text-gray-700 hover:bg-gray-50 hover:text-Color"
              }`}
            >
              {opt.label}
              {isSelected && <FiCheck className="text-Color text-base" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SortDropdown;