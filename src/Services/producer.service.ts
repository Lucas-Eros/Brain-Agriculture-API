import { AppDataSource } from "../Config/database";
import { ProducerModel } from "../Models/producer.model";
import { isValidCpfOrCnpj } from "../Utils/Utils";

export const ProducerService = () => {
  const repository = AppDataSource.getRepository(ProducerModel());

  const create = async (data: any) => {
    if (!isValidCpfOrCnpj(data.cpf_cnpj)) {
      throw new Error("CPF ou CNPJ inválido");
    }
    const producer = repository.create(data);
    return await repository.save(producer);
  };

  const update = async (id: string, data: Object) => {
    const producer = await repository.findOneBy({ id });
    if (!producer) throw new Error("Produtor não encontrado");

    return await repository.save({ ...producer, ...data });
  };

  const remove = async (id: string) => {
    const result = await repository.delete(id);
    if (result.affected === 0) throw new Error("Produtor não encontrado");
  };

  const getAll = async () => {
    return await repository.find();
  };

  const getById = async (id: string) => {
    const producer = await repository.findOneBy({ id });
    if (!producer) throw new Error("Produtor não encontrado");
    return producer;
  };

  return {create,update,remove, getAll, getById};
};
