import React from 'react';
import './App.css';
import FoodExplorer from './components/FoodExplorer'
import MealPlanner from './components/MealPlannner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"

function App() {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Nutrition Tracker</h1>
    <Tabs defaultValue="explore">
      <TabsList>
        <TabsTrigger value="explore">Explore Foods</TabsTrigger>
        <TabsTrigger value="plan">Meal Planner</TabsTrigger>
      </TabsList>
      <TabsContent value="explore">
        <FoodExplorer />
      </TabsContent>
      <TabsContent value="plan">
        <MealPlanner />
      </TabsContent>
    </Tabs>
  </div>
  );
}

export default App;
