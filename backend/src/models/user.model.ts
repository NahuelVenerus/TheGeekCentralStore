import { Column, Model, Table, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: true })
export default class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER, field: 'id' })
  declare userId: number;

  @Column({ allowNull: false, type: DataType.STRING })
  declare username: string;

  @Column({ allowNull: false, type: DataType.STRING })
  declare name: string;

  @Column({ allowNull: false, type: DataType.STRING })
  declare lastname: string;

  @Column({ allowNull: false, type: DataType.STRING })
  declare address: string;

  @Column({ allowNull: false, type: DataType.INTEGER })
  declare zip_code: number;

  @Column({ allowNull: false, type: DataType.STRING })
  declare city: string;

  @Column({ allowNull: false, type: DataType.STRING, unique: true })
  declare email: string;

  @Column({ allowNull: false, type: DataType.STRING })
  declare password: string;

  @Column({ allowNull: false, type: DataType.BOOLEAN })
  declare is_admin: boolean;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
