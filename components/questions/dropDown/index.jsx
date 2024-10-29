import React from 'react'
import { Field, Label, Select } from '@headlessui/react'
import { Icons } from '@/components/ui/icon'

const DropDown = () => {
  return (
      <Field className="bg-red-100 flex flex-col">
          <Label>Project status</Label>
          <Select name="status" className="border border-borderPrimary appearance-none p-3">
            <Icons.arrowDown className="bg-red-600" />
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="delayed">Delayed</option>
              <option value="canceled">Canceled</option>
          </Select>
      </Field>
  )
}

export default DropDown
