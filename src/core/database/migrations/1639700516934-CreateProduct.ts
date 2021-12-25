import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduct1639700516934 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "product",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "name", type: "varchar", isUnique: true },

          { name: "description", type: "varchar" },

          { name: "category_id", type: "uuid" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "product_category_fk",
            columnNames: ["category_id"],
            referencedTableName: "category",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("product");
  }
}
