import { Search } from "lucide-react";

export type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Type your search here",
}: SearchBarProps) {
  return (
    <div className="flex items-center bg-white border rounded-full px-4 py-2 shadow-sm">
      <Search className="w-4 h-4 text-gray-400 mr-2" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full outline-none text-sm text-gray-800"
      />
    </div>
  );
}
