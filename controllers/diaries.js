 //@route    GET /api/v1/diaries 
 //@access   Private 
 exports.getDiaries = (req, res, next) => {
     res.status(200).json({ success: true, data: 'all diaries' })
 }

 //@desc     get single diary
 //@route    GET /api/v1/diaries/:id
 //@access   Private
 exports.getDiary = (req, res, next) => {
     id = req.params.id
     res.status(200).json({ success: true, data: `diary with id ${id}` })
 }

 //@desc     create diary
 //@route    POST /api/v1/diaries
 //@access   Private
 exports.createDiary = (req, res, next) => {
     res.status(200).json({ success: true, data: 'diary created successfully' })
 }

 //@desc     update diary
 //@route    PUT /api/v1/diaries/:id
 //@access   Private
 exports.updateDiary = (req, res, next) => {
     res.status(200).json({ success: true, data: `diary updated with id ${id}` })
 }

 //@desc     delete diary
 //@route    DELETE /api/v1/diaries/:id
 //@access   Private
 exports.deleteDiary = (req, res, next) => {
     res.status(200).json({ success: true, data: `diary deleted with id ${id}` })
 }