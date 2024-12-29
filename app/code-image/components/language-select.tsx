"use client";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CODE_LANGUAGES } from "@/lib/constants";

interface LanguageSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function LanguageSelect({ value, onChange }: LanguageSelectProps) {
  return (
    <div className="space-y-2">
      <Label>Language</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {CODE_LANGUAGES.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}