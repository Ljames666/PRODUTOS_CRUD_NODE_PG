import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStocks1639701935849 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "stock",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },

          { name: "product_id", type: "uuid" },

          { name: "amount", type: "numeric" },

          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "stock_product_fk",
            columnNames: ["product_id"],
            referencedTableName: "product",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("stock");
  }
}
