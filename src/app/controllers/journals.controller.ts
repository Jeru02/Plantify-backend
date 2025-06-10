import { QueryResult } from "pg";
import { Request, Response } from "express";
import {
  deleteJournalEntry,
  insertJournalEntry,
  selectJournalEntriesByUserId,
} from "../models/journals.model";

export const getJournalEntriesByUserId = (
  req: Request,
  res: Response
): void => {
  const { user_id } = req.params;

  selectJournalEntriesByUserId(user_id).then((result: QueryResult) => {
    res.status(200).send({ journalEntries: result.rows });
  });
};

export const postJournalEntry = (req: Request, res: Response): void => {
  insertJournalEntry(req.body.body, req.body.user_id).then(
    (result: QueryResult) => {
      res.status(201).send({ journalEntry: result.rows[0] });
    }
  );
};

export const removeJournalEntryByJournalEntryId = (
  req: Request,
  res: Response
): void => {
  const { journal_entry_id } = req.params;

  deleteJournalEntry(journal_entry_id).then(() => {
    res.status(204).send();
  });
};
