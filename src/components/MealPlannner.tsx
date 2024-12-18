'use client'

import { useState } from 'react'
import React from 'react';
import { Food, foodDatabase } from '../lib/foodDatabase'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export default function MealPlanner() {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null)
  const [amount, setAmount] = useState(100)
  const [mealPlan, setMealPlan] = useState<Array<{ food: Food; amount: number }>>([])

  const addToMealPlan = () => {
    if (selectedFood) {
      setMealPlan([...mealPlan, { food: selectedFood, amount }])
      setSelectedFood(null)
      setAmount(100)
    }
  }

  const removeFromMealPlan = (index: number) => {
    setMealPlan(mealPlan.filter((_, i) => i !== index))
  }

  const totalNutrition = mealPlan.reduce((acc, { food, amount }) => {
    const scale = amount / 100
    return {
      calories: acc.calories + food.nutritionPer100g.calories * scale,
      protein: acc.protein + food.nutritionPer100g.protein * scale,
      carbs: acc.carbs + food.nutritionPer100g.carbs * scale,
      fat: acc.fat + food.nutritionPer100g.fat * scale,
      fiber: acc.fiber + food.nutritionPer100g.fiber * scale,
    }
  }, { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 })

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Food to Meal Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Select onValueChange={(value) => setSelectedFood(foodDatabase.find(f => f.id === value) || null)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a food" />
              </SelectTrigger>
              <SelectContent>
                {foodDatabase.map(food => (
                  <SelectItem key={food.id} value={food.id}>{food.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="Amount (g)"
              className="w-24"
            />
            <Button onClick={addToMealPlan} disabled={!selectedFood}>Add</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Meal Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Food</TableHead>
                <TableHead>Amount (g)</TableHead>
                <TableHead>Calories</TableHead>
                <TableHead>Protein (g)</TableHead>
                <TableHead>Carbs (g)</TableHead>
                <TableHead>Fat (g)</TableHead>
                <TableHead>Fiber (g)</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mealPlan.map(({ food, amount }, index) => {
                const scale = amount / 100
                return (
                  <TableRow key={index}>
                    <TableCell>{food.name}</TableCell>
                    <TableCell>{amount}</TableCell>
                    <TableCell>{(food.nutritionPer100g.calories * scale).toFixed(1)}</TableCell>
                    <TableCell>{(food.nutritionPer100g.protein * scale).toFixed(1)}</TableCell>
                    <TableCell>{(food.nutritionPer100g.carbs * scale).toFixed(1)}</TableCell>
                    <TableCell>{(food.nutritionPer100g.fat * scale).toFixed(1)}</TableCell>
                    <TableCell>{(food.nutritionPer100g.fiber * scale).toFixed(1)}</TableCell>
                    <TableCell>
                      <Button variant="destructive" onClick={() => removeFromMealPlan(index)}>Remove</Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Nutrition</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Calories</TableCell>
                <TableCell>{totalNutrition.calories.toFixed(1)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Protein</TableCell>
                <TableCell>{totalNutrition.protein.toFixed(1)}g</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Carbs</TableCell>
                <TableCell>{totalNutrition.carbs.toFixed(1)}g</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fat</TableCell>
                <TableCell>{totalNutrition.fat.toFixed(1)}g</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fiber</TableCell>
                <TableCell>{totalNutrition.fiber.toFixed(1)}g</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )}

