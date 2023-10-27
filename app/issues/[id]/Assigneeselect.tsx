'use client';
import { Select } from '@radix-ui/themes'
import React from 'react'

const Assigneeselect = () => {
  return (
    <Select.Root>
        <Select.Trigger placeholder='Assign...'/>
        <Select.Content>
            <Select.Group>
                <Select.Label>Suggesions</Select.Label>
                <Select.Item value='1'>Jaspal Singh</Select.Item>
            </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default Assigneeselect