"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleSearch = () => {
    if (search) {
      const formattedSearch = `${encodeURIComponent(search.toString().trim())}`;
      router.push(`/search?article=${formattedSearch}`);
    } else {
      alert("Please enter an article name.");
    }
  };

  return (
    <div
      onClick={() => ref?.current?.focus()}
      className="relative max-w-[600px] flex justify-between border border-[rgba(47,50,58,0.10)] bg-white rounded-[26px] mx-auto mt-10 cursor-pointer"
    >
      <div className="flex items-center gap-4 py-3 px-4 sm:gap-3 sm:px-6">
        <input
          ref={ref}
          type="text"
          placeholder="Find an article"
          className="shrink max-w-[600px] outline-none placeholder:text-dark/20"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
      <Button
        onClick={handleSearch}
        className="absolute right-0 translate-x-px -translate-y-px "
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
