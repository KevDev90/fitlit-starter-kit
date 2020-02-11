const randomUser = Math.ceil(Math.random() * 50);
const userRepository = new UserRepository(userData);
const user = new User(userRepository.getUserData(randomUser));
const hydration = new Hydration(hydrationData);
const hydrationRepo = new HydrationRepository(hydrationData);
const sleep = new Sleep(sleepData);
const sleepRepo = new SleepRepository(sleepData);
const activityRepo = new ActivityRepository(activityData);
const activity = new Activity(activityRepo.getUserById(user.id), user);
const date = '2019/07/05';


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

function populateDailySleep() {
  document.getElementById('days-sleep').innerText = sleep.getSleepHoursByDate(user.id, '2019/07/05');
  document.getElementById('days-sleep-quality').innerText = sleep.getSleepQualityByDate(user.id, '2019/07/05');
}

function populateWeeklySleep() {
  document.getElementById('weeks-sleep-hours').innerText = sleep.getSleepHoursByWeek(user.id, '2019/07/05');
  document.getElementById('weeks-sleep-quality').innerText = sleep.getSleepQualityByWeek(user.id, '2019/07/05');
}

function populateAllTimeSleep() {
  document.getElementById('all-time-sleep-hours').innerText = sleep.getAvgSleepQuality(user.id);
  document.getElementById('all-time-sleep-quality').innerText = sleep.getAvgDailySleepHours(user.id);
}

populateWeeklySleep();

populateDailySleep();

populateAllTimeSleep()

function populateActivityInfo() {
  document.getElementById('recent-steps').innerText = activity.getDailyActivityStatForDate('numSteps', date);
  document.getElementById('recent-minutes-active').innerText = activity.getDailyActivityStatForDate('minutesActive', date);
  document.getElementById('recent-stairs-count').innerText = activity.getDailyActivityStatForDate('flightsOfStairs', date);
  document.getElementById('weekly-step-count').innerText = activity.getStepsWalkedByWeek(date);
  document.getElementById('weekly-stairs-count').innerText = activity.getWeeklyActivityByMinutes('flightsOfStairs', date);
  document.getElementById('weekly-minutes-active').innerText = activity.getWeeklyActivityByMinutes('minutesActive', date);
  document.getElementById('recent-avg-steps').innerText = activityRepo.getAllAvgActivityByDate('numSteps', date);
  document.getElementById('recent-avg-minutes-active').innerText = activityRepo.getAllAvgActivityByDate('minutesActive', date);
  document.getElementById('recent-avg-stairs-count').innerText = activityRepo.getAllAvgActivityByDate('flightsOfStairs', date);
  document.getElementById('recent-miles-walked').innerText = activity.getMilesWalked(date);
  document.getElementById('weekly-total-steps').innerText = activity.getTotalStepsByWeek(date);
}

populateActivityInfo()
function showStepChallengeWinner() {
  let challengeWinner = document.getElementById('weekly-step-challenge');
  user.getFriendSteps(userData, activityData, '2019/07/05')
  user.findStepChallengeWinner();
  console.log(user.friendSteps);
  // console.log(activity.getTotalStepsByWeek('2019/07/05'))
  if(user.friendSteps[0].weeklySteps > activity.getTotalStepsByWeek('2019/07/05')) {
    challengeWinner.innerText = `Nice try, but your friend ${user.friendSteps[0].friendName} won your weekly step challenge with ${user.friendSteps[0].weeklySteps} steps!`
  } else {
    challengeWinner.innerText = 'Congratulations! You beat your friends in your weekly step challenge!'
  }
}

showStepChallengeWinner();

//
