"use strict";

/**
 * This adds a column on the SOURCE model for TARGET id in a 1:M relationship
 * An example is a 1:M relationship between "Task" and "User" where a "Task" 
 * belongs to a single "User" 
 */

// This is the name of your "source" model that is the (1) in the relationship
const SOURCE = 'Task'; 

// This is the name of your "target" model that is the (M) in the relationship
const TARGET = 'User';

// By default we will use the field name (TARGET model + "Id")
const COLUMN_NAME = TARGET + 'Id';

module.exports = {
  up: function(migration, DataTypes, done) {

    migration.addColumn(
      SOURCE,
      COLUMN_NAME,
      {
        type: DataTypes.UUID,
        references: { 
          model: TARGET, 
          key: "id" 
        },
        onDelete: 'cascade'
      }
    );
    done();
  },

  down: function(migration, DataTypes, done) {
    migration.removeColumn(SOURCE, COLUMN_NAME);
    done();
  }
};
