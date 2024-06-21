// const budgetInput = document.getElementById('budget-input');
// const expenseList = document.getElementById('expense-list');
// const totalBudget = document.getElementById('total-budget');
// const remainingBalance = document.getElementById('remaining-balance');
// const username = document.getElementById('username');
// const profilePicture = document.getElementById('profile-picture');
// const profilePictureInput = document.getElementById('profile-picture-input');
// const expenseForm = document.getElementById('expense-form');
// const expenseCategoryInput = document.getElementById('expense-category');
// const expenseAmountInput = document.getElementById('expense-amount');

// // User Data (temporary - will be replaced with actual user data)
// let userData = {
//   name: '',
//   profilePicture: '',
//   budget: 0,
//   expenses: [],
//   remainingBalance: 0,
// };

// function loadData() {
//   const storedData = localStorage.getItem('userData');
//   if (storedData) {
//     userData = JSON.parse(storedData);
//     // username.textContent = userData.name;
//     // profilePicture.src = userData.profilePicture || '';
//     totalBudget.textContent = userData.budget.toFixed(2);
//     remainingBalance.textContent = calculateRemainingBalance().toFixed(2);
//     updateExpenseList();
//     updateRemainingBalanceColor();
//   } else {
//     totalBudget.textContent = '0.00';
//     remainingBalance.textContent = '0.00';
//   }
// }

// function saveData() {
//   localStorage.setItem('userData', JSON.stringify(userData));
// }

// function updateBudget(newBudget) {
//   userData.budget = newBudget;
//   totalBudget.textContent = newBudget.toFixed(2);
//   remainingBalance.textContent = calculateRemainingBalance().toFixed(2);
//   saveData();
// }

// // Add event listener to budget input
// budgetInput.addEventListener('input', (e) => {
//   const newBudget = parseFloat(e.target.value);
//   if (!isNaN(newBudget)) {
//     updateBudget(newBudget);
//   }
// });

// function addExpense(category, amount) {
//   if (category && amount > 0) {
//     userData.expenses.push({ category, amount });
//     saveData();
//     updateExpenseList();
//     updateBudgetInfo();
//   }
// }

// function updateExpenseList() {
//   expenseList.innerHTML = '';
//   userData.expenses.forEach((expense) => {
//     const expenseRow = document.createElement('tr');
//     const categoryCell = document.createElement('td');
//     const amountCell = document.createElement('td');
//     const actionCell = document.createElement('td');
//     const deleteButton = document.createElement('button');
//     categoryCell.textContent = expense.category;
//     amountCell.textContent = expense.amount.toFixed(2);
//     deleteButton.textContent = 'Delete';
//     deleteButton.classList.add('delete-button');
//     deleteButton.addEventListener('click', () => confirmDelete(expense.category, expense.amount));
//     actionCell.appendChild(deleteButton);
//     expenseRow.appendChild(categoryCell);
//     expenseRow.appendChild(amountCell);
//     expenseRow.appendChild(actionCell);
//     expenseList.appendChild(expenseRow);
//   });
//   updateRemainingBalanceColor();
// }

// function confirmDelete(category, amount) {
//   if (confirm("Are you sure you want to delete this expense?")) {
//     deleteExpense(category, amount);
//   }
// }

// function calculateRemainingBalance() {
//   const totalExpenses = userData.expenses.reduce((sum, expense) => sum + expense.amount, 0);
//   return userData.budget - totalExpenses;
// }

// function updateBudgetInfo() {
//   const remainingBalanceValue = calculateRemainingBalance();
//   remainingBalance.textContent = remainingBalanceValue.toFixed(2);
//   updateRemainingBalanceColor();
//   // Add zoom effect
//   remainingBalance.classList.add('zoom');
//   setTimeout(() => {
//     remainingBalance.classList.remove('zoom');
//   }, 500);
//   saveData();
// }

// function updateRemainingBalanceColor() {
//   const remainingBalanceValue = calculateRemainingBalance();
//   const totalBudgetValue = userData.budget;
//   if (remainingBalanceValue > 0 ) {
//     remainingBalance.classList.add('green');
//     remainingBalance.classList.remove('red');
//   } else if (remainingBalanceValue < 0 ) {
//     remainingBalance.classList.add('red');
//     remainingBalance.classList.remove('green');
//   }
// }

// expenseForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const category = expenseCategoryInput.value.trim();
//   const amount = parseFloat(expenseAmountInput.value);
//   if (category && !isNaN(amount)) {
//     addExpense(category, amount);
//     expenseCategoryInput.value = '';
//     expenseAmountInput.value = '';
//   }
// });

