'use client'

import { useState } from 'react'
import React from 'react';
import { foodDatabase, foodGroups, Food } from '../lib/foodDatabase'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import NutritionTable from './NutritionTable'
import VirtualScale from './VirtualScale'

export default function FoodExplorer() {
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined)
  const [selectedFood, setSelectedFood] = useState<Food | undefined>(undefined)

  const filteredFoods = selectedGroup && selectedGroup !== 'all'
    ? foodDatabase.filter(food => food.foodGroup === selectedGroup)
    : foodDatabase

  return (
    <div className="space-y-4">
      <Select onValueChange={(value) => setSelectedGroup(value === 'all' ? undefined : value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select a food group" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Groups</SelectItem>
          {foodGroups.map(group => (
            <SelectItem key={group} value={group}>{group}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFoods.map(food => (
          <Card key={food.id} className="cursor-pointer" onClick={() => setSelectedFood(food)}>
            <CardHeader>
              <CardTitle>{food.name}</CardTitle>
              <CardDescription>{food.foodGroup}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {selectedFood && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>{selectedFood.name}</CardTitle>
            <CardDescription>{selectedFood.foodGroup}</CardDescription>
          </CardHeader>
          <CardContent>
            <NutritionTable food={selectedFood} />
            <VirtualScale food={selectedFood} />
          </CardContent>
        </Card>
      )}
    </div>
  )
}

