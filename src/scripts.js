// const randomUser = Math.ceil(Math.random() * 50);
// const userRepository = new UserRepository(userData);
// const user = new User(userRepository.getUserData(randomUser));
// const hydration = new Hydration(hydrationData);
// const hydrationRepo = new HydrationRepository(hydrationData);
// const sleep = new Sleep(sleepData);
// const sleepRepo = new SleepRepository(sleepData);
// const activityRepo = new ActivityRepository(activityData);
// const activity = new Activity(activityRepo.getUserById(user.id), user);
// const date = '2019/07/05';
//
// function populateUserInfo() {
//   document.getElementById("user-name").innerText = user.returnUserFirstName();
//   document.getElementById('user-address').innerText = user.address;
//   document.getElementById('user-email').innerText = user.email;
//   document.getElementById('user-stride').innerText = user.strideLength;
//   document.getElementById('user-step-goal').innerText = user.dailyStepGoal;
//   document.getElementById('user-friends').innerText = user.findFriendsNames(userData);
// }
//
// populateUserInfo();
//
// function populateCurrentDate() {
//   var today;
//   var dd = '05'
//   var mm = '07'
//   var yyyy = '2019'
//   today = mm + '/' + dd + '/' + yyyy;
//   document.getElementById('current-date').innerText = today;
//   return today;
// }
//
// function populateHydrationInfo() {
//   document.getElementById('hydration-today').innerText = `${hydration.getDailyHydration(user.id, '2019/07/05')} Ounces!`;
//   // document.getElementById('weeks-water').innerText = hydration.getWeeklyHydration(user.id, '2019/07/05')
// }
//
// populateHydrationInfo();
//
// populateCurrentDate();
//
// function populateDailySleep() {
//   document.getElementById('days-sleep').innerText = sleep.getSleepHoursByDate(user.id, '2019/07/05');
//   document.getElementById('days-sleep-quality').innerText = sleep.getSleepQualityByDate(user.id, '2019/07/05');
// }
//
// function populateWeeklySleep() {
//   document.getElementById('weeks-sleep-hours').innerText = sleep.getSleepHoursByWeek(user.id, '2019/07/05');
//   document.getElementById('weeks-sleep-quality').innerText = sleep.getSleepQualityByWeek(user.id, '2019/07/05');
// }
//
// function populateAllTimeSleep() {
//   document.getElementById('all-time-sleep-hours').innerText = sleep.getAvgSleepQuality(user.id);
//   document.getElementById('all-time-sleep-quality').innerText = sleep.getAvgDailySleepHours(user.id);
// }
//
// populateWeeklySleep();
//
// populateDailySleep();
//
// populateAllTimeSleep()
//
// function populateActivityInfo() {
//   document.getElementById('recent-steps').innerText = activity.getDailyActivityStatForDate('numSteps', date);
//   document.getElementById('recent-minutes-active').innerText = activity.getDailyActivityStatForDate('minutesActive', date);
//   document.getElementById('recent-stairs-count').innerText = activity.getDailyActivityStatForDate('flightsOfStairs', date);
//   document.getElementById('weekly-step-count').innerText = activity.getStepsWalkedByWeek(date);
//   document.getElementById('weekly-stairs-count').innerText = activity.getWeeklyActivityByMinutes('flightsOfStairs', date);
//   document.getElementById('weekly-minutes-active').innerText = activity.getWeeklyActivityByMinutes('minutesActive', date);
//   document.getElementById('recent-avg-steps').innerText = activityRepo.getAllAvgActivityByDate('numSteps', date);
//   document.getElementById('recent-avg-minutes-active').innerText = activityRepo.getAllAvgActivityByDate('minutesActive', date);
//   document.getElementById('recent-avg-stairs-count').innerText = activityRepo.getAllAvgActivityByDate('flightsOfStairs', date);
//   document.getElementById('recent-miles-walked').innerText = activity.getMilesWalked(date);
//   document.getElementById('weekly-total-steps').innerText = activity.getTotalStepsByWeek(date);
//   document.getElementById('three-day-step-streak').innerText = activityRepo.getStepIncreaseOverThreeDays('numSteps', user.id);
// }
//
// populateActivityInfo()
//
// function showStepChallengeWinner() {
//   let challengeWinner = document.getElementById('weekly-step-challenge');
//   user.getFriendSteps(userData, activityData, '2019/07/05')
//   user.findStepChallengeWinner();
//   if(user.friendSteps[0].weeklySteps > activity.getTotalStepsByWeek('2019/07/05')) {
//     challengeWinner.innerText = `Nice try, but your friend ${user.friendSteps[0].friendName} won your weekly step challenge with ${user.friendSteps[0].weeklySteps} steps!`
//   } else {
//     challengeWinner.innerText = 'Congratulations! You beat your friends in your weekly step challenge!'
//   }
// }
//
// showStepChallengeWinner();
//
// //
// var ctx = document.getElementById('myChart');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Your Daily Steps', 'Your Daily Step Goal', 'Average User Steps', 'Average User Step Goal' ],
//         datasets: [{
//             label: 'Daily Steps Stats',
//             data: [activity.getDailyActivityStatForDate('numSteps', date), user.dailyStepGoal , activityRepo.getAllAvgActivityByDate('numSteps', date) , userRepository.calcAverageStepGoal() ],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(153, 102, 255, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// var ctx2 = document.getElementById('myChart2');
// var myChart2 = new Chart(ctx2, {
//     type: 'line',
//     data: {
//         labels: ['June 29', 'June 30', 'July 1', 'July 2', 'July 3', 'July 4', 'July 5'],
//         datasets: [{
//             label: 'Your Weekly Water (Ounces)',
//             data: [hydration.getWeeklyHydration(user.id, date)[0], hydration.getWeeklyHydration(user.id, date)[1], hydration.getWeeklyHydration(user.id, date)[2], hydration.getWeeklyHydration(user.id, date)[3], hydration.getWeeklyHydration(user.id, date)[4], hydration.getWeeklyHydration(user.id, date)[5], hydration.getWeeklyHydration(user.id, date)[6]],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// var ctx3 = document.getElementById('myChart3');
// var myChart3 = new Chart(ctx3, {
//     type: 'line',
//     data: {
//         labels: ['June 29', 'June 30', 'July 1', 'July 2', 'July 3', 'July 4', 'July 5'],
//         datasets: [{
//             label: 'Your Weekly Sleep (hours)',
//             data: [sleep.getSleepHoursByWeek(user.id, date)[0], sleep.getSleepHoursByWeek(user.id, date)[1], sleep.getSleepHoursByWeek(user.id, date)[2], sleep.getSleepHoursByWeek(user.id, date)[3], sleep.getSleepHoursByWeek(user.id, date)[4], sleep.getSleepHoursByWeek(user.id, date)[5], sleep.getSleepHoursByWeek(user.id, date)[6]],
//             backgroundColor: [
//                 'rgba(60, 155, 255, 0.5)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
//
// var ctx10 = document.getElementById('myChart10');
// var myChart10 = new Chart(ctx10, {
//     type: 'bar',
//     data: {
//         labels: ['Your Minutes Active', 'Average User Minutes Active', 'Your Average Minutes Active per Week' ],
//         datasets: [{
//             label: 'Minutes Active',
//             data: [activity.getDailyActivityStatForDate('minutesActive', date), activityRepo.getAllAvgActivityByDate('minutesActive', date), activity.getWeeklyActivityByMinutes('minutesActive', date)],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(153, 102, 255, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//
// var ctx11 = document.getElementById('myChart11');
// var myChart11 = new Chart(ctx11, {
//     type: 'bar',
//     data: {
//         labels: ['Your Daily Stairs Climbed', 'Average User Stairs Climbed' ],
//         datasets: [{
//             label: 'Daily Stairs Climbed',
//             data: [activity.getDailyActivityStatForDate('flightsOfStairs', date), activityRepo.getAllAvgActivityByDate('flightsOfStairs', date)],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(153, 102, 255, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
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
  document.getElementById('user-friends').innerText = user.findFriendsNames(userData).join(', ');
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
populateCurrentDate();
function populateActivityInfo() {
  document.getElementById('three-day-step-streak').innerText = activityRepo.getStepIncreaseOverThreeDays('numSteps', user.id);
}
populateActivityInfo()
function showStepChallengeWinner() {
  let challengeWinner = document.getElementById('weekly-step-challenge');
  user.getFriendSteps(userData, activityData, '2019/07/05')
  user.findStepChallengeWinner();
  if(user.friendSteps[0].weeklySteps > activity.getTotalStepsByWeek('2019/07/05')) {
    challengeWinner.innerText = `Nice try, but your friend ${user.friendSteps[0].friendName} won your weekly step challenge with ${user.friendSteps[0].weeklySteps} steps!`
  } else {
    challengeWinner.innerText = 'Congratulations! You beat your friends in your weekly step challenge!'
  }
}
showStepChallengeWinner();
function showTodaysWaterAndMiles() {
  document.getElementById('hydration-today').innerText = `${hydration.getDailyHydration(user.id, date)} oz`;
  document.getElementById('miles-today').innerText = activity.getMilesWalked(date);
}
showTodaysWaterAndMiles()
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Your Daily Steps', 'Your Daily Step Goal', 'Average User Steps', 'Average User Step Goal' ],
        datasets: [{
            label: 'Daily Steps Stats',
            data: [activity.getDailyActivityStatForDate('numSteps', date), user.dailyStepGoal , activityRepo.getAllAvgActivityByDate('numSteps', date) , userRepository.calcAverageStepGoal() ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx4 = document.getElementById('myChart4');
var myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['June 29','June, 30','July 1','July 2','July 3','July 4','July 5'],
        datasets: [{
            label: 'Weekly Sleep Quality',
            data: [sleep.getSleepQualityByWeek(user.id, '2019/07/05')[0], sleep.getSleepQualityByWeek(user.id, '2019/07/05')[1], sleep.getSleepQualityByWeek(user.id, '2019/07/05')[2], sleep.getSleepQualityByWeek(user.id, '2019/07/05')[3], sleep.getSleepQualityByWeek(user.id, '2019/07/05')[4], sleep.getSleepQualityByWeek(user.id, '2019/07/05')[5], sleep.getSleepQualityByWeek(user.id, '2019/07/05')[6]],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx5 = document.getElementById('myChart5');
var myChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Todays sleep hours', 'All Time Avg Sleep Hours'],
        datasets: [{
            label: 'Sleep hours',
            data: [sleep.getSleepHoursByDate(user.id, '2019/07/05'), sleep.getAvgDailySleepHours(user.id)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx6 = document.getElementById('myChart6');
var myChart6 = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['Todays Sleep Quality', 'All Time Avg Sleep Quality'],
        datasets: [{
            label: 'Sleep Quality',
            data: [sleep.getSleepQualityByDate(user.id, '2019/07/05'), sleep.getAvgSleepQuality(user.id)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx7 = document.getElementById('myChart7');
var myChart7 = new Chart(ctx7, {
    type: 'line',
    data: {
        labels: ['June 29','June, 30','July 1','July 2','July 3','July 4','July 5'],
        datasets: [{
            label: 'Weekly Step Count',
            data: [activity.getStepsWalkedByWeek(date)[0], activity.getStepsWalkedByWeek(date)[1], activity.getStepsWalkedByWeek(date)[2], activity.getStepsWalkedByWeek(date)[3], activity.getStepsWalkedByWeek(date)[4], activity.getStepsWalkedByWeek(date)[5], activity.getStepsWalkedByWeek(date)[6]],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx8 = document.getElementById('myChart8');
var myChart8 = new Chart(ctx8, {
    type: 'line',
    data: {
        labels: ['June 29','June, 30','July 1','July 2','July 3','July 4','July 5'],
        datasets: [{
            label: 'Weekly Flights of Stairs',
            data: [activity.getStairsClimbedByWeek(date)[0], activity.getStairsClimbedByWeek(date)[1], activity.getStairsClimbedByWeek(date)[2], activity.getStairsClimbedByWeek(date)[3], activity.getStairsClimbedByWeek(date)[4], activity.getStairsClimbedByWeek(date)[5], activity.getStairsClimbedByWeek(date)[6],],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx9 = document.getElementById('myChart9');
var myChart9 = new Chart(ctx9, {
    type: 'bar',
    data: {
        labels: ['Todays Number of Steps for User', 'Todays Avg Number of Steps for All Users'],
        datasets: [{
            label: '# of Votes',
            data: [activity.getDailyActivityStatForDate('numSteps', date), activityRepo.getAllAvgActivityByDate('numSteps', date)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
