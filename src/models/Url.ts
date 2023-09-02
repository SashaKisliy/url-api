import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class Url extends Model {
  public id!: number;
  public originalUrl!: string;
  public shortUrl!: string;
}

Url.init(
  {
    originalUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Url",
    timestamps: true,
  }
);

export default Url;
