"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
export default function GlassForm() {
  return (
    <div className="flex flex-col space-y-5  ">
      <Input placeholder="Enter glass type" variant="default" />
      <Input placeholder="Enter glass type" variant="bordered" />
      <Input placeholder="Enter glass type" variant="borderless" />

      <div className="inline-block items-center gap-2 justify-center">
      <Button
        variant="underline"
 
      >
    <ArrowLeft className="size-4"/>
        Continue shopping
      </Button>
      </div>    
    </div>
  );
}
