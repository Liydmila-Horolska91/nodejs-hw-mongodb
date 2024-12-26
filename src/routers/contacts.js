import { Router } from 'express';
import {
  getContactsCtrl,
  getContactByIdCtrl,
  createContactCtrl,
  patchContactCtrl,
  deleteContactCtrl,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { contactSchema, replaceContactSchema } from '../validation/contact.js'; // Змінено на replaceContactSchema
import { upload } from '../middlewares/multer.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();
router.use(authenticate);

router.get('/', ctrlWrapper(getContactsCtrl));
router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdCtrl));
router.post(
  '/',
  upload.single('photo'),
  validateBody(contactSchema),
  ctrlWrapper(createContactCtrl),
);
router.post(
  '/register',
  validateBody(contactSchema),
  ctrlWrapper(createContactCtrl),
);
router.patch(
  '/:contactId',
  isValidId,
  upload.single('photo'),
  validateBody(replaceContactSchema),
  ctrlWrapper(patchContactCtrl),
);
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactCtrl));

export default router;
