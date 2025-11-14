const { getTranslation } = require('./lib/translations.ts');

// Test Spanish translations
console.log('=== SPANISH TESTS ===');
console.log('faq.title:', getTranslation('faq.title', 'es'));
console.log('faq.q1:', getTranslation('faq.q1', 'es'));
console.log('faq.moreQuestions:', getTranslation('faq.moreQuestions', 'es'));

// Test English translations  
console.log('=== ENGLISH TESTS ===');
console.log('faq.title:', getTranslation('faq.title', 'en'));
console.log('faq.q1:', getTranslation('faq.q1', 'en'));
console.log('faq.moreQuestions:', getTranslation('faq.moreQuestions', 'en'));

// Test Russian translations
console.log('=== RUSSIAN TESTS ===');
console.log('faq.title:', getTranslation('faq.title', 'ru'));
console.log('faq.q1:', getTranslation('faq.q1', 'ru'));
console.log('faq.moreQuestions:', getTranslation('faq.moreQuestions', 'ru'));