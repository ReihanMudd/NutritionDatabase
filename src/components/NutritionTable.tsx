import { Food } from '../lib/foodDatabase'
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

interface NutritionTableProps {
  food: Food
  amount?: number
}

export default function NutritionTable({ food, amount = 100 }: NutritionTableProps) {
  const scale = amount / 100

  if (amount === 0) {
    return (
      <p className="text-muted-foreground">Enter an amount to see nutrition information.</p>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nutrient</TableHead>
          <TableHead className="text-right">Amount (per {amount}g)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Calories</TableCell>
          <TableCell className="text-right">{(food.nutritionPer100g.calories * scale).toFixed(1)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Protein</TableCell>
          <TableCell className="text-right">{(food.nutritionPer100g.protein * scale).toFixed(1)}g</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Carbs</TableCell>
          <TableCell className="text-right">{(food.nutritionPer100g.carbs * scale).toFixed(1)}g</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fat</TableCell>
          <TableCell className="text-right">{(food.nutritionPer100g.fat * scale).toFixed(1)}g</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fiber</TableCell>
          <TableCell className="text-right">{(food.nutritionPer100g.fiber * scale).toFixed(1)}g</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

