import Joi from "joi";

export const editContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().email().min(3),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid("work", "home", "personal"),
}).or('name', 'phoneNumber', 'email', 'isFavourite', 'contactType'); // Вимагайте, щоб хоча б одне поле було присутнє

export const replaceContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().email().min(3),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid("work", "home", "personal"),
});
