import { EntitySchema } from "typeorm";

export const ProducerModel = () => {
  const schema = new EntitySchema({
    name: "Producer",
    tableName: "producers",
    columns: {
      id: {
        type: "int",
        primary: true,
        generated: true,
      },
      cpf_cnpj: {
        type: "varchar",
        unique: true,
        nullable: false,
      },
      name: {
        type: "varchar",
        nullable: false,
      },
      farm_name: {
        type: "varchar",
        nullable: false,
      },
      city: {
        type: "varchar",
        nullable: false,
      },
      state: {
        type: "varchar",
        nullable: false,
      },
      total_area: {
        type: "float",
        nullable: false,
      },
      cultivable_area: {
        type: "float",
        nullable: false,
      },
      vegetation_area: {
        type: "float",
        nullable: false,
      },
      crops: {
        type: "simple-array",
        nullable: false,
      },
    },
    checks: [
      {
        expression: `"cultivable_area" + "vegetation_area" <= "total_area"`,
        name: "check_areas_sum",
      },
    ],
  });

  return schema;
};
