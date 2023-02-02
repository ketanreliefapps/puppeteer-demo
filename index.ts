import puppeteer from 'puppeteer';
async function generatePdf() {
    const browser = await puppeteer.launch({args: [
        "--no-sandbox",
        "--unhandled-rejections=strict",
        "--window-size=2720,1080",
      ],headless: false});
    const page = await browser.newPage();
    //await page.setRequestInterception(true)
    
    await page.goto('http://localhost:4200');
    
    await page.evaluate(async () => {
        localStorage.clear();
        localStorage.setItem('idtoken', 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxcVFRZElCNzFxaFpWbDBiSXo5OFd2R1VqaHk3TlR5Q1g1U3ZPRVhya29jIn0.eyJleHAiOjE2NzUzNDAzMDEsImlhdCI6MTY3NTMzODUwMSwiYXV0aF90aW1lIjoxNjc1MzMxMjc3LCJqdGkiOiJjYTdhNGFjOC02YzliLTRjNTEtYTIyNC1jNzgwOWY5NTA4YWYiLCJpc3MiOiJodHRwczovL2lkLWRldi5vb3J0Y2xvdWQudGVjaC9hdXRoL3JlYWxtcy9vb3J0IiwiYXVkIjoib29ydC1jbGllbnQiLCJzdWIiOiJmODBmNGMyZS01YjVkLTQwZmYtOTY0OS05Njc1MDc2MmNiYjEiLCJ0eXAiOiJJRCIsImF6cCI6Im9vcnQtY2xpZW50Iiwibm9uY2UiOiJaMEpTVUZCc2NIZDNVRmRKVXpKcE5qQkhMVTl4VHkxVlRuRkNTR2h0TG1sSGVYZEJPRlZGV1U1bWREVlAiLCJzZXNzaW9uX3N0YXRlIjoiOGY4NDc0NzQtNzFlYy00ZTkwLWExNDgtM2FiNThhODdhYTY0IiwiYXRfaGFzaCI6IlV6WlUzOWY2OWo3Mk1nYnFSdHpIenciLCJhY3IiOiIxIiwic2lkIjoiOGY4NDc0NzQtNzFlYy00ZTkwLWExNDgtM2FiNThhODdhYTY0IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJrZXRhbiBtb2RpIiwicHJlZmVycmVkX3VzZXJuYW1lIjoia2V0YW4ucmVsaWVmYXBwc0BnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoia2V0YW4iLCJmYW1pbHlfbmFtZSI6Im1vZGkiLCJlbWFpbCI6ImtldGFuLnJlbGllZmFwcHNAZ21haWwuY29tIn0.qoIHwpJeIW029hb9znHmO3q0RY8gQ4PWdkyPYIHIRwgmvP9le8r9AVu3S6SA0XRHrGCwXkkcQAL1bOmYUmTbzZ7plViFqvIAiI9wR7EfYM-nUkMTbfJwRE_CkUiveU6Xk8voAbGIrc5WJlqQ6orNpzcX6zyHtM6qgTwODPQC_jO8Q3btg_BWq5EIgXyVtmSNF3cMm4HcDhHiQ-xWBU8TCqXa8c6Bqse2kLWtPhPQuCfZid_4lcbY8IvzIqrtkq4R7ZeEfpTZCqlilH1-VL1SgIPcdmbfyiyfxKQ6o2d_j3ns_mteUBCMpn_x4lZ5BXb2mhwCocf3TRGp-AOfU6IH5g');
    });    

    await page.goto('http://localhost:4200/applications');
    
    await page.pdf({path: 'output.pdf', format: 'A4'});
    console.log('PDF generate');

    //await browser.close();
}

generatePdf();