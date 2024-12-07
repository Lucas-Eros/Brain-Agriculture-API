import { ProducerService } from "../Services/producer.service";
import { Request, Response } from 'express';


export const ProducerController = () => {
  const service = ProducerService();

  const create = async (req: Request, res: Response) => {
    try {
      const producer = await service.create(req.body);
      res.status(201).json(producer);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      res.status(400).json({ error: errorMessage });
    }
  };

  const update = async (req: Request, res: Response) => {
    try {
      const producer = await service.update(req.params.id, req.body);
      res.status(200).json(producer);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      res.status(400).json({ error: errorMessage });
    }
  };

  const remove = async (req: Request, res: Response) => {
    try {
      await service.remove(req.params.id);
      res.status(204).send();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      res.status(400).json({ error: errorMessage });
    }
  };

  const getAll = async (req: Request, res: Response) => {
    try {
      const producers = await service.getAll();
      res.status(200).send(producers);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      res.status(400).json({ error: errorMessage });
    }
  }

  const getById = async (req: Request, res: Response) => {
    try {
      const producer = await service.getById(req.params.id);
      res.status(200).send(producer);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      res.status(400).json({ error: errorMessage });
    }
  }

  return {create, update, remove, getAll, getById};
};
