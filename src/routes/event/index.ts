import { Router, Request, Response } from 'express';
import useController from '../../middleware/useController';

import { getEvent } from '../../controller/event/event.controller';

const eventRouter: Router = Router();

eventRouter.get(
  '/',
  useController(getEvent)
);

export default eventRouter;