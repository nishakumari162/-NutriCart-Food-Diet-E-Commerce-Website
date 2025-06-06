document.addEventListener("DOMContentLoaded", function () {
  const age = parseInt(localStorage.getItem("userAge")) || 22;
  const goal = localStorage.getItem("userGoal") || "general";

  const greeting = document.getElementById("greeting");
  greeting.textContent = ("Welcome to your personalized diet plan for goal: ${goal.toUpperCase()} (Age: ${age}");

  const dietPlans = {
    general: {
      breakfast: ["Oats with fruits", "Boiled eggs", "Green tea"],
      lunch: ["2 Rotis", "Dal", "Veg curry", "Salad"],
      snacks: ["Fruit bowl", "Lassi", "Roasted chana"],
      dinner: ["Vegetable soup", "Brown rice", "Curd"]
    },
    loss: {
      breakfast: ["Lemon water", "Sprouts", "1 Apple"],
      lunch: ["1 Roti", "Grilled veggies", "Tofu", "Salad"],
      snacks: ["Cucumber sticks", "Herbal tea"],
      dinner: ["Quinoa", "Steamed broccoli", "Soup"]
    },
    gain: {
      breakfast: ["Banana shake", "Omelette", "Dry fruits"],
      lunch: ["Paneer curry", "Rice", "3 Rotis", "Curd"],
      snacks: ["Peanut butter toast", "Milkshake"],
      dinner: ["Chicken/Pulses", "Chapati", "Boiled potatoes"]
    }
  };

  // Pick the correct plan
  const selectedPlan = dietPlans[goal];

  // Helper to render list items
  const populateList = (id, items) => {
    const ul = document.getElementById(id);
    ul.innerHTML = "";
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  };

  // Populate each section
  populateList("breakfastList", selectedPlan.breakfast);
  populateList("lunchList", selectedPlan.lunch);
  populateList("snackList", selectedPlan.snacks);
  populateList("dinnerList", selectedPlan.dinner);
  
});