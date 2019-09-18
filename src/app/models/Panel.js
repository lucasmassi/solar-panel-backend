import Sequelize, { Model } from 'sequelize';
import { format } from 'date-fns';
import en from 'date-fns/locale/en-US';

class Panel extends Model {
  static init(sequelize) {
    super.init(
      {
        data_provider: Sequelize.STRING,
        installation_date: Sequelize.DATE,
        system_syze: Sequelize.FLOAT,
        zip_code: Sequelize.INTEGER,
        state: Sequelize.STRING,
        cost: Sequelize.FLOAT,
        formatted_installation: {
          type: Sequelize.VIRTUAL,
          get() {
            return format(
              this.installation_date,
              "'Day' dd 'of' MMM', 'yyyy'",
              { locale: en }
            );
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Panel;
