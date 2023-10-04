const { defineConfig } = require('cypress');
const { removeDirectory } = require('cypress-delete-downloads-folder');
const fs = require("fs");

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      }),
      on('task', {
        isFileExist( filePath ) {
         return new Promise((resolve, reject) => {
           try {
             let isExists = fs.existsSync(filePath)
             resolve(isExists);
           } catch (e) {
             reject(e);
           }
         });
       }
     });
   //to remove directory
   on('task', { removeDirectory });
   }
  }
})



 
