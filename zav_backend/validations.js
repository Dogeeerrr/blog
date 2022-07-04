import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Невірний формат почти').isEmail(),
  body('password', 'Пароль повинен бути не менше 6 символів').isLength({ min: 6 }),
];

export const registerValidation = [
  body('email', 'Невірний формат почти').isEmail(),
  body('password', 'Пароль повинен бути не менше 6 символів').isLength({ min: 5 }),
  body('fullName', 'Вкажіть імя').isLength({ min: 3 }),
  body('avatarUrl', 'Невірна силка на аватарку').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Введіть заголовок статьї').isLength({ min: 3 }).isString(),
  body('text', 'Введіть текст статьї').isLength({ min: 3 }).isString(),
  body('tags', 'Невірний формат тегов').optional().isString(),
  body('imageUrl', 'Неверная силка на зображеня').optional().isString(),
];
