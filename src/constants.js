export const PROMPT_MESSAGE = {
  promptPurchaseAmount: '구입금액을 입력해 주세요.',
  promptWinningNumbers: '당첨 번호를 입력해 주세요.',
  promptBonusNumber: '보너스 번호를 입력해 주세요.',
};

export const ERROR_MESSAGE = {
  invalidPusrchaseAmount: '[ERROR] 1000원 단위로 구입 금액을 입력해주세요.',
  duplicationWinningNumbers: '[ERROR] 1부터 45 사이의 6개 중복되지 않는 자연수를 입력해주세요.',
  invalidBonusNumber: '[ERROR] 1부터 45 사이의 보너스 번호를 입력해주세요.',
  duplicationBonusNumber: '[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.',
};

export default { PROMPT_MESSAGE, ERROR_MESSAGE };
