<<<<<<< 112a1ec4c8c606e386fd5e1f34c77b833de151c9
=======
const data = require('../sqls/data.json');

>>>>>>> Reduce data file
module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'panels',
      [
        {
          data_provider: "California Public Utilities Commission (Currently Interconnected Dataset)", installation_date: "12/22/15", system_size: "4.725", zip_code: "91913", state: "CA", created_at: "3/24/16", updated_at: "3/24/16", cost: "494.3319052"
        },
        {
          data_provider: "California Public Utilities Commission (Currently Interconnected Dataset) & California Public Utilities Commission (California Solar Initiative)", installation_date: "12/14/09", system_size: "1.505", zip_code: "92113", state: "CA", created_at: "3/24/16", updated_at: "3/24/16", cost: "609.2389144"
        },
        {
          data_provider: "California Public Utilities Commission (Currently Interconnected Dataset)", installation_date: "12/16/15", system_size: "6.36", zip_code: "92009", state: "CA", created_at: "3/24/16", updated_at: "3/24/16", cost: "665.3864375"
        },
        {
          data_provider: "California Public Utilities Commission (Currently Interconnected Dataset)", installation_date: "12/17/15", system_size: "2.385", zip_code: "92024", state: "CA", created_at: "3/24/16", updated_at: "3/24/16", cost: "249.5199141"
        },
        {
          data_provider: "California Public Utilities Commission (Currently Interconnected Dataset)", installation_date: "12/29/15", system_size: "5.775", zip_code: "92069", state: "CA", created_at: "3/24/16", updated_at: "3/24/16", cost: "604.1834397"
        },
        {
          data_provider: "California Public Utilities Commission (Currently Interconnected Dataset)", installation_date: "12/16/15", system_size: "7.42", zip_code: "92021", state: "CA", created_at: "3/24/16", updated_at: "3/24/16", cost: "776.2841771"
        },
        {
          data_provider: "California Public Utilities Commission (Currently Interconnected Dataset)", installation_date: "1/6/16", system_size: "7.59", zip_code: "92119", state: "CA", created_at: "3/24/16", updated_at: "3/24/16", cost: "721.5347301"
        },
        {
          data_provider: "California Public Utilities Commission (Currently Interconnected Dataset)", installation_date: "2/9/16", system_size: "8.28", zip_code: "92129", state: "CA", created_at: "3/24/16", updated_at: "3/24/16", cost: "787.1287965"
        },
        {
          data_provider: "California Public Utilities Commission (Currently Interconnected Dataset)", installation_date: "12/18/15", system_size: "2.475", zip_code: "92040", state: "CA", created_at: "3/24/16", updated_at: "3/24/16", cost: "258.9357599"
        },
        {
          data_provider: "California Public Utilities Commission (Currently Interconnected Dataset)", installation_date: "3/24/16", system_size: "4.905", zip_code: "92024", state: "CA", created_at: "3/24/16", updated_at: "3/24/16", cost: "466.2882544"
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('panels', null, {});
  },
};
