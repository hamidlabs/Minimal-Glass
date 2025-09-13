import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronDown, Upload } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    reason: '',
    business: '',
    fieldName: '',
    email: '',
    phone: '',
    city: '',
    message: '',
    attachment: null
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFormData(prev => ({
      ...prev,
      attachment: file
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-[600px] bg-[#1A1A1A] text-white flex items-center justify-center p-4 ">
      <div className="w-full max-w-6xl  p-8 md:flex  justify-center  self-center items-start md:gap-9 ">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-px bg-white"></div>
          <h2 className="text-sm font-light font-medium tracking-wide">
            Contact form
          </h2>
        </div>

        {/* Form Fields */}
        <div className="space-y-6 md:mr-44  p-6">
          {/* Reason for contact */}
          <div className="relative">
            <Select
              onValueChange={(value) => handleInputChange("reason", value)}
            >
              <SelectTrigger className="w-full h-12 bg-transparent border-0 border-b border-zinc-600 rounded-none text-zinc-400 px-0 focus:ring-0 focus:border-zinc-400">
                <div className="flex justify-between items-center w-full">
                  <SelectValue
                    placeholder="Reason for contact"
                    className="text-zinc-400"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">Standard</span>
                  </div>
                </div>
              </SelectTrigger>
              <SelectContent className="bg-[#2A2A2A] border border-zinc-600 text-white">
                <SelectItem
                  value="general"
                  className="text-white hover:bg-zinc-700"
                >
                  General Inquiry
                </SelectItem>
                <SelectItem
                  value="support"
                  className="text-white hover:bg-zinc-700"
                >
                  Technical Support
                </SelectItem>
                <SelectItem
                  value="sales"
                  className="text-white hover:bg-zinc-700"
                >
                  Sales
                </SelectItem>
                <SelectItem
                  value="partnership"
                  className="text-white hover:bg-zinc-700"
                >
                  Partnership
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Private or business */}
          <div className="relative">
            <Select
              onValueChange={(value) => handleInputChange("business", value)}
            >
              <SelectTrigger className="w-full h-12 bg-transparent border-0 border-b border-zinc-600 rounded-none text-zinc-400 px-0 focus:ring-0 focus:border-zinc-400">
                <SelectValue
                  placeholder="Private or business"
                  className="text-zinc-600"
                />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-[#FFFFFF]">
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
              <span className="text-zinc-400 text-xs">Standard</span>
            </div>
          </div>

          {/* Field name */}
          <div>
            <Input
              placeholder="Field name"
              value={formData.fieldName}
              onChange={(e) => handleInputChange("fieldName", e.target.value)}
              className="w-full h-12 bg-transparent border-0 border-b border-zinc-600 rounded-none text-white placeholder:text-zinc-400 px-0 focus-visible:ring-0 focus-visible:border-zinc-400"
            />
          </div>

          {/* Email */}
          <div>
            <Input
              type="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full h-12 bg-transparent border-0 border-b border-zinc-600 rounded-none text-white placeholder:text-zinc-400 px-0 focus-visible:ring-0 focus-visible:border-zinc-400"
            />
          </div>

          {/* Phone */}
          <div>
            <Input
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full h-12 bg-transparent border-0 border-b border-zinc-600 rounded-none text-white placeholder:text-zinc-400 px-0 focus-visible:ring-0 focus-visible:border-zinc-400"
            />
          </div>

          {/* City */}
          <div>
            <Input
              placeholder="Your city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="w-full h-12 bg-transparent border-0 border-b border-zinc-600 rounded-none text-white placeholder:text-zinc-400 px-0 focus-visible:ring-0 focus-visible:border-zinc-400"
            />
          </div>

          {/* Message */}
          <div className="pt-4">
            <Textarea
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="w-full bg-transparent border-0 border-b border-zinc-600 rounded-none text-white placeholder:text-zinc-400 px-0 resize-none focus-visible:ring-0 focus-visible:border-zinc-400 min-h-[100px]"
            />
          </div>

          {/* File upload section */}
          <div className="pt-8">
            <div className="flex items-center gap-4 pb-2">
              <Upload className="h-4 w-4 text-zinc-400" />
              <div className="flex-1">
                <Input
                  placeholder="Field name"
                  className="w-full h-12 bg-transparent border-0 border-b border-zinc-600 rounded-none text-zinc-400 placeholder:text-zinc-400 px-0 focus-visible:ring-0"
                  disabled
                />
              </div>
              <div className="relative">
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.svg"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="bg-transparent border border-[#FAE2D3] text-white hover:bg-zinc-800 hover:border-zinc-500 px-6 py-2 rounded-full text-sm"
                >
                  Browse
                </Button>
              </div>
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              Select a JPG, JPEG, PNG, GIF, SVG, or PDF file.
            </p>
          </div>

          {/* Submit button */}
          <div className="pt-8 flex justify-end">
            <Button
              onClick={handleSubmit}
              className=" text-[#8F6A42] bg-[#1A1A1A] px-8 py-2 rounded-full font-medium text-sm"
            >
              Send
            </Button>
          </div>

          {/* Footer text */}
          <div className="pt-6">
            <p className="text-xs text-zinc-500 leading-relaxed">
              This site is protected by reCAPTCHA and the{" "}
              <a href="#" className="text-[#8F6A42] hover:text-white underline">
                Google Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#8F6A42] hover:text-white underline">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;