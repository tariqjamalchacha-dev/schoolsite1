"use client";

import { useState, useEffect } from "react";
import { Check, Settings, Text } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type FontSize = "normal" | "large" | "xl";

export function AccessibilityOptions() {
  const [fontSize, setFontSize] = useState<FontSize>("normal");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("font-size-normal", "font-size-large", "font-size-xl");
    root.classList.add(`font-size-${fontSize}`);
  }, [fontSize]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Accessibility Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Accessibility</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuRadioGroup value={fontSize} onValueChange={(value) => setFontSize(value as FontSize)}>
          <div className="flex items-center px-2 py-1.5 text-sm font-medium">
            <Text className="mr-2 h-4 w-4" />
            <span>Font Size</span>
          </div>
          <DropdownMenuRadioItem value="normal">
            <span className="flex-1">Normal</span>
            <Check className="h-4 w-4" />
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="large">
            <span className="flex-1">Large</span>
            <Check className="h-4 w-4" />
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="xl">
            <span className="flex-1">Extra Large</span>
            <Check className="h-4 w-4" />
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
