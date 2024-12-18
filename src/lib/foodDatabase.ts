export interface Food {
    id: string;
    name: string;
    foodGroup: string;
    nutritionPer100g: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
      fiber: number;
    };
  }
  
  export const foodDatabase: Food[] = [
    // Proteins
    {
      id: '1',
      name: 'Chicken Breast',
      foodGroup: 'Proteins',
      nutritionPer100g: {
        calories: 165,
        protein: 31,
        carbs: 0,
        fat: 3.6,
        fiber: 0,
      },
    },
    {
      id: '2',
      name: 'Salmon',
      foodGroup: 'Proteins',
      nutritionPer100g: {
        calories: 208,
        protein: 20,
        carbs: 0,
        fat: 13,
        fiber: 0,
      },
    },
    {
      id: '3',
      name: 'Tofu',
      foodGroup: 'Proteins',
      nutritionPer100g: {
        calories: 144,
        protein: 17,
        carbs: 3,
        fat: 8,
        fiber: 2,
      },
    },
    {
      id: '4',
      name: 'Greek Yogurt',
      foodGroup: 'Proteins',
      nutritionPer100g: {
        calories: 59,
        protein: 10,
        carbs: 3.6,
        fat: 0.4,
        fiber: 0,
      },
    },
  
    // Healthy Fats
    {
      id: '5',
      name: 'Avocado',
      foodGroup: 'Healthy Fats',
      nutritionPer100g: {
        calories: 160,
        protein: 2,
        carbs: 9,
        fat: 15,
        fiber: 7,
      },
    },
    {
      id: '6',
      name: 'Almonds',
      foodGroup: 'Healthy Fats',
      nutritionPer100g: {
        calories: 579,
        protein: 21,
        carbs: 22,
        fat: 49,
        fiber: 12.5,
      },
    },
    {
      id: '7',
      name: 'Olive Oil',
      foodGroup: 'Healthy Fats',
      nutritionPer100g: {
        calories: 884,
        protein: 0,
        carbs: 0,
        fat: 100,
        fiber: 0,
      },
    },
    {
      id: '8',
      name: 'Chia Seeds',
      foodGroup: 'Healthy Fats',
      nutritionPer100g: {
        calories: 486,
        protein: 17,
        carbs: 42,
        fat: 31,
        fiber: 34,
      },
    },
  
    // Carbs
    {
      id: '9',
      name: 'Brown Rice',
      foodGroup: 'Carbs',
      nutritionPer100g: {
        calories: 112,
        protein: 2.6,
        carbs: 24,
        fat: 0.9,
        fiber: 1.8,
      },
    },
    {
      id: '10',
      name: 'Sweet Potato',
      foodGroup: 'Carbs',
      nutritionPer100g: {
        calories: 86,
        protein: 1.6,
        carbs: 20,
        fat: 0.1,
        fiber: 3,
      },
    },
    {
      id: '11',
      name: 'Quinoa',
      foodGroup: 'Carbs',
      nutritionPer100g: {
        calories: 120,
        protein: 4.4,
        carbs: 21,
        fat: 1.9,
        fiber: 2.8,
      },
    },
    {
      id: '12',
      name: 'Oats',
      foodGroup: 'Carbs',
      nutritionPer100g: {
        calories: 389,
        protein: 16.9,
        carbs: 66,
        fat: 6.9,
        fiber: 10.6,
      },
    },
  
    // Vegetables
    {
      id: '13',
      name: 'Broccoli',
      foodGroup: 'Vegetables',
      nutritionPer100g: {
        calories: 34,
        protein: 2.8,
        carbs: 7,
        fat: 0.4,
        fiber: 2.6,
      },
    },
    {
      id: '14',
      name: 'Spinach',
      foodGroup: 'Vegetables',
      nutritionPer100g: {
        calories: 23,
        protein: 2.9,
        carbs: 3.6,
        fat: 0.4,
        fiber: 2.2,
      },
    },
    {
      id: '15',
      name: 'Bell Pepper',
      foodGroup: 'Vegetables',
      nutritionPer100g: {
        calories: 31,
        protein: 1,
        carbs: 6,
        fat: 0.3,
        fiber: 2.1,
      },
    },
    {
      id: '16',
      name: 'Carrots',
      foodGroup: 'Vegetables',
      nutritionPer100g: {
        calories: 41,
        protein: 0.9,
        carbs: 10,
        fat: 0.2,
        fiber: 2.8,
      },
    },
  ];
  
  export const foodGroups = Array.from(new Set(foodDatabase.map(food => food.foodGroup)));
  
  