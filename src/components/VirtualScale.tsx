'use client'

import { useState } from 'react'
import React from 'react';
import { Food } from '../lib/foodDatabase'
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import NutritionTable from './NutritionTable'

interface VirtualScaleProps {
  food: Food
}

export default function VirtualScale({ food }: VirtualScaleProps) {
  const [amount, setAmount] = useState<string>('100')

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  const parsedAmount = amount === '' ? 0 : parseFloat(amount)

  return (
    <div className="mt-4">
      <div className="flex items-center space-x-2">
        <Label htmlFor="amount">Amount (g):</Label>
        <Input
          id="amount"
          type="text"
          inputMode="decimal"
          value={amount}
          onChange={handleAmountChange}
          className="w-24"
          aria-label="Enter amount in grams"
        />
      </div>
      <div className="mt-4">
        <NutritionTable food={food} amount={parsedAmount} />
      </div>
    </div>
  )
}

