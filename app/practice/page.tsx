'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ArrowLeft } from 'lucide-react'
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

			<div>
				<RadioGroup className="flex items-center gap-2">
					<RadioGroupItem value="bkash" id="r3" />
					<Label htmlFor="r3">Bkash</Label>
					<RadioGroupItem value="nagad" id="r3" />
					<Label htmlFor="r3">Nagad</Label>
				</RadioGroup>
			</div>
		</div>
	)
}
