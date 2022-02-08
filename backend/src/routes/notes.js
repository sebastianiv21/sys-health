const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controller')

router.route('/')
    .get(getNotes)   
    .post(createNote)

router.route('/:id')
    .get(getNote)   /* Toma datos */
    .put(updateNote)   /* Actualiza datos */
    .delete(deleteNote)    /* Elimina datos */

module.exports = router;