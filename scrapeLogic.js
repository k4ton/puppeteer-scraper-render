module.exports = async (page, url) => {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 }); // Wait for the page to load completely
    const html = await page.content(); // <--- This grabs full DOM HTML
  
    return {
      url,
      html
    };
  };
  