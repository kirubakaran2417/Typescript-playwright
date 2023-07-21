import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch:["tests/basicinteraction.test.ts"],
  use: {
      headless:false,
      screenshot:"on",
      video:"on"
  },
  reporter:[["dot"],["json",{
    
    outputFile:"jsonreports/jsonreport.json"
  }],["html",{
    open:"never",
    outputFile:"htmlreports/htmlreport.html"
  }]]
};

export default config;