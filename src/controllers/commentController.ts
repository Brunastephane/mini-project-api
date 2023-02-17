import { Request, Response } from "express";
import { commentRepository } from "../repositories/commentRepository";

export class commentController {
  async getComments(req: Request, res: Response) {
    try {
      const id = parseInt(<string>req.query.id);

      const comments = await commentRepository.find({
        where: { book: { id: id } },
      });

      return res.status(201).json(comments);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async addComment(req: Request, res: Response) {
    console.log(req.body)
    try {
      const { name, rating, review, bookID } = req.body;
      if (!name || !rating || !review || !bookID) {
        return res.status(400).json({ message: "Missing some parameters" });
      } else {
        //Passing variables to create a Book Object first i've passed the field and then the variable to fill the value
        const newComment = commentRepository.create({
          name: name,
          rating: rating,
          review: review,
          book: bookID,
        });

        await commentRepository.save(newComment);

        return res.status(201).json(newComment);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
