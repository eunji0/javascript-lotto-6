import { ERROR_MESSAGE, LOTTO_NUMBER } from './constants.js';

class Validation {
  static validatePurchaseAmount(purchaseAmount) {
    if (!Validation.isValidPurchaseAmount(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.invalidPusrchaseAmount);
    }

    return purchaseAmount;
  }

  static isValidPurchaseAmount(purchaseAmount) {
    const amount = Number(purchaseAmount);
    return amount % LOTTO_NUMBER.minPrice === 0 && amount >= LOTTO_NUMBER.minPrice;
  }

  static validateWinningNumbers(winningNumbers) {
    const numbers = winningNumbers.split(',').map((num) => Number(num.trim()));

    if (!Validation.isValidWinningNumbers(numbers)) {
      throw new Error(ERROR_MESSAGE.duplicationWinningNumbers);
    }

    return numbers;
  }

  static isValidWinningNumbers(numbers) {
    return (
      numbers.length === 6 &&
      new Set(numbers).size === 6 &&
      numbers.every((num) => Validation.isSafeInteger(num) && Validation.isInRange(num))
    );
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    const cleanedBonusNumber = Number(bonusNumber);
    if (!Validation.isValidBonusNumber(cleanedBonusNumber, winningNumbers)) {
      throw new Error(ERROR_MESSAGE.duplicationBonusNumber);
    }

    return cleanedBonusNumber;
  }

  static isValidBonusNumber(bonusNumber, winningNumbers) {
    return (
      Validation.isSafeInteger(bonusNumber) &&
      Validation.isInRange(bonusNumber) &&
      !winningNumbers.includes(bonusNumber)
    );
  }

  static isSafeInteger(value) {
    return Number.isSafeInteger(value);
  }

  static isInRange(value) {
    return value >= LOTTO_NUMBER.inRangeFrom && value <= LOTTO_NUMBER.inRangeTo;
  }
}

export default Validation;