// // Add event listener to profile picture input
// if (profilePictureInput) {
//   profilePictureInput.addEventListener('change', (e) => {
//     const file = profilePictureInput.files[0];
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       profilePicture.src = e.target.result;
//       userData.profilePicture = e.target.result;
//       saveData();
//     };
//     reader.readAsDataURL(file);
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   loadData();
// });

// function deleteExpense(category, amount) {
//   userData.expenses = userData.expenses.filter((expense) => expense.category !== category || expense.amount !== amount);
//   saveData();
//   updateExpenseList();
//   updateBudgetInfo();
// }


// // =================== FETCHING DASHBOARD DATA ================== //

// const getItemFromLocalStorage = (key) => {
//   return localStorage.getItem(key);
// };

// const getDashboard = async () => {
//   const token = getItemFromLocalStorage('token')
//   if(!token) return location.assign('/sign-in.html')
//   const res = await fetch('https://maduabuchi-001-site1.jtempurl.com/api/DashBoard/Dashboard', {
//     headers: {
//       "Authorization": `Bearer ${token}`
//     }
//   })

//   const response = await res.json()

//   console.log(response)
// }

// getDashboard()




//THIS//
const budgetInput = document.getElementById('budget-input');
const expenseList = document.getElementById('expense-list');
const totalBudget = document.getElementById('total-budget');
const remainingBalance = document.getElementById('remaining-balance');
const expenseForm = document.getElementById('expense-form');
const expenseCategoryInput = document.getElementById('expense-category');
const expenseAmountInput = document.getElementById('expense-amount');

// User Data (temporary - will be replaced with actual user data)
let userData = {
  budget: 0,
  expenses: [],
  remainingBalance: 0,
};

function loadData() {
  const storedData = localStorage.getItem('userData');
  if (storedData) {
    userData = JSON.parse(storedData);
    totalBudget.textContent = userData.budget.toFixed(2);
    remainingBalance.textContent = calculateRemainingBalance().toFixed(2);
    updateExpenseList();
    updateRemainingBalanceColor();
  } else {
    totalBudget.textContent = '0.00';
    remainingBalance.textContent = '0.00';
  }
}

function saveData() {
  localStorage.setItem('userData', JSON.stringify(userData));
}

function updateBudget(newBudget) {
  userData.budget = newBudget;
  totalBudget.textContent = newBudget.toFixed(2);
  remainingBalance.textContent = calculateRemainingBalance().toFixed(2);
  saveData();
}

budgetInput.addEventListener('input', (e) => {
  const newBudget = parseFloat(e.target.value);
  if (!isNaN(newBudget)) {
    updateBudget(newBudget);
  }
});

function addExpense(category, amount) {
  if (category && amount > 0) {
    userData.expenses.push({ category, amount });
    saveData();
    updateExpenseList();
    updateBudgetInfo();
  }
}

function updateExpenseList() {
  expenseList.innerHTML = '';
  userData.expenses.forEach((expense) => {
    const expenseRow = document.createElement('tr');
    const categoryCell = document.createElement('td');
    const amountCell = document.createElement('td');
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount.toFixed(2);
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => confirmDelete(expense.category, expense.amount));
    actionCell.appendChild(deleteButton);
    expenseRow.appendChild(categoryCell);
    expenseRow.appendChild(amountCell);
    expenseRow.appendChild(actionCell);
    expenseList.appendChild(expenseRow);
  });
}

function confirmDelete(category, amount) {
  const confirmed = window.confirm('Are you sure you want to delete this expense?');
  if (confirmed) {
    deleteExpense(category, amount);
  }
}

function deleteExpense(category, amount) {
  userData.expenses = userData.expenses.filter(expense => !(expense.category === category && expense.amount === amount));
  saveData();
  updateExpenseList();
  updateBudgetInfo();
}

function updateBudgetInfo() {
  const remaining = calculateRemainingBalance();
  remainingBalance.textContent = remaining.toFixed(2);
  updateRemainingBalanceColor();
}

function calculateRemainingBalance() {
  const totalExpenses = userData.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return userData.budget - totalExpenses;
}

function updateRemainingBalanceColor() {
  if (parseFloat(remainingBalance.textContent) < 0) {
    remainingBalance.classList.remove('green');
    remainingBalance.classList.add('red');
  } else {
    remainingBalance.classList.remove('red');
    remainingBalance.classList.add('green');
  }
}

expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const category = expenseCategoryInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value.trim());
  if (category && !isNaN(amount) && amount > 0) {
    addExpense(category, amount);
    expenseCategoryInput.value = '';
    expenseAmountInput.value = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadData();
});
