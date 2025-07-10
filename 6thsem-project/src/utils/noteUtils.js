import notesData from '../data/notesData';

export const getRelatedNotes = (currentNoteId) => {
  const currentNote = notesData.find(note => note.id === currentNoteId);

  if (!currentNote) {
    return [];
  }

  const relatedNotes = notesData.filter(note => 
    note.id !== currentNoteId && 
    (note.subject === currentNote.subject || 
     note.tags.split(', ').some(tag => currentNote.tags.split(', ').includes(tag)))
  );

  // Limit to a reasonable number of related notes, e.g., 3
  return relatedNotes.slice(0, 3);
};
