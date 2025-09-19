"use client";
import { RadioGroupItem ,RadioGroup} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { CustomRadioGroup, CustomRadioItem } from "@/components/ui/radio-group";
export default function GlassForm() {
  return (
    <div className="flex flex-col space-y-5  ">
      <Input placeholder="Enter glass type" variant="default" />
      <Input placeholder="Enter glass type" variant="bordered" />
      <Input placeholder="Enter glass type" variant="borderless" />

      <div className="inline-block items-center gap-2 justify-center">
        <Button variant="underline">
          <ArrowLeft className="size-4" />
          Continue shopping
        </Button>
      </div>
      
      <div className="flex items-center gap-3">
        <CustomRadioGroup className="flex items-center gap-2">
        <CustomRadioItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
        </CustomRadioGroup>
      </div>

      
      <div>
        <RadioGroup className="flex items-center gap-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </RadioGroup>
      </div>
      <div>
        <RadioGroup className="flex items-center gap-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </RadioGroup>
      </div>
     
    </div>
  );
}
