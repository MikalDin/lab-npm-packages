const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");

/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
function numberOfKeys(obj) {
  const keysArray = _.keys(obj);
  const numberOfKeys = keysArray.length;

  return numberOfKeys;
}

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(numbers) {
  const filteredNumbers = _.compact(numbers);
  const sum = _.sum(filteredNumbers);
  return sum;
}

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {
  const memberObject = _.fromPairs(member);
      return memberObject;

}

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(classes) {
const groupedClasses = _.groupBy(collection, 'instructor');
const result = Object.entries(groupedClasses).map(([instructor, classes])=>
({instructor,
classes,
 }));
 return result;
}


/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(members) {
  const membersWithoutAge = _.map(members, (member) =>_.omit(member,'age'));
    return membersWithoutAge;
}

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructorName) {
 const instructorClasses = _.get(collection, instructorName, []);
  if(_.has(collection, instructorName)) {

      return collection[instructorName].length;
  }else {
    
        return "There is no instructor by that name.";
  }
}

/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {
  const activeMembers = _.filter(collection, {'currentMember': true});
    return activeMembers;

}

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
  const getUniqueClasses = _.uniqBy(collection, 'title').map((classObj) =>({
    title: classObj.title,
    priceInCents: classObj.priceInCents,
  }));
    return uniqueClasses;

}

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  const orderedClasses = _.orderBy(collection, ['title', 'level'], ['asc','desc']).map
  ((classObj) =>({
    title: classObj.title,
    instructor: classObj.instructor,
    level: classObj.level,
  }));
    return orderedClasses;
}

module.exports = {
  numberOfKeys,
  sumNumbers,
  newMemberArrayToObject,
  groupClassByInstructor,
  omitAgeFromMembers,
  countClassesByInstructor,
  removeInactiveMembers,
  getUniqueClasses,
  orderClassesByTitleAndLevel,
};
