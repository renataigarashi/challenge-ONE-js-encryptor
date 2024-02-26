const SELECTORS = {
  ENCRYPT_BUTTON: '.encrypt_button',
  DECRYPT_BUTTON: '.decrypt_button',
  CHARACTER_IMAGE: '.result_container__img',
  RESULT_CONTAINER: '.result_container__msg',
  RESULT_TEXT: '.result_container__solution__text',
  TEXT_BOX: '.text_box',
  COPY_BUTTON: '.copy_button',
  RESULT_CONTAINER_CONTENT: 'result_container__content',
};

const elements = {
  encryptButton: document.querySelector(SELECTORS.ENCRYPT_BUTTON),
  decryptButton: document.querySelector(SELECTORS.DECRYPT_BUTTON),
  characterImage: document.querySelector(SELECTORS.CHARACTER_IMAGE),
  resultContainer: document.querySelector(SELECTORS.RESULT_CONTAINER),
  resultText: document.querySelector(SELECTORS.RESULT_TEXT),
  textBox: document.querySelector(SELECTORS.TEXT_BOX),
  copyButton: document.querySelector(SELECTORS.COPY_BUTTON),
  resultContainerContent: document.querySelector(
    SELECTORS.RESULT_CONTAINER_CONTENT
  ),
};

elements.encryptButton.addEventListener('click', () => {
  showElements();
  processText(encryptText);
});
elements.decryptButton.addEventListener('click', () =>
  processText(decryptText)
);
elements.copyButton.addEventListener('click', copyResultText);

const processText = (transformationFunction) => {
  hideElements();
  const inputText = retrieveText();
  const outputText = transformationFunction(inputText);
  displayResult(outputText);
};

const retrieveText = () => {
  return elements.textBox.value;
};

const hideElements = () => {
  hideElement(elements.resultContainer);
  hideElement(elements.characterImage);
};

const hideElement = (element) => {
  element.classList.add('hide');
};

const showElement = (element) => {
  element.classList.remove('hide');
};

const showElements = () => {
  showElement(elements.copyButton);
};

const displayResult = (text) => {
  elements.resultText.textContent = text;
};

const encryptText = (message) => {
  const vowelMap = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
  };
  return message.replace(/[aeiou]/g, (match) => vowelMap[match]);
};

const decryptText = (message) => {
  const reverseVowelMap = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u',
  };
  return message.replace(
    /(ai|enter|imes|ober|ufat)/g,
    (match) => reverseVowelMap[match]
  );
};

function copyResultText() {
  const content = elements.resultText.textContent;
  navigator.clipboard.writeText(content);
}
