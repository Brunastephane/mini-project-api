import { bookRepository } from "../repositories/bookRepository";
import { Request, Response } from "express";

export class bookController {
  async getBooks(req: Request, res: Response) {
    try {
      //doing a query and storing in a variable
      const books = await bookRepository.find();

      /*API Status:
            201 = ok(created)
            400 = missing parameters
            500 = internal server error
            */
      return res.status(201).json(books);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getBook(req: Request, res: Response) {
    try {
      const id = parseInt(<string>req.query.id);
      const book = await bookRepository.findOneBy({ id: id });
      //const book = await bookRepository.findOne({where:{ id: id && status: "enabled"}}); Alternative way

      return res.status(201).json(book);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async addBook(req: Request, res: Response) {
    try {
      const { bookName, bookImage, bookAuthor, bookLink } = req.body;
      if (!bookName || !bookImage || !bookAuthor || !bookLink) {
        return res.status(400).json({ message: "Missing some parameters" });
      } else {
        //Passing variables to create a Book Object first i've passed the field and then the variable to fill the value
        const newBook = bookRepository.create({
          bookName: bookName,
          bookImage: bookImage,
          bookAuthor: bookAuthor,
          bookLink: bookLink,
        });

        await bookRepository.save(newBook);

        return res.status(201).json(newBook);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async editBook(req: Request, res: Response) {
    try {
      const { bookName, bookImage, bookAuthor, bookLink, id } = req.body;
      if (!bookName || !bookImage || !bookAuthor || !bookLink || !id) {
        return res.status(400).json({ message: "Missing some parameters" });
      } else {
        const book = await bookRepository.findOneBy({ id: id });

        book.bookName = bookName;
        book.bookImage = bookImage;
        book.bookLink = bookLink;
        book.bookAuthor = bookAuthor;

        await bookRepository.save(book);

        return res.status(201).json(book);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ message: "Missing some parameters" });
      } else {
        const book = await bookRepository.findOneBy({ id: id });

        await bookRepository.remove(book);

        return res.status(201).json({ message: "Delete with success" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async changeLikes(req: Request, res: Response) {
    try {
      const { bookLikes, id } = req.body;
      if (!id) {
        return res.status(400).json({ message: "Missing some parameters" });
      } else {
        const book = await bookRepository.findOneBy({ id: id });

        book.bookLikes = bookLikes;

        await bookRepository.save(book);

        return res.status(201).json(book);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }

}
