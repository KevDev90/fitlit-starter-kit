const randomUser = Math.ceil(Math.random() * 50);
const userRepository = new UserRepository(userData);
const user = new User(userRepository.getUserData(randomUser));
const hydration = new Hydration(hydrationData);
const hydrationRepo = new HydrationRepository(hydrationData);


function populateUserInfo() {
  document.getElementById("user-name").innerText = user.returnUserFirstName();
  document.getElementById('user-address').innerText = user.address;
  document.getElementById('user-email').innerText = user.email;
  document.getElementById('user-stride').innerText = user.strideLength;
  document.getElementById('user-step-goal').innerText = user.dailyStepGoal;
  document.getElementById('user-friends').innerText = user.findFriendsNames(userData);
}

populateUserInfo();

function populateCurrentDate() {
  var today;
  var dd = '05'
  var mm = '07'
  var yyyy = '2019'
  today = mm + '/' + dd + '/' + yyyy;
  document.getElementById('current-date').innerText = today;
  return today;
}

function populateHydrationInfo() {
  document.getElementById('hydration-today').innerText = `${hydration.getDailyHydration(user.id, '2019/07/05')} Ounces!`;
  document.getElementById('weeks-water').innerText = hydration.getWeeklyHydration(user.id, '2019/07/05')
}

populateHydrationInfo();

function calcStepPercentage() {
  document.getElementById('step-goal-comparison').innerText = user.dailyStepGoal;
  document.getElementById('all-user-step-goal').innerText = userRepository.calcAverageStepGoal();
}

calcStepPercentage();

populateCurrentDate();

//
