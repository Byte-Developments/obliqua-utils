"use client";

import { Copy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface WindowFrameProps {
  children: React.ReactNode;
}

export function WindowFrame({ children }: WindowFrameProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-[#282C34] shadow-xl">
      <div className="flex items-center justify-between px-4 py-3 bg-[#21252B] border-b border-[#181A1F]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            className="h-7 px-2 text-white/70 hover:text-white hover:bg-white/10"
            onClick={() => {
              const editor = document.querySelector('.cm-content');
              if (editor) {
                navigator.clipboard.writeText(editor.textContent || '');
                toast.success("Code copied to clipboard!");
              }
            }}
          >
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="h-7 px-2 text-white/70 hover:text-white hover:bg-white/10"
            onClick={() => {
              const editor = document.querySelector('.cm-editor') as any;
              if (editor?.view) {
                editor.view.dispatch({
                  changes: { from: 0, to: editor.view.state.doc.length, insert: '' }
                });
                toast.success("Editor cleared!");
              }
            }}
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            Clear
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
}