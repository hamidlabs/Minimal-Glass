"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CardWrapper from "@/components/cardwrapper";
import ProductCardConfigure from "@/components/single-collection/product-card-configure";
export default function GlassForm() {
  return (
    <CardWrapper>
      {" "}
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

        <div>
          <RadioGroup className="flex items-center gap-2">
            <RadioGroupItem value="bkash" id="r3" />
            <Label htmlFor="r3">Bkash</Label>
            <RadioGroupItem value="nagad" id="r3" />
            <Label htmlFor="r3">Nagad</Label>
          </RadioGroup>
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

<ProductCardConfigure />
        
      </div>
    </CardWrapper>
  );
}
