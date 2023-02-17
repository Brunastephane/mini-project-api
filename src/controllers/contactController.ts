import { contactRepository } from "../repositories/contactRepository";
import { Request, Response } from "express";

export class contactControler {
  async getContacts(req: Request, res: Response) {
    try {
      const contacts = await contactRepository.find();

      return res.status(201).json(contacts);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async addContact(req: Request, res: Response) {
    try {
      console.log(req.body);
      const { contactName, contactEmail, contactMessage } = req.body;
      if (!contactName || !contactEmail || !contactMessage) {
        return res.status(400).json({ message: "Missing some parameters" });
      } else {
        const newContact = contactRepository.create({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
        });

        await contactRepository.save(newContact);

        return res.status(201).json(newContact);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
