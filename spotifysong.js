const data0 = require('./StreamingHistory_music_0.json') // All data put your own steaming history json
const data1 = require('./StreamingHistory_music_1.json')
const data2 = require('./StreamingHistory_music_2.json')
const data3 = require('./StreamingHistory_music_3.json')
const data4 = require('./StreamingHistory_music_4.json')
const data5 = require('./StreamingHistory_music_5.json')
const data6 = require('./StreamingHistory_music_6.json')
const data7 = require('./StreamingHistory_music_7.json')
const data8 = require('./StreamingHistory_music_8.json')
const data9 = require('./StreamingHistory_music_9.json')
const data10 = require('./StreamingHistory_music_10.json')

let month = "" // Check for month
const song = []
const songMs=[]

Object.entries(data0).forEach((indiv) => { // Run through each object in json
  month = `${indiv[1]['endTime'][5]}${indiv[1]['endTime'][6]}` //stores the current object month
  if (indiv[1]['endTime'][3] === '4' && month !== "11"){ // check if it ends in 4 meaning 2024 and if the month is not 11 meaning only takes from 1 jan to 31 oct
    if (!song.includes(indiv[1]['trackName'])){
      song.push(indiv[1]['trackName'])
      songMs.push(indiv[1]['msPlayed'])
    }
    else {
      songMs[song.indexOf(indiv[1]['trackName'])] += indiv[1]['msPlayed']
    }
  }
});
Object.entries(data1).forEach((indiv) => {
  month = `${indiv[1]['endTime'][5]}${indiv[1]['endTime'][6]}` //stores the current object month
  if (indiv[1]['endTime'][3] === '4' && month !== "11"){ // check if it ends in 4 meaning 2024 and if the month is not 11 meaning only takes from 1 jan to 31 oct
    if (!song.includes(indiv[1]['trackName'])){
      song.push(indiv[1]['trackName'])
      songMs.push(indiv[1]['msPlayed'])
    }
    else {
      songMs[song.indexOf(indiv[1]['trackName'])] += indiv[1]['msPlayed']
    }
  }
});
Object.entries(data2).forEach((indiv) => {
  month = `${indiv[1]['endTime'][5]}${indiv[1]['endTime'][6]}` //stores the current object month
  if (indiv[1]['endTime'][3] === '4' && month !== "11"){ // check if it ends in 4 meaning 2024 and if the month is not 11 meaning only takes from 1 jan to 31 oct
    if (!song.includes(indiv[1]['trackName'])){
      song.push(indiv[1]['trackName'])
      songMs.push(indiv[1]['msPlayed'])
    }
    else {
      songMs[song.indexOf(indiv[1]['trackName'])] += indiv[1]['msPlayed']
    }
  }
});
Object.entries(data3).forEach((indiv) => {
  month = `${indiv[1]['endTime'][5]}${indiv[1]['endTime'][6]}` //stores the current object month
  if (indiv[1]['endTime'][3] === '4' && month !== "11"){ // check if it ends in 4 meaning 2024 and if the month is not 11 meaning only takes from 1 jan to 31 oct
    if (!song.includes(indiv[1]['trackName'])){
      song.push(indiv[1]['trackName'])
      songMs.push(indiv[1]['msPlayed'])
    }
    else {
      songMs[song.indexOf(indiv[1]['trackName'])] += indiv[1]['msPlayed']
    }
  }
});
Object.entries(data4).forEach((indiv) => {
  month = `${indiv[1]['endTime'][5]}${indiv[1]['endTime'][6]}` //stores the current object month
  if (indiv[1]['endTime'][3] === '4' && month !== "11"){ // check if it ends in 4 meaning 2024 and if the month is not 11 meaning only takes from 1 jan to 31 oct
    if (!song.includes(indiv[1]['trackName'])){
      song.push(indiv[1]['trackName'])
      songMs.push(indiv[1]['msPlayed'])
    }
    else {
      songMs[song.indexOf(indiv[1]['trackName'])] += indiv[1]['msPlayed']
    }
  }
});
Object.entries(data5).forEach((indiv) => {
  month = `${indiv[1]['endTime'][5]}${indiv[1]['endTime'][6]}` //stores the current object month
  if (indiv[1]['endTime'][3] === '4' && month !== "11"){ // check if it ends in 4 meaning 2024 and if the month is not 11 meaning only takes from 1 jan to 31 oct
    if (!song.includes(indiv[1]['trackName'])){
      song.push(indiv[1]['trackName'])
      songMs.push(indiv[1]['msPlayed'])
    }
    else {
      songMs[song.indexOf(indiv[1]['trackName'])] += indiv[1]['msPlayed']
    }
  }
});
Object.entries(data6).forEach((indiv) => {
  month = `${indiv[1]['endTime'][5]}${indiv[1]['endTime'][6]}` //stores the current object month
  if (indiv[1]['endTime'][3] === '4' && month !== "11"){ // check if it ends in 4 meaning 2024 and if the month is not 11 meaning only takes from 1 jan to 31 oct
    if (!song.includes(indiv[1]['trackName'])){
      song.push(indiv[1]['trackName'])
      songMs.push(indiv[1]['msPlayed'])
    }
    else {
      songMs[song.indexOf(indiv[1]['trackName'])] += indiv[1]['msPlayed']
    }
  }
});
Object.entries(data7).forEach((indiv) => {
  month = `${indiv[1]['endTime'][5]}${indiv[1]['endTime'][6]}` //stores the current object month
  if (indiv[1]['endTime'][3] === '4' && month !== "11"){ // check if it ends in 4 meaning 2024 and if the month is not 11 meaning only takes from 1 jan to 31 oct
    if (!song.includes(indiv[1]['trackName'])){
      song.push(indiv[1]['trackName'])
      songMs.push(indiv[1]['msPlayed'])
    }
    else {
      songMs[song.indexOf(indiv[1]['trackName'])] += indiv[1]['msPlayed']
    }
  }
});
Object.entries(data8).forEach((indiv) => {
  month = `${indiv[1]['endTime'][5]}${indiv[1]['endTime'][6]}` //stores the current object month
  if (indiv[1]['endTime'][3] === '4' && month !== "11"){ // check if it ends in 4 meaning 2024 and if the month is not 11 meaning only takes from 1 jan to 31 oct
    if (!song.includes(indiv[1]['trackName'])){
      song.push(indiv[1]['trackName'])
      songMs.push(indiv[1]['msPlayed'])
    }
    else {
      songMs[song.indexOf(indiv[1]['trackName'])] += indiv[1]['msPlayed']
    }
  }
});
Object.entries(data9).forEach((indiv) => {
  month = `${indiv[1]['endTime'][5]}${indiv[1]['endTime'][6]}` //stores the current object month
  if (indiv[1]['endTime'][3] === '4' && month !== "11"){ // check if it ends in 4 meaning 2024 and if the month is not 11 meaning only takes from 1 jan to 31 oct
    if (!song.includes(indiv[1]['trackName'])){
      song.push(indiv[1]['trackName'])
      songMs.push(indiv[1]['msPlayed'])
    }
    else {
      songMs[song.indexOf(indiv[1]['trackName'])] += indiv[1]['msPlayed']
    }
  }
});

// if you listen to alot just copy paste add another data variable and import json again

// Object.entries(data10).forEach((indiv) => {
//   if (indiv[1]['endTime'][3] === '4'){
//     msTotal += indiv[1]['msPlayed']
//   }
// });

// let songCombine = []
// song.forEach((current, idx) => {
//  songCombine[current] = current
//  songCombine[current]["time"] = songMs[idx]
// })
console.log(Math.max(...songMs))
idxTop = songMs.indexOf(Math.max(...songMs))
console.log("Your Top song : " + song[idxTop])
console.log("You have listen to " + song[idxTop] + " for " + (Math.max(...songMs)/60000) + " minutes or " + (Math.max(...songMs)/60000/60)+ " hours.")