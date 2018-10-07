"use strict";

/**
 * This adds columns on the SOURCE model
 */

// === SET THESE ===
// This is the name of your "source" model that is the (1) in the relationship

const SOURCE_MODEL_NAME = 'Task'; 

// === DO NOT SET THESE ===
// Get the real table name by initializing a sequelize instance

const SOURCE_TABLE_NAME = require(__dirname + '/../models')[SOURCE_MODEL_NAME].getTableName()

module.exports = {
  up: function(migration, DataTypes, done) {

    migration.addColumn(
      SOURCE_TABLE_NAME,
      "token",
      {
        type: DataTypes.STRING,
      }
    );
    migration.addColumn(
      SOURCE_TABLE_NAME,
      "another_field",
      {
        type: DataTypes.STRING,
      }
    );
    done();
  },

  down: function(migration, DataTypes, done) {
    migration.removeColumn(SOURCE_TABLE_NAME, "token");
    migration.removeColumn(SOURCE_TABLE_NAME, "another_field");
    done();
  }
};

