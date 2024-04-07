import {Student} from '../models/student.model.js';
import {upload} from '../middlewares/multer.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const uploadResume = asyncHandler(async (req, res) => {

    upload(req, res, function (err) {
        
    })
})

export { uploadResume }