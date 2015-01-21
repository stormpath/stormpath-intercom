#!/usr/bin/env node
'use strict';

var minimist = require('minimist');
var stormpath = require('stormpath');
var Intercom = require('intercom.io');

var intercom;

/**
 * Sync a Stormpath Account to Intercom.
 */
function update(account) {
  account.getCustomData(function(err, data) {
    if (err) throw err;

    intercom.createUser({
      email: account.email,
      name: account.givenName + ' ' + account.surname,
      custom_data: data,
    }, function(err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log('Finished syncing data for user:', account.email);
      }
    });
  });
}

function main() {
  var argv = require('minimist')(process.argv.slice(2));
  var page = 0;
  var total_pages = 100;

  if (
    !argv['intercom-app-id'] ||
    !argv['intercom-api-key'] ||
    !argv['stormpath-api-key-id'] ||
    !argv['stormpath-api-key-secret'] ||
    !argv['stormpath-app-name']
  ) {
    console.log('Usage: stormpath-intercom --intercom-app-id=xxx --intercom-api-key=xxx --stormpath-api-key-id=xxx --stormpath-api-key-secret=xxx --stormpath-app-name=xxx');
    process.exit(1);
  }

  var client = new stormpath.Client({ apiKey: new stormpath.ApiKey(argv['stormpath-api-key-id'], argv['stormpath-api-key-secret']) });
  intercom = new Intercom(argv['intercom-app-id'], argv['intercom-api-key']);

  client.getApplications({ name: argv['stormpath-app-name'] }, function(err, apps) {
    if (err) throw err;
    if (apps.size === 0) {
      throw new Error('No application found:', process.argv[4]);
    }

    var app = apps.items[0];
    app.getAccounts(function(err, accounts) {
      if (err) throw err;

      accounts.each(function(account, cb) {
        update(account);
        cb();
      }, function(err) {
        console.log('Finished syncing all user data!');
      });
    });
  });
}

main();
