export const groups = ["Morning", "Afternoon", "Evening"];
export const numberOfBoxes = 3;

/**
 *
 * @param {string} group One of "groups" elemements
 * @returns the key for the Async Storage to get the data for that "group" time
 */
export const getMedicineAmountKey = (group) => {
  return `${group}MedicineAmounts`;
};
